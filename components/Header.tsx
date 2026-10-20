'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const mm = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const close = () => { if (mm.current) mm.current.open = false; };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    const onDoc = (e: MouseEvent) => { if (mm.current?.open && !mm.current.contains(e.target as Node)) close(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onDoc);
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('keydown', onKey); document.removeEventListener('click', onDoc); };
  }, []);

  const act = (h: string) => (path.replace(/\/$/, '') === h ? 'is-active' : '');
  const closeMenu = () => { if (mm.current) mm.current.open = false; };

  return (
    <header className={`top ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" aria-label="RMI Agentic, home" style={{ textDecoration: 'none', display: 'inline-flex', alignSelf: 'flex-start' }}><Logo /></Link>
      <nav className="menu" aria-label="Main">
        <Link href="/product" className={act('/product')}><i aria-hidden="true" />Product</Link>
        <Link className="contact-link" href="/contact">Contact us</Link>
        <details className="mm" ref={mm}>
          <summary className="menu-toggle"><span className="mt-lines" aria-hidden="true"><i /><i /></span>Menu</summary>
          <nav className="mobile-menu" aria-label="Mobile" onClick={closeMenu}>
            <Link href="/product">Product</Link>
            <Link href="/contact" style={{ color: 'var(--frame-color)' }}>Contact us</Link>
          </nav>
        </details>
      </nav>
    </header>
  );
}
