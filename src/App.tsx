import { useEffect, useState } from 'react'
import './App.css'

const features = [
  {
    icon: '🌿',
    title: 'Smart Buzzes',
    desc: 'Buzz learns what matters to you and surfaces the right tasks at the right moment — no noise, just signal.',
  },
  {
    icon: '🍯',
    title: 'Hive Dashboard',
    desc: 'All your notifications collected in one calm, organized view. Your hive, your rules.',
  },
  {
    icon: '🌸',
    title: 'Natural Timing',
    desc: "Reminders that arrive when they're useful — not when they're annoying. We call it nature's rhythm.",
  },
]

const testimonials = [
  {
    quote: "Buzz is the only notification app I don't want to mute.",
    name: 'Maya L.',
    role: 'Product Designer',
  },
  {
    quote: 'Finally, focus without missing what actually matters.',
    name: 'Daniel R.',
    role: 'Indie Hacker',
  },
  {
    quote: 'It feels like having a very calm, very smart assistant.',
    name: 'Priya M.',
    role: 'Engineer',
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
          <span className="bee-icon">🐝</span>
          <span className="nav-wordmark">Buzz</span>
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
          Now in early access
        </div>

        <h1 className="hero-headline">
          Notifications that
          <br />
          <em>actually help you.</em>
        </h1>

        <p className="hero-sub">
          Buzz delivers intelligent, timely nudges for your most important tasks
          — gently, like nature intended.
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

        <p className="hero-footnote">No spam. Unsubscribe any time.</p>

        {/* Mock notification card */}
        <div className="mock-card">
          <div className="mock-card-header">
            <span className="bee-icon small">🐝</span>
            <span className="mock-card-app">buzz</span>
            <span className="mock-card-time">just now</span>
          </div>
          <p className="mock-card-title">Time to review your PRs</p>
          <p className="mock-card-body">
            3 pull requests need your attention before your 3pm stand-up.
          </p>
          <div className="mock-card-actions">
            <button className="mock-action primary">Review now</button>
            <button className="mock-action">Snooze 30 min</button>
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
        <h2 className="section-title">Why the hive loves Buzz</h2>
        <p className="section-sub">
          Built around your focus, not against it.
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
        <h2 className="section-title">From the hive</h2>
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
        <span className="bee-icon large">🐝</span>
        <h2>Ready to find your flow?</h2>
        <p>Join hundreds of people already on the waitlist.</p>
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
        <span className="bee-icon">🐝</span>
        <span className="nav-wordmark">Buzz</span>
        <span className="footer-sep">·</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
