/**
 * Footer Component
 * Site footer with brand, links, and legal info
 */

'use client';

import Link from 'next/link';
import Logo from '../Header/Logo';
import { FooterColumn } from './FooterColumn';
import { SocialLinks } from './SocialLinks';
import { footerColumns, socialLinks, legalLinks, missionStatement } from '@/lib/data/footer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-muted/30 border-t">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Brand Column (Left) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <Logo className="h-16 w-16" />
              <div>
                {/* Connect Label */}
                <p className="text-muted-foreground mb-3 text-sm">Connect:</p>

                {/* Social Links */}
                <SocialLinks links={socialLinks} />
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
              {missionStatement.text}{' '}
              <Link
                href={missionStatement.ctaHref}
                className="hover:text-foreground font-bold tracking-tighter uppercase underline transition-colors"
              >
                {missionStatement.ctaText}
              </Link>
            </p>
          </div>

          {/* Links Columns (Right) */}
          <div className="lg:col-span-6">
            <div className="grid gap-8 sm:grid-cols-3">
              {footerColumns.map((column, index) => (
                <FooterColumn key={index} column={column} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-border border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {currentYear} Decoy Phrase – A non-profit initiative
            </p>

            {/* Legal Links */}
            <nav aria-label="Legal" className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
