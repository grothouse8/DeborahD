'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sun, Moon, MapPin } from 'lucide-react';

export default function CurationsByDeborah() {
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 820);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const t = isDark ? {
    bg: '#161210',
    bgAlt: '#1E1A16',
    surface: '#221E1A',
    surfaceHover: '#2A2520',
    text: '#F0EBE3',
    textSecondary: '#C8C0B8',
    textMuted: '#9A918A',
    textFaint: '#5E5550',
    terracotta: '#C88070',
    terracottaDeep: '#A06858',
    brass: '#D4B275',
    olive: '#8A9472',
    blush: '#C4A598',
    border: '#302A24',
    borderSoft: '#262220',
    heroGrad: 'linear-gradient(135deg, #1E1A16 0%, #161210 40%, #1A1614 100%)',
    ctaBg: '#C88070',
    ctaText: '#161210',
  } : {
    bg: '#F7F3EE',
    bgAlt: '#EDE7DC',
    surface: '#FFFDF9',
    surfaceHover: '#F5EFE6',
    text: '#2C2420',
    textSecondary: '#4A403A',
    textMuted: '#7A7068',
    textFaint: '#A89E94',
    terracotta: '#B5705A',
    terracottaDeep: '#8E5242',
    brass: '#C4A265',
    olive: '#747C62',
    blush: '#D4B5A8',
    border: '#E2DAD0',
    borderSoft: '#EDE7DC',
    heroGrad: 'linear-gradient(135deg, #F7F3EE 0%, #F0EAE0 40%, #F5F0E8 100%)',
    ctaBg: '#B5705A',
    ctaText: '#FFFDF9',
  };

  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans = "'Raleway', 'Helvetica Neue', sans-serif";
  const px = isMobile ? 24 : 64;
  const sectionGap = isMobile ? 80 : 140;

  const swatches = [
    { name: 'Terracotta', hex: '#B5705A' },
    { name: 'Aged Brass', hex: '#C4A265' },
    { name: 'Sage Olive', hex: '#747C62' },
    { name: 'Blush', hex: '#D4B5A8' },
    { name: 'Espresso', hex: '#2C2420' },
    { name: 'Linen', hex: '#F7F3EE' },
  ];

  const projects = [
    {
      label: '5350 OLENTANGY ROAD',
      name: 'The Olentangy Residence',
      desc: 'A complete reimagining where heritage meets modern living. Hand-selected materials, custom millwork, and a palette drawn from the landscape itself.',
      tags: ['Custom Millwork', 'Italian Marble', 'Bespoke Lighting', 'Artisan Tile'],
      placeholder: 'Living room — afternoon light on custom walnut built-ins',
    },
    {
      label: '8321 RIVER ROCK LANE',
      name: 'River Rock',
      desc: 'Intimate sophistication at every turn. From bespoke fabric selections to artisan hardware, each room unfolds with intention and warmth.',
      tags: ['Fabric Curation', 'Hardware Selection', 'Color Story', 'Custom Furniture'],
      placeholder: 'Primary suite — hand-rubbed plaster walls, linen drapes',
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

  return (
    <div style={{
      minHeight: '100vh',
      background: t.bg,
      color: t.text,
      fontFamily: sans,
      fontSize: 16,
      lineHeight: 1.6,
      transition: 'background 0.4s ease, color 0.4s ease',
      overflowX: 'hidden',
    }}>

      {/* ═══ NAVIGATION ═══ */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `18px ${px}px`,
        background: isDark ? 'rgba(22,18,16,0.88)' : 'rgba(247,243,238,0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${t.borderSoft}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <span style={{
            fontFamily: sans,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase' as const,
            color: t.text,
          }}>
            DEBORAH D
          </span>
          <span style={{
            display: 'inline-block',
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: t.terracotta,
            marginLeft: 4,
            marginBottom: 1,
          }} />
        </div>

        {!isMobile && (
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
            {['Portfolio', 'Process', 'About', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: sans,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase' as const,
                  color: t.textMuted,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = t.terracotta; }}
                onMouseLeave={e => { e.currentTarget.style.color = t.textMuted; }}
              >
                {item}
              </a>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              background: 'none',
              border: `1px solid ${t.border}`,
              borderRadius: 999,
              width: 34,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: t.textMuted,
              transition: 'all 0.3s ease',
            }}
          >
            {isDark ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: t.text,
                padding: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          top: 71,
          background: t.bg,
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: `56px ${px}px`,
          gap: 36,
        }}>
          {['Portfolio', 'Process', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: serif,
                fontSize: 36,
                fontWeight: 300,
                color: t.text,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              {item}
            </a>
          ))}
          <div style={{
            marginTop: 24,
            paddingTop: 24,
            borderTop: `1px solid ${t.borderSoft}`,
          }}>
            <div style={{
              fontFamily: sans,
              fontSize: 12,
              color: t.textFaint,
              lineHeight: 1.8,
            }}>
              Columbus, Ohio<br />
              Interior Curation & Design
            </div>
          </div>
        </div>
      )}

      {/* ═══ HERO ═══ */}
      <section style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: isMobile ? 'auto' : '92vh',
        padding: `${isMobile ? 56 : 0}px ${px}px ${isMobile ? 0 : 0}px`,
        gap: isMobile ? 48 : 72,
        alignItems: isMobile ? 'flex-start' : 'center',
        background: t.heroGrad,
      }}>
        <div style={{
          flex: 1,
          maxWidth: isMobile ? '100%' : '48%',
          paddingTop: isMobile ? 0 : 40,
          paddingBottom: isMobile ? 0 : 40,
        }}>
          <div style={{
            fontFamily: sans,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.32em',
            textTransform: 'uppercase' as const,
            color: t.terracotta,
            marginBottom: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <span style={{
              display: 'inline-block',
              width: 32,
              height: 1,
              background: t.terracotta,
            }} />
            INTERIOR CURATION
          </div>

          <h1 style={{
            fontFamily: serif,
            fontSize: isMobile ? 68 : 104,
            fontWeight: 300,
            lineHeight: 0.92,
            color: t.text,
            letterSpacing: '-0.03em',
            marginBottom: 6,
          }}>
            Curations
          </h1>

          <div style={{
            fontFamily: serif,
            fontSize: isMobile ? 30 : 44,
            fontWeight: 300,
            fontStyle: 'italic',
            color: t.terracotta,
            marginBottom: 36,
            letterSpacing: '-0.01em',
          }}>
            by Deborah
          </div>

          <p style={{
            fontFamily: sans,
            fontSize: isMobile ? 15 : 17,
            fontWeight: 300,
            lineHeight: 1.85,
            color: t.textSecondary,
            maxWidth: 460,
            marginBottom: 44,
          }}>
            Interior design is not decoration &mdash; it is the art of composing a life.
            Every surface, every texture, every line of light, curated to serve the
            people who live within.
          </p>

          <a
            href="#portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: sans,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: t.ctaText,
              background: t.ctaBg,
              padding: '17px 34px',
              textDecoration: 'none',
              transition: 'all 0.35s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Explore the Portfolio <ArrowRight size={14} />
          </a>
        </div>

        {/* Hero Portrait */}
        <div style={{
          flex: 1,
          minHeight: isMobile ? 420 : 620,
          maxHeight: isMobile ? 500 : '82vh',
          background: t.bgAlt,
          border: `1px dashed ${t.border}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          position: 'relative',
          overflow: 'hidden',
          width: isMobile ? '100%' : undefined,
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(180deg, transparent 50%, ${t.bg}50 100%)`,
            pointerEvents: 'none',
          }} />
          <div style={{
            fontFamily: sans,
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: t.textFaint,
            zIndex: 1,
            textAlign: 'center',
            maxWidth: 200,
            lineHeight: 1.6,
          }}>
            Portrait &mdash; Deborah in studio
          </div>
          <div style={{
            width: 40,
            height: 1,
            background: t.terracotta,
            opacity: 0.35,
            zIndex: 1,
          }} />
        </div>
      </section>

      {/* ═══ CURATED PALETTE STRIP ═══ */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: isMobile ? 14 : 24,
        padding: `${isMobile ? 40 : 56}px ${px}px`,
        borderTop: `1px solid ${t.borderSoft}`,
        borderBottom: `1px solid ${t.borderSoft}`,
      }}>
        {swatches.map(s => (
          <div key={s.name} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
          }}>
            <div style={{
              width: isMobile ? 30 : 40,
              height: isMobile ? 42 : 56,
              background: s.hex,
              border: (s.hex === '#F7F3EE' || s.hex === '#2C2420')
                ? `1px solid ${t.border}`
                : 'none',
              transition: 'transform 0.3s ease',
            }} />
            <span style={{
              fontFamily: sans,
              fontSize: 7,
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase' as const,
              color: t.textFaint,
              whiteSpace: 'nowrap',
            }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>

      {/* ═══ PHILOSOPHY ═══ */}
      <section style={{
        padding: `${sectionGap}px ${px}px`,
      }}>
        <div style={{ position: 'relative', maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            fontFamily: serif,
            fontSize: isMobile ? 60 : 100,
            fontWeight: 300,
            color: t.terracotta,
            opacity: 0.15,
            position: 'absolute',
            top: isMobile ? -30 : -48,
            left: '50%',
            transform: 'translateX(-50%)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            &ldquo;
          </span>

          <blockquote style={{
            fontFamily: serif,
            fontSize: isMobile ? 26 : 42,
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.35,
            color: t.text,
            margin: '0 auto',
            marginBottom: isMobile ? 48 : 72,
            position: 'relative',
            zIndex: 1,
          }}>
            A room should never simply be furnished. It should be composed &mdash;
            like a piece of music where every note has purpose
            and every silence has meaning.
          </blockquote>
        </div>

        <div style={{
          width: 48,
          height: 2,
          background: t.terracotta,
          margin: '0 auto',
          marginBottom: isMobile ? 48 : 72,
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 24 : 72,
          maxWidth: 920,
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: sans,
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.95,
            color: t.textSecondary,
          }}>
            Deborah approaches every project as a singular composition. No templates,
            no formulas, no off-the-shelf solutions. Each home receives a bespoke
            design vocabulary &mdash; a language of materials, textures, and proportions
            that belongs only to the people who inhabit it.
          </p>
          <p style={{
            fontFamily: sans,
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.95,
            color: t.textSecondary,
          }}>
            Her work begins with listening &mdash; deeply understanding how a family
            lives, moves, and gathers &mdash; then translating those rhythms into
            spaces that feel both inevitable and extraordinary. The result is a home
            that doesn&apos;t just look beautiful. It feels like yours.
          </p>
        </div>
      </section>

      {/* ═══ FEATURED CURATIONS ═══ */}
      <section id="portfolio" style={{
        padding: `${sectionGap}px ${px}px`,
        borderTop: `1px solid ${t.borderSoft}`,
      }}>
        <div style={{
          fontFamily: sans,
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.32em',
          textTransform: 'uppercase' as const,
          color: t.terracotta,
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <span style={{
            display: 'inline-block',
            width: 32,
            height: 1,
            background: t.terracotta,
          }} />
          FEATURED CURATIONS
        </div>

        <h2 style={{
          fontFamily: serif,
          fontSize: isMobile ? 38 : 60,
          fontWeight: 300,
          lineHeight: 1.08,
          color: t.text,
          marginBottom: isMobile ? 48 : 72,
          letterSpacing: '-0.02em',
        }}>
          Selected Projects
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 56 : 44,
        }}>
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: (!isMobile && i === 1) ? 72 : 0,
              }}
            >
              {/* Project Image */}
              <div style={{
                width: '100%',
                height: isMobile ? 340 : 460,
                background: t.bgAlt,
                border: `1px dashed ${t.border}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
                marginBottom: 32,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 100,
                  background: `linear-gradient(transparent, ${t.bg}30)`,
                  pointerEvents: 'none',
                }} />
                <span style={{
                  fontFamily: sans,
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase' as const,
                  color: t.textFaint,
                  zIndex: 1,
                  textAlign: 'center',
                  maxWidth: 280,
                  lineHeight: 1.5,
                }}>
                  {project.placeholder}
                </span>
                <div style={{
                  width: 32,
                  height: 1,
                  background: t.terracotta,
                  opacity: 0.3,
                  zIndex: 1,
                }} />
              </div>

              <div style={{
                fontFamily: sans,
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: '0.28em',
                textTransform: 'uppercase' as const,
                color: t.textFaint,
                marginBottom: 14,
              }}>
                {project.label}
              </div>

              <h3 style={{
                fontFamily: serif,
                fontSize: isMobile ? 30 : 38,
                fontWeight: 400,
                color: t.text,
                marginBottom: 16,
                letterSpacing: '-0.01em',
              }}>
                {project.name}
              </h3>

              <p style={{
                fontFamily: sans,
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.85,
                color: t.textMuted,
                marginBottom: 28,
              }}>
                {project.desc}
              </p>

              {/* Material Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 28,
              }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: sans,
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    padding: '7px 16px',
                    border: `1px solid ${t.border}`,
                    color: t.textMuted,
                    transition: 'all 0.3s ease',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: sans,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase' as const,
                  color: t.terracotta,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'gap 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.gap = '14px'; }}
                onMouseLeave={e => { e.currentTarget.style.gap = '8px'; }}
              >
                View the Curation <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ EDITORIAL IMAGE BREAK ═══ */}
      <div style={{
        padding: `0 ${px}px`,
        marginBottom: 0,
      }}>
        <div style={{
          width: '100%',
          height: isMobile ? 280 : 400,
          background: t.bgAlt,
          border: `1px dashed ${t.border}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: isDark
              ? 'linear-gradient(90deg, rgba(22,18,16,0.4) 0%, transparent 30%, transparent 70%, rgba(22,18,16,0.4) 100%)'
              : 'linear-gradient(90deg, rgba(247,243,238,0.4) 0%, transparent 30%, transparent 70%, rgba(247,243,238,0.4) 100%)',
            pointerEvents: 'none',
          }} />
          <span style={{
            fontFamily: sans,
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: t.textFaint,
            zIndex: 1,
            textAlign: 'center',
            lineHeight: 1.6,
          }}>
            Detail &mdash; hand-selected fabric swatches against Italian marble sample
          </span>
          <div style={{ width: 40, height: 1, background: t.terracotta, opacity: 0.3, zIndex: 1 }} />
        </div>
      </div>

      {/* ═══ THE ART OF DETAIL ═══ */}
      <section style={{
        padding: `${sectionGap}px ${px}px`,
        borderTop: `1px solid ${t.borderSoft}`,
        marginTop: sectionGap,
      }}>
        <div style={{ maxWidth: 580, marginBottom: isMobile ? 48 : 72 }}>
          <div style={{
            fontFamily: sans,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.32em',
            textTransform: 'uppercase' as const,
            color: t.terracotta,
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <span style={{
              display: 'inline-block',
              width: 32,
              height: 1,
              background: t.terracotta,
            }} />
            THE DIFFERENCE
          </div>

          <h2 style={{
            fontFamily: serif,
            fontSize: isMobile ? 38 : 60,
            fontWeight: 300,
            lineHeight: 1.08,
            color: t.text,
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}>
            Down to the<br />Last Thread
          </h2>

          <p style={{
            fontFamily: sans,
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.85,
            color: t.textMuted,
          }}>
            True interior design lives in the details that most would overlook &mdash;
            the weight of a curtain, the grain of a trim profile, the way light catches
            a hand-rubbed finish.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 1,
          background: t.border,
          border: `1px solid ${t.border}`,
        }}>
          {details.map((d, i) => (
            <div
              key={i}
              style={{
                background: t.bg,
                padding: isMobile ? '32px 28px' : '44px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = t.surface; }}
              onMouseLeave={e => { e.currentTarget.style.background = t.bg; }}
            >
              <div style={{
                fontFamily: serif,
                fontSize: isMobile ? 28 : 36,
                fontWeight: 300,
                color: t.terracotta,
                opacity: 0.3,
                lineHeight: 1,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{
                fontFamily: serif,
                fontSize: isMobile ? 22 : 26,
                fontWeight: 400,
                color: t.text,
                letterSpacing: '-0.01em',
              }}>
                {d.title}
              </h3>
              <p style={{
                fontFamily: sans,
                fontSize: 13,
                fontWeight: 300,
                lineHeight: 1.75,
                color: t.textMuted,
              }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ THE CURATION PROCESS ═══ */}
      <section id="process" style={{
        padding: `${sectionGap}px ${px}px`,
        borderTop: `1px solid ${t.borderSoft}`,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
          gap: isMobile ? 48 : 120,
        }}>
          <div>
            <div style={{
              fontFamily: sans,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.32em',
              textTransform: 'uppercase' as const,
              color: t.terracotta,
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{
                display: 'inline-block',
                width: 32,
                height: 1,
                background: t.terracotta,
              }} />
              THE METHOD
            </div>

            <h2 style={{
              fontFamily: serif,
              fontSize: isMobile ? 38 : 60,
              fontWeight: 300,
              lineHeight: 1.08,
              color: t.text,
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}>
              The Curation
            </h2>

            <p style={{
              fontFamily: sans,
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.85,
              color: t.textMuted,
              maxWidth: 420,
            }}>
              Every project follows a deliberate path from conversation to
              completion &mdash; a process refined over years of practice and an
              unwavering commitment to getting it right.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: isMobile ? 20 : 32,
                  padding: `${isMobile ? 24 : 36}px 0`,
                  borderBottom: i < steps.length - 1 ? `1px solid ${t.borderSoft}` : 'none',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{
                  fontFamily: serif,
                  fontSize: isMobile ? 36 : 48,
                  fontWeight: 300,
                  color: t.terracotta,
                  opacity: 0.3,
                  lineHeight: 1,
                  minWidth: isMobile ? 44 : 60,
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: serif,
                    fontSize: isMobile ? 24 : 30,
                    fontWeight: 400,
                    color: t.text,
                    marginBottom: 8,
                    letterSpacing: '-0.01em',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: sans,
                    fontSize: 13,
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: t.textMuted,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT DEBORAH ═══ */}
      <section id="about" style={{
        padding: `${sectionGap}px ${px}px`,
        borderTop: `1px solid ${t.borderSoft}`,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.3fr',
          gap: isMobile ? 48 : 88,
          alignItems: 'center',
        }}>
          {/* Portrait */}
          <div style={{
            width: '100%',
            height: isMobile ? 420 : 580,
            background: t.bgAlt,
            border: `1px dashed ${t.border}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            order: isMobile ? 2 : 1,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, transparent 60%, ${t.bg}40 100%)`,
              pointerEvents: 'none',
            }} />
            <span style={{
              fontFamily: sans,
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: t.textFaint,
              zIndex: 1,
              textAlign: 'center',
              maxWidth: 240,
              lineHeight: 1.6,
            }}>
              Deborah &mdash; selecting fabrics at the atelier
            </span>
            <div style={{ width: 32, height: 1, background: t.terracotta, opacity: 0.3, zIndex: 1 }} />
          </div>

          <div style={{ order: isMobile ? 1 : 2 }}>
            <div style={{
              fontFamily: sans,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.32em',
              textTransform: 'uppercase' as const,
              color: t.terracotta,
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{
                display: 'inline-block',
                width: 32,
                height: 1,
                background: t.terracotta,
              }} />
              THE DESIGNER
            </div>

            <h2 style={{
              fontFamily: serif,
              fontSize: isMobile ? 38 : 56,
              fontWeight: 300,
              lineHeight: 1.08,
              color: t.text,
              marginBottom: 32,
              letterSpacing: '-0.02em',
            }}>
              About Deborah
            </h2>

            <p style={{
              fontFamily: sans,
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.95,
              color: t.textSecondary,
              marginBottom: 20,
            }}>
              Deborah is an interior designer whose eye captures what others
              miss &mdash; the interplay of texture and light, the conversation
              between a room and its inhabitants. Her work is not about trends. It
              is about creating spaces that feel deeply, irreversibly personal.
            </p>

            <p style={{
              fontFamily: sans,
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.95,
              color: t.textSecondary,
              marginBottom: 36,
            }}>
              From the thread count of a Belgian linen to the precise radius of a
              trim profile, nothing escapes her attention. Every project is a complete
              composition &mdash; fully custom, down to the fabric and every trim
              detail &mdash; because anything less isn&apos;t design. It&apos;s decoration.
            </p>

            <div style={{
              fontFamily: serif,
              fontSize: isMobile ? 21 : 26,
              fontWeight: 300,
              fontStyle: 'italic',
              color: t.terracotta,
              lineHeight: 1.45,
              borderLeft: `2px solid ${t.terracotta}`,
              paddingLeft: 24,
            }}>
              &ldquo;Brilliant, sophisticated, and relentlessly
              detailed &mdash; her eye makes it yours.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═══ */}
      <section id="contact" style={{
        padding: `${sectionGap}px ${px}px`,
        background: t.terracotta,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle texture overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: sans,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.32em',
            textTransform: 'uppercase' as const,
            color: isDark ? 'rgba(22,18,16,0.5)' : 'rgba(255,253,249,0.6)',
            marginBottom: 24,
          }}>
            BEGIN YOUR CURATION
          </div>

          <h2 style={{
            fontFamily: serif,
            fontSize: isMobile ? 34 : 56,
            fontWeight: 300,
            lineHeight: 1.2,
            color: isDark ? '#161210' : '#FFFDF9',
            maxWidth: 620,
            margin: '0 auto',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}>
            Every extraordinary space begins with a conversation.
          </h2>

          <p style={{
            fontFamily: sans,
            fontSize: 15,
            fontWeight: 300,
            color: isDark ? 'rgba(22,18,16,0.65)' : 'rgba(255,253,249,0.75)',
            maxWidth: 480,
            margin: '0 auto',
            marginBottom: 44,
            lineHeight: 1.8,
          }}>
            Whether you&apos;re envisioning a complete transformation or a single,
            perfectly curated room &mdash; it starts here.
          </p>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: sans,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: t.terracotta,
              background: isDark ? '#161210' : '#FFFDF9',
              padding: '17px 38px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Get in Touch <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        padding: `52px ${px}px`,
        borderTop: `1px solid ${t.borderSoft}`,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: 28,
      }}>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            marginBottom: 10,
          }}>
            <span style={{
              fontFamily: sans,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase' as const,
              color: t.text,
            }}>
              DEBORAH D
            </span>
            <span style={{
              display: 'inline-block',
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: t.terracotta,
              marginLeft: 3,
            }} />
          </div>
          <div style={{
            fontFamily: sans,
            fontSize: 12,
            fontWeight: 300,
            color: t.textFaint,
          }}>
            &copy; 2026 Curations by Deborah. All rights reserved.
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: 28,
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: sans,
            fontSize: 12,
            fontWeight: 400,
            color: t.textMuted,
          }}>
            <MapPin size={12} />
            Columbus, Ohio
          </div>
          {['Instagram', 'Pinterest'].map(social => (
            <a
              key={social}
              href="#"
              style={{
                fontFamily: sans,
                fontSize: 12,
                fontWeight: 400,
                color: t.textMuted,
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = t.terracotta; }}
              onMouseLeave={e => { e.currentTarget.style.color = t.textMuted; }}
            >
              {social}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
