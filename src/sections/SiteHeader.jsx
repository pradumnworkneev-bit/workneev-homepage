export default function SiteHeader() {
  return (
    <header style={{ position: "sticky", top: "0", zIndex: "50", background: "rgba(233,239,250,.9)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(15,23,42,.12)" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
        <a href="#top" style={{ display: "flex", alignItems: "baseline", gap: "10px", color: "#0f1420" }}><span style={{ font: "700 21px/1 'Plus Jakarta Sans',sans-serif", letterSpacing: ".01em" }}>Workneev</span><span style={{ width: "5px", height: "5px", background: "#4f46e5", display: "block", borderRadius: "50%" }} /></a>
        <nav style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2vw,30px)", font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase" }}>
          <a href="#method" style={{ color: "#44506b" }}>How we work</a>
          <a href="#diagnostic" style={{ color: "#44506b" }}>The Diagnostic</a>
          <a href="#dimensions" style={{ color: "#44506b" }}>What we assess</a>
          <a href="#engage" style={{ color: "#44506b" }}>Engagements</a>
          <a href="#about" style={{ color: "#44506b" }}>About</a>
        </nav>
        <a href="#contact" style={{ flex: "none", font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#ffffff", background: "#4f46e5", padding: "11px 18px" }}>Talk to us</a>
      </div>
    </header>
  );
}
