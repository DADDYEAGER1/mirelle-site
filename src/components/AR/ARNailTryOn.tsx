'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Camera, Upload, X, RotateCcw, Loader } from 'lucide-react';

// Fingertip indices in MediaPipe Hands landmarks
const FINGERTIP_INDICES = [4, 8, 12, 16, 20]; // Thumb, Index, Middle, Ring, Pinky

function ARNailTryOn() {
  const [isMounted, setIsMounted] = useState(false);
  const [nailImage, setNailImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [handsDetected, setHandsDetected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [useFrontCamera, setUseFrontCamera] = useState(true);
  const [showPermissionHelp, setShowPermissionHelp] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handsRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const nailImgRef = useRef<HTMLImageElement | null>(null);

  // Mount check to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Load MediaPipe Hands scripts
  useEffect(() => {
    if (!isMounted) return;
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadMediaPipe = async () => {
      try {
        await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js');
        await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js');
        await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js');
      } catch (err) {
        console.error('Failed to load MediaPipe:', err);
        setError('Failed to load AR libraries. Please refresh the page.');
      }
    };

    loadMediaPipe();

    return () => {
      stopCamera();
    };
  }, [isMounted]);

  // Don't render until mounted (prevents hydration mismatch)
  if (!isMounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-editorial overflow-hidden border border-accent/10 p-12">
          <div className="text-center">
            <Loader className="w-12 h-12 text-accent mx-auto mb-4 animate-spin" />
            <p className="text-text-secondary">Loading AR experience...</p>
          </div>
        </div>
      </div>
    );
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setNailImage(event.target?.result as string);
          nailImgRef.current = img;
          setIsLoading(false);
          setError(null);
        };
        img.onerror = () => {
          setError('Failed to load image. Please try another file.');
          setIsLoading(false);
        };
        img.src = event.target?.result as string;
      };
      reader.onerror = () => {
        setError('Failed to read file. Please try again.');
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    if (!nailImage) {
      setError('Please upload a nail design first');
      return;
    }

    setIsLoading(true);
    setError(null);
    setShowPermissionHelp(false);

    try {
      // Check if mediaDevices is available
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera not supported on this browser. Please use Chrome, Firefox, or Safari.');
      }

      console.log('🎥 Requesting camera access...');
      
      // Simplified constraints - this MUST trigger permission popup
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: {
          facingMode: useFrontCamera ? 'user' : 'environment'
        }
      });

      console.log('✅ Camera permission granted!');
      
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        
        // Wait for video to be ready
        await new Promise<void>((resolve, reject) => {
          if (!videoRef.current) {
            reject(new Error('Video element not found'));
            return;
          }

          videoRef.current.onloadedmetadata = () => {
            console.log('📺 Video metadata loaded');
            videoRef.current?.play()
              .then(() => {
                console.log('▶️ Video playing!');
                resolve();
              })
              .catch(reject);
          };

          // Timeout after 10 seconds
          setTimeout(() => reject(new Error('Video load timeout')), 10000);
        });

        setCameraActive(true);
        setIsLoading(false);
        initializeHandTracking();
      }
    } catch (err: any) {
      console.error('❌ Camera ERROR:', err);
      
      let errorMessage = '';
      let showHelp = false;
      
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        errorMessage = 'Camera access was denied. Please allow camera access to use AR Try-On.';
        showHelp = true;
      } else if (err.name === 'NotFoundError') {
        errorMessage = 'No camera found. Please connect a camera and try again.';
      } else if (err.name === 'NotReadableError') {
        errorMessage = 'Camera is being used by another app. Please close other apps and try again.';
      } else if (err.name === 'SecurityError') {
        errorMessage = 'Security error. Please make sure you\'re on a secure connection (HTTPS).';
      } else if (err.name === 'TypeError') {
        errorMessage = 'Browser doesn\'t support camera access. Try Chrome, Firefox, or Safari.';
      } else {
        errorMessage = err.message || 'Failed to access camera. Please try again.';
      }
      
      setError(errorMessage);
      setShowPermissionHelp(showHelp);
      setIsLoading(false);
      
      // Clean up
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    if (cameraRef.current) {
      cameraRef.current.stop();
      cameraRef.current = null;
    }
    if (handsRef.current) {
      handsRef.current.close();
      handsRef.current = null;
    }
    setCameraActive(false);
    setHandsDetected(false);
  };

  const initializeHandTracking = () => {
    if (typeof window === 'undefined' || !(window as any).Hands) {
      setTimeout(initializeHandTracking, 100);
      return;
    }

    const Hands = (window as any).Hands;
    const Camera = (window as any).Camera;

    const hands = new Hands({
      locateFile: (file: string) => 
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults(onHandsDetected);
    handsRef.current = hands;

    if (videoRef.current) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          if (handsRef.current && videoRef.current) {
            await handsRef.current.send({ image: videoRef.current });
          }
        },
        width: 1280,
        height: 720,
      });
      camera.start();
      cameraRef.current = camera;
      setIsLoading(false);
    }
  };

  const onHandsDetected = (results: any) => {
    if (!canvasRef.current || !nailImgRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = results.image.width;
    canvas.height = results.image.height;

    // Draw video frame
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      setHandsDetected(true);

      // Draw nails on each detected hand
      results.multiHandLandmarks.forEach((landmarks: any[]) => {
        drawNails(ctx, landmarks, canvas.width, canvas.height);
      });
    } else {
      setHandsDetected(false);
    }

    ctx.restore();
  };

  const drawNails = (
    ctx: CanvasRenderingContext2D,
    landmarks: any[],
    width: number,
    height: number
  ) => {
    const nailImg = nailImgRef.current;
    if (!nailImg) return;

    FINGERTIP_INDICES.forEach((tipIndex) => {
      const tip = landmarks[tipIndex];
      const base = landmarks[tipIndex - 2] || landmarks[tipIndex - 1];

      if (tip && base) {
        const x = tip.x * width;
        const y = tip.y * height;
        const baseX = base.x * width;
        const baseY = base.y * height;

        // Calculate angle and scale
        const dx = x - baseX;
        const dy = y - baseY;
        const angle = Math.atan2(dy, dx);
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Scale nail based on finger size
        const nailWidth = distance * 1.2;
        const nailHeight = nailWidth * 1.3;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);

        // Draw nail with slight opacity for realism
        ctx.globalAlpha = 0.9;
        
        try {
          ctx.drawImage(
            nailImg,
            -nailWidth / 2,
            -nailHeight / 2,
            nailWidth,
            nailHeight
          );
        } catch (error) {
          console.error('Error drawing nail:', error);
        }

        ctx.restore();
      }
    });
  };

  const toggleCamera = () => {
    if (cameraActive) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  const switchCamera = async () => {
    const newFacing = !useFrontCamera;
    setUseFrontCamera(newFacing);
    
    if (cameraActive) {
      stopCamera();
      setTimeout(() => {
        setUseFrontCamera(newFacing);
        startCamera();
      }, 100);
    }
  };

  const resetAll = () => {
    stopCamera();
    setNailImage(null);
    nailImgRef.current = null;
    setError(null);
    setShowPermissionHelp(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-editorial overflow-hidden border border-accent/10">
        
        {/* Upload Section */}
        {!nailImage && !cameraActive && (
          <div className="p-8 md:p-12">
            <div className="max-w-xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-12 h-12 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal-900 mb-2">
                  Upload Your Nail Design
                </h2>
                <p className="text-text-secondary">
                  Choose a nail art image to try on your fingers
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-600 text-white font-semibold rounded-full hover:shadow-accent transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Choose Image
                  </>
                )}
              </button>

              <p className="text-sm text-text-secondary mt-4">
                Supports JPG, PNG, WEBP
              </p>
            </div>
          </div>
        )}

        {/* Preview & AR Section */}
        {nailImage && (
          <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
            {/* Uploaded Design Preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-heading font-semibold text-charcoal-900">
                  Selected Design
                </h3>
                <button
                  onClick={resetAll}
                  className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                  title="Reset"
                >
                  <X className="w-5 h-5 text-charcoal-900" />
                </button>
              </div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-accent/20 shadow-lg">
                <img
                  src={nailImage}
                  alt="Selected nail design"
                  className="w-full h-full object-cover"
                />
              </div>

              {!cameraActive && (
                <button
                  onClick={startCamera}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-accent to-accent-600 text-white font-semibold rounded-xl hover:shadow-accent transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Starting camera...
                    </>
                  ) : (
                    <>
                      <Camera className="w-5 h-5" />
                      Start AR Try-On
                    </>
                  )}
                </button>
              )}

              {/* Camera Permission Help */}
              {!cameraActive && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-900 mb-2">
                    📹 <strong>Camera Permission Required</strong>
                  </p>
                  <p className="text-sm text-blue-700">
                    When you click "Start AR Try-On", your browser will ask for camera permission. 
                    Please click <strong>"Allow"</strong> to continue.
                  </p>
                </div>
              )}
            </div>

            {/* AR Camera View */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-heading font-semibold text-charcoal-900">
                  AR View
                </h3>
                {cameraActive && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={switchCamera}
                      className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                      title="Switch camera"
                    >
                      <RotateCcw className="w-5 h-5 text-charcoal-900" />
                    </button>
                  </div>
                )}
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-charcoal-100 border-2 border-accent/20 shadow-lg">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: cameraActive ? 'block' : 'none' }}
                  playsInline
                  autoPlay
                  muted
                />
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: cameraActive ? 'block' : 'none' }}
                />

                {!cameraActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center text-charcoal-900">
                      <Camera className="w-16 h-16 mx-auto mb-4 opacity-30" />
                      <p className="text-sm">Camera view will appear here</p>
                    </div>
                  </div>
                )}

                {cameraActive && (
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    {handsDetected ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-600/90 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Hand Detected
                      </div>
                    ) : (
                      <div className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                        Show your palm
                      </div>
                    )}
                  </div>
                )}
              </div>

              {cameraActive && (
                <button
                  onClick={stopCamera}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-charcoal-900 text-white font-semibold rounded-xl hover:bg-charcoal-800 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                  Stop Camera
                </button>
              )}
            </div>
          </div>
        )}

        {/* Error Message with Help */}
        {error && (
          <div className="mx-6 mb-6">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 font-medium mb-2">❌ {error}</p>
              
              {showPermissionHelp && (
                <div className="mt-4 p-3 bg-white rounded-lg border border-red-100">
                  <p className="text-sm font-semibold text-red-900 mb-2">
                    How to allow camera access:
                  </p>
                  <ol className="text-sm text-red-700 space-y-1 list-decimal list-inside">
                    <li>Look for the camera icon in your browser's address bar (top-left)</li>
                    <li>Click on it and select "Allow"</li>
                    <li>If you don't see it, check your browser settings</li>
                    <li>Refresh the page and try again</li>
                  </ol>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                  >
                    Refresh Page
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Export with dynamic import to prevent SSR
export default dynamic(() => Promise.resolve(ARNailTryOn), {
  ssr: false,
  loading: () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-editorial overflow-hidden border border-accent/10 p-12">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading AR experience...</p>
        </div>
      </div>
    </div>
  ),
});
