export default function SiteFooter() {
  return (
    <footer style={{ background: "#d8e2f2", color: "#4f5b76", padding: "clamp(48px,6vw,84px) 0 32px" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "clamp(24px,3vw,48px)", paddingBottom: "40px", borderBottom: "1px solid #dce5f4" }}>
          <div>
            <div style={{ font: "700 21px/1 'Plus Jakarta Sans',sans-serif", color: "#0f1420" }}>Workneev</div>
            <p style={{ margin: "14px 0 0", maxWidth: "26ch", font: "400 14px/1.6 'Plus Jakarta Sans',sans-serif", color: "#4a5570" }}>Institutional transformation for Indian higher education.</p>
            <div style={{ marginTop: "26px" }}>
              <div style={{ font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4a5570" }}>NOTES ON INSTITUTIONAL PRACTICE</div>
              <div style={{ marginTop: "12px", display: "flex", gap: "0", borderBottom: "1px solid #dce5f4", maxWidth: "280px" }}>
                <input type="email" placeholder="Email address" style={{ flex: "1", background: "transparent", border: "0", outline: "0", padding: "8px 0", font: "500 14px/1.4 'Plus Jakarta Sans',sans-serif", color: "#1d2433" }} />
                <button type="button" style={{ border: "0", background: "transparent", cursor: "pointer", font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#4f46e5", padding: "8px 0" }}>SUBSCRIBE</button>
              </div>
              <p style={{ margin: "10px 0 0", font: "400 12px/1.5 'Plus Jakarta Sans',sans-serif", color: "#4a5570" }}>No more than once a month.</p>
            </div>
          </div>
          <div>
            <div style={{ font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4a5570" }}>THE WORK</div>
            <div style={{ marginTop: "16px", display: "grid", gap: "9px", font: "500 14px/1.4 'Plus Jakarta Sans',sans-serif" }}><a href="#method" style={{ color: "#4f5b76" }}>How we work</a><a href="#diagnostic" style={{ color: "#4f5b76" }}>The Diagnostic</a><a href="#engage" style={{ color: "#4f5b76" }}>Engagement model</a><a href="#office" style={{ color: "#4f5b76" }}>Transformation Office</a></div>
          </div>
          <div>
            <div style={{ font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4a5570" }}>THE INSTITUTION</div>
            <div style={{ marginTop: "16px", display: "grid", gap: "9px", font: "500 14px/1.4 'Plus Jakarta Sans',sans-serif" }}><a href="#dimensions" style={{ color: "#4f5b76" }}>What we assess</a><a href="#start" style={{ color: "#4f5b76" }}>Where institutions start</a><a href="#behind" style={{ color: "#4f5b76" }}>Judgment, method, instrumentation</a><a href="#independence" style={{ color: "#4f5b76" }}>Independence</a></div>
          </div>
          <div>
            <div style={{ font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4a5570" }}>COMPANY</div>
            <div style={{ marginTop: "16px", display: "grid", gap: "9px", font: "500 14px/1.4 'Plus Jakarta Sans',sans-serif" }}><a href="#about" style={{ color: "#4f5b76" }}>About</a><a href="#contact" style={{ color: "#4f5b76" }}>Contact</a><a href="#people" style={{ color: "#4f5b76" }}>Expert Council →</a><a href="#outcomes" style={{ color: "#4f5b76" }}>How we expect to be judged</a></div>
          </div>
        </div>
        <div style={{ paddingTop: "26px", display: "flex", flexWrap: "wrap", gap: "14px 30px", justifyContent: "space-between", font: "400 11px/1.6 'JetBrains Mono',monospace", color: "#4a5570" }}>
          <div>Workneev Technologies Private Limited · Bangalore, Karnataka · pradeepchetry@gmail.com · +91 70029 76857</div>
          <div>Privacy · Terms · © 2026</div>
        </div>
      </div>
    </footer>
  );
}
