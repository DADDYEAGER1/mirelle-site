'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogMetadata } from '@/types/blog';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TrendTag {
  id: string;
  name: string;
  description: string;
  category: string; // matches your blog category slug
  shopLink?: string;
}

interface Season {
  id: string;
  label: string;
  shortLabel: string;
  status: 'past' | 'now' | 'upcoming';
  headline: string;
  sub: string;
  teaser?: string;
  trends: TrendTag[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SEASONS: Season[] = [
  {
    id: 'winter25',
    label: "WINTER '25",
    shortLabel: 'WIN',
    status: 'past',
    headline: 'Dark. Velvet. Unapologetic.',
    sub: 'The season that made moody manicures a statement.',
    trends: [
      {
        id: 'w1',
        name: 'VELVET NAILS',
        description: 'Jewel-toned magnetic shimmer mimicking crushed velvet. Deep emerald, amethyst, navy — instantly luxe.',
        category: 'trends',
        shopLink: '/shop/gel-polishes',
      },
      {
        id: 'w2',
        name: 'GLASS NAILS',
        description: "Ultra-glossy translucent finish — like color locked beneath a sheet of glass. The clean girl's winter move.",
        category: 'nail art',
      },
      {
        id: 'w3',
        name: 'INDIE SLEAZE',
        description: 'Matte with gloss detailing. Y2K-coded, nostalgic, and very much back on the tips.',
        category: 'trends',
      },
    ],
  },
  {
    id: 'spring26',
    label: "SPRING '26",
    shortLabel: 'SPR',
    status: 'now',
    headline: 'Gingham, Florals & Clean Girl.',
    sub: "Spring has spoken. Softness with intention — the season's nails are here.",
    teaser: "Summer '26 — Sunset Nails & Neon Chrome is already building →",
    trends: [
      {
        id: 's1',
        name: 'FLORAL MILK NAILS',
        description: 'Dried flowers encapsulated in gel or acrylic. Soft, garden-ready, utterly feminine. The it-nail of the season.',
        category: 'nail art',
        shopLink: '/shop/nail-art-tools',
      },
      {
        id: 's2',
        name: 'GINGHAM NAILS',
        description: 'Modernized checker prints inspired by coastal towns and lavender fields. Pairs with everything this spring.',
        category: 'trends',
        shopLink: '/shop/nail-art-tools',
      },
      {
        id: 's3',
        name: 'SOAP NAILS',
        description: 'Sheer milky tints under a glycerine-level topcoat. Freshly moisturised, not manicured — quietly perfect.',
        category: 'nail care',
      },
      {
        id: 's4',
        name: 'POLKA DOT REVIVAL',
        description: 'Y2K nostalgia lands on nails. White on black, brown on baby blue — abstract, playful, zeitgeist.',
        category: 'nail art',
      },
    ],
  },
  {
    id: 'summer26',
    label: "SUMMER '26",
    shortLabel: 'SUM',
    status: 'upcoming',
    headline: 'Sunset Nails & Neon Chrome.',
    sub: 'The next chapter is already building. Summer comes in loud.',
    trends: [
      {
        id: 'su1',
        name: 'SUNSET NAILS',
        description: 'Vibrant tropical gradient hues. The cocktail of manicures — all warmth, no apology.',
        category: 'trends',
      },
      {
        id: 'su2',
        name: 'NEON CHROME',
        description: 'Iridescent chrome in electric shades. Pink, purple, blue — sparkling under the sun.',
        category: 'trends',
      },
      {
        id: 'su3',
        name: 'JELLY NAILS',
        description: 'Translucent, candy-like nails making their full comeback. Nostalgia never looked this fresh.',
        category: 'nail art',
      },
    ],
  },
  {
    id: 'fall26',
    label: "FALL '26",
    shortLabel: 'FAL',
    status: 'upcoming',
    headline: 'Moody, Rich & Coming For You.',
    sub: 'Dark season. Bold nails. Already on our radar — and yours.',
    trends: [
      {
        id: 'f1',
        name: 'TORTOISE TIPS',
        description: 'Brown and black watercolor replacing white in French tips. Gothic, warm, and devastatingly chic.',
        category: 'trends',
      },
      {
        id: 'f2',
        name: 'MIDNIGHT BLUE',
        description: 'Cool, deep, moody — the first color to signal the seasonal shift every year. It never misses.',
        category: 'seasonal',
      },
    ],
  },
];

// ─── Props ────────────────────────────────────────────────────────────────────

interface TrendTimelineHeroProps {
  posts: BlogMetadata[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrendTimelineHero({ posts }: TrendTimelineHeroProps) {
  const [activeSeasonId, setActiveSeasonId] = useState('spring26');
  const [expandedTrendId, setExpandedTrendId] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelSeason, setPanelSeason] = useState<Season | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displaySeasonId, setDisplaySeasonId] = useState('spring26');
  const panelRef = useRef<HTMLDivElement>(null);

  const activeSeason = SEASONS.find((s) => s.id === activeSeasonId)!;
  const displaySeason = SEASONS.find((s) => s.id === displaySeasonId)!;
  const nowIndex = SEASONS.findIndex((s) => s.status === 'now');

  // Close panel on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setPanelOpen(false);
      }
    };
    if (panelOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [panelOpen]);

