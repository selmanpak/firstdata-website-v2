import { Link } from "react-router-dom";
import { navItems } from "../config";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>AI-integrated infrastructure for regulated real-world asset tokenization.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FirstData</span>
        <span>Data and AI infrastructure for tokenized markets.</span>
      </div>
    </footer>
  );
}
