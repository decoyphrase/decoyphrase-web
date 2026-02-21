/**
 * FooterColumn Component
 * Renders a column of links in the footer
 */

import Link from 'next/link';
import type { FooterColumn as FooterColumnType } from '@/lib/data/footer';

interface FooterColumnProps {
  column: FooterColumnType;
}

export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-4 font-mono text-sm font-bold">{column.title}</h4>
      <ul className="space-y-3">
        {column.links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
              {link.external && <span className="sr-only"> (opens in new tab)</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
