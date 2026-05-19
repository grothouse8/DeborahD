"use client";

import React, { useState, useEffect } from 'react';
import {
  Sun, Moon, Calendar, MessageCircle, ChevronRight, ChevronLeft, ArrowRight,
  Plus, Box, Sparkles, Users, TrendingUp, Circle, Image as ImageIcon,
  Search, Bell, Settings, CreditCard, Camera, Layers, PenTool, Music, Heart,
  Play, ExternalLink, Download, Filter, Home as HomeIcon, Eye, Target, FileText,
  Book, Send, Receipt, Tag, Gift, Globe, Pause, Edit3,
  Activity, Database, Megaphone, ArrowUp, DollarSign, Hammer, Menu, X
} from 'lucide-react';

const Instagram = ({ size = 24, color = "currentColor", ...props }: { size?: number; color?: string; [key: string]: unknown }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, color = "currentColor", ...props }: { size?: number; color?: string; [key: string]: unknown }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 24, color = "currentColor", ...props }: { size?: number; color?: string; [key: string]: unknown }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function VaughanCoMockup() {
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('public');
  const [adminTab, setAdminTab] = useState('dashboard');
  const [symphonyTab, setSymphonyTab] = useState('overview');
  const [navOpen, setNavOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 820);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Close drawer when switching tabs on mobile
  useEffect(() => { setDrawerOpen(false); }, [adminTab, symphonyTab, view]);

  const isDark = theme === 'dark';

  // —— Brand tokens (Maxine Studio palette) ——
  const brass      = isDark ? '#D4BC8E' : '#B59A6A';
  const brassDeep  = '#9A7D52';
  const brassWash  = isDark ? '#1F1B14' : '#F3EDE2';
  const sage       = isDark ? '#8B9A7E' : '#5C6150';
  const sageWash   = isDark ? '#1A1E16' : '#EDEFEB';
  const bg         = isDark ? '#121212' : '#F5F1EC';
  const surface    = isDark ? '#1A1612' : '#FDFBF8';
  const surfaceAlt = isDark ? '#231E18' : '#E7E1D8';
  const text       = isDark ? '#F1EDE6' : '#121212';
  const textMuted  = isDark ? '#A09890' : '#6B6560';
  const textFaint  = isDark ? '#5E5850' : '#A8A098';
  const border     = isDark ? '#2E281F' : '#DDD6C8';
  const borderSoft = isDark ? '#241F18' : '#EBE5DA';
  const accent     = '#BE8274';

  const serif = '"Prata", Georgia, "Times New Roman", serif';
  const sans  = '"Space Grotesk", ui-sans-serif, system-ui, sans-serif';
  const mono  = { fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", monospace' };

  // —— Responsive helpers ——
  const pad = isMobile ? '20px' : '56px';
  const padY = isMobile ? '40px' : '64px';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cols = (mobile: string, desktop: string): any => isMobile ? mobile : desktop;

  const card = { background: surface, border: `1px solid ${border}`, borderRadius: '2px', padding: isMobile ? '16px' : '18px' };
  const microLabel = { fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: textMuted, fontWeight: 500 };
  const sectionLabel = { fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: brass, fontWeight: 500 };

  const primaryBtn = { background: text, color: bg, border: 'none', padding: isMobile ? '12px 18px' : '13px 24px', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '1px' };
  const ghostBtn = { background: 'transparent', color: text, border: `1px solid ${border}`, padding: isMobile ? '11px 18px' : '12px 24px', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '1px' };
  const brassBtn = { ...primaryBtn, background: brass, color: '#121212' };

  const VCMonogram = ({ size = 28 }: { size?: number }) => {
    const scale = size / 28;
    return (
      <svg width={size} height={size * 1.25} viewBox="0 0 28 35" fill="none" style={{ display: 'block' }}>
        <path d="M14 2 C6.268 2 2 8.268 2 14 L2 35" stroke={brass} strokeWidth={1.2 / scale} fill="none" />
        <path d="M14 2 C21.732 2 26 8.268 26 14 L26 35" stroke={brass} strokeWidth={1.2 / scale} fill="none" />
        <path d="M14 2 L14 6" stroke={brass} strokeWidth={1.2 / scale} />
        <text x="8.5" y="24" fontFamily={serif} fontSize="13" fill={text} fontWeight="400" letterSpacing="0.02em">V</text>
        <text x="14.5" y="24" fontFamily={serif} fontSize="9" fill={brass} fontWeight="400" letterSpacing="0.02em">c</text>
      </svg>
    );
  };

  const Logo = ({ size = 18, showByline = false, showMonogram = false }: { size?: number; showByline?: boolean; showMonogram?: boolean }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: `${size * 0.55}px` }}>
      {showMonogram && <VCMonogram size={size * 1.5} />}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '7px', fontFamily: serif, fontSize: `${size}px`, letterSpacing: '0.1em', color: text }}>
          <span>VAUGHAN</span><span style={{ color: brass, fontSize: `${size * 0.95}px` }}>+</span><span>CO.</span>
        </div>
        {showByline && <div style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: textMuted, marginTop: '4px', fontWeight: 500 }}>A Design Studio</div>}
      </div>
    </div>
  );

  const LizSig = ({ size = 22 }) => (
    <div style={{ fontFamily: 'Brush Script MT, "Lucida Handwriting", cursive', fontSize: `${size}px`, color: brass, fontStyle: 'italic', letterSpacing: '0.02em' }}>Liz</div>
  );

  // —— Top frame (responsive) ——
  const Frame = () => (
    <div style={{ padding: isMobile ? '10px 14px' : '11px 20px', borderBottom: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: surface, position: 'sticky', top: 0, zIndex: 50, gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '20px', overflow: 'auto', flex: 1 }}>
        {!isMobile && <div style={{ ...microLabel, color: textFaint }}>Preview</div>}
        <div style={{ display: 'flex', gap: '2px' }}>
          {[
            { id: 'public', label: isMobile ? 'Site' : 'Public site' },
            { id: 'symphony', label: isMobile ? 'Symphony' : 'Symphony portal' },
            { id: 'admin', label: isMobile ? 'Admin' : 'Studio admin' },
          ].map(v => (
            <button key={v.id} onClick={() => setView(v.id)} style={{ background: view === v.id ? brassWash : 'transparent', color: view === v.id ? (isDark ? brass : brassDeep) : textMuted, border: 'none', padding: isMobile ? '7px 10px' : '7px 13px', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, borderRadius: '1px', whiteSpace: 'nowrap' }}>{v.label}</button>
          ))}
        </div>
      </div>
      <button onClick={() => setTheme(isDark ? 'light' : 'dark')} style={{ background: 'transparent', color: textMuted, border: `1px solid ${border}`, padding: isMobile ? '7px 8px' : '6px 11px', fontSize: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', borderRadius: '1px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        {isDark ? <Sun size={12} /> : <Moon size={12} />}{!isMobile && (isDark ? 'Light' : 'Dark')}
      </button>
    </div>
  );

  // ═══════════════════════════════════════════════════════════
  //   PUBLIC SITE
  // ═══════════════════════════════════════════════════════════
  const PublicSite = () => (
    <div style={{ position: 'relative' }}>
      {/* Nav */}
      <nav style={{ padding: isMobile ? '18px 20px' : '22px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo size={isMobile ? 15 : 18} showByline={!isMobile} showMonogram={!isMobile} />
        {isMobile ? (
          <button onClick={() => setNavOpen(!navOpen)} style={{ background: 'transparent', border: `1px solid ${border}`, padding: '8px', cursor: 'pointer', borderRadius: '1px' }}>
            {navOpen ? <X size={14} color={text} /> : <Menu size={14} color={text} />}
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '34px', alignItems: 'center' }}>
            {['Portfolio', 'The Method', 'Symphony', 'Studio', 'Journal'].map(item => (
              <a key={item} style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: textMuted, cursor: 'pointer', fontWeight: 500 }}>{item}</a>
            ))}
            <button style={{ ...primaryBtn, padding: '11px 18px' }}>With Liz <ArrowRight size={12} /></button>
          </div>
        )}
      </nav>

      {/* Mobile nav drawer */}
      {isMobile && navOpen && (
        <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: '4px', borderBottom: `1px solid ${border}` }}>
          {['Portfolio', 'The Method', 'Symphony', 'Studio', 'Journal'].map(item => (
            <a key={item} style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: textMuted, fontWeight: 500, padding: '12px 0', borderTop: `1px solid ${borderSoft}` }}>{item}</a>
          ))}
          <button style={{ ...primaryBtn, marginTop: '12px', width: '100%', justifyContent: 'center' }}>With Liz <ArrowRight size={12} /></button>
        </div>
      )}

      {/* Hero */}
      <section style={{ padding: isMobile ? `40px ${pad} 56px` : '64px 56px 96px', display: 'grid', gridTemplateColumns: cols('1fr', '1.15fr 1fr'), gap: cols('40px', '56px'), alignItems: 'center' }}>
        <div>
          <div style={{ ...sectionLabel, marginBottom: isMobile ? '20px' : '28px' }}>Liz Vaughan · CEO + Principal Designer</div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? '40px' : '64px', lineHeight: '1.02', fontWeight: 400, margin: '0 0 24px', letterSpacing: '-0.015em' }}>
            Designed by <em style={{ color: brass, fontStyle: 'italic' }}>Liz.</em><br />Built for your family.
          </h1>
          <p style={{ fontSize: isMobile ? '14px' : '15px', lineHeight: '1.85', color: textMuted, maxWidth: '480px', margin: '0 0 28px' }}>
            Liz Vaughan has designed and built more than 180 custom homes across Central Ohio. Each one begins the same way — a conversation, a blueprint, a walk through your house in three dimensions before a single stud goes up.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <button style={primaryBtn}>Begin with Liz <ArrowRight size={12} /></button>
            <button style={ghostBtn}>The portfolio</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: isMobile ? '12px' : '24px', paddingTop: '28px', borderTop: `1px solid ${borderSoft}` }}>
            {[['23', 'Years'], ['180+', 'Homes'], ['$2.4M', 'Avg.'], ['4.9', 'Score']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: serif, fontSize: isMobile ? '18px' : '24px', fontWeight: 400, marginBottom: '4px' }}>{n}</div>
                <div style={{ ...microLabel, fontSize: '9px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', background: isDark ? '#2B211A' : '#DDD6C8', borderRadius: '2px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isDark ? '#3A3228' : '#A8A098' }}>
              <span style={{ fontFamily: serif, fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Liz, in studio</span>
            </div>
            <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: '4px' }}>Portrait by</div>
                <div style={{ fontFamily: serif, fontSize: '13px', color: 'white', fontStyle: 'italic' }}>Andrew Hood</div>
              </div>
              <LizSig size={32} />
            </div>
          </div>
          {!isMobile && (
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: surface, border: `1px solid ${border}`, padding: '14px 18px', borderRadius: '2px', maxWidth: '220px' }}>
              <div style={{ ...microLabel, marginBottom: '8px' }}>As featured in</div>
              <div style={{ display: 'flex', gap: '10px', fontFamily: serif, fontSize: '11px', color: text, fontStyle: 'italic', flexWrap: 'wrap' }}>
                <span>Columbus Monthly</span><span style={{ color: textFaint }}>·</span><span>614</span><span style={{ color: textFaint }}>·</span><span>Dwell</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Reel */}
      <section style={{ padding: `${padY} ${pad}`, background: surfaceAlt }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ ...sectionLabel, marginBottom: '10px' }}>From the studio</div>
            <h2 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '28px', fontWeight: 400, margin: 0, letterSpacing: '-0.005em' }}>
              Recent work, <em style={{ color: brass, fontStyle: 'italic' }}>@vaughanand.co</em>
            </h2>
          </div>
          <a style={{ ...microLabel, color: text, display: 'inline-flex', alignItems: 'center', gap: '7px', cursor: 'pointer' }}>
            <Instagram size={12} /> Follow Liz
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(4, 1fr)'), gap: '10px' }}>
          {[
            { title: 'Powell new build', tag: 'Build', hue: '#C9BFA8' },
            { title: 'Riverlea kitchen', tag: 'Interior', hue: '#BE8274' },
            { title: 'Olentangy estate', tag: 'Build', hue: '#B8A89C' },
            { title: 'Bexley reno', tag: 'Interior', hue: '#B59A6A' },
          ].map(({ title, tag, hue }) => (
            <div key={title} style={{ aspectRatio: '4/5', background: hue, borderRadius: '2px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)' }} />
              <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(255,255,255,0.95)', color: '#121212', padding: '3px 8px', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, borderRadius: '1px' }}>{tag}</div>
              <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: 'white', fontFamily: serif, fontSize: '13px', fontStyle: 'italic' }}>{title}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <button style={{ ...ghostBtn, background: surface }}>View the full portfolio <ArrowRight size={12} /></button>
        </div>
      </section>

      {/* The Liz Method */}
      <section style={{ padding: `${isMobile ? '56px' : '88px'} ${pad}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1fr 2fr'), gap: cols('32px', '64px'), alignItems: 'flex-start' }}>
          <div>
            <div style={{ ...sectionLabel, marginBottom: '14px' }}>How Liz works</div>
            <h2 style={{ fontFamily: serif, fontSize: isMobile ? '28px' : '38px', fontWeight: 400, margin: '0 0 16px', lineHeight: '1.1' }}>The <em style={{ color: brass, fontStyle: 'italic' }}>Liz</em> Method.</h2>
            <p style={{ fontSize: '13px', lineHeight: '1.85', color: textMuted, marginBottom: '20px' }}>
              Every home Liz builds moves through five careful steps. Five movements, one composition — yours.
            </p>
            <a style={{ ...microLabel, color: brass, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>Read the full method <ArrowRight size={11} /></a>
          </div>
          <div>
            {[
              { n: 'I', title: 'The Listening', sub: 'Liz spends time in your current home. She wants to know how you move through a morning, what your kids reach for, where light matters.' },
              { n: 'II', title: 'The Drafting', sub: 'Architectural plans, structured for build. Liz draws by hand first, then her team translates to spec.' },
              { n: 'III', title: 'The Walk', sub: 'Liz models your interior in Lume. You walk through your home in 3D — every room, every finish — before a single wall goes up.' },
              { n: 'IV', title: 'The Build', sub: 'Liz coordinates the trades. You follow along inside Symphony — your private space with Liz.' },
              { n: 'V', title: 'The Gift', sub: 'On move-in day, Liz hands you a curated workbook documenting your home, from blueprint to keys.' },
            ].map(({ n, title, sub }, i) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: cols('40px 1fr', '60px 1fr'), gap: '16px', padding: '20px 0', borderTop: i === 0 ? `1px solid ${border}` : 'none', borderBottom: `1px solid ${border}` }}>
                <div style={{ fontFamily: serif, fontSize: '20px', color: brass, fontStyle: 'italic' }}>{n}</div>
                <div>
                  <div style={{ fontFamily: serif, fontSize: isMobile ? '17px' : '19px', marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '13px', lineHeight: '1.7', color: textMuted }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lume */}
      <section style={{ padding: `0 ${pad} ${isMobile ? '56px' : '88px'}` }}>
        <div style={{ background: '#2B211A', color: '#F1EDE6', padding: isMobile ? '32px 24px' : '48px', borderRadius: '2px', display: 'grid', gridTemplateColumns: cols('1fr', '1fr 1.2fr'), gap: cols('28px', '48px'), alignItems: 'center' }}>
          <div>
            <div style={{ ...sectionLabel, color: brass, marginBottom: '14px' }}>Powered by Lume</div>
            <h2 style={{ fontFamily: serif, fontSize: isMobile ? '24px' : '34px', fontWeight: 400, margin: '0 0 16px', lineHeight: '1.1' }}>
              Walk every room <em style={{ color: brass, fontStyle: 'italic' }}>before</em> it's framed.
            </h2>
            <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#B5AA9A', marginBottom: '24px' }}>
              Once Liz structures your blueprints, she builds your interior in Lume. Photoreal 3D, live in your Symphony space.
            </p>
            <button style={brassBtn}>See a Liz walkthrough <ArrowRight size={12} /></button>
          </div>
          <div style={{ aspectRatio: '5/4', background: '#1A1612', borderRadius: '2px', position: 'relative', overflow: 'hidden', border: '1px solid #3A3228' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box size={36} color={brass} strokeWidth={0.8} />
            </div>
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B5AA9A' }}>Riverlea · Primary</div>
              <div style={{ fontSize: '9px', color: sage, display: 'flex', gap: '4px', alignItems: 'center', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <Circle size={5} fill={sage} /> Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section style={{ padding: `0 ${pad} ${isMobile ? '56px' : '88px'}` }}>
        <div style={{ ...card, padding: isMobile ? '28px 24px' : '40px', display: 'grid', gridTemplateColumns: cols('1fr', '1fr 1fr'), gap: cols('24px', '48px'), alignItems: 'center', background: surfaceAlt, border: 'none' }}>
          <div>
            <div style={{ ...sectionLabel, marginBottom: '12px' }}>The inspiration book</div>
            <h2 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '30px', fontWeight: 400, margin: '0 0 14px', lineHeight: '1.15' }}>
              Get Liz's <em style={{ color: brass, fontStyle: 'italic' }}>2026</em> inspiration book.
            </h2>
            <p style={{ fontSize: '13px', lineHeight: '1.8', color: textMuted, marginBottom: '20px' }}>
              48 pages. Six homes, hand-selected. Liz's commentary on each. Where she found the stone. Why this faucet. How that ceiling.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexDirection: cols('column', 'row') }}>
              <input placeholder="Email address" style={{ flex: 1, background: surface, border: `1px solid ${border}`, padding: '12px 14px', fontSize: '13px', color: text, outline: 'none', borderRadius: '1px', fontFamily: sans, minWidth: 0 }} />
              <button style={brassBtn}>Send it <Send size={11} /></button>
            </div>
            <div style={{ ...microLabel, marginTop: '12px', color: textFaint }}>Liz only sends a few notes a year. No noise.</div>
          </div>
          {!isMobile && (
            <div style={{ aspectRatio: '4/5', background: isDark ? '#2B211A' : '#DDD6C8', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontFamily: serif, color: isDark ? '#3A3228' : '#8A7E70', textAlign: 'center' }}>
                <Book size={28} strokeWidth={0.8} style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Cover preview</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Symphony + Booking */}
      <section style={{ padding: `0 ${pad} ${isMobile ? '56px' : '88px'}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1fr 1fr'), gap: '16px' }}>
          <div style={{ ...card, padding: isMobile ? '28px 24px' : '40px', background: sageWash, border: 'none' }}>
            <Music size={20} color={sage} strokeWidth={1.2} style={{ marginBottom: '18px' }} />
            <div style={{ ...sectionLabel, marginBottom: '10px' }}>Symphony — by Liz</div>
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '26px', fontWeight: 400, margin: '0 0 12px', lineHeight: '1.15' }}>
              Your own space.<br /><em style={{ color: brass, fontStyle: 'italic' }}>With Liz.</em>
            </h3>
            <p style={{ fontSize: '13px', lineHeight: '1.8', color: textMuted, marginBottom: '18px' }}>
              Every client gets a private studio with Liz — blueprints, 3D walks, selections, invoices, and her direct line.
            </p>
            <a style={{ ...microLabel, color: brass, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Tour a Symphony space <ArrowRight size={11} /></a>
          </div>
          <div style={{ ...card, padding: isMobile ? '24px' : '32px' }}>
            <div style={{ ...sectionLabel, marginBottom: '10px' }}>Begin a conversation</div>
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? '20px' : '22px', fontWeight: 400, margin: '0 0 16px', lineHeight: '1.2' }}>
              30 minutes with <em style={{ color: brass, fontStyle: 'italic' }}>Liz.</em>
            </h3>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '10px', overflow: 'auto' }}>
              {['Mon 19', 'Tue 20', 'Wed 21', 'Thu 22', 'Fri 23'].map((d, i) => (
                <button key={d} style={{ flex: '1 0 auto', padding: '10px 8px', background: i === 2 ? brass : 'transparent', border: i === 2 ? 'none' : `1px solid ${border}`, color: i === 2 ? '#121212' : text, cursor: 'pointer', fontSize: '11px', borderRadius: '1px', fontFamily: serif, fontStyle: i === 2 ? 'normal' : 'italic', whiteSpace: 'nowrap' }}>{d}</button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', marginBottom: '14px' }}>
              {['9:00', '10:30', '1:00', '2:30'].map(t => (
                <button key={t} style={{ padding: '10px 4px', background: 'transparent', border: `1px solid ${border}`, color: text, cursor: 'pointer', fontSize: '11px', borderRadius: '1px', fontFamily: serif }}>{t}</button>
              ))}
            </div>
            <button style={{ ...primaryBtn, width: '100%', justifyContent: 'center', padding: '13px' }}>Book with Liz <ArrowRight size={12} /></button>
            <div style={{ ...microLabel, marginTop: '12px', color: textFaint, textAlign: 'center' }}>614.323.0568 · liz@vaughanand.co</div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding: `0 ${pad} ${isMobile ? '64px' : '96px'}`, textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ fontFamily: serif, fontSize: isMobile ? '20px' : '32px', fontStyle: 'italic', lineHeight: '1.4', color: text, marginBottom: '20px' }}>
            "Liz didn't build us a house. She built our family a home, and then handed us a book to remember how it happened."
          </div>
          <div style={microLabel}>The Mercer family · Riverlea</div>
        </div>
      </section>

      <footer style={{ padding: isMobile ? '24px 20px' : '32px 56px', borderTop: `1px solid ${borderSoft}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: cols('column', 'row'), gap: '12px' }}>
        <Logo size={14} showByline showMonogram />
        <div style={{ ...microLabel, color: textFaint, textAlign: 'center' }}>Thoughtful Spaces. Intentional Living. · © 2026</div>
      </footer>

      {/* Sticky CTA */}
      <div style={{ position: 'sticky', bottom: '12px', margin: isMobile ? '0 14px 14px' : '0 56px 16px', background: text, color: bg, padding: isMobile ? '11px 14px' : '12px 22px', borderRadius: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: cols('8px', '14px'), minWidth: 0 }}>
          <Circle size={isMobile ? 6 : 8} fill={sage} stroke={sage} style={{ flexShrink: 0 }} />
          <span style={{ fontFamily: serif, fontSize: isMobile ? '12px' : '14px', fontStyle: 'italic', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {isMobile ? 'Booking late 2026.' : 'Liz is booking late 2026 projects now.'}
          </span>
        </div>
        <button style={{ background: brass, color: '#121212', border: 'none', padding: isMobile ? '7px 12px' : '8px 16px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, borderRadius: '1px', display: 'flex', alignItems: 'center', gap: '7px', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {isMobile ? 'Begin' : 'Begin with Liz'} <ArrowRight size={11} />
        </button>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════
  //   SYMPHONY
  // ═══════════════════════════════════════════════════════════
  const SymphonyNav = [
    { id: 'overview', icon: HomeIcon, label: 'Overview' },
    { id: '3d', icon: Box, label: 'Lume + 3D' },
    { id: 'mood', icon: ImageIcon, label: 'Mood + selections' },
    { id: 'schedule', icon: Calendar, label: 'With Liz' },
    { id: 'messages', icon: MessageCircle, label: 'Messages', badge: 2 },
    { id: 'billing', icon: CreditCard, label: 'Investment' },
    { id: 'workbook', icon: Book, label: 'The Gift book' },
    { id: 'family', icon: Users, label: 'Family access' },
    { id: 'documents', icon: FileText, label: 'Documents' },
  ];

  const SymphonySidebar = () => (
    <>
      <Logo size={14} />
      <div style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: brass, marginTop: '4px', marginLeft: '2px', fontWeight: 500 }}>Symphony</div>

      <div style={{ marginTop: '24px', padding: '14px', background: brassWash, borderRadius: '2px' }}>
        <div style={{ ...microLabel, marginBottom: '8px', letterSpacing: '0.18em' }}>Your space</div>
        <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '4px' }}>The Mercer residence</div>
        <div style={{ fontSize: '11px', color: textMuted }}>Riverlea · 5,420 sf</div>
      </div>

      <nav style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {SymphonyNav.map(({ id, icon: Icon, label, badge }) => (
          <div key={id} onClick={() => setSymphonyTab(id)} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '9px 11px', fontSize: '12px', background: symphonyTab === id ? brassWash : 'transparent', color: symphonyTab === id ? (isDark ? brass : brassDeep) : textMuted, cursor: 'pointer', borderRadius: '2px', fontWeight: symphonyTab === id ? 500 : 400 }}>
            <Icon size={14} strokeWidth={1.4} />
            <span style={{ flex: 1 }}>{label}</span>
            {badge && <span style={{ background: brass, color: '#121212', fontSize: '9px', padding: '1px 6px', borderRadius: '8px', fontWeight: 500 }}>{badge}</span>}
          </div>
        ))}
      </nav>

      <div style={{ marginTop: '24px', padding: '14px', background: surfaceAlt, borderRadius: '2px' }}>
        <div style={{ ...microLabel, marginBottom: '10px' }}>Your designer</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: sage, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F1EDE6', fontWeight: 500, fontSize: '11px', fontFamily: serif }}>LV</div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 500 }}>Liz Vaughan</div>
            <div style={{ fontSize: '10px', color: textMuted }}>Principal</div>
          </div>
        </div>
        <button style={{ width: '100%', background: 'transparent', border: `1px solid ${border}`, padding: '7px', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: text, cursor: 'pointer', borderRadius: '1px', fontWeight: 500 }}>Message Liz</button>
      </div>
    </>
  );

  const Symphony = () => (
    <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '230px 1fr'), minHeight: '760px' }}>
      {/* Mobile top bar */}
      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: `1px solid ${border}`, background: surface }}>
          <button onClick={() => setDrawerOpen(true)} style={{ background: 'transparent', border: `1px solid ${border}`, padding: '7px', cursor: 'pointer', borderRadius: '1px' }}>
            <Menu size={14} color={text} />
          </button>
          <Logo size={13} />
          <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: brass, fontWeight: 500 }}>Symphony</div>
        </div>
      )}

      {/* Sidebar (desktop) / Drawer (mobile) */}
      {!isMobile && (
        <aside style={{ background: surface, borderRight: `1px solid ${border}`, padding: '26px 18px' }}>
          <SymphonySidebar />
        </aside>
      )}
      {isMobile && drawerOpen && (
        <div onClick={() => setDrawerOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex' }}>
          <aside onClick={e => e.stopPropagation()} style={{ background: surface, width: '280px', maxWidth: '85vw', padding: '20px 18px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
              <button onClick={() => setDrawerOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <X size={16} color={textMuted} />
              </button>
            </div>
            <SymphonySidebar />
          </aside>
        </div>
      )}

      <main style={{ padding: isMobile ? '20px' : '28px 36px', background: bg }}>
        {symphonyTab === 'workbook' ? <SymphonyWorkbook /> : symphonyTab === 'billing' ? <SymphonyBilling /> : <SymphonyOverview />}
      </main>
    </div>
  );

  const SymphonyOverview = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', gap: '12px' }}>
        <div>
          <div style={{ ...sectionLabel, marginBottom: '8px' }}>Welcome back</div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '30px', fontWeight: 400, margin: 0, letterSpacing: '-0.005em', lineHeight: '1.15' }}>
            Caroline, you're in the <em style={{ color: brass, fontStyle: 'italic' }}>third movement.</em>
          </h1>
          <p style={{ fontSize: '12px', color: textMuted, marginTop: '6px' }}>Liz updated your space yesterday at 4:18 PM.</p>
        </div>
        <button style={{ background: 'transparent', border: `1px solid ${border}`, padding: '8px', cursor: 'pointer', borderRadius: '1px', flexShrink: 0 }}>
          <Bell size={13} color={textMuted} />
        </button>
      </div>

      <div style={{ ...card, marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <div style={{ ...microLabel, marginBottom: '6px' }}>Current movement</div>
            <div style={{ fontFamily: serif, fontSize: '20px', fontStyle: 'italic' }}>III. The Walk</div>
          </div>
          <div style={{ fontSize: '9px', color: sage, background: sageWash, padding: '5px 10px', borderRadius: '1px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>On schedule</div>
        </div>
        <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', overflow: isMobile ? 'auto' : 'visible' }}>
          {['Listening', 'Drafting', 'The Walk', 'The Build', 'The Gift'].map((stage, i) => (
            <div key={stage} style={{ flex: '1 0 auto', minWidth: isMobile ? '70px' : 'auto' }}>
              <div style={{ height: '2px', background: i <= 2 ? brass : surfaceAlt, marginBottom: '8px' }} />
              <div style={{ fontSize: '10px', color: i <= 2 ? text : textMuted, fontFamily: serif, fontStyle: i === 2 ? 'italic' : 'normal', whiteSpace: 'nowrap' }}>{['I.', 'II.', 'III.', 'IV.', 'V.'][i]} {stage}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(4, 1fr)'), gap: '20px', marginTop: '20px', paddingTop: '18px', borderTop: `1px solid ${borderSoft}` }}>
          {[['Next milestone', 'Lighting approved', 'Due Fri, May 22'], ['Move-in', 'Nov 2026', '4 days ahead'], ['Investment', '$1.84M of $2.10M', '88% drawn'], ['Workbook', '34 pages drafted', 'Preview →']].map(([l, v, sub]) => (
            <div key={l}>
              <div style={{ ...microLabel, marginBottom: '6px' }}>{l}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '3px' }}>{v}</div>
              <div style={{ fontSize: '11px', color: brass }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1.3fr 1fr'), gap: '14px', marginBottom: '14px' }}>
        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          <div style={{ aspectRatio: '16/10', background: isDark ? '#231E18' : '#DDD6C8', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box size={32} color={brass} strokeWidth={0.8} />
            </div>
            <div style={{ position: 'absolute', top: '11px', left: '11px', background: 'rgba(255,255,255,0.95)', color: '#121212', padding: '4px 9px', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, borderRadius: '1px' }}>Lume · Live</div>
            <div style={{ position: 'absolute', bottom: '11px', left: '11px', right: '11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: 'white', fontFamily: serif, fontSize: '12px', fontStyle: 'italic', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Primary suite — final render</div>
              <button style={{ background: 'white', color: '#121212', border: 'none', padding: '5px 10px', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, borderRadius: '1px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Play size={9} /> Walk
              </button>
            </div>
          </div>
          <div style={{ padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '11px', color: textMuted }}>12 rooms · updated yesterday</div>
            <a style={{ ...microLabel, color: brass, display: 'flex', alignItems: 'center', gap: '4px' }}>Open in Lume <ExternalLink size={9} /></a>
          </div>
        </div>

        <div style={card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontFamily: serif, fontSize: '16px' }}>With <em style={{ color: brass, fontStyle: 'italic' }}>Liz</em></div>
            <div style={{ fontSize: '9px', color: sage, display: 'flex', alignItems: 'center', gap: '4px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              <Circle size={5} fill={sage} /> Live
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              { day: 'Tue', date: '20', time: '10:00 AM', label: 'Site walk · framing', open: false },
              { day: 'Thu', date: '22', time: '2:00 PM', label: 'Lighting review', open: false },
              { day: 'Mon', date: '26', time: 'Open', label: 'Book with Liz', open: true },
            ].map((evt, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '9px 11px', background: evt.open ? brassWash : surfaceAlt, borderRadius: '1px', cursor: 'pointer', border: evt.open ? `1px dashed ${brass}` : 'none' }}>
                <div style={{ textAlign: 'center', minWidth: '24px' }}>
                  <div style={{ fontSize: '8px', color: textMuted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{evt.day}</div>
                  <div style={{ fontFamily: serif, fontSize: '15px' }}>{evt.date}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', fontWeight: 500 }}>{evt.label}</div>
                  <div style={{ fontSize: '10px', color: textMuted }}>{evt.time}</div>
                </div>
                {evt.open && <Plus size={12} color={brass} style={{ flexShrink: 0 }} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1fr 1fr 1fr'), gap: '14px' }}>
        <div style={card}>
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '10px' }}>Awaiting you</div>
          {[{ name: 'Kitchen pendant', due: 'Fri' }, { name: 'Bath stone', due: 'Mon' }, { name: 'Front door finish', due: 'May 30' }].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}` }}>
              <Circle size={10} color={brass} strokeWidth={1.5} />
              <div style={{ flex: 1, fontSize: '12px' }}>{s.name}</div>
              <div style={{ ...microLabel, color: textFaint }}>{s.due}</div>
            </div>
          ))}
        </div>
        <div style={card}>
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '10px' }}>From <em style={{ color: brass, fontStyle: 'italic' }}>Liz</em></div>
          <div style={{ fontSize: '11px', color: textMuted, lineHeight: '1.7', marginBottom: '8px' }}>
            "Pulled three pendant options for the island — take a look in selections when you have a moment."
          </div>
          <div style={{ fontSize: '10px', color: textFaint, marginBottom: '12px' }}>2 hours ago</div>
          <button style={{ width: '100%', background: 'transparent', border: `1px solid ${border}`, padding: '8px', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: text, cursor: 'pointer', borderRadius: '1px', fontWeight: 500 }}>Reply to Liz</button>
        </div>
        <div style={{ ...card, background: sageWash, border: 'none', cursor: 'pointer' }} onClick={() => setSymphonyTab('workbook')}>
          <Gift size={18} color={sage} strokeWidth={1.4} style={{ marginBottom: '10px' }} />
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '6px' }}>Your <em style={{ color: brass, fontStyle: 'italic' }}>gift</em> book</div>
          <div style={{ fontSize: '11px', color: textMuted, lineHeight: '1.7', marginBottom: '10px' }}>Liz is curating the documentation of your home. 34 pages so far.</div>
          <a style={{ ...microLabel, color: brass, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Preview <ArrowRight size={10} /></a>
        </div>
      </div>
    </>
  );

  const SymphonyWorkbook = () => (
    <>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ ...sectionLabel, marginBottom: '8px' }}>The gift</div>
        <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '30px', fontWeight: 400, margin: 0 }}>The Mercer book, <em style={{ color: brass, fontStyle: 'italic' }}>by Liz.</em></h1>
        <p style={{ fontSize: '12px', color: textMuted, marginTop: '6px' }}>A coffee-table volume documenting your home, from blueprint to keys. Liz hands you the printed copy on move-in day.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1.5fr 1fr'), gap: '14px', marginBottom: '14px' }}>
        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          <div style={{ aspectRatio: '4/3', background: isDark ? '#2B211A' : '#E7E1D8', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontFamily: serif, color: isDark ? '#3A3228' : '#9A8E7A', textAlign: 'center' }}>
              <Book size={28} strokeWidth={0.6} style={{ marginBottom: '8px' }} />
              <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Page 14 preview</div>
            </div>
          </div>
          <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${borderSoft}` }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 500 }}>Chapter II — The plans</div>
              <div style={{ fontSize: '10px', color: textMuted, marginTop: '2px' }}>34 of est. 96 pages</div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ background: 'transparent', border: `1px solid ${border}`, padding: '6px', cursor: 'pointer', borderRadius: '1px' }}><ChevronLeft size={11} color={textMuted} /></button>
              <button style={{ background: 'transparent', border: `1px solid ${border}`, padding: '6px', cursor: 'pointer', borderRadius: '1px' }}><ChevronRight size={11} color={textMuted} /></button>
            </div>
          </div>
        </div>
        <div style={card}>
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '12px' }}>Chapters</div>
          {[
            { n: 'I', t: 'The Listening', pct: 100 },
            { n: 'II', t: 'The Plans', pct: 85 },
            { n: 'III', t: 'The Walk in Lume', pct: 60 },
            { n: 'IV', t: 'The Build', pct: 28 },
            { n: 'V', t: 'The Keys', pct: 0 },
          ].map((c, i) => (
            <div key={c.n} style={{ padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <div style={{ fontSize: '11px' }}>
                  <span style={{ fontFamily: serif, color: brass, fontStyle: 'italic', marginRight: '8px' }}>{c.n}.</span>{c.t}
                </div>
                <div style={{ fontSize: '10px', color: textMuted, ...mono }}>{c.pct}%</div>
              </div>
              <div style={{ height: '2px', background: surfaceAlt, borderRadius: '1px', overflow: 'hidden' }}>
                <div style={{ width: `${c.pct}%`, height: '100%', background: brass }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={card}>
        <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '12px' }}>What's in the book</div>
        <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(4, 1fr)'), gap: '10px' }}>
          {[
            { icon: PenTool, label: "Liz's sketches", count: '47' },
            { icon: Layers, label: 'Blueprints', count: '12' },
            { icon: Box, label: '3D walk stills', count: '128' },
            { icon: Camera, label: 'Build photos', count: '340' },
            { icon: Tag, label: 'Selections', count: '94' },
            { icon: Users, label: 'Trade credits', count: '23' },
            { icon: Heart, label: 'Family stories', count: '8' },
            { icon: HomeIcon, label: 'Care guide', count: '1' },
          ].map(({ icon: Icon, label, count }) => (
            <div key={label} style={{ padding: '12px', background: surfaceAlt, borderRadius: '2px' }}>
              <Icon size={14} color={brass} strokeWidth={1.4} style={{ marginBottom: '8px' }} />
              <div style={{ fontSize: '10px', color: textMuted, marginBottom: '2px' }}>{label}</div>
              <div style={{ fontFamily: serif, fontSize: '18px' }}>{count}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const SymphonyBilling = () => (
    <>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ ...sectionLabel, marginBottom: '8px' }}>Investment</div>
        <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '30px', fontWeight: 400, margin: 0 }}>The Mercer <em style={{ color: brass, fontStyle: 'italic' }}>ledger.</em></h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(4, 1fr)'), gap: '10px', marginBottom: '14px' }}>
        {[['Total budget', '$2,100,000', null], ['Drawn', '$1,847,200', null], ['Remaining', '$252,800', null], ['Variance', '+$8,400', 'Under budget']].map(([l, v, sub]) => (
          <div key={l} style={{ background: surface, border: `1px solid ${border}`, padding: '14px', borderRadius: '2px' }}>
            <div style={{ ...microLabel, marginBottom: '8px' }}>{l}</div>
            <div style={{ fontFamily: serif, fontSize: isMobile ? '17px' : '22px' }}>{v}</div>
            {sub && <div style={{ fontSize: '10px', color: brass, marginTop: '4px' }}>{sub}</div>}
          </div>
        ))}
      </div>

      <div style={{ ...card, padding: 0, marginBottom: '14px' }}>
        <div style={{ padding: '14px 18px', borderBottom: `1px solid ${borderSoft}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: serif, fontSize: '15px' }}>Invoices</div>
          <button style={{ background: 'transparent', border: `1px solid ${border}`, padding: '6px 10px', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: text, cursor: 'pointer', borderRadius: '1px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}><Download size={10} /> {isMobile ? 'All' : 'All invoices'}</button>
        </div>
        {[
          { id: '#2026-041', desc: 'Movement III · Lighting deposit', sub: '$24,820 + $4,180 OH tax', amt: '$29,000', status: 'Due', paid: false },
          { id: '#2026-039', desc: 'Movement III · Cabinetry milestone', sub: 'Paid Mar 12', amt: '$48,500', status: 'Paid', paid: true },
          { id: '#2026-035', desc: 'Movement II · Foundation', sub: 'Paid Feb 28', amt: '$184,200', status: 'Paid', paid: true },
          { id: '#2026-031', desc: 'Movement I · Discovery retainer', sub: 'Paid Jan 14', amt: '$50,000', status: 'Paid', paid: true },
        ].map((inv, i) => (
          <div key={i} style={{ padding: '14px 18px', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}`, display: 'grid', gridTemplateColumns: cols('1fr auto', '80px 1fr auto auto'), gap: cols('8px', '14px'), alignItems: 'center' }}>
            {!isMobile && <div style={{ ...mono, fontSize: '11px', color: textMuted }}>{inv.id}</div>}
            <div style={{ minWidth: 0 }}>
              {isMobile && <div style={{ ...mono, fontSize: '10px', color: textMuted, marginBottom: '2px' }}>{inv.id}</div>}
              <div style={{ fontSize: '12px' }}>{inv.desc}</div>
              <div style={{ fontSize: '11px', color: textMuted, marginTop: '2px' }}>{inv.sub}</div>
            </div>
            {!isMobile && <div style={{ fontFamily: serif, fontSize: '15px', textAlign: 'right' }}>{inv.amt}</div>}
            <div style={{ textAlign: 'right' }}>
              {isMobile && <div style={{ fontFamily: serif, fontSize: '14px', marginBottom: '2px' }}>{inv.amt}</div>}
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: inv.paid ? textMuted : brass }}>{inv.status}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={card}>
        <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '12px' }}>Tax summary <span style={{ fontSize: '11px', color: textMuted, fontStyle: 'italic' }}>· Ohio</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', 'repeat(3, 1fr)'), gap: cols('12px', '24px') }}>
          {[['Materials (taxable)', '$1,124,300', '7.5% sales tax'], ['Design services', '$382,400', 'Exempt'], ['Labor', '$340,500', 'Exempt']].map(([l, v, sub]) => (
            <div key={l}>
              <div style={{ ...microLabel, marginBottom: '6px' }}>{l}</div>
              <div style={{ fontFamily: serif, fontSize: '16px', marginBottom: '3px' }}>{v}</div>
              <div style={{ fontSize: '10px', color: textMuted }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // ═══════════════════════════════════════════════════════════
  //   ADMIN
  // ═══════════════════════════════════════════════════════════
  const AdminNav = [
    { id: 'dashboard', icon: TrendingUp, label: 'Dashboard' },
    { id: 'clients', icon: Users, label: 'Clients · Symphony' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'leads', icon: Database, label: 'Leads + CRM', badge: 14 },
    { id: 'billing', icon: Receipt, label: 'Billing + tax' },
    { id: 'workbook', icon: Book, label: 'Workbook studio' },
    { id: 'adhub', icon: Megaphone, label: 'Social ad hub' },
    { id: 'pixels', icon: Target, label: 'Pixels + tracking' },
    { id: 'reel', icon: Instagram, label: 'Reel queue' },
    { id: 'settings', icon: Settings, label: 'Studio settings' },
  ];

  const AdminSidebar = () => (
    <>
      <Logo size={14} />
      <div style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: brass, marginTop: '4px', marginLeft: '2px', fontWeight: 500 }}>Liz's Studio</div>
      <nav style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {AdminNav.map(({ id, icon: Icon, label, badge }) => (
          <div key={id} onClick={() => setAdminTab(id)} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '9px 11px', fontSize: '12px', background: adminTab === id ? brassWash : 'transparent', color: adminTab === id ? (isDark ? brass : brassDeep) : textMuted, cursor: 'pointer', borderRadius: '2px', fontWeight: adminTab === id ? 500 : 400 }}>
            <Icon size={14} strokeWidth={1.4} />
            <span style={{ flex: 1 }}>{label}</span>
            {badge && <span style={{ background: brass, color: '#121212', fontSize: '9px', padding: '1px 6px', borderRadius: '8px', fontWeight: 500 }}>{badge}</span>}
          </div>
        ))}
      </nav>
    </>
  );

  const Admin = () => (
    <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '240px 1fr'), minHeight: '760px' }}>
      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: `1px solid ${border}`, background: surface }}>
          <button onClick={() => setDrawerOpen(true)} style={{ background: 'transparent', border: `1px solid ${border}`, padding: '7px', cursor: 'pointer', borderRadius: '1px' }}>
            <Menu size={14} color={text} />
          </button>
          <div style={{ fontSize: '11px', fontFamily: serif, fontStyle: 'italic' }}>{AdminNav.find(n => n.id === adminTab)?.label}</div>
          <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: brass, fontWeight: 500 }}>Studio</div>
        </div>
      )}

      {!isMobile && (
        <aside style={{ background: surface, borderRight: `1px solid ${border}`, padding: '26px 18px' }}>
          <AdminSidebar />
        </aside>
      )}
      {isMobile && drawerOpen && (
        <div onClick={() => setDrawerOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex' }}>
          <aside onClick={e => e.stopPropagation()} style={{ background: surface, width: '280px', maxWidth: '85vw', padding: '20px 18px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
              <button onClick={() => setDrawerOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <X size={16} color={textMuted} />
              </button>
            </div>
            <AdminSidebar />
          </aside>
        </div>
      )}

      <main style={{ padding: isMobile ? '20px' : '26px 32px', background: bg, minWidth: 0 }}>
        {adminTab === 'dashboard' && <AdminDashboard />}
        {adminTab === 'adhub' && <AdminAdHub />}
        {adminTab === 'pixels' && <AdminPixels />}
        {adminTab === 'billing' && <AdminBilling />}
        {adminTab === 'workbook' && <AdminWorkbook />}
        {adminTab === 'leads' && <AdminLeads />}
        {!['dashboard', 'adhub', 'pixels', 'billing', 'workbook', 'leads'].includes(adminTab) && <AdminDashboard />}
      </main>
    </div>
  );

  const AdminDashboard = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '26px', fontWeight: 400, margin: 0 }}>Good morning, Liz.</h1>
          <p style={{ fontSize: '11px', color: textMuted, marginTop: '4px' }}>Tuesday, May 19 · 4 Symphony · 14 leads warming</p>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 11px', background: surface, border: `1px solid ${border}`, borderRadius: '1px' }}>
              <Search size={12} color={textMuted} />
              <input placeholder="Search…" style={{ background: 'transparent', border: 'none', outline: 'none', color: text, fontSize: '11px', width: '140px', fontFamily: sans }} />
            </div>
          )}
          <button style={{ ...primaryBtn, padding: '8px 13px' }}><Plus size={11} /> New</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(4, 1fr)'), gap: '10px', marginBottom: '16px' }}>
        {[
          { label: 'Active Symphony', value: '4', delta: '+1', icon: Music },
          { label: 'Revenue MTD', value: '$284.5K', delta: '+18%', icon: DollarSign },
          { label: 'Ad spend MTD', value: '$8,420', delta: '4.2× ROAS', icon: Megaphone },
          { label: 'Pipeline value', value: '$8.4M', delta: '14 leads', icon: TrendingUp },
        ].map(({ label, value, delta, icon: Icon }) => (
          <div key={label} style={{ background: surface, border: `1px solid ${border}`, padding: '13px 14px', borderRadius: '2px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={microLabel}>{label}</div>
              <Icon size={12} color={brass} strokeWidth={1.4} />
            </div>
            <div style={{ fontFamily: serif, fontSize: isMobile ? '20px' : '24px', marginBottom: '3px' }}>{value}</div>
            <div style={{ fontSize: '10px', color: brass, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUp size={9} /> {delta}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1.5fr 1fr'), gap: '14px', marginBottom: '14px' }}>
        <div style={{ ...card, padding: 0 }}>
          <div style={{ padding: '14px 18px', borderBottom: `1px solid ${borderSoft}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: serif, fontSize: '15px' }}>Active Symphony spaces</div>
            <a style={{ ...microLabel, color: brass, cursor: 'pointer' }}>All</a>
          </div>
          {[
            { name: 'Mercer residence', loc: 'Riverlea', phase: 'III. The Walk', pct: 62, value: '$2.10M', flag: 0 },
            { name: 'Bashir new build', loc: 'Powell', phase: 'II. Drafting', pct: 28, value: '$1.45M', flag: 0 },
            { name: 'Holloway reno', loc: 'Bexley', phase: 'IV. The Build', pct: 84, value: '$680K', flag: 1 },
            { name: 'Pemberton estate', loc: 'Lewis Center', phase: 'I. The Listening', pct: 8, value: '$3.20M', flag: 0 },
          ].map((c, i, arr) => (
            <div key={i} style={{ padding: '12px 18px', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}`, display: 'grid', gridTemplateColumns: cols('1fr auto', '2fr 1.3fr 1fr 0.8fr'), gap: '12px', alignItems: 'center' }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '7px' }}>
                  {c.name}
                  {c.flag > 0 && <span style={{ background: accent, color: 'white', fontSize: '8px', padding: '1px 5px', borderRadius: '6px', fontWeight: 500 }}>{c.flag}</span>}
                </div>
                <div style={{ fontSize: '10px', color: textMuted, marginTop: '2px' }}>{c.loc}{isMobile && ` · ${c.phase}`}</div>
              </div>
              {!isMobile && <div style={{ fontSize: '11px', color: textMuted, fontFamily: serif, fontStyle: 'italic' }}>{c.phase}</div>}
              {!isMobile && (
                <div>
                  <div style={{ fontSize: '10px', color: textMuted, marginBottom: '3px', ...mono }}>{c.pct}%</div>
                  <div style={{ height: '2px', background: surfaceAlt, borderRadius: '1px', overflow: 'hidden' }}>
                    <div style={{ width: `${c.pct}%`, height: '100%', background: brass }} />
                  </div>
                </div>
              )}
              <div style={{ textAlign: 'right', fontFamily: serif, fontSize: '13px' }}>{c.value}</div>
            </div>
          ))}
        </div>

        <div style={card}>
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '4px' }}>Today</div>
          <div style={{ ...microLabel, color: textFaint, marginBottom: '12px' }}>May 19 · 3 events</div>
          {[
            { time: '9:30', label: 'Mercer · site walk', dur: '60m' },
            { time: '12:00', label: 'Pemberton · discovery', dur: '45m' },
            { time: '3:30', label: 'Holloway · selections', dur: '90m' },
          ].map((e, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', padding: '9px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}` }}>
              <div style={{ width: '2px', background: brass, borderRadius: '1px' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 500 }}>{e.label}</div>
                <div style={{ fontSize: '10px', color: textMuted, marginTop: '2px' }}>{e.time} · {e.dur}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1fr 1fr'), gap: '14px' }}>
        <div style={card}>
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '12px' }}>Lead funnel <span style={{ fontSize: '10px', color: textMuted, fontStyle: 'italic' }}>· last 30 days</span></div>
          {[
            { stage: 'Visited site', n: '12,840', conv: '—' },
            { stage: 'Engaged (pixel fire)', n: '3,420', conv: '26.6%' },
            { stage: 'Captured (email)', n: '284', conv: '8.3%' },
            { stage: 'Booked consultation', n: '14', conv: '4.9%' },
            { stage: 'Became Symphony', n: '1', conv: '7.1%' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '9px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <div style={{ fontSize: '11px' }}>{s.stage}</div>
                <div style={{ display: 'flex', gap: '12px', ...mono }}>
                  <span style={{ fontSize: '11px', fontWeight: 500 }}>{s.n}</span>
                  <span style={{ fontSize: '10px', color: textMuted, width: '34px', textAlign: 'right' }}>{s.conv}</span>
                </div>
              </div>
              <div style={{ height: '2px', background: surfaceAlt, borderRadius: '1px', overflow: 'hidden' }}>
                <div style={{ width: `${100 - i * 18}%`, height: '100%', background: brass, opacity: 1 - i * 0.1 }} />
              </div>
            </div>
          ))}
        </div>

        <div style={card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontFamily: serif, fontSize: '15px' }}>Live ad performance</div>
            <a onClick={() => setAdminTab('adhub')} style={{ ...microLabel, color: brass, cursor: 'pointer' }}>Ad Hub →</a>
          </div>
          {[
            { plat: 'Meta · Instagram', spend: '$3,840', roas: '5.1×', icon: Instagram, color: '#E4405F' },
            { plat: 'Meta · Facebook', spend: '$2,180', roas: '3.8×', icon: Facebook, color: '#1877F2' },
            { plat: 'Google · Search', spend: '$1,940', roas: '4.6×', icon: Globe, color: '#4285F4' },
            { plat: 'Pinterest', spend: '$460', roas: '2.9×', icon: ImageIcon, color: '#E60023' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr auto auto', gap: '10px', alignItems: 'center', padding: '9px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}` }}>
              <p.icon size={13} color={p.color} />
              <div style={{ fontSize: '11px' }}>{p.plat}</div>
              <div style={{ ...mono, fontSize: '11px', color: textMuted }}>{p.spend}</div>
              <div style={{ ...mono, fontSize: '11px', color: brass, fontWeight: 500 }}>{p.roas}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const AdminAdHub = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '26px', fontWeight: 400, margin: 0 }}>Social ad hub.</h1>
          <p style={{ fontSize: '11px', color: textMuted, marginTop: '4px' }}>Meta · Google · Pinterest · TikTok · YouTube — all in one place.</p>
        </div>
        <button style={primaryBtn}><Plus size={11} /> {isMobile ? 'New' : 'New campaign'}</button>
      </div>

      <div style={{ ...card, marginBottom: '14px', padding: '14px 16px' }}>
        <div style={{ ...microLabel, marginBottom: '10px' }}>Connected ad accounts</div>
        <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(5, 1fr)'), gap: '10px' }}>
          {[
            { name: 'Meta', icon: Facebook, color: '#1877F2', ok: true },
            { name: 'TikTok', icon: Activity, color: '#FF0050', ok: true },
            { name: 'Google', icon: Globe, color: '#4285F4', ok: true },
            { name: 'Pinterest', icon: ImageIcon, color: '#E60023', ok: true },
            { name: 'YouTube', icon: Youtube, color: '#FF0000', ok: false },
          ].map(p => (
            <div key={p.name} style={{ padding: '10px', background: surfaceAlt, borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <p.icon size={14} color={p.color} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '11px', fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: '9px', color: p.ok ? sage : textMuted, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px' }}>{p.ok ? '● Live' : '○ Connect'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(5, 1fr)'), gap: '8px', marginBottom: '14px' }}>
        {[['Spend MTD', '$8,420'], ['Impressions', '1.24M'], ['CTR', '2.84%'], ['CPL', '$48'], ['Blended ROAS', '4.2×']].map(([l, v]) => (
          <div key={l} style={{ background: surface, border: `1px solid ${border}`, padding: '11px 13px', borderRadius: '2px' }}>
            <div style={{ ...microLabel, marginBottom: '6px' }}>{l}</div>
            <div style={{ fontFamily: serif, fontSize: '17px' }}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{ ...card, padding: 0, marginBottom: '14px' }}>
        <div style={{ padding: '14px 18px', borderBottom: `1px solid ${borderSoft}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: serif, fontSize: '15px' }}>Active campaigns</div>
          <button style={{ background: 'transparent', border: 'none', fontSize: '10px', color: textMuted, cursor: 'pointer', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}><Filter size={10} /> Filter</button>
        </div>
        {[
          { name: 'Portfolio retargeting · Riverlea', plat: 'Meta', spend: '$1,840', leads: 24, roas: '6.2×', status: 'live' },
          { name: 'Inspiration book · Cold Central OH', plat: 'Meta', spend: '$2,000', leads: 58, roas: '4.4×', status: 'live' },
          { name: 'Lookalike · Past Symphony clients', plat: 'Meta', spend: '$1,420', leads: 19, roas: '3.9×', status: 'live' },
          { name: 'Search · "custom home builder OH"', plat: 'Google', spend: '$1,940', leads: 31, roas: '4.6×', status: 'live' },
          { name: 'Discovery pin · Kitchen designs', plat: 'Pinterest', spend: '$460', leads: 8, roas: '2.9×', status: 'live' },
          { name: 'UGC test · Holloway before/after', plat: 'TikTok', spend: '$760', leads: 12, roas: '2.4×', status: 'paused' },
        ].map((c, i, arr) => (
          <div key={i} style={{ padding: '12px 18px', borderTop: i === 0 ? `1px solid ${borderSoft}` : `1px solid ${borderSoft}`, display: 'grid', gridTemplateColumns: cols('1fr auto', '2fr 1fr 1fr 0.8fr 0.8fr 60px'), gap: '12px', alignItems: 'center' }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Circle size={6} fill={c.status === 'live' ? sage : textFaint} stroke={c.status === 'live' ? sage : textFaint} style={{ flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
              </div>
              {isMobile && (
                <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '10px', color: textMuted, ...mono }}>
                  <span>{c.plat}</span><span>{c.spend}</span><span>{c.leads} leads</span><span style={{ color: brass }}>{c.roas}</span>
                </div>
              )}
            </div>
            {!isMobile && <div style={{ fontSize: '11px', color: textMuted }}>{c.plat}</div>}
            {!isMobile && <div style={{ textAlign: 'right', ...mono, fontSize: '11px' }}>{c.spend}</div>}
            {!isMobile && <div style={{ textAlign: 'right', ...mono, fontSize: '11px' }}>{c.leads}</div>}
            {!isMobile && <div style={{ textAlign: 'right', ...mono, fontSize: '11px', color: brass, fontWeight: 500 }}>{c.roas}</div>}
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
              <button style={{ background: 'transparent', border: `1px solid ${border}`, padding: '4px', cursor: 'pointer', borderRadius: '1px' }}>
                {c.status === 'live' ? <Pause size={10} color={textMuted} /> : <Play size={10} color={textMuted} />}
              </button>
              {!isMobile && <button style={{ background: 'transparent', border: `1px solid ${border}`, padding: '4px', cursor: 'pointer', borderRadius: '1px' }}><Edit3 size={10} color={textMuted} /></button>}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1fr 1fr'), gap: '14px' }}>
        <div style={card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontFamily: serif, fontSize: '15px' }}>Audiences</div>
            <a style={{ ...microLabel, color: brass, cursor: 'pointer' }}>+ New</a>
          </div>
          {[
            { name: 'Site visitors · 30 day', size: '12,840', src: 'Pixel' },
            { name: 'Inspiration book downloaders', size: '284', src: 'Database' },
            { name: 'Past Symphony clients', size: '47', src: 'CRM' },
            { name: 'LAL · Past Symphony · 1%', size: '2.1M', src: 'Meta LAL' },
            { name: 'Engaged @vaughanand.co · 90d', size: '8,420', src: 'Instagram' },
          ].map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '10px', alignItems: 'center', padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}` }}>
              <div style={{ fontSize: '11px' }}>{a.name}</div>
              <div style={{ fontSize: '10px', color: textMuted }}>{a.src}</div>
              <div style={{ ...mono, fontSize: '11px', fontWeight: 500 }}>{a.size}</div>
            </div>
          ))}
        </div>

        <div style={card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontFamily: serif, fontSize: '15px' }}>Creative library</div>
            <a style={{ ...microLabel, color: brass, cursor: 'pointer' }}>+ Upload</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            {['#BE8274', '#C9BFA8', '#B8A89C', '#B59A6A', '#C4A882', '#A89888'].map((hue, i) => (
              <div key={i} style={{ aspectRatio: '1', background: hue, borderRadius: '1px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ position: 'absolute', top: '4px', right: '4px', background: 'rgba(255,255,255,0.95)', padding: '1px 5px', fontSize: '8px', letterSpacing: '0.1em', fontWeight: 500, borderRadius: '1px', color: '#121212' }}>{i < 4 ? 'LIVE' : 'DRAFT'}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '10px', color: textMuted, marginTop: '10px', lineHeight: '1.6' }}>6 creatives · 4 running · pulling from <span style={{ color: brass }}>@vaughanand.co</span></div>
        </div>
      </div>
    </>
  );

  const AdminPixels = () => (
    <>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '26px', fontWeight: 400, margin: 0 }}>Pixels + tracking.</h1>
        <p style={{ fontSize: '11px', color: textMuted, marginTop: '4px' }}>Every pixel fires for retargeting. Server-side conversions mirrored via CAPI.</p>
      </div>

      <div style={{ ...card, marginBottom: '14px', padding: 0 }}>
        <div style={{ padding: '14px 18px', borderBottom: `1px solid ${borderSoft}` }}>
          <div style={{ fontFamily: serif, fontSize: '15px' }}>Pixel status</div>
        </div>
        {[
          { name: 'Meta Pixel', id: '274891038472615', events: '12,840', last: '12s ago', ok: true, capi: true },
          { name: 'Google Tag (GA4)', id: 'G-VAUGHAN26X', events: '12,840', last: '12s ago', ok: true, capi: false },
          { name: 'TikTok Pixel', id: 'C8M2NQRBPP3...', events: '4,210', last: '1m ago', ok: true, capi: true },
          { name: 'Pinterest Tag', id: '2614832901847', events: '1,420', last: '4m ago', ok: true, capi: false },
          { name: 'LinkedIn Insight', id: '8742013', events: '218', last: '12m ago', ok: true, capi: false },
          { name: 'YouTube Tag', id: '—', events: '—', last: 'Not connected', ok: false, capi: false },
        ].map((p, i, arr) => (
          <div key={i} style={{ padding: '12px 18px', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}`, display: 'grid', gridTemplateColumns: cols('1fr auto', '1.4fr 1.2fr 0.8fr 0.8fr 0.6fr 60px'), gap: '12px', alignItems: 'center' }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Circle size={6} fill={p.ok ? sage : textFaint} stroke={p.ok ? sage : textFaint} style={{ flexShrink: 0 }} />
                {p.name}
              </div>
              {isMobile && (
                <div style={{ display: 'flex', gap: '10px', marginTop: '5px', fontSize: '10px', color: textMuted, ...mono, flexWrap: 'wrap' }}>
                  <span>{p.events} events</span><span>{p.last}</span>{p.capi && <span style={{ color: brass }}>CAPI</span>}
                </div>
              )}
            </div>
            {!isMobile && <div style={{ ...mono, fontSize: '10px', color: textMuted }}>{p.id}</div>}
            {!isMobile && <div style={{ ...mono, fontSize: '11px', textAlign: 'right' }}>{p.events}</div>}
            {!isMobile && <div style={{ fontSize: '10px', color: textMuted, textAlign: 'right' }}>{p.last}</div>}
            {!isMobile && <div style={{ fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: p.capi ? sage : textFaint, fontWeight: 500 }}>{p.capi ? 'CAPI' : '—'}</div>}
            <button style={{ background: 'transparent', border: `1px solid ${border}`, padding: '4px 8px', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: text, cursor: 'pointer', borderRadius: '1px', fontWeight: 500, justifySelf: 'end' }}>Edit</button>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1fr 1fr'), gap: '14px' }}>
        <div style={card}>
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '12px' }}>Conversion events</div>
          {[
            { evt: 'PageView', n: '12,840', val: '—' },
            { evt: 'ViewContent · project', n: '4,820', val: '—' },
            { evt: 'Lead · book signup', n: '284', val: '$28' },
            { evt: 'Schedule · consult', n: '14', val: '$140' },
            { evt: 'Purchase · Symphony', n: '1', val: '$2.1M' },
          ].map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 70px 60px', gap: '10px', alignItems: 'center', padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}` }}>
              <div style={{ fontSize: '11px', ...mono }}>{e.evt}</div>
              <div style={{ fontSize: '11px', textAlign: 'right', fontWeight: 500 }}>{e.n}</div>
              <div style={{ fontSize: '10px', color: textMuted, textAlign: 'right' }}>{e.val}</div>
            </div>
          ))}
        </div>

        <div style={card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontFamily: serif, fontSize: '15px' }}>Live firing</div>
            <div style={{ fontSize: '9px', color: sage, display: 'flex', alignItems: 'center', gap: '4px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              <Circle size={5} fill={sage} /> Streaming
            </div>
          </div>
          {[
            { evt: 'Lead', pix: 'Meta · CAPI', ago: '4s' },
            { evt: 'PageView', pix: 'GA4', ago: '8s' },
            { evt: 'ViewContent', pix: 'Meta', ago: '12s' },
            { evt: 'PageView', pix: 'Meta', ago: '18s' },
            { evt: 'Schedule', pix: 'Meta · CAPI', ago: '2m' },
            { evt: 'PageView', pix: 'TikTok', ago: '3m' },
          ].map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 36px', gap: '10px', alignItems: 'center', padding: '7px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}`, fontSize: '11px' }}>
              <div style={mono}>{a.evt}</div>
              <div style={{ color: textMuted }}>{a.pix}</div>
              <div style={{ ...mono, fontSize: '10px', color: textFaint, textAlign: 'right' }}>{a.ago}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const AdminBilling = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '26px', fontWeight: 400, margin: 0 }}>Billing + tax.</h1>
          <p style={{ fontSize: '11px', color: textMuted, marginTop: '4px' }}>Beautifully curated invoices · OH sales tax handled · QBO synced</p>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {!isMobile && <button style={ghostBtn}><Download size={11} /> Export</button>}
          <button style={primaryBtn}><Plus size={11} /> {isMobile ? 'New' : 'New invoice'}</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(4, 1fr)'), gap: '10px', marginBottom: '14px' }}>
        {[
          ['Outstanding', '$42,100', '3 invoices'],
          ['Paid MTD', '$284,500', '7 invoices'],
          ['OH tax collected', '$18,420', 'May 2026'],
          ['Avg days to pay', '8.2', '↓ 1.4 vs Apr'],
        ].map(([l, v, sub]) => (
          <div key={l} style={{ background: surface, border: `1px solid ${border}`, padding: '13px 14px', borderRadius: '2px' }}>
            <div style={{ ...microLabel, marginBottom: '8px' }}>{l}</div>
            <div style={{ fontFamily: serif, fontSize: isMobile ? '17px' : '20px' }}>{v}</div>
            <div style={{ fontSize: '10px', color: textMuted, marginTop: '3px' }}>{sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1.3fr 1fr'), gap: '14px' }}>
        <div style={{ ...card, padding: 0 }}>
          <div style={{ padding: '14px 18px', borderBottom: `1px solid ${borderSoft}` }}>
            <div style={{ fontFamily: serif, fontSize: '15px' }}>Invoices</div>
          </div>
          {[
            { id: '#2026-041', client: 'Mercer', desc: 'Lighting deposit', sub: '$24,820 + $4,180 tax', amt: '$29,000', status: 'Sent', color: brass, paid: false },
            { id: '#2026-040', client: 'Holloway', desc: 'Cabinetry', sub: '$12,900 + $1,300 tax', amt: '$14,200', status: 'Overdue', color: accent, paid: false },
            { id: '#2026-039', client: 'Mercer', desc: 'Cabinetry milestone', sub: '$44,300 + $4,200 tax', amt: '$48,500', status: 'Paid', color: textMuted, paid: true },
            { id: '#2026-038', client: 'Bashir', desc: 'Design retainer', sub: '$12,800 · tax exempt', amt: '$12,800', status: 'Paid', color: textMuted, paid: true },
            { id: '#2026-037', client: 'Pemberton', desc: 'Discovery', sub: '$8,500 · tax exempt', amt: '$8,500', status: 'Draft', color: textFaint, paid: false },
          ].map((row, i, arr) => (
            <div key={i} style={{ padding: '12px 18px', borderTop: i === 0 ? `1px solid ${borderSoft}` : `1px solid ${borderSoft}`, display: 'grid', gridTemplateColumns: cols('1fr auto', '60px 70px 1fr auto auto'), gap: '10px', alignItems: 'center' }}>
              {!isMobile && <div style={{ ...mono, fontSize: '10px', color: textMuted }}>{row.id}</div>}
              {!isMobile && <div style={{ fontSize: '11px', fontWeight: 500 }}>{row.client}</div>}
              <div style={{ minWidth: 0 }}>
                {isMobile && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '3px' }}>
                    <span style={{ ...mono, fontSize: '10px', color: textMuted }}>{row.id}</span>
                    <span style={{ fontSize: '11px', fontWeight: 500 }}>{row.client}</span>
                  </div>
                )}
                <div style={{ fontSize: '11px' }}>{row.desc}</div>
                <div style={{ fontSize: '9px', color: textMuted, marginTop: '2px', ...mono }}>{row.sub}</div>
              </div>
              {!isMobile && <div style={{ fontFamily: serif, fontSize: '14px', textAlign: 'right' }}>{row.amt}</div>}
              <div style={{ textAlign: 'right' }}>
                {isMobile && <div style={{ fontFamily: serif, fontSize: '14px', marginBottom: '2px' }}>{row.amt}</div>}
                <div style={{ fontSize: '9px', color: row.color, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>{row.status}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${borderSoft}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={microLabel}>Invoice preview · #2026-041</div>
            <Eye size={12} color={textMuted} />
          </div>
          <div style={{ padding: '20px', background: isDark ? '#121212' : '#F5F1EC' }}>
            <Logo size={12} />
            <div style={{ ...microLabel, marginTop: '4px', color: textFaint, marginBottom: '18px' }}>By Liz Vaughan</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ ...microLabel, marginBottom: '4px' }}>Invoice to</div>
                <div style={{ fontFamily: serif, fontSize: '13px' }}>Caroline Mercer</div>
                <div style={{ fontSize: '10px', color: textMuted }}>Riverlea, OH</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ ...microLabel, marginBottom: '4px' }}>Invoice</div>
                <div style={{ fontSize: '13px', ...mono }}>#2026-041</div>
                <div style={{ fontSize: '10px', color: textMuted }}>Due May 28</div>
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${borderSoft}`, padding: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                <span>Lighting deposit</span>
                <span style={mono}>$24,820.00</span>
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${borderSoft}`, padding: '10px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[['Subtotal', '$24,820.00'], ['Ohio · 7.5%', '$1,861.50'], ['Franklin · 0.75%', '$186.15'], ['Riverlea · 1.5%', '$372.30']].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                  <span style={{ color: textMuted }}>{l}</span>
                  <span style={mono}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: `1px solid ${border}`, paddingTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: serif, fontSize: '13px', fontStyle: 'italic' }}>Total due</span>
              <span style={{ fontFamily: serif, fontSize: '17px' }}>$27,239.95</span>
            </div>
            <div style={{ marginTop: '18px', textAlign: 'right' }}>
              <LizSig size={20} />
              <div style={{ ...microLabel, color: textFaint, marginTop: '2px' }}>Liz Vaughan</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const AdminWorkbook = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '26px', fontWeight: 400, margin: 0 }}>Workbook studio.</h1>
          <p style={{ fontSize: '11px', color: textMuted, marginTop: '4px' }}>Curate each homeowner's gift book — Liz's signature handover.</p>
        </div>
        <button style={primaryBtn}><Plus size={11} /> {isMobile ? 'New' : 'New workbook'}</button>
      </div>

      <div style={{ ...card, padding: 0, marginBottom: '14px' }}>
        <div style={{ padding: '14px 18px', borderBottom: `1px solid ${borderSoft}` }}>
          <div style={{ fontFamily: serif, fontSize: '15px' }}>Workbooks in progress</div>
        </div>
        {[
          { name: 'The Mercer book', loc: 'Riverlea', pages: 34, target: 96, ship: 'Nov 2026' },
          { name: 'The Bashir book', loc: 'Powell', pages: 12, target: 80, ship: 'Feb 2027' },
          { name: 'The Holloway book', loc: 'Bexley', pages: 68, target: 72, ship: 'Aug 2026' },
          { name: 'The Pemberton book', loc: 'Lewis Center', pages: 4, target: 120, ship: 'Mar 2028' },
        ].map((w, i, arr) => (
          <div key={i} style={{ padding: '14px 18px', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}`, display: 'grid', gridTemplateColumns: cols('1fr', '2fr 1fr 1.5fr 1fr'), gap: '12px', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: serif, fontSize: '13px', fontStyle: 'italic' }}>{w.name}</div>
              <div style={{ fontSize: '10px', color: textMuted, marginTop: '2px' }}>{w.loc}</div>
            </div>
            <div style={{ ...mono, fontSize: '11px', color: textMuted }}>{w.pages} <span style={{ color: textFaint }}>/ ~{w.target} pages</span></div>
            <div>
              <div style={{ height: '2px', background: surfaceAlt, borderRadius: '1px', overflow: 'hidden' }}>
                <div style={{ width: `${(w.pages / w.target) * 100}%`, height: '100%', background: brass }} />
              </div>
            </div>
            <div style={{ ...microLabel, color: textMuted, textAlign: cols('left', 'right') }}>Ships {w.ship}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('1fr', '1fr 1fr'), gap: '14px' }}>
        <div style={card}>
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '12px' }}>Page templates</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            {['Cover', 'Chapter title', 'Full bleed', 'Photo + caption', 'Sketch + plan', 'Selections', 'Pull quote', 'Trade credit', 'Care note'].map(t => (
              <div key={t} style={{ aspectRatio: '3/4', background: surfaceAlt, borderRadius: '1px', padding: '8px', display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
                <div style={{ fontSize: '9px', color: textMuted, fontFamily: serif }}>{t}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={card}>
          <div style={{ fontFamily: serif, fontSize: '15px', marginBottom: '12px' }}>Auto-pulled assets · Mercer</div>
          {[
            { src: 'Lume renders', n: '128', icon: Box },
            { src: 'Selections', n: '94', icon: Tag },
            { src: 'Build photos', n: '340', icon: Camera },
            { src: "Liz's sketches", n: '47', icon: PenTool },
            { src: 'Family notes', n: '8', icon: Heart },
          ].map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr auto', gap: '10px', alignItems: 'center', padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${borderSoft}` }}>
              <a.icon size={12} color={brass} />
              <div style={{ fontSize: '11px' }}>{a.src}</div>
              <div style={{ ...mono, fontSize: '11px', fontWeight: 500 }}>{a.n}</div>
            </div>
          ))}
          <button style={{ width: '100%', marginTop: '12px', background: 'transparent', border: `1px solid ${border}`, padding: '8px', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: text, cursor: 'pointer', borderRadius: '1px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Sparkles size={11} /> Auto-curate next chapter
          </button>
        </div>
      </div>
    </>
  );

  const AdminLeads = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontFamily: serif, fontSize: isMobile ? '22px' : '26px', fontWeight: 400, margin: 0 }}>Leads + CRM.</h1>
          <p style={{ fontSize: '11px', color: textMuted, marginTop: '4px' }}>284 in the database · 14 warm · every touch tracked.</p>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {!isMobile && <button style={ghostBtn}><Filter size={10} /> Filter</button>}
          <button style={primaryBtn}><Plus size={11} /> {isMobile ? 'Add' : 'Add lead'}</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cols('repeat(2, 1fr)', 'repeat(4, 1fr)'), gap: '10px', marginBottom: '14px' }}>
        {[
          { stage: 'New', n: 8, value: '$3.2M' },
          { stage: 'Discovery', n: 4, value: '$2.8M' },
          { stage: 'Proposal', n: 2, value: '$1.9M' },
          { stage: 'Closing', n: 1, value: '$1.4M' },
        ].map((s, i) => (
          <div key={i} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '2px', padding: '13px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={microLabel}>{s.stage}</div>
              <div style={{ fontFamily: serif, fontSize: '18px' }}>{s.n}</div>
            </div>
            <div style={{ height: '2px', background: surfaceAlt, marginBottom: '8px' }}>
              <div style={{ width: '60%', height: '100%', background: brass }} />
            </div>
            <div style={{ fontSize: '10px', color: textMuted, ...mono }}>{s.value} pipeline</div>
          </div>
        ))}
      </div>

      <div style={{ ...card, padding: 0 }}>
        {!isMobile && (
          <div style={{ padding: '14px 18px', borderBottom: `1px solid ${borderSoft}`, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: '12px', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: textFaint, fontWeight: 500 }}>
            <div>Lead</div><div>Source</div><div>First touch</div><div>Stage</div><div>Est. value</div><div style={{ textAlign: 'right' }}>Score</div>
          </div>
        )}
        {[
          { name: 'David & Anne Roth', src: 'Meta · Inspo book', ft: '4d ago', stage: 'Discovery', val: '$1.8M', score: 92 },
          { name: 'Marcus Chen', src: 'Google · Search', ft: '6d ago', stage: 'New', val: '$2.4M', score: 88 },
          { name: 'The Sandowns', src: 'Referral · Mercer', ft: '2d ago', stage: 'Proposal', val: '$1.4M', score: 96 },
          { name: 'Olivia Pemberton', src: 'Instagram DM', ft: '11d ago', stage: 'Closing', val: '$3.2M', score: 98 },
          { name: 'Tom & Rachel Park', src: 'Pinterest', ft: '8d ago', stage: 'New', val: '$890K', score: 71 },
          { name: 'The Westbrook family', src: 'Press · Dwell', ft: '1d ago', stage: 'New', val: '$2.1M', score: 84 },
        ].map((l, i) => (
          <div key={i} style={{ padding: '12px 18px', borderTop: i === 0 && isMobile ? 'none' : `1px solid ${borderSoft}`, display: 'grid', gridTemplateColumns: cols('1fr auto', '2fr 1fr 1fr 1fr 1fr 1fr'), gap: '12px', alignItems: 'center' }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '12px', fontWeight: 500 }}>{l.name}</div>
              {isMobile && (
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px', fontSize: '10px', color: textMuted, flexWrap: 'wrap' }}>
                  <span>{l.src}</span><span>·</span>
                  <span style={{ fontFamily: serif, fontStyle: 'italic' }}>{l.stage}</span><span>·</span>
                  <span style={mono}>{l.val}</span>
                </div>
              )}
            </div>
            {!isMobile && <div style={{ fontSize: '11px', color: textMuted }}>{l.src}</div>}
            {!isMobile && <div style={{ ...microLabel, color: textFaint }}>{l.ft}</div>}
            {!isMobile && <div style={{ fontSize: '11px', fontFamily: serif, fontStyle: 'italic' }}>{l.stage}</div>}
            {!isMobile && <div style={{ ...mono, fontSize: '11px' }}>{l.val}</div>}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
              <div style={{ ...mono, fontSize: '11px', fontWeight: 500, color: l.score > 85 ? brass : textMuted }}>{l.score}</div>
              <div style={{ width: '36px', height: '2px', background: surfaceAlt, borderRadius: '1px', overflow: 'hidden' }}>
                <div style={{ width: `${l.score}%`, height: '100%', background: l.score > 85 ? brass : textMuted }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div style={{ background: bg, color: text, minHeight: '760px', fontFamily: sans }}>
      <Frame />
      {view === 'public' && <PublicSite />}
      {view === 'symphony' && <Symphony />}
      {view === 'admin' && <Admin />}
    </div>
  );
}
