import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="FirstData home">
      <span className="logo-mark" aria-hidden="true">
        <span className="logo-mark-block" />
        <span className="logo-mark-arc" />
      </span>
      <span className="logo-text">
        <span>First</span>
        <span>Data</span>
      </span>
    </Link>
  );
}
