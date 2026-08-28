export default function Architecture() {
  return (
    <section style={{ background: "#f7f7f9", timelineScope: "--arch" }}>
      <div style={{ viewTimelineName: "--arch", viewTimelineAxis: "block", height: "300vh", position: "relative" }}>
        <div style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ maxWidth: "1360px", width: "100%", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)" }}>
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "#4a5570" }}>The Workneev transformation architecture</div>
            <h2 style={{ margin: "20px 0 0", maxWidth: "24ch", font: "700 clamp(26px,3.4vw,50px)/1.06 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.024em", color: "#101014" }}>One institution-wide architecture, not a set of projects.</h2>
            <div style={{ marginTop: "clamp(30px,4vw,56px)", animation: "wkDolly linear both", animationTimeline: "--arch", animationRange: "contain 0% contain 100%" }}>
              <svg viewBox="0 0 1500 320" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "clamp(210px,42vh,470px)", display: "block", overflow: "visible" }}>
                <line x1="40" y1="120" x2="1460" y2="120" stroke="#e5e5ea" strokeWidth="1" />
                <line x1="40" y1="120" x2="1460" y2="120" stroke="#4f46e5" strokeWidth="2" strokeDasharray="1420" style={{ animation: "wkDraw linear both", animationTimeline: "--arch", animationRange: "contain 2% contain 78%", "--dash": "1420" }} />
                <g fontFamily="'JetBrains Mono',monospace" fontSize="13" letterSpacing="1" fill="#3f3f4a" textAnchor="middle">
                  <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 2% contain 8%" }}><circle cx="40" cy="120" r="7" fill="#4f46e5" /><text x="40" y="96">ASPIRATION</text></g>
                  <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 11% contain 17%" }}><circle cx="243" cy="120" r="7" fill="#4f46e5" /><text x="243" y="158">DIAGNOSTIC</text></g>
                  <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 21% contain 27%" }}><circle cx="446" cy="120" r="7" fill="#4f46e5" /><text x="446" y="96">SCORE</text></g>
                  <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 31% contain 37%" }}><circle cx="649" cy="120" r="7" fill="#4f46e5" /><text x="649" y="158">CHARTER</text></g>
                  <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 41% contain 47%" }}><circle cx="852" cy="120" r="7" fill="#4f46e5" /><text x="852" y="96">CAPABILITIES</text></g>
                  <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 51% contain 57%" }}><circle cx="1055" cy="120" r="7" fill="#4f46e5" /><text x="1055" y="158">TRANSFORMATION</text></g>
                  <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 61% contain 67%" }}><circle cx="1258" cy="120" r="7" fill="#4f46e5" /><text x="1258" y="96">MEASUREMENT</text></g>
                  <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 71% contain 78%" }}><circle cx="1460" cy="120" r="11" fill="#101014" /><text x="1460" y="162" fill="#101014" fontSize="14">INSTITUTIONAL</text><text x="1460" y="180" fill="#101014" fontSize="14">EXCELLENCE</text></g>
                </g>
                <g style={{ animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 66% contain 80%" }}>
                  <line x1="40" y1="240" x2="1460" y2="240" stroke="#e5e5ea" />
                  <g fontFamily="'JetBrains Mono',monospace" fontSize="11" letterSpacing="2" fill="#4a5570" textAnchor="middle">
                    <path d="M40 232V248M324 232V248M608 232V248M892 232V248M1176 232V248M1460 232V248" stroke="#c8c8d2" />
                    <text x="182" y="270">DISCOVER</text>
                    <text x="466" y="270">DESIGN</text>
                    <text x="750" y="270">TRANSFORM</text>
                    <text x="1034" y="270">MEASURE</text>
                    <text x="1318" y="270">SUSTAIN</text>
                    <text x="40" y="216" textAnchor="start" fill="#4a5570">FIVE STAGES OF DELIVERY</text>
                  </g>
                </g>
              </svg>
            </div>
            <p style={{ margin: "clamp(26px,3vw,44px) 0 0", maxWidth: "70ch", font: "400 clamp(16px,1.15vw,19px)/1.62 'Plus Jakarta Sans',sans-serif", color: "#5a5a66", animation: "wkFade linear both", animationTimeline: "--arch", animationRange: "contain 34% contain 48%" }}>The architecture is why a programme compounds instead of resetting. Each step is built on the one before it, and every one of them is measured against the baseline the diagnostic set.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
