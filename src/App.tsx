import { useEffect, useState } from 'react'
import buzzLogo from './assets/buzz-logo.svg'
import './App.css'

const features = [
  {
    icon: '🔔',
    title: 'Approval Alerts',
    desc: 'The moment your agent pauses waiting for a decision, Buzz pings you — no more checking back every few minutes.',
  },
  {
    icon: '⚡',
    title: 'Failure & Retry Detection',
    desc: 'Long-running tasks fail silently. Buzz catches errors, retries, and crashes the second they happen.',
  },
  {
    icon: '🖥️',
    title: 'Works with Your Stack',
    desc: 'Claude Code, Cursor agents, OpenAI Codex, and any terminal process. If it runs, Buzz can watch it.',
  },
]

const testimonials = [
  {
    quote: "I used to check my terminal every 5 minutes. Now Buzz just tells me when Claude Code needs me.",
    name: 'Alex T.',
    role: 'Staff Engineer',
  },
  {
    quote: 'My Cursor agents run overnight. Buzz wakes me up if something needs approval or breaks.',
    name: 'Jordan K.',
    role: 'Indie Hacker',
  },
  {
    quote: "Finally stopped babysitting Codex. Buzz handles the watching, I handle the decisions.",
    name: 'Sam R.',
    role: 'Full-Stack Developer',
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
      {/* Nav */}
      <nav className={`nav${scrolled ? ' nav--island' : ''}`}>
        <div className="nav-logo">
          <img src={buzzLogo} className="logo-img" alt="Buzz logo" />
          <span className="nav-wordmark">buzz</span>
        </div>
        <a href="#waitlist" className="nav-cta">
          Join waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="pollen-bg">
          <div className="pollen pollen-1" />
          <div className="pollen pollen-2" />
          <div className="pollen pollen-3" />
        </div>

        <div className="hero-badge">
          <span className="badge-dot" />
          Claude Code · Codex · Terminal Agents
        </div>

        <h1 className="hero-headline">
          Operational awareness
          <br />
          <em>for agents.</em>
        </h1>

        <p className="hero-sub">
          Stop monitoring your terminal. Get alerted when your agent needs you.
        </p>

        <form
          className="waitlist-form"
          id="waitlist"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="waitlist-input"
            aria-label="Email address"
          />
          <button type="submit" className="waitlist-btn">
            Get early access
          </button>
        </form>

        {/* Mock notification card */}
        <div className="mock-card">
          <div className="mock-card-header">
            <img src={buzzLogo} className="logo-img small" alt="" />
            <span className="mock-card-app">buzz</span>
            <span className="mock-card-time">just now</span>
          </div>
          <p className="mock-card-title">Claude Code needs your approval</p>
          <p className="mock-card-body">
            Waiting to edit /src/auth/session.ts — blocked for 6 min.
          </p>
          <div className="mock-card-actions">
            <button className="mock-action primary">Approve</button>
            <button className="mock-action">View diff</button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="meadow-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--surface)"
          />
        </svg>
      </div>

      {/* Features */}
      <section className="features">
        <h2 className="section-title">Stop babysitting your terminal</h2>
        <p className="section-sub">
          Your agents keep running. You get notified when it matters.
        </p>
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">From developers in the wild</h2>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <span className="author-name">{t.name}</span>
                <span className="author-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <img src={buzzLogo} className="logo-img large" alt="" />
        <h2>Stop watching. Start shipping.</h2>
        <p>Join developers already running agents hands-free.</p>
        <form className="waitlist-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="waitlist-input"
            aria-label="Email address"
          />
          <button type="submit" className="waitlist-btn">
            Get early access
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src={buzzLogo} className="logo-img" alt="" />
        <span className="nav-wordmark">buzz</span>
        <span className="footer-sep">·</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
