import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../config";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="header-cta">
          Book a Demo
        </Link>

        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-top">
            <Logo />
            <button className="menu-button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="mobile-demo-button" onClick={() => setOpen(false)}>
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
