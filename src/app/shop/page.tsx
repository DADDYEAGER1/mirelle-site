// src/app/shop/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop — Mirellé',
  description: 'We are curating the best nail products for you. Coming soon.',
};

export default function ShopPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#252220',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top border line */}
      <div
        style={{
          position: 'absolute',
          top: '2.5rem',
          left: '2.5rem',
          right: '2.5rem',
          height: '1px',
          backgroundColor: 'rgba(249,250,251,0.15)',
        }}
      />

      {/* Bottom border line */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '2.5rem',
          right: '2.5rem',
          height: '1px',
          backgroundColor: 'rgba(249,250,251,0.15)',
        }}
      />

      {/* Left border line */}
      <div
        style={{
          position: 'absolute',
          top: '2.5rem',
          bottom: '2.5rem',
          left: '2.5rem',
          width: '1px',
          backgroundColor: 'rgba(249,250,251,0.15)',
        }}
      />

      {/* Right border line */}
      <div
        style={{
          position: 'absolute',
          top: '2.5rem',
          bottom: '2.5rem',
          right: '2.5rem',
          width: '1px',
          backgroundColor: 'rgba(249,250,251,0.15)',
        }}
      />

      {/* Content */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '640px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Eyebrow label */}
        <p
          style={{
            fontFamily: 'General Sans, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(249,250,251,0.45)',
            margin: 0,
          }}
        >
          Mirellé Shop
        </p>

        {/* Divider */}
        <div
          style={{
            width: '32px',
            height: '1px',
            backgroundColor: 'rgba(249,250,251,0.25)',
          }}
        />

        {/* Main headline */}
        <h1
          style={{
            fontFamily: 'Larken, Georgia, serif',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 400,
            color: '#f9fafb',
            lineHeight: 1.15,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Curating the best<br />
          <em style={{ fontStyle: 'italic' }}>just for you.</em>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: 'General Sans, sans-serif',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(249,250,251,0.45)',
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          Something beautiful is on its way.
          <br />
          Opening soon.
        </p>

        {/* Divider */}
        <div
          style={{
            width: '32px',
            height: '1px',
            backgroundColor: 'rgba(249,250,251,0.25)',
          }}
        />

        {/* Back to home link */}
        <a
          href="/"
          style={{
            fontFamily: 'General Sans, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(249,250,251,0.5)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(249,250,251,0.2)',
            paddingBottom: '2px',
          }}
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}