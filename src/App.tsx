import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="page-shell">
      <section className="placeholder-section">
        <p className="eyebrow">Coming Next</p>
        <h1>{title}</h1>
        <p>This page will be rebuilt section by section after the homepage base is ready.</p>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlaceholderPage title="Platform" />} />
        <Route path="/solutions" element={<PlaceholderPage title="Solutions" />} />
        <Route path="/use-cases" element={<PlaceholderPage title="Use Cases" />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
      </Routes>
      <Footer />
    </div>
  );
}
