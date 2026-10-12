import { useState, useEffect } from "react";
import "./MobileMenu.css";

interface NavItem {
  label: string;
  href: string;
  featured?: boolean;
}

interface MobileMenuProps {
  items: NavItem[];
  theme?: "mining" | "default";
}

export function MobileMenu({ items, theme = "default" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`mr-mobile-menu-container ${theme === "mining" ? "theme-mining" : ""}`}>
      {/* 3 dots / hamburger trigger button */}
      <button
        type="button"
        className={`mr-mobile-trigger ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="dot dot-1" />
        <span className="dot dot-2" />
        <span className="dot dot-3" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="mr-mobile-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Flyout Slide Drawer */}
      <aside className={`mr-mobile-drawer ${isOpen ? "open" : ""}`} aria-label="Mobile Navigation">
        <div className="mr-mobile-drawer-header">
          <span className="mr-mobile-drawer-title">Navigation</span>
          <button
            type="button"
            className="mr-mobile-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mr-mobile-nav-links">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`mr-mobile-link ${item.featured ? "featured" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
