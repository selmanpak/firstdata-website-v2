import { ArrowRight, Building2, CheckCircle2, Network, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { primaryButtonClass } from "../../config";

export function HomeHeroSection() {
  return (
    <section className="home-hero-section">
      <div className="hero-copy">
        <div className="eyebrow">AI-Integrated RWA Tokenization</div>
        <h1>
          Institutional infrastructure for real-world asset tokenization.
        </h1>
        <p>
          FirstData enables regulated tokenization, distribution, custody-aware workflows,
          and lifecycle reporting for real-world assets.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className={primaryButtonClass}>
            Book a Demo <ArrowRight size={18} />
          </Link>
          <Link to="/platform" className="secondary-button">
            Explore Platform
          </Link>
        </div>

        <div className="hero-status-strip">
          <StatusItem text="Asset Verified" />
          <StatusItem text="Token Ready" />
          <StatusItem text="Access Controlled" />
        </div>
      </div>

      <div className="hero-visual-card" aria-hidden="true">
        <div className="hero-orb" />
        <div className="visual-grid">
          <VisualBox icon={<Building2 />} title="Real Assets" />
          <VisualBox icon={<ShieldCheck />} title="Regulated Rails" />
          <VisualBox icon={<Network />} title="Tokenization Flow" />
          <VisualBox icon={<CheckCircle2 />} title="Lifecycle Reporting" />
        </div>
      </div>
    </section>
  );
}

function StatusItem({ text }: { text: string }) {
  return (
    <div className="status-item">
      <CheckCircle2 size={16} />
      <span>{text}</span>
    </div>
  );
}

function VisualBox({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="visual-box">
      <div className="visual-icon">{icon}</div>
      <strong>{title}</strong>
      <span />
    </div>
  );
}
