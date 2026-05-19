'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight, Menu, X, Sun, Moon, MapPin, Home, Folder, Image, CreditCard,
  MessageCircle, FileText, Calendar, Clock, CheckCircle, Circle, ChevronRight,
  Download, Eye, Lock, Users, DollarSign, Search, Globe, TrendingUp, Settings,
  Target, Activity, Mail, Phone, Plus, Edit3, ExternalLink, Filter, Bell, Hash,
  BarChart3, Megaphone, Layers, Send, PieChart, Palette, Star, Camera,
} from 'lucide-react';

type View = 'site' | 'portal' | 'admin';

export default function CurationsByDeborah() {
  const [view, setView] = useState<View>('site');
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalTab, setPortalTab] = useState('dashboard');
  const [adminTab, setAdminTab] = useState('overview');

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 820);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Theme Tokens ──────────────────────────────────────────────
  const t = isDark ? {
    bg: '#161210', bgAlt: '#1E1A16', surface: '#221E1A', surfaceHover: '#2A2520',
    text: '#F0EBE3', textSecondary: '#C8C0B8', textMuted: '#9A918A', textFaint: '#5E5550',
    terracotta: '#C88070', terracottaDeep: '#A06858', brass: '#D4B275', olive: '#8A9472',
    blush: '#C4A598', border: '#302A24', borderSoft: '#262220',
    heroGrad: 'linear-gradient(135deg, #1E1A16 0%, #161210 40%, #1A1614 100%)',
    ctaBg: '#C88070', ctaText: '#161210',
    success: '#6B9A6B', warning: '#C4A265', danger: '#C87070',
    navBg: 'rgba(22,18,16,0.88)',
  } : {
    bg: '#F7F3EE', bgAlt: '#EDE7DC', surface: '#FFFDF9', surfaceHover: '#F5EFE6',
    text: '#2C2420', textSecondary: '#4A403A', textMuted: '#7A7068', textFaint: '#A89E94',
    terracotta: '#B5705A', terracottaDeep: '#8E5242', brass: '#C4A265', olive: '#747C62',
    blush: '#D4B5A8', border: '#E2DAD0', borderSoft: '#EDE7DC',
    heroGrad: 'linear-gradient(135deg, #F7F3EE 0%, #F0EAE0 40%, #F5F0E8 100%)',
    ctaBg: '#B5705A', ctaText: '#FFFDF9',
    success: '#5C7A5C', warning: '#B5965A', danger: '#B57070',
    navBg: 'rgba(247,243,238,0.88)',
  };

  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans = "'Raleway', 'Helvetica Neue', sans-serif";
  const px = isMobile ? 24 : 64;
  const sectionGap = isMobile ? 80 : 140;

  // ── Shared Styles ─────────────────────────────────────────────
  const microLabel: React.CSSProperties = {
    fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.32em',
    textTransform: 'uppercase', color: t.terracotta,
  };
  const sectionHead: React.CSSProperties = {
    fontFamily: serif, fontSize: isMobile ? 38 : 60, fontWeight: 300,
    lineHeight: 1.08, color: t.text, letterSpacing: '-0.02em',
  };
  const card: React.CSSProperties = {
    background: t.surface, border: `1px solid ${t.border}`,
    padding: isMobile ? 20 : 28, display: 'flex', flexDirection: 'column', gap: 16,
  };
  const badge = (color: string): React.CSSProperties => ({
    fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.12em',
    textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2,
    background: color + '18', color: color, display: 'inline-block',
  });
  const tableRow: React.CSSProperties = {
    display: 'flex', alignItems: 'center', padding: '14px 0',
    borderBottom: `1px solid ${t.borderSoft}`, gap: 16, fontSize: 13,
  };

  // ── Mock Data ─────────────────────────────────────────────────
  const swatches = [
    { name: 'Terracotta', hex: '#B5705A' }, { name: 'Aged Brass', hex: '#C4A265' },
    { name: 'Sage Olive', hex: '#747C62' }, { name: 'Blush', hex: '#D4B5A8' },
    { name: 'Espresso', hex: '#2C2420' }, { name: 'Linen', hex: '#F7F3EE' },
  ];

  const projects = [
    {
      label: '5350 OLENTANGY ROAD', name: 'The Olentangy Residence',
      desc: 'A complete reimagining where heritage meets modern living. Hand-selected materials, custom millwork, and a palette drawn from the landscape itself.',
      tags: ['Custom Millwork', 'Italian Marble', 'Bespoke Lighting', 'Artisan Tile'],
      placeholder: 'Living room — afternoon light on custom walnut built-ins',
      phase: 'Crafting', progress: 72,
    },
    {
      label: '8321 RIVER ROCK LANE', name: 'River Rock',
      desc: 'Intimate sophistication at every turn. From bespoke fabric selections to artisan hardware, each room unfolds with intention and warmth.',
      tags: ['Fabric Curation', 'Hardware Selection', 'Color Story', 'Custom Furniture'],
      placeholder: 'Primary suite — hand-rubbed plaster walls, linen drapes',
      phase: 'Sourcing', progress: 45,
    },
  ];

  const steps = [
    { num: '01', title: 'Discovery', desc: 'How do you live? How do you want to feel? The conversation begins here.' },
    { num: '02', title: 'Vision', desc: 'From inspiration to intention — translating your life into a design language.' },
    { num: '03', title: 'Sourcing', desc: 'Every fabric, every finish, every fixture — hunted, evaluated, chosen with purpose.' },
    { num: '04', title: 'Crafting', desc: 'The design takes form. Custom pieces commissioned. Every detail specified down to the thread.' },
    { num: '05', title: 'Reveal', desc: 'The moment your space becomes unmistakably, irreversibly yours.' },
  ];

  const details = [
    { title: 'Fabrics & Textiles', desc: 'Hand-sourced from mills in Italy, Belgium, and Japan' },
    { title: 'Custom Millwork', desc: 'Profiles designed and milled to specification' },
    { title: 'Artisan Lighting', desc: 'Fixtures that sculpt atmosphere and define space' },
    { title: 'Hardware & Metals', desc: 'Every pull, hinge, and bracket — considered' },
    { title: 'Tile & Stone', desc: 'Natural materials selected for character and permanence' },
    { title: 'Color Curation', desc: 'Palettes drawn from life, not trend reports' },
  ];

  const portalInvoices = [
    { id: '1024', project: 'Olentangy Residence', date: 'May 12, 2026', status: 'Due', phase: 'Crafting — Milestone 3' },
    { id: '1023', project: 'Olentangy Residence', date: 'Apr 28, 2026', status: 'Paid', phase: 'Crafting — Milestone 2' },
    { id: '1019', project: 'River Rock', date: 'Apr 15, 2026', status: 'Paid', phase: 'Sourcing — Initial selections' },
    { id: '1016', project: 'River Rock', date: 'Mar 30, 2026', status: 'Paid', phase: 'Vision — Design development' },
  ];

  const portalMessages = [
    { from: 'Deborah', time: '2 hours ago', text: 'The Italian marble samples arrived — the Calacatta Viola is stunning. I\'d love to walk you through the options Thursday.' },
    { from: 'You', time: 'Yesterday', text: 'That sounds wonderful! We\'re available after 2pm.' },
    { from: 'Deborah', time: '3 days ago', text: 'The custom walnut trim profiles are back from the mill. They turned out beautifully — photos in your gallery.' },
  ];

  const adminLeads = [
    { name: 'Catherine Wells', source: 'Instagram Ad', date: 'May 18', status: 'New', interest: 'Full home curation' },
    { name: 'Robert & Anna Kim', source: 'Google Search', date: 'May 16', status: 'Contacted', interest: 'Kitchen & living redesign' },
    { name: 'The Hartwell Family', source: 'Referral', date: 'May 14', status: 'Consultation', interest: 'New build — complete interior' },
    { name: 'Jennifer Morrison', source: 'Website CTA', date: 'May 11', status: 'Proposal Sent', interest: 'Primary suite renovation' },
  ];

  const adminSocialPosts = [
    { platform: 'Instagram', type: 'Reel', title: 'Olentangy marble selection process', date: 'May 20', status: 'Scheduled' },
    { platform: 'Instagram', type: 'Carousel', title: 'Before & After: River Rock foyer', date: 'May 22', status: 'Draft' },
    { platform: 'Pinterest', type: 'Pin', title: 'Custom millwork detail — walnut trim', date: 'May 23', status: 'Scheduled' },
    { platform: 'Instagram', type: 'Story', title: 'Behind the scenes: fabric sourcing trip', date: 'May 25', status: 'Planned' },
  ];

  const adminCampaigns = [
    { name: 'Spring Curation Launch', platform: 'Instagram', status: 'Active', audience: 'Columbus homeowners 35-65', objective: 'Lead generation' },
    { name: 'Retargeting — Site Visitors', platform: 'Meta Ads', status: 'Active', audience: 'Website visitors 30 days', objective: 'Consultation bookings' },
    { name: 'Luxury Interiors — Pinterest', platform: 'Pinterest', status: 'Paused', audience: 'Interior design enthusiasts', objective: 'Brand awareness' },
  ];

  // ── Helper: Progress Bar ──────────────────────────────────────
  const ProgressBar = ({ pct, color }: { pct: number; color: string }) => (
    <div style={{ width: '100%', height: 4, background: t.borderSoft, borderRadius: 2 }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 2, transition: 'width 0.6s ease' }} />
    </div>
  );

  // ── Helper: Image Placeholder ─────────────────────────────────
  const Placeholder = ({ label, h }: { label: string; h: number }) => (
    <div style={{
      width: '100%', height: h, background: t.bgAlt, border: `1px dashed ${t.border}`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 12, position: 'relative', overflow: 'hidden',
    }}>
      <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: t.textFaint, textAlign: 'center', maxWidth: 280, lineHeight: 1.5 }}>
        {label}
      </span>
      <div style={{ width: 32, height: 1, background: t.terracotta, opacity: 0.3 }} />
    </div>
  );

  // ══════════════════════════════════════════════════════════════
  //  FRAME: View Switcher + Navigation
  // ══════════════════════════════════════════════════════════════

  const renderFrame = () => (
    <>
      {/* View Switcher Bar */}
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? 0 : 4,
        padding: '8px 16px', background: isDark ? '#0E0C0A' : '#E8E2D8',
        borderBottom: `1px solid ${t.borderSoft}`,
      }}>
        {([['site', 'Public Site'], ['portal', 'Client Portal'], ['admin', 'Admin']] as const).map(([v, label]) => (
          <button key={v} onClick={() => { setView(v); setMenuOpen(false); }} style={{
            fontFamily: sans, fontSize: 10, fontWeight: view === v ? 600 : 400,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: view === v ? t.terracotta : t.textFaint,
            background: view === v ? t.terracotta + '14' : 'transparent',
            border: 'none', padding: '6px 16px', cursor: 'pointer',
            transition: 'all 0.25s ease', borderRadius: 2,
          }}>
            {isMobile ? (v === 'site' ? 'Site' : v === 'portal' ? 'Portal' : 'Admin') : label}
          </button>
        ))}
      </div>

      {/* Main Navigation */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: `14px ${px}px`,
        background: t.navBg, backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${t.borderSoft}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.text }}>
            DEBORAH D
          </span>
          <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: t.terracotta, marginLeft: 4 }} />
        </div>

        {!isMobile && view === 'site' && (
          <div style={{ display: 'flex', gap: 40 }}>
            {['Portfolio', 'Process', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: t.textMuted, textDecoration: 'none',
                transition: 'color 0.3s ease', cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = t.terracotta; }}
                onMouseLeave={e => { e.currentTarget.style.color = t.textMuted; }}
              >{item}</a>
            ))}
          </div>
        )}

        {!isMobile && view === 'portal' && (
          <div style={{ display: 'flex', gap: 8 }}>
            {[['dashboard', 'Dashboard', Home], ['projects', 'Projects', Folder], ['gallery', 'Gallery', Image], ['billing', 'Billing', CreditCard], ['messages', 'Messages', MessageCircle]].map(([key, label, Icon]) => (
              <button key={key as string} onClick={() => setPortalTab(key as string)} style={{
                fontFamily: sans, fontSize: 10, fontWeight: portalTab === key ? 600 : 400,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: portalTab === key ? t.terracotta : t.textMuted,
                background: portalTab === key ? t.terracotta + '12' : 'transparent',
                border: 'none', padding: '6px 14px', cursor: 'pointer',
                transition: 'all 0.25s ease', borderRadius: 2,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <Icon size={12} />{label as string}
              </button>
            ))}
          </div>
        )}

        {!isMobile && view === 'admin' && (
          <div style={{ display: 'flex', gap: 4 }}>
            {[['overview', 'Overview'], ['clients', 'Clients'], ['finances', 'Finances'], ['seo', 'SEO'], ['social', 'Social'], ['ads', 'Ads'], ['leads', 'Leads'], ['galleries', 'Galleries'], ['settings', 'Settings']].map(([key, label]) => (
              <button key={key} onClick={() => setAdminTab(key)} style={{
                fontFamily: sans, fontSize: 10, fontWeight: adminTab === key ? 600 : 400,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: adminTab === key ? t.terracotta : t.textMuted,
                background: adminTab === key ? t.terracotta + '12' : 'transparent',
                border: 'none', padding: '6px 10px', cursor: 'pointer',
                transition: 'all 0.25s ease', borderRadius: 2,
              }}>{label}</button>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {view !== 'site' && (
            <button style={{
              background: 'none', border: 'none', cursor: 'pointer', color: t.textMuted,
              position: 'relative', padding: 4, display: 'flex',
            }}>
              <Bell size={16} />
              <span style={{ position: 'absolute', top: 2, right: 2, width: 6, height: 6, borderRadius: '50%', background: t.terracotta }} />
            </button>
          )}
          <button onClick={() => setIsDark(!isDark)} style={{
            background: 'none', border: `1px solid ${t.border}`, borderRadius: 999,
            width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: t.textMuted, transition: 'all 0.3s ease',
          }}>
            {isDark ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              background: 'none', border: 'none', cursor: 'pointer', color: t.text, padding: 4, display: 'flex',
            }}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Tab Bar */}
      {isMobile && view === 'portal' && (
        <div style={{ display: 'flex', overflowX: 'auto', padding: '8px 16px', gap: 4, borderBottom: `1px solid ${t.borderSoft}`, background: t.bg }}>
          {['dashboard', 'projects', 'gallery', 'billing', 'messages'].map(key => (
            <button key={key} onClick={() => setPortalTab(key)} style={{
              fontFamily: sans, fontSize: 10, fontWeight: portalTab === key ? 600 : 400,
              letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              color: portalTab === key ? t.terracotta : t.textMuted,
              background: portalTab === key ? t.terracotta + '12' : 'transparent',
              border: 'none', padding: '6px 14px', cursor: 'pointer', borderRadius: 2,
            }}>{key}</button>
          ))}
        </div>
      )}

      {isMobile && view === 'admin' && (
        <div style={{ display: 'flex', overflowX: 'auto', padding: '8px 16px', gap: 4, borderBottom: `1px solid ${t.borderSoft}`, background: t.bg }}>
          {['overview', 'clients', 'finances', 'seo', 'social', 'ads', 'leads', 'galleries', 'settings'].map(key => (
            <button key={key} onClick={() => setAdminTab(key)} style={{
              fontFamily: sans, fontSize: 10, fontWeight: adminTab === key ? 600 : 400,
              letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              color: adminTab === key ? t.terracotta : t.textMuted,
              background: adminTab === key ? t.terracotta + '12' : 'transparent',
              border: 'none', padding: '6px 10px', cursor: 'pointer', borderRadius: 2,
            }}>{key}</button>
          ))}
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: 100, background: t.bg, zIndex: 99,
          display: 'flex', flexDirection: 'column', padding: `48px ${px}px`, gap: 32,
        }}>
          {view === 'site' && ['Portfolio', 'Process', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{
              fontFamily: serif, fontSize: 32, fontWeight: 300, color: t.text, textDecoration: 'none',
            }}>{item}</a>
          ))}
        </div>
      )}
    </>
  );

  // ══════════════════════════════════════════════════════════════
  //  VIEW: Public Site
  // ══════════════════════════════════════════════════════════════

  const renderPublicSite = () => (
    <>
      {/* Hero */}
      <section style={{
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        minHeight: isMobile ? 'auto' : '90vh', padding: `${isMobile ? 56 : 0}px ${px}px`,
        gap: isMobile ? 48 : 72, alignItems: isMobile ? 'flex-start' : 'center', background: t.heroGrad,
      }}>
        <div style={{ flex: 1, maxWidth: isMobile ? '100%' : '48%', padding: `${isMobile ? 0 : 40}px 0` }}>
          <div style={{ ...microLabel, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: t.terracotta }} />
            INTERIOR CURATION
          </div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? 68 : 104, fontWeight: 300, lineHeight: 0.92, color: t.text, letterSpacing: '-0.03em', marginBottom: 6 }}>
            Curations
          </h1>
          <div style={{ fontFamily: serif, fontSize: isMobile ? 30 : 44, fontWeight: 300, fontStyle: 'italic', color: t.terracotta, marginBottom: 36, letterSpacing: '-0.01em' }}>
            by Deborah
          </div>
          <p style={{ fontFamily: sans, fontSize: isMobile ? 15 : 17, fontWeight: 300, lineHeight: 1.85, color: t.textSecondary, maxWidth: 460, marginBottom: 44 }}>
            Interior design is not decoration &mdash; it is the art of composing a life. Every surface, every texture, every line of light, curated to serve the people who live within.
          </p>
          <a href="#portfolio" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: sans, fontSize: 11,
            fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: t.ctaText, background: t.ctaBg, padding: '17px 34px', textDecoration: 'none',
            transition: 'opacity 0.35s ease', cursor: 'pointer',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Explore the Portfolio <ArrowRight size={14} />
          </a>
        </div>
        <div style={{ flex: 1, minHeight: isMobile ? 420 : 620, maxHeight: isMobile ? 500 : '82vh', width: isMobile ? '100%' : undefined }}>
          <Placeholder label="Portrait — Deborah in studio" h={isMobile ? 420 : 620} />
        </div>
      </section>

      {/* Swatch Strip */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: isMobile ? 14 : 24,
        padding: `${isMobile ? 40 : 56}px ${px}px`,
        borderTop: `1px solid ${t.borderSoft}`, borderBottom: `1px solid ${t.borderSoft}`,
      }}>
        {swatches.map(s => (
          <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: isMobile ? 30 : 40, height: isMobile ? 42 : 56, background: s.hex,
              border: (s.hex === '#F7F3EE' || s.hex === '#2C2420') ? `1px solid ${t.border}` : 'none',
            }} />
            <span style={{ fontFamily: sans, fontSize: 7, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint, whiteSpace: 'nowrap' }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>

      {/* Philosophy */}
      <section style={{ padding: `${sectionGap}px ${px}px` }}>
        <div style={{ position: 'relative', maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            fontFamily: serif, fontSize: isMobile ? 60 : 100, fontWeight: 300, color: t.terracotta,
            opacity: 0.15, position: 'absolute', top: isMobile ? -30 : -48, left: '50%',
            transform: 'translateX(-50%)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          }}>&ldquo;</span>
          <blockquote style={{
            fontFamily: serif, fontSize: isMobile ? 26 : 42, fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.35, color: t.text, margin: '0 auto', marginBottom: isMobile ? 48 : 72, position: 'relative', zIndex: 1,
          }}>
            A room should never simply be furnished. It should be composed &mdash; like a piece of music where every note has purpose and every silence has meaning.
          </blockquote>
        </div>
        <div style={{ width: 48, height: 2, background: t.terracotta, margin: `0 auto ${isMobile ? 48 : 72}px` }} />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 24 : 72, maxWidth: 920, margin: '0 auto' }}>
          <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, lineHeight: 1.95, color: t.textSecondary }}>
            Deborah approaches every project as a singular composition. No templates, no formulas, no off-the-shelf solutions. Each home receives a bespoke design vocabulary &mdash; a language of materials, textures, and proportions that belongs only to the people who inhabit it.
          </p>
          <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, lineHeight: 1.95, color: t.textSecondary }}>
            Her work begins with listening &mdash; deeply understanding how a family lives, moves, and gathers &mdash; then translating those rhythms into spaces that feel both inevitable and extraordinary. The result is a home that doesn&apos;t just look beautiful. It feels like yours.
          </p>
        </div>
      </section>

      {/* Featured Curations — FIXED: side by side, no stagger */}
      <section id="portfolio" style={{ padding: `${sectionGap}px ${px}px`, borderTop: `1px solid ${t.borderSoft}` }}>
        <div style={{ ...microLabel, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-block', width: 32, height: 1, background: t.terracotta }} />
          FEATURED CURATIONS
        </div>
        <h2 style={{ ...sectionHead, marginBottom: isMobile ? 48 : 72 }}>Selected Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 56 : 44 }}>
          {projects.map((project, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
              <Placeholder label={project.placeholder} h={isMobile ? 340 : 460} />
              <div style={{ marginTop: 32 }}>
                <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: t.textFaint, marginBottom: 14 }}>{project.label}</div>
                <h3 style={{ fontFamily: serif, fontSize: isMobile ? 30 : 38, fontWeight: 400, color: t.text, marginBottom: 16, letterSpacing: '-0.01em' }}>{project.name}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, lineHeight: 1.85, color: t.textMuted, marginBottom: 28 }}>{project.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: sans, fontSize: 9, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '7px 16px', border: `1px solid ${t.border}`, color: t.textMuted }}>{tag}</span>
                  ))}
                </div>
                <a href="#" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: sans, fontSize: 11,
                  fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: t.terracotta,
                  textDecoration: 'none', cursor: 'pointer', transition: 'gap 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.gap = '14px'; }}
                  onMouseLeave={e => { e.currentTarget.style.gap = '8px'; }}
                >View the Curation <ArrowRight size={14} /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Art of Detail */}
      <section style={{ padding: `${sectionGap}px ${px}px`, borderTop: `1px solid ${t.borderSoft}` }}>
        <div style={{ maxWidth: 580, marginBottom: isMobile ? 48 : 72 }}>
          <div style={{ ...microLabel, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: t.terracotta }} />THE DIFFERENCE
          </div>
          <h2 style={{ ...sectionHead, marginBottom: 20 }}>Down to the<br />Last Thread</h2>
          <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: t.textMuted }}>
            True interior design lives in the details that most would overlook &mdash; the weight of a curtain, the grain of a trim profile, the way light catches a hand-rubbed finish.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 1, background: t.border, border: `1px solid ${t.border}` }}>
          {details.map((d, i) => (
            <div key={i} style={{ background: t.bg, padding: isMobile ? '32px 28px' : '44px 40px', display: 'flex', flexDirection: 'column', gap: 14, transition: 'background 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = t.surface; }}
              onMouseLeave={e => { e.currentTarget.style.background = t.bg; }}
            >
              <div style={{ fontFamily: serif, fontSize: isMobile ? 28 : 36, fontWeight: 300, color: t.terracotta, opacity: 0.3, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 26, fontWeight: 400, color: t.text }}>{d.title}</h3>
              <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, lineHeight: 1.75, color: t.textMuted }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ padding: `${sectionGap}px ${px}px`, borderTop: `1px solid ${t.borderSoft}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr', gap: isMobile ? 48 : 120 }}>
          <div>
            <div style={{ ...microLabel, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-block', width: 32, height: 1, background: t.terracotta }} />THE METHOD
            </div>
            <h2 style={{ ...sectionHead, marginBottom: 24 }}>The Curation</h2>
            <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: t.textMuted, maxWidth: 420 }}>
              Every project follows a deliberate path from conversation to completion &mdash; a process refined over years of practice and an unwavering commitment to getting it right.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: isMobile ? 20 : 32, padding: `${isMobile ? 24 : 36}px 0`, borderBottom: i < steps.length - 1 ? `1px solid ${t.borderSoft}` : 'none', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: serif, fontSize: isMobile ? 36 : 48, fontWeight: 300, color: t.terracotta, opacity: 0.3, lineHeight: 1, minWidth: isMobile ? 44 : 60 }}>{step.num}</div>
                <div>
                  <h3 style={{ fontFamily: serif, fontSize: isMobile ? 24 : 30, fontWeight: 400, color: t.text, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: t.textMuted }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: `${sectionGap}px ${px}px`, borderTop: `1px solid ${t.borderSoft}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.3fr', gap: isMobile ? 48 : 88, alignItems: 'center' }}>
          <div style={{ order: isMobile ? 2 : 1 }}>
            <Placeholder label="Deborah — selecting fabrics at the atelier" h={isMobile ? 420 : 580} />
          </div>
          <div style={{ order: isMobile ? 1 : 2 }}>
            <div style={{ ...microLabel, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-block', width: 32, height: 1, background: t.terracotta }} />THE DESIGNER
            </div>
            <h2 style={{ ...sectionHead, fontSize: isMobile ? 38 : 56, marginBottom: 32 }}>About Deborah</h2>
            <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, lineHeight: 1.95, color: t.textSecondary, marginBottom: 20 }}>
              Deborah is an interior designer whose eye captures what others miss &mdash; the interplay of texture and light, the conversation between a room and its inhabitants. Her work is not about trends. It is about creating spaces that feel deeply, irreversibly personal.
            </p>
            <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, lineHeight: 1.95, color: t.textSecondary, marginBottom: 36 }}>
              From the thread count of a Belgian linen to the precise radius of a trim profile, nothing escapes her attention. Every project is a complete composition &mdash; fully custom, down to the fabric and every trim detail &mdash; because anything less isn&apos;t design. It&apos;s decoration.
            </p>
            <div style={{ fontFamily: serif, fontSize: isMobile ? 21 : 26, fontWeight: 300, fontStyle: 'italic', color: t.terracotta, lineHeight: 1.45, borderLeft: `2px solid ${t.terracotta}`, paddingLeft: 24 }}>
              &ldquo;Brilliant, sophisticated, and relentlessly detailed &mdash; her eye makes it yours.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — Enhanced with Lead Capture */}
      <section id="contact" style={{ padding: `${sectionGap}px ${px}px`, background: t.terracotta, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: isDark ? 'rgba(22,18,16,0.5)' : 'rgba(255,253,249,0.6)', marginBottom: 24 }}>
            BEGIN YOUR CURATION
          </div>
          <h2 style={{ fontFamily: serif, fontSize: isMobile ? 34 : 52, fontWeight: 300, lineHeight: 1.2, color: isDark ? '#161210' : '#FFFDF9', marginBottom: 20, letterSpacing: '-0.02em' }}>
            Every extraordinary space begins with a conversation.
          </h2>
          <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, color: isDark ? 'rgba(22,18,16,0.6)' : 'rgba(255,253,249,0.7)', marginBottom: 36, lineHeight: 1.7 }}>
            Tell us about your vision. We&apos;ll be in touch within 24 hours.
          </p>

          {/* Lead Capture Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
              {['Your Name', 'Email Address'].map(ph => (
                <input key={ph} type="text" placeholder={ph} readOnly style={{
                  fontFamily: sans, fontSize: 13, fontWeight: 400, padding: '14px 18px',
                  background: isDark ? 'rgba(22,18,16,0.25)' : 'rgba(255,253,249,0.35)',
                  border: `1px solid ${isDark ? 'rgba(22,18,16,0.2)' : 'rgba(255,253,249,0.3)'}`,
                  color: isDark ? '#161210' : '#FFFDF9',
                  outline: 'none', width: '100%',
                }} />
              ))}
            </div>
            <input type="text" placeholder="Phone (optional)" readOnly style={{
              fontFamily: sans, fontSize: 13, fontWeight: 400, padding: '14px 18px',
              background: isDark ? 'rgba(22,18,16,0.25)' : 'rgba(255,253,249,0.35)',
              border: `1px solid ${isDark ? 'rgba(22,18,16,0.2)' : 'rgba(255,253,249,0.3)'}`,
              color: isDark ? '#161210' : '#FFFDF9', outline: 'none', width: '100%',
            }} />
            <textarea placeholder="Tell us about your project..." readOnly rows={3} style={{
              fontFamily: sans, fontSize: 13, fontWeight: 400, padding: '14px 18px',
              background: isDark ? 'rgba(22,18,16,0.25)' : 'rgba(255,253,249,0.35)',
              border: `1px solid ${isDark ? 'rgba(22,18,16,0.2)' : 'rgba(255,253,249,0.3)'}`,
              color: isDark ? '#161210' : '#FFFDF9', outline: 'none', width: '100%', resize: 'vertical',
            }} />
          </div>

          <button style={{
            fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: t.terracotta, background: isDark ? '#161210' : '#FFFDF9',
            padding: '17px 38px', border: 'none', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'opacity 0.35s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Send Inquiry <Send size={14} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: `52px ${px}px`, borderTop: `1px solid ${t.borderSoft}`,
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: 28,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 10 }}>
            <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.text }}>DEBORAH D</span>
            <span style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: t.terracotta, marginLeft: 3 }} />
          </div>
          <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: t.textFaint }}>&copy; 2026 Curations by Deborah. All rights reserved.</div>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: sans, fontSize: 12, color: t.textMuted }}>
            <MapPin size={12} /> Columbus, Ohio
          </div>
          {['Instagram', 'Pinterest'].map(s => (
            <a key={s} href="#" style={{ fontFamily: sans, fontSize: 12, color: t.textMuted, textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = t.terracotta; }}
              onMouseLeave={e => { e.currentTarget.style.color = t.textMuted; }}
            >{s}</a>
          ))}
        </div>
      </footer>
    </>
  );

  // ══════════════════════════════════════════════════════════════
  //  VIEW: Client Portal
  // ══════════════════════════════════════════════════════════════

  const renderClientPortal = () => {
    const greeting = (
      <div style={{ padding: `${isMobile ? 32 : 48}px ${px}px`, borderBottom: `1px solid ${t.borderSoft}` }}>
        <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 400, color: t.textMuted, marginBottom: 6 }}>Welcome back,</div>
        <h1 style={{ fontFamily: serif, fontSize: isMobile ? 32 : 44, fontWeight: 300, color: t.text }}>Sarah &amp; David</h1>
      </div>
    );

    if (portalTab === 'dashboard') return (
      <div>
        {greeting}
        <div style={{ padding: `32px ${px}px`, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Active Projects */}
          <div style={{ ...microLabel, marginBottom: -8 }}>ACTIVE PROJECTS</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
            {projects.map((p, i) => (
              <div key={i} style={card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: t.textFaint, marginBottom: 6 }}>{p.label}</div>
                    <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: t.text }}>{p.name}</div>
                  </div>
                  <span style={badge(t.terracotta)}>{p.phase}</span>
                </div>
                <ProgressBar pct={p.progress} color={t.terracotta} />
                <div style={{ fontFamily: sans, fontSize: 12, color: t.textMuted }}>Phase {p.progress}% complete</div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { icon: <FileText size={16} />, label: 'Documents', value: '24', sub: '3 awaiting review' },
              { icon: <MessageCircle size={16} />, label: 'Messages', value: '12', sub: '2 unread' },
              { icon: <CreditCard size={16} />, label: 'Invoices', value: '4', sub: '1 due' },
              { icon: <Image size={16} />, label: 'Gallery', value: '48', sub: 'photos & renders' },
            ].map((s, i) => (
              <div key={i} style={{ ...card, alignItems: 'flex-start' }}>
                <div style={{ color: t.terracotta }}>{s.icon}</div>
                <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint }}>{s.label}</div>
                <div style={{ fontFamily: serif, fontSize: 32, fontWeight: 300, color: t.text, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: sans, fontSize: 11, color: t.textMuted }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Upcoming Milestones */}
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ ...microLabel, fontSize: 9 }}>UPCOMING MILESTONES</span>
              <Calendar size={14} style={{ color: t.textFaint }} />
            </div>
            {[
              { date: 'May 22', event: 'Marble sample presentation — Olentangy', status: 'Confirmed' },
              { date: 'May 28', event: 'Fabric sourcing review — River Rock', status: 'Scheduled' },
              { date: 'Jun 5', event: 'Custom millwork installation begins — Olentangy', status: 'On track' },
            ].map((m, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderTop: `1px solid ${t.borderSoft}` }}>
                <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, color: t.textMuted, minWidth: 56 }}>{m.date}</div>
                <div style={{ flex: 1, fontFamily: sans, fontSize: 13, color: t.text }}>{m.event}</div>
                <span style={badge(t.olive)}>{m.status}</span>
              </div>
            ))}
          </div>

          {/* Recent Messages Preview */}
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ ...microLabel, fontSize: 9 }}>RECENT MESSAGES</span>
              <button onClick={() => setPortalTab('messages')} style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, color: t.terracotta, background: 'none', border: 'none', cursor: 'pointer' }}>View All →</button>
            </div>
            {portalMessages.slice(0, 2).map((m, i) => (
              <div key={i} style={{ padding: '12px 0', borderTop: `1px solid ${t.borderSoft}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: m.from === 'Deborah' ? t.terracotta : t.text }}>{m.from}</span>
                  <span style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{m.time}</span>
                </div>
                <p style={{ fontFamily: sans, fontSize: 13, color: t.textMuted, lineHeight: 1.6, margin: 0 }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    if (portalTab === 'projects') return (
      <div>
        {greeting}
        <div style={{ padding: `32px ${px}px`, display: 'flex', flexDirection: 'column', gap: 32 }}>
          {projects.map((p, i) => (
            <div key={i} style={{ ...card, padding: isMobile ? 24 : 36 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: t.textFaint, marginBottom: 8 }}>{p.label}</div>
                  <h2 style={{ fontFamily: serif, fontSize: isMobile ? 28 : 36, fontWeight: 300, color: t.text, margin: 0 }}>{p.name}</h2>
                </div>
                <span style={badge(t.terracotta)}>{p.phase}</span>
              </div>

              <ProgressBar pct={p.progress} color={t.terracotta} />

              {/* Phase Timeline */}
              <div style={{ display: 'flex', gap: 0, marginTop: 8 }}>
                {steps.map((step, si) => {
                  const phaseIndex = steps.findIndex(s => s.title === p.phase);
                  const isComplete = si < phaseIndex;
                  const isCurrent = si === phaseIndex;
                  return (
                    <div key={si} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: isComplete ? t.terracotta : isCurrent ? t.terracotta + '30' : t.borderSoft,
                        color: isComplete ? t.ctaText : isCurrent ? t.terracotta : t.textFaint,
                      }}>
                        {isComplete ? <CheckCircle size={12} /> : <Circle size={8} />}
                      </div>
                      <span style={{ fontFamily: sans, fontSize: 9, fontWeight: isCurrent ? 600 : 400, color: isCurrent ? t.terracotta : t.textFaint, textAlign: 'center' }}>
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Material Selections */}
              <div style={{ borderTop: `1px solid ${t.borderSoft}`, paddingTop: 20, marginTop: 8 }}>
                <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint, marginBottom: 12 }}>MATERIAL SELECTIONS</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: sans, fontSize: 10, padding: '6px 14px', border: `1px solid ${t.border}`, color: t.textMuted, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Palette size={10} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    if (portalTab === 'gallery') return (
      <div>
        {greeting}
        <div style={{ padding: `32px ${px}px`, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ ...microLabel, marginBottom: 8 }}>YOUR PRIVATE GALLERY</div>
              <h2 style={{ fontFamily: serif, fontSize: isMobile ? 28 : 36, fontWeight: 300, color: t.text, margin: 0 }}>Curated by Deborah</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: sans, fontSize: 11, color: t.textMuted }}>
              <Lock size={12} /> Private — only you &amp; your guests
            </div>
          </div>

          <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: t.textMuted, maxWidth: 600 }}>
            Your personal before &amp; after gallery, hand-curated by Deborah. Share the link with family and friends to let them experience your transformation.
          </p>

          {/* Share Link */}
          <div style={{ ...card, flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Globe size={16} style={{ color: t.terracotta, flexShrink: 0 }} />
            <div style={{ flex: 1, fontFamily: sans, fontSize: 13, color: t.textMuted, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              deborahd.com/gallery/olentangy-residence-private
            </div>
            <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 16px', background: t.terracotta + '14', color: t.terracotta, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Copy Link
            </button>
          </div>

          {/* Before & After Grid */}
          {['Foyer & Entry', 'Living Room', 'Primary Suite', 'Kitchen'].map((room, i) => (
            <div key={i} style={card}>
              <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 400, color: t.text }}>{room}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: t.textFaint, marginBottom: 8 }}>BEFORE</div>
                  <Placeholder label={`Before — ${room.toLowerCase()}`} h={isMobile ? 160 : 220} />
                </div>
                <div>
                  <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: t.terracotta, marginBottom: 8 }}>AFTER</div>
                  <Placeholder label={`After — curated by Deborah`} h={isMobile ? 160 : 220} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    if (portalTab === 'billing') return (
      <div>
        {greeting}
        <div style={{ padding: `32px ${px}px`, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ ...microLabel, marginBottom: 8 }}>BILLING &amp; PAYMENTS</div>
              <h2 style={{ fontFamily: serif, fontSize: isMobile ? 28 : 36, fontWeight: 300, color: t.text, margin: 0 }}>Financial Overview</h2>
            </div>
            <button style={{
              fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '12px 24px', background: t.ctaBg, color: t.ctaText, border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <CreditCard size={14} /> Make a Payment
            </button>
          </div>

          {/* Summary Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { label: 'Current Balance', icon: <DollarSign size={14} />, status: '1 invoice due' },
              { label: 'Paid to Date', icon: <CheckCircle size={14} />, status: '3 invoices' },
              { label: 'Tax Documents', icon: <FileText size={14} />, status: '2026 available' },
            ].map((c, i) => (
              <div key={i} style={card}>
                <div style={{ color: t.terracotta }}>{c.icon}</div>
                <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint }}>{c.label}</div>
                <div style={{ fontFamily: sans, fontSize: 12, color: t.textMuted }}>{c.status}</div>
              </div>
            ))}
          </div>

          {/* Invoice List */}
          <div style={card}>
            <div style={{ ...microLabel, fontSize: 9 }}>INVOICES</div>
            {portalInvoices.map((inv, i) => (
              <div key={i} style={{ ...tableRow, borderBottom: i < portalInvoices.length - 1 ? `1px solid ${t.borderSoft}` : 'none' }}>
                <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: t.textMuted, minWidth: 56 }}>#{inv.id}</span>
                <span style={{ flex: 1, fontFamily: sans, fontSize: 13, color: t.text }}>{inv.project}</span>
                <span style={{ fontFamily: sans, fontSize: 12, color: t.textFaint, minWidth: 80 }}>{inv.date}</span>
                <span style={badge(inv.status === 'Due' ? t.warning : t.success)}>{inv.status}</span>
                <button style={{ fontFamily: sans, fontSize: 10, color: t.terracotta, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Download size={12} /> PDF
                </button>
              </div>
            ))}
          </div>

          {/* Tax Section */}
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ ...microLabel, fontSize: 9 }}>TAX MANAGEMENT</span>
              <FileText size={14} style={{ color: t.textFaint }} />
            </div>
            <p style={{ fontFamily: sans, fontSize: 13, color: t.textMuted, margin: 0 }}>
              All payment records and tax-deductible design expenses organized for easy filing. Download your annual summary or individual receipts.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['2026 Summary', '2025 Summary', 'All Receipts'].map(doc => (
                <button key={doc} style={{
                  fontFamily: sans, fontSize: 10, fontWeight: 500, padding: '8px 16px',
                  border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <Download size={11} /> {doc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

    if (portalTab === 'messages') return (
      <div>
        {greeting}
        <div style={{ padding: `32px ${px}px`, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ ...microLabel, marginBottom: -8 }}>COMMUNICATION</div>
          <h2 style={{ fontFamily: serif, fontSize: isMobile ? 28 : 36, fontWeight: 300, color: t.text }}>Messages with Deborah</h2>

          <div style={card}>
            {portalMessages.map((m, i) => (
              <div key={i} style={{ padding: '16px 0', borderTop: i > 0 ? `1px solid ${t.borderSoft}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: m.from === 'Deborah' ? t.terracotta : t.text }}>{m.from}</span>
                  <span style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{m.time}</span>
                </div>
                <p style={{ fontFamily: sans, fontSize: 14, color: t.textSecondary, lineHeight: 1.7, margin: 0 }}>{m.text}</p>
              </div>
            ))}

            {/* Reply Box */}
            <div style={{ borderTop: `1px solid ${t.borderSoft}`, paddingTop: 16, marginTop: 8, display: 'flex', gap: 12 }}>
              <input type="text" placeholder="Write a message..." readOnly style={{
                flex: 1, fontFamily: sans, fontSize: 13, padding: '12px 16px',
                background: t.bgAlt, border: `1px solid ${t.border}`, color: t.text, outline: 'none',
              }} />
              <button style={{
                fontFamily: sans, fontSize: 11, fontWeight: 600, padding: '12px 20px',
                background: t.ctaBg, color: t.ctaText, border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <Send size={12} /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    return null;
  };

  // ══════════════════════════════════════════════════════════════
  //  VIEW: Admin Dashboard
  // ══════════════════════════════════════════════════════════════

  const renderAdminDashboard = () => {
    const adminHeader = (
      <div style={{ padding: `${isMobile ? 24 : 36}px ${px}px`, borderBottom: `1px solid ${t.borderSoft}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontFamily: sans, fontSize: 12, color: t.textMuted, marginBottom: 4 }}>Admin Dashboard</div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? 28 : 36, fontWeight: 300, color: t.text, margin: 0 }}>Curations by Deborah</h1>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 18px', background: t.ctaBg, color: t.ctaText, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Plus size={12} /> New Project
          </button>
        </div>
      </div>
    );

    if (adminTab === 'overview') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* KPI Row */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { label: 'Active Clients', value: '8', icon: <Users size={14} />, trend: '+2 this quarter' },
              { label: 'Active Projects', value: '5', icon: <Folder size={14} />, trend: '3 in Crafting phase' },
              { label: 'Open Leads', value: '12', icon: <Target size={14} />, trend: '4 new this week' },
              { label: 'Site Visitors', value: '2.4k', icon: <Eye size={14} />, trend: '+18% vs last month' },
            ].map((kpi, i) => (
              <div key={i} style={card}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint }}>{kpi.label}</span>
                  <span style={{ color: t.terracotta }}>{kpi.icon}</span>
                </div>
                <div style={{ fontFamily: serif, fontSize: 36, fontWeight: 300, color: t.text, lineHeight: 1 }}>{kpi.value}</div>
                <div style={{ fontFamily: sans, fontSize: 11, color: t.olive, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <TrendingUp size={10} /> {kpi.trend}
                </div>
              </div>
            ))}
          </div>

          {/* Two Column */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: 16 }}>
            {/* Recent Leads */}
            <div style={card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ ...microLabel, fontSize: 9 }}>RECENT LEADS</span>
                <button onClick={() => setAdminTab('leads')} style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, color: t.terracotta, background: 'none', border: 'none', cursor: 'pointer' }}>View All →</button>
              </div>
              {adminLeads.slice(0, 3).map((lead, i) => (
                <div key={i} style={{ ...tableRow, borderBottom: i < 2 ? `1px solid ${t.borderSoft}` : 'none' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 500, color: t.text }}>{lead.name}</div>
                    <div style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{lead.interest}</div>
                  </div>
                  <span style={badge(lead.status === 'New' ? t.terracotta : lead.status === 'Contacted' ? t.brass : t.olive)}>{lead.status}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div style={card}>
              <span style={{ ...microLabel, fontSize: 9 }}>QUICK ACTIONS</span>
              {[
                { icon: <Edit3 size={14} />, label: 'Create social post', action: 'social' },
                { icon: <Mail size={14} />, label: 'Send client update', action: 'clients' },
                { icon: <Image size={14} />, label: 'Update homeowner gallery', action: 'galleries' },
                { icon: <Megaphone size={14} />, label: 'Launch ad campaign', action: 'ads' },
                { icon: <FileText size={14} />, label: 'Generate invoice', action: 'finances' },
                { icon: <Search size={14} />, label: 'Review SEO performance', action: 'seo' },
              ].map((a, i) => (
                <button key={i} onClick={() => setAdminTab(a.action)} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
                  borderTop: `1px solid ${t.borderSoft}`, background: 'none', border: 'none',
                  borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: t.borderSoft,
                  fontFamily: sans, fontSize: 13, color: t.text, cursor: 'pointer', width: '100%',
                  transition: 'color 0.2s ease', textAlign: 'left',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = t.terracotta; }}
                  onMouseLeave={e => { e.currentTarget.style.color = t.text; }}
                >
                  <span style={{ color: t.terracotta }}>{a.icon}</span>
                  {a.label}
                  <ChevronRight size={12} style={{ marginLeft: 'auto', color: t.textFaint }} />
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Social Posts */}
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ ...microLabel, fontSize: 9 }}>UPCOMING SOCIAL CONTENT</span>
              <button onClick={() => setAdminTab('social')} style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, color: t.terracotta, background: 'none', border: 'none', cursor: 'pointer' }}>Manage →</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 12 }}>
              {adminSocialPosts.slice(0, 2).map((post, i) => (
                <div key={i} style={{ padding: 16, border: `1px solid ${t.borderSoft}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, color: t.textFaint }}>{post.platform} · {post.type}</span>
                    <span style={badge(post.status === 'Scheduled' ? t.olive : t.brass)}>{post.status}</span>
                  </div>
                  <div style={{ fontFamily: sans, fontSize: 13, color: t.text }}>{post.title}</div>
                  <div style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{post.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

    if (adminTab === 'clients') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, margin: 0 }}>Client Management</h2>
            <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 18px', background: t.ctaBg, color: t.ctaText, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Plus size={12} /> Add Client
            </button>
          </div>
          <div style={card}>
            {[
              { name: 'Sarah & David Chen', project: 'Olentangy Residence + River Rock', status: 'Active', since: 'Jan 2026' },
              { name: 'The Hartwell Family', project: 'New build — in proposal', status: 'Prospect', since: 'May 2026' },
              { name: 'Margaret Ashford', project: 'Primary suite renovation', status: 'Active', since: 'Mar 2026' },
              { name: 'James & Olivia Park', project: 'Full home — complete', status: 'Complete', since: 'Sep 2025' },
            ].map((client, i) => (
              <div key={i} style={{ ...tableRow, borderBottom: i < 3 ? `1px solid ${t.borderSoft}` : 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: t.terracotta + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.terracotta, fontFamily: sans, fontSize: 12, fontWeight: 600 }}>
                  {client.name.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: sans, fontSize: 14, fontWeight: 500, color: t.text }}>{client.name}</div>
                  <div style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{client.project}</div>
                </div>
                <span style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{client.since}</span>
                <span style={badge(client.status === 'Active' ? t.olive : client.status === 'Complete' ? t.brass : t.terracotta)}>{client.status}</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: t.textFaint, padding: 4 }}><ChevronRight size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    if (adminTab === 'finances') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, margin: 0 }}>Financial Management</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { label: 'Outstanding', icon: <Clock size={14} />, sub: '2 invoices pending' },
              { label: 'Collected This Month', icon: <CheckCircle size={14} />, sub: '5 payments received' },
              { label: 'Tax Documents', icon: <FileText size={14} />, sub: 'Q2 2026 ready' },
            ].map((c, i) => (
              <div key={i} style={card}>
                <div style={{ color: t.terracotta }}>{c.icon}</div>
                <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint }}>{c.label}</div>
                <div style={{ fontFamily: sans, fontSize: 12, color: t.textMuted }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['Create Invoice', 'Record Payment', 'Generate Tax Report', 'Export Financial Summary'].map(action => (
              <button key={action} style={{
                fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '10px 18px', border: `1px solid ${t.border}`, background: 'transparent',
                color: t.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <Plus size={11} /> {action}
              </button>
            ))}
          </div>

          {/* Recent Invoices */}
          <div style={card}>
            <span style={{ ...microLabel, fontSize: 9 }}>RECENT INVOICES</span>
            {portalInvoices.map((inv, i) => (
              <div key={i} style={{ ...tableRow, borderBottom: i < portalInvoices.length - 1 ? `1px solid ${t.borderSoft}` : 'none' }}>
                <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: t.textMuted, minWidth: 52 }}>#{inv.id}</span>
                <span style={{ flex: 1, fontFamily: sans, fontSize: 13, color: t.text }}>{inv.project}</span>
                <span style={{ fontFamily: sans, fontSize: 12, color: t.textFaint }}>{inv.phase}</span>
                <span style={badge(inv.status === 'Due' ? t.warning : t.success)}>{inv.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    if (adminTab === 'seo') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, margin: 0 }}>SEO Performance</h2>

          {/* SEO Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { label: 'Search Impressions', value: '14.2k', trend: '+32%' },
              { label: 'Organic Clicks', value: '1.8k', trend: '+24%' },
              { label: 'Avg. Position', value: '8.3', trend: '+4 spots' },
              { label: 'Domain Authority', value: '42', trend: '+3' },
            ].map((m, i) => (
              <div key={i} style={card}>
                <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint }}>{m.label}</div>
                <div style={{ fontFamily: serif, fontSize: 32, fontWeight: 300, color: t.text, lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontFamily: sans, fontSize: 11, color: t.olive, display: 'flex', alignItems: 'center', gap: 4 }}><TrendingUp size={10} /> {m.trend}</div>
              </div>
            ))}
          </div>

          {/* Keyword Rankings */}
          <div style={card}>
            <span style={{ ...microLabel, fontSize: 9 }}>TOP KEYWORD RANKINGS</span>
            {[
              { keyword: 'interior designer columbus ohio', position: '3', page: '/about', vol: 'High' },
              { keyword: 'luxury home curation', position: '7', page: '/', vol: 'Medium' },
              { keyword: 'custom interior design columbus', position: '5', page: '/portfolio', vol: 'Medium' },
              { keyword: 'bespoke home design ohio', position: '12', page: '/', vol: 'Low' },
              { keyword: 'residential interior curation', position: '9', page: '/process', vol: 'Medium' },
            ].map((kw, i) => (
              <div key={i} style={{ ...tableRow, borderBottom: i < 4 ? `1px solid ${t.borderSoft}` : 'none' }}>
                <span style={{ fontFamily: sans, fontSize: 13, color: t.text, flex: 1 }}>{kw.keyword}</span>
                <span style={{ fontFamily: serif, fontSize: 20, fontWeight: 400, color: t.terracotta, minWidth: 40, textAlign: 'center' }}>{kw.position}</span>
                <span style={{ fontFamily: sans, fontSize: 11, color: t.textFaint, minWidth: 80 }}>{kw.page}</span>
                <span style={badge(kw.vol === 'High' ? t.olive : kw.vol === 'Medium' ? t.brass : t.textFaint)}>{kw.vol}</span>
              </div>
            ))}
          </div>

          {/* Content Optimization */}
          <div style={card}>
            <span style={{ ...microLabel, fontSize: 9 }}>CONTENT OPTIMIZATION OPPORTUNITIES</span>
            {[
              'Add structured data (LocalBusiness schema) to homepage',
              'Create blog content: "How to choose an interior designer in Columbus"',
              'Optimize image alt tags on portfolio pages',
              'Build backlinks through Columbus lifestyle publications',
            ].map((opp, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderTop: `1px solid ${t.borderSoft}` }}>
                <CheckCircle size={14} style={{ color: t.textFaint, flexShrink: 0 }} />
                <span style={{ fontFamily: sans, fontSize: 13, color: t.textSecondary }}>{opp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    if (adminTab === 'social') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, margin: 0 }}>Social Media Manager</h2>
            <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 18px', background: t.ctaBg, color: t.ctaText, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Plus size={12} /> Create Post
            </button>
          </div>

          {/* Social Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { label: 'Instagram Followers', value: '12.4k', trend: '+340 this month' },
              { label: 'Engagement Rate', value: '4.8%', trend: 'Above average' },
              { label: 'Pinterest Saves', value: '8.2k', trend: '+28% monthly' },
              { label: 'Profile Visits', value: '3.1k', trend: '+15% weekly' },
            ].map((m, i) => (
              <div key={i} style={card}>
                <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint }}>{m.label}</div>
                <div style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontFamily: sans, fontSize: 11, color: t.olive }}>{m.trend}</div>
              </div>
            ))}
          </div>

          {/* Content Calendar */}
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ ...microLabel, fontSize: 9 }}>CONTENT CALENDAR</span>
              <div style={{ display: 'flex', gap: 8 }}>
                {['All', 'Instagram', 'Pinterest'].map(f => (
                  <button key={f} style={{ fontFamily: sans, fontSize: 9, fontWeight: 500, padding: '4px 10px', border: `1px solid ${t.border}`, background: f === 'All' ? t.terracotta + '14' : 'transparent', color: f === 'All' ? t.terracotta : t.textFaint, cursor: 'pointer', borderRadius: 2 }}>{f}</button>
                ))}
              </div>
            </div>
            {adminSocialPosts.map((post, i) => (
              <div key={i} style={{ ...tableRow, borderBottom: i < adminSocialPosts.length - 1 ? `1px solid ${t.borderSoft}` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 100 }}>
                  {post.platform === 'Instagram' ? <Camera size={14} style={{ color: t.terracotta }} /> : <Layers size={14} style={{ color: t.terracotta }} />}
                  <span style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{post.type}</span>
                </div>
                <span style={{ flex: 1, fontFamily: sans, fontSize: 13, color: t.text }}>{post.title}</span>
                <span style={{ fontFamily: sans, fontSize: 11, color: t.textFaint, minWidth: 60 }}>{post.date}</span>
                <span style={badge(post.status === 'Scheduled' ? t.olive : post.status === 'Draft' ? t.brass : t.textFaint)}>{post.status}</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: t.textFaint, padding: 4 }}><Edit3 size={12} /></button>
              </div>
            ))}
          </div>

          {/* Content Strategy */}
          <div style={card}>
            <span style={{ ...microLabel, fontSize: 9 }}>INFLUENCER CONTENT STRATEGY</span>
            <p style={{ fontFamily: sans, fontSize: 13, color: t.textMuted, lineHeight: 1.7, margin: 0 }}>
              Position Deborah as the go-to voice for luxury interior design in Central Ohio. Content pillars: behind-the-scenes process, material sourcing stories, before &amp; after reveals, design education, and lifestyle moments.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 12, marginTop: 4 }}>
              {[
                { pillar: 'Process Reels', freq: '2x/week', desc: 'Behind the scenes of active projects' },
                { pillar: 'Before & After', freq: '1x/week', desc: 'Dramatic transformation reveals' },
                { pillar: 'Design Education', freq: '1x/week', desc: 'Tips, material deep-dives, Q&A' },
              ].map((p, i) => (
                <div key={i} style={{ padding: 16, border: `1px solid ${t.borderSoft}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: t.text }}>{p.pillar}</div>
                  <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, color: t.terracotta }}>{p.freq}</div>
                  <div style={{ fontFamily: sans, fontSize: 12, color: t.textMuted }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

    if (adminTab === 'ads') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, margin: 0 }}>Ad Campaign Manager</h2>
            <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 18px', background: t.ctaBg, color: t.ctaText, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Plus size={12} /> New Campaign
            </button>
          </div>

          {/* Ad Spend Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { label: 'Monthly Budget', value: 'Set Budget', icon: <DollarSign size={14} /> },
              { label: 'Impressions', value: '48.2k', icon: <Eye size={14} /> },
              { label: 'Link Clicks', value: '1.2k', icon: <ExternalLink size={14} /> },
              { label: 'Leads Generated', value: '34', icon: <Target size={14} /> },
            ].map((m, i) => (
              <div key={i} style={card}>
                <div style={{ color: t.terracotta }}>{m.icon}</div>
                <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.textFaint }}>{m.label}</div>
                <div style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, lineHeight: 1 }}>{m.value}</div>
              </div>
            ))}
          </div>

          {/* Active Campaigns */}
          <div style={card}>
            <span style={{ ...microLabel, fontSize: 9 }}>CAMPAIGNS</span>
            {adminCampaigns.map((camp, i) => (
              <div key={i} style={{ padding: '20px 0', borderTop: `1px solid ${t.borderSoft}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 500, color: t.text, marginBottom: 4 }}>{camp.name}</div>
                    <div style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{camp.platform} · {camp.objective}</div>
                  </div>
                  <span style={badge(camp.status === 'Active' ? t.olive : t.warning)}>{camp.status}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Users size={12} style={{ color: t.textFaint }} />
                  <span style={{ fontFamily: sans, fontSize: 12, color: t.textMuted }}>{camp.audience}</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, padding: '6px 14px', border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <BarChart3 size={10} /> Analytics
                  </button>
                  <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, padding: '6px 14px', border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Edit3 size={10} /> Edit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Retargeting */}
          <div style={card}>
            <span style={{ ...microLabel, fontSize: 9 }}>RETARGETING AUDIENCES</span>
            <p style={{ fontFamily: sans, fontSize: 13, color: t.textMuted, lineHeight: 1.7, margin: 0 }}>
              Automatically retarget visitors who viewed portfolio pages, started the contact form, or spent 60+ seconds on the site.
            </p>
            {[
              { name: 'Portfolio Viewers (30 days)', size: '2,840 people', status: 'Active' },
              { name: 'Contact Form Abandoners', size: '186 people', status: 'Active' },
              { name: 'High-Intent Visitors (60s+)', size: '1,420 people', status: 'Active' },
              { name: 'Past Client Lookalikes', size: '45,000 people', status: 'Building' },
            ].map((aud, i) => (
              <div key={i} style={{ ...tableRow, borderBottom: i < 3 ? `1px solid ${t.borderSoft}` : 'none' }}>
                <span style={{ flex: 1, fontFamily: sans, fontSize: 13, color: t.text }}>{aud.name}</span>
                <span style={{ fontFamily: sans, fontSize: 12, color: t.textFaint }}>{aud.size}</span>
                <span style={badge(aud.status === 'Active' ? t.olive : t.brass)}>{aud.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    if (adminTab === 'leads') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, margin: 0 }}>Lead Pipeline</h2>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, padding: '6px 14px', border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Filter size={10} /> Filter
              </button>
              <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, padding: '6px 14px', border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Download size={10} /> Export
              </button>
            </div>
          </div>

          {/* Pipeline Stages */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { stage: 'New Inquiries', count: 4, color: t.terracotta },
              { stage: 'Contacted', count: 3, color: t.brass },
              { stage: 'Consultation', count: 2, color: t.olive },
              { stage: 'Proposal Sent', count: 3, color: t.blush },
            ].map((s, i) => (
              <div key={i} style={card}>
                <div style={{ width: '100%', height: 3, background: s.color, borderRadius: 2 }} />
                <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: t.textFaint }}>{s.stage}</div>
                <div style={{ fontFamily: serif, fontSize: 32, fontWeight: 300, color: t.text, lineHeight: 1 }}>{s.count}</div>
              </div>
            ))}
          </div>

          {/* Lead List */}
          <div style={card}>
            <span style={{ ...microLabel, fontSize: 9 }}>ALL LEADS</span>
            {adminLeads.map((lead, i) => (
              <div key={i} style={{ ...tableRow, borderBottom: i < adminLeads.length - 1 ? `1px solid ${t.borderSoft}` : 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: t.terracotta + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.terracotta, fontFamily: sans, fontSize: 11, fontWeight: 600, flexShrink: 0 }}>
                  {lead.name.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 500, color: t.text }}>{lead.name}</div>
                  <div style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{lead.interest}</div>
                </div>
                <span style={{ fontFamily: sans, fontSize: 11, color: t.textFaint, display: 'flex', alignItems: 'center', gap: 4 }}><Hash size={10} />{lead.source}</span>
                <span style={{ fontFamily: sans, fontSize: 11, color: t.textFaint }}>{lead.date}</span>
                <span style={badge(lead.status === 'New' ? t.terracotta : lead.status === 'Contacted' ? t.brass : lead.status === 'Consultation' ? t.olive : t.blush)}>{lead.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    if (adminTab === 'galleries') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, margin: 0 }}>Homeowner Galleries</h2>
              <p style={{ fontFamily: sans, fontSize: 13, color: t.textMuted, marginTop: 8, margin: '8px 0 0' }}>
                Private before &amp; after galleries — the homeowner&apos;s gift, curated by Deborah.
              </p>
            </div>
            <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 18px', background: t.ctaBg, color: t.ctaText, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Plus size={12} /> New Gallery
            </button>
          </div>

          {/* Gallery Cards */}
          {[
            { name: 'The Olentangy Residence', client: 'Sarah & David Chen', rooms: 8, photos: 48, status: 'Live', url: '/gallery/olentangy-residence-private', guests: 12, lastUpdated: 'May 18, 2026' },
            { name: 'River Rock', client: 'Sarah & David Chen', rooms: 5, photos: 24, status: 'In Progress', url: '/gallery/river-rock-private', guests: 4, lastUpdated: 'May 15, 2026' },
            { name: 'Park Residence', client: 'James & Olivia Park', rooms: 12, photos: 96, status: 'Complete', url: '/gallery/park-residence-private', guests: 28, lastUpdated: 'Dec 2025' },
          ].map((g, i) => (
            <div key={i} style={{ ...card, padding: isMobile ? 24 : 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: t.text, marginBottom: 4 }}>{g.name}</div>
                  <div style={{ fontFamily: sans, fontSize: 12, color: t.textFaint }}>{g.client}</div>
                </div>
                <span style={badge(g.status === 'Live' ? t.olive : g.status === 'In Progress' ? t.brass : t.textMuted)}>{g.status}</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {[
                  { label: 'Rooms', value: g.rooms },
                  { label: 'Photos', value: g.photos },
                  { label: 'Guest Views', value: g.guests },
                  { label: 'Updated', value: g.lastUpdated },
                ].map((stat, si) => (
                  <div key={si}>
                    <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: t.textFaint, marginBottom: 4 }}>{stat.label}</div>
                    <div style={{ fontFamily: sans, fontSize: 14, fontWeight: 500, color: t.text }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 0', borderTop: `1px solid ${t.borderSoft}` }}>
                <Lock size={12} style={{ color: t.textFaint }} />
                <span style={{ fontFamily: sans, fontSize: 12, color: t.textMuted, flex: 1 }}>deborahd.com{g.url}</span>
                <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, padding: '6px 14px', border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Edit3 size={10} /> Edit Gallery
                </button>
                <button style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, padding: '6px 14px', border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Eye size={10} /> Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    if (adminTab === 'settings') return (
      <div>
        {adminHeader}
        <div style={{ padding: `24px ${px}px`, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, margin: 0 }}>Site Settings</h2>

          {/* Settings Sections */}
          {[
            {
              title: 'Brand & Appearance', icon: <Palette size={16} />,
              items: ['Site title & tagline', 'Logo & brand mark', 'Color palette & theme', 'Typography settings', 'Favicon & social preview image'],
            },
            {
              title: 'Pages & Content', icon: <Layers size={16} />,
              items: ['Homepage sections', 'Portfolio page', 'About page', 'Process page', 'Blog / Journal'],
            },
            {
              title: 'CTA & Lead Capture', icon: <Target size={16} />,
              items: ['Contact form fields', 'Auto-responder email', 'Lead notification recipients', 'CTA button text & placement', 'Consultation booking link'],
            },
            {
              title: 'User Management', icon: <Users size={16} />,
              items: ['Admin users & roles', 'Client portal access', 'Guest gallery permissions', 'Team member profiles'],
            },
            {
              title: 'Integrations', icon: <Activity size={16} />,
              items: ['Email provider (newsletters)', 'Payment processor', 'Accounting sync', 'Social media accounts', 'Google Analytics & Search Console'],
            },
            {
              title: 'SEO & Analytics', icon: <Search size={16} />,
              items: ['Meta titles & descriptions', 'Open Graph settings', 'Sitemap configuration', 'Google Search Console', 'Analytics tracking codes'],
            },
          ].map((section, i) => (
            <div key={i} style={card}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ color: t.terracotta }}>{section.icon}</span>
                <span style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, color: t.text }}>{section.title}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {section.items.map((item, j) => (
                  <button key={j} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 0', borderTop: `1px solid ${t.borderSoft}`,
                    background: 'none', border: 'none', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: t.borderSoft,
                    fontFamily: sans, fontSize: 13, color: t.textSecondary, cursor: 'pointer', width: '100%', textAlign: 'left',
                    transition: 'color 0.2s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = t.terracotta; }}
                    onMouseLeave={e => { e.currentTarget.style.color = t.textSecondary; }}
                  >
                    {item}
                    <ChevronRight size={12} style={{ color: t.textFaint }} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div>
        {adminHeader}
        <div style={{ padding: `48px ${px}px`, textAlign: 'center' }}>
          <div style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: t.text, marginBottom: 12 }}>{adminTab.charAt(0).toUpperCase() + adminTab.slice(1)}</div>
          <p style={{ fontFamily: sans, fontSize: 14, color: t.textMuted }}>This section is coming soon.</p>
        </div>
      </div>
    );
  };

  // ══════════════════════════════════════════════════════════════
  //  MAIN RENDER
  // ══════════════════════════════════════════════════════════════

  return (
    <div style={{
      minHeight: '100vh', background: t.bg, color: t.text, fontFamily: sans,
      fontSize: 16, lineHeight: 1.6, transition: 'background 0.4s ease, color 0.4s ease', overflowX: 'hidden',
    }}>
      {renderFrame()}
      {view === 'site' && renderPublicSite()}
      {view === 'portal' && renderClientPortal()}
      {view === 'admin' && renderAdminDashboard()}
    </div>
  );
}