  const handleSeasonClick = (id: string) => {
    if (id === activeSeasonId) return;
    setIsTransitioning(true);
    setExpandedTrendId(null);
    setTimeout(() => {
      setActiveSeasonId(id);
      setDisplaySeasonId(id);
      setIsTransitioning(false);
    }, 320);

    // Open side panel
    const season = SEASONS.find((s) => s.id === id)!;
    setPanelSeason(season);
    setPanelOpen(true);
  };

  const handleTrendClick = (trendId: string) => {
    setExpandedTrendId(expandedTrendId === trendId ? null : trendId);
  };

  const getPostsForTrend = (trend: TrendTag) => {
    return posts
      .filter((p) => p.category === trend.category)
      .slice(0, 3);
  };

  const activeIndex = SEASONS.findIndex((s) => s.id === activeSeasonId);

  return (
    <>
      <style>{`
        .tth-root {
          background: #f9fafb;
          color: #252220;
          font-family: 'General Sans', system-ui, sans-serif;
          border-top: 1px solid #252220;
          border-bottom: 1px solid #252220;
          position: relative;
          overflow: hidden;
        }

        /* TOP BAR */
        .tth-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 40px;
          border-bottom: 1px solid #252220;
        }
        @media (max-width: 640px) {
          .tth-topbar { padding: 10px 20px; }
        }
        .tth-topbar-label {
          font-family: 'General Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #888;
        }
        .tth-topbar-season {
          font-family: 'Larken', Georgia, serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #252220;
        }
        .tth-topbar-dot {
          width: 6px;
          height: 6px;
          background: #252220;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          animation: tth-blink 2s infinite;
        }
        @keyframes tth-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        /* MAIN CONTENT */
        .tth-main {
          display: grid;
          grid-template-columns: 1fr;
          padding: 48px 40px 40px;
          border-bottom: 1px solid #252220;
          gap: 0;
        }
        @media (max-width: 640px) {
          .tth-main { padding: 32px 20px 28px; }
        }

        .tth-status-label {
          font-family: 'General Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 16px;
        }

        .tth-headline {
          font-family: 'Larken', Georgia, serif;
          font-size: clamp(32px, 5.5vw, 64px);
          font-weight: 400;
          line-height: 1.05;
          color: #252220;
          margin-bottom: 18px;
          transition: opacity 0.32s ease, transform 0.32s ease;
        }
        .tth-headline.fading {
          opacity: 0;
          transform: translateY(8px);
        }

        .tth-sub {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: clamp(15px, 1.8vw, 18px);
          color: #666;
          line-height: 1.6;
          max-width: 560px;
          transition: opacity 0.32s ease;
        }
        .tth-sub.fading { opacity: 0; }

        /* TREND TAGS */
        .tth-tags {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tth-tag-wrap {
          width: 100%;
        }

        .tth-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: 1px solid #252220;
          background: transparent;
          font-family: 'General Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #252220;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          user-select: none;
        }
        .tth-tag:hover,
        .tth-tag.active {
          background: #252220;
          color: #f9fafb;
        }
        .tth-tag-arrow {
          font-size: 8px;
          transition: transform 0.25s ease;
          display: inline-block;
        }
        .tth-tag.active .tth-tag-arrow {
          transform: rotate(180deg);
        }

        /* EXPANDED TREND PANEL */
        .tth-expand {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          border-left: 1px solid #252220;
          margin-top: 0;
          margin-left: 0;
        }
        .tth-expand.open {
          max-height: 600px;
        }
        .tth-expand-inner {
          padding: 24px 24px 28px;
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
        }

        .tth-expand-desc {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 17px;
          color: #444;
          line-height: 1.65;
          margin-bottom: 20px;
          max-width: 520px;
        }

        .tth-expand-section-label {
          font-family: 'General Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 12px;
        }

        .tth-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 12px;
          margin-bottom: 16px;
        }
        @media (max-width: 480px) {
          .tth-cards { grid-template-columns: 1fr 1fr; }
        }

        /* Blog/Shop card */
        .tth-card {
          display: block;
          border: 1px solid #e5e5e5;
          overflow: hidden;
          text-decoration: none;
          color: #252220;
          transition: border-color 0.2s;
          background: #f9fafb;
        }
        .tth-card:hover { border-color: #252220; }

        .tth-card-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          background: #e8e8e8;
        }
        .tth-card-img-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #efefef 0%, #e0e0e0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tth-card-img-placeholder span {
          font-family: 'General Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 0.15em;
          color: #bbb;
          text-transform: uppercase;
        }
        .tth-card-body {
          padding: 10px 12px 12px;
        }
        .tth-card-type {
          font-family: 'General Sans', sans-serif;
          font-size: 8px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 4px;
        }
        .tth-card-title {
          font-family: 'Larken', Georgia, serif;
          font-size: 13px;
          line-height: 1.35;
          color: #252220;
        }

        .tth-no-posts {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 14px;
          color: #bbb;
          font-style: italic;
        }

        .tth-shop-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'General Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #252220;
          text-decoration: none;
          border-bottom: 1px solid #252220;
          padding-bottom: 1px;
          transition: opacity 0.2s;
        }
        .tth-shop-link:hover { opacity: 0.5; }

        /* TIMELINE */
        .tth-timeline-wrap {
          padding: 28px 40px;
          border-bottom: 1px solid #252220;
          position: relative;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .tth-timeline-wrap::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) {
          .tth-timeline-wrap { padding: 22px 20px; }
        }

        .tth-timeline {
          display: flex;
          align-items: center;
          min-width: max-content;
          position: relative;
        }

        .tth-timeline-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #252220;
          transform: translateY(-50%);
          z-index: 0;
        }

        .tth-timeline-stop {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
          cursor: pointer;
          padding: 0 32px;
        }
        @media (max-width: 640px) {
          .tth-timeline-stop { padding: 0 20px; }
        }

        .tth-stop-label {
          font-family: 'General Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 10px;
          transition: color 0.25s;
          white-space: nowrap;
        }
        .tth-stop-label.past { color: #bbb; }
        .tth-stop-label.now { color: #252220; font-weight: 600; }
        .tth-stop-label.upcoming { color: #888; font-style: italic; }
        .tth-stop-label.selected { color: #252220 !important; font-weight: 600; }

        .tth-stop-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1.5px solid #252220;
          background: #f9fafb;
          transition: background 0.3s ease, transform 0.3s ease, width 0.3s ease, height 0.3s ease;
          position: relative;
          z-index: 2;
        }
        .tth-stop-dot.past { background: #f9fafb; border-color: #ccc; }
        .tth-stop-dot.selected {
          background: #252220;
          width: 20px;
          height: 20px;
          border-color: #252220;
          box-shadow: 0 0 0 4px #f9fafb, 0 0 0 5px #252220;
        }

        .tth-stop-season-name {
          font-family: 'Larken', Georgia, serif;
          font-size: 11px;
          margin-top: 10px;
          white-space: nowrap;
          transition: opacity 0.25s;
          color: #252220;
        }
        .tth-stop-season-name.past { color: #bbb; }
        .tth-stop-season-name.upcoming { color: #aaa; font-style: italic; }

        /* TEASER BAR */
        .tth-teaser {
          padding: 14px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .tth-teaser { padding: 14px 20px; flex-direction: column; align-items: flex-start; gap: 8px; }
        }
        .tth-teaser-text {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 15px;
          color: #888;
          font-style: italic;
        }
        .tth-teaser-link {
          font-family: 'General Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #252220;
          text-decoration: none;
          white-space: nowrap;
          border-bottom: 1px solid #252220;
          padding-bottom: 1px;
          transition: opacity 0.2s;
          cursor: pointer;
        }
        .tth-teaser-link:hover { opacity: 0.4; }

        /* SIDE PANEL */
        .tth-panel-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          pointer-events: none;
        }
        .tth-panel-overlay.open { pointer-events: all; }

        .tth-panel {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: min(440px, 92vw);
          background: #fff;
          border-left: 1px solid #252220;
          z-index: 51;
          transform: translateX(100%);
          transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .tth-panel.open {
          transform: translateX(0);
        }

        .tth-panel-header {
          padding: 28px 32px 20px;
          border-bottom: 1px solid #e5e5e5;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .tth-panel-close {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #252220;
          padding: 0;
          line-height: 1;
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .tth-panel-close:hover { opacity: 1; }

        .tth-panel-status {
          font-family: 'General Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 8px;
        }
        .tth-panel-title {
          font-family: 'Larken', Georgia, serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 1.15;
          color: #252220;
        }

        .tth-panel-body {
          padding: 24px 32px;
          flex: 1;
        }

        .tth-panel-sub {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 17px;
          color: #666;
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .tth-panel-trend-item {
          padding: 16px 0;
          border-top: 1px solid #e5e5e5;
        }
        .tth-panel-trend-name {
          font-family: 'General Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #252220;
          margin-bottom: 6px;
        }
        .tth-panel-trend-desc {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        .tth-panel-cta {
          padding: 20px 32px 32px;
          border-top: 1px solid #e5e5e5;
        }
        .tth-panel-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'General Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #252220;
          text-decoration: none;
          border-bottom: 1px solid #252220;
          padding-bottom: 1px;
        }
      `}</style>

      <section className="tth-root">

        {/* TOP BAR */}
        <div className="tth-topbar">
          <span className="tth-topbar-label">Nail Trend Index</span>
          <span className="tth-topbar-season">
            <span className="tth-topbar-dot" />
            {displaySeason.status === 'now' ? `Now In · ${displaySeason.label}` : displaySeason.label}
          </span>
        </div>

        {/* HEADLINE + TRENDS */}
        <div className="tth-main">
          <p className="tth-status-label">
            {displaySeason.status === 'past' ? 'Season Recap' : displaySeason.status === 'now' ? 'Currently Trending' : 'Coming Soon'}
          </p>

          <h2 className={`tth-headline${isTransitioning ? ' fading' : ''}`}>
            {displaySeason.headline}
          </h2>

          <p className={`tth-sub${isTransitioning ? ' fading' : ''}`}>
            {displaySeason.sub}
          </p>

          {/* TREND TAGS */}
          <div className="tth-tags">
            {displaySeason.trends.map((trend) => {
              const isExpanded = expandedTrendId === trend.id;
              const trendPosts = getPostsForTrend(trend);

              return (
                <div key={trend.id} className="tth-tag-wrap">
                  <button
                    className={`tth-tag${isExpanded ? ' active' : ''}`}
                    onClick={() => handleTrendClick(trend.id)}
                    aria-expanded={isExpanded}
                  >
                    {trend.name}
                    <span className="tth-tag-arrow">▼</span>
                  </button>

                  <div className={`tth-expand${isExpanded ? ' open' : ''}`}>
                    <div className="tth-expand-inner">
                      <p className="tth-expand-desc">{trend.description}</p>

                      {/* Blog posts */}
                      {trendPosts.length > 0 && (
                        <>
                          <p className="tth-expand-section-label">From the Edit</p>
                          <div className="tth-cards">
                            {trendPosts.map((post) => (
                              <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="tth-card"
                              >
                                {post.image ? (
                                  <img
                                    src={post.image}
                                    alt={post.imageAlt || post.title}
                                    className="tth-card-img"
                                  />
                                ) : (
                                  <div className="tth-card-img-placeholder">
                                    <span>No Image</span>
                                  </div>
                                )}
                                <div className="tth-card-body">
                                  <p className="tth-card-type">Blog · {post.readTime} read</p>
                                  <p className="tth-card-title">{post.title}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </>
                      )}

                      {trendPosts.length === 0 && (
                        <p className="tth-no-posts">Posts coming soon for this trend.</p>
                      )}

                      {/* Shop link */}
                      {trend.shopLink && (
                        <Link href={trend.shopLink} className="tth-shop-link">
                          Shop This Trend →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TIMELINE */}
        <div className="tth-timeline-wrap">
          <div className="tth-timeline">
            <div className="tth-timeline-line" />
            {SEASONS.map((season, i) => {
              const isSelected = season.id === activeSeasonId;
              return (
                <div
                  key={season.id}
                  className="tth-timeline-stop"
                  onClick={() => handleSeasonClick(season.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleSeasonClick(season.id)}
                  aria-pressed={isSelected}
                >
                  <span className={`tth-stop-label ${season.status}${isSelected ? ' selected' : ''}`}>
                    {season.status === 'now' && !isSelected ? '● NOW' : season.status === 'past' ? 'PAST' : 'COMING'}
                  </span>
                  <div className={`tth-stop-dot ${season.status}${isSelected ? ' selected' : ''}`} />
                  <span className={`tth-stop-season-name ${season.status}`}>
                    {season.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* TEASER */}
        {displaySeason.teaser && (
          <div className="tth-teaser">
            <p className="tth-teaser-text">{displaySeason.teaser}</p>
            <span
              className="tth-teaser-link"
              onClick={() => handleSeasonClick('summer26')}
            >
              Preview Summer →
            </span>
          </div>
        )}

        {!displaySeason.teaser && (
          <div className="tth-teaser">
            <p className="tth-teaser-text" style={{ fontStyle: 'normal', color: '#bbb', fontSize: '13px' }}>
              {displaySeason.status === 'past' ? 'This season has passed. Explore what\'s current.' : 'Stay tuned — more drops incoming.'}
            </p>
            <span className="tth-teaser-link" onClick={() => handleSeasonClick('spring26')}>
              Back to Now →
            </span>
          </div>
        )}
      </section>

      {/* SIDE PANEL */}
      <div className={`tth-panel-overlay${panelOpen ? ' open' : ''}`}>
        <div
          ref={panelRef}
          className={`tth-panel${panelOpen ? ' open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${panelSeason?.label} trends`}
        >
          {panelSeason && (
            <>
              <div className="tth-panel-header">
                <div>
                  <p className="tth-panel-status">
                    {panelSeason.status === 'past' ? 'Past Season' : panelSeason.status === 'now' ? '● Now Trending' : 'Upcoming Season'}
                  </p>
                  <h3 className="tth-panel-title">{panelSeason.label}</h3>
                </div>
                <button
                  className="tth-panel-close"
                  onClick={() => setPanelOpen(false)}
                  aria-label="Close panel"
                >
                  ✕
                </button>
              </div>

              <div className="tth-panel-body">
                <p className="tth-panel-sub">{panelSeason.sub}</p>

                {panelSeason.trends.map((trend) => (
                  <div key={trend.id} className="tth-panel-trend-item">
                    <p className="tth-panel-trend-name">{trend.name}</p>
                    <p className="tth-panel-trend-desc">{trend.description}</p>
                  </div>
                ))}
              </div>

              <div className="tth-panel-cta">
                <Link
                  href={`/blog?category=${panelSeason.trends[0]?.category || 'trends'}`}
                  className="tth-panel-cta-link"
                  onClick={() => setPanelOpen(false)}
                >
                  Explore All {panelSeason.label} Posts →
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}