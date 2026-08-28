export default function Diagnostic() {
  return (
    <section id="diagnostic" style={{ background: "#e9eff9", color: "#141a26", timelineScope: "--days" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(70px,8vw,120px) clamp(20px,3vw,48px) 0" }}>
        <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "#56627d" }}>The Institutional Diagnostic</div>
        <h2 style={{ margin: "22px 0 0", maxWidth: "20ch", font: "700 clamp(30px,4.4vw,64px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.026em", color: "#0f1420" }}>Every engagement begins the same way.</h2>
        <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "clamp(24px,4vw,64px)", alignItems: "start" }}>
          <p style={{ margin: "0", font: "400 clamp(16px,1.15vw,19px)/1.62 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>Before we propose anything, we spend two weeks inside the institution. We interview leadership, examine what the institution already knows about itself, and assess nine dimensions that between them determine whether it can reach its next stage.</p>
          <p style={{ margin: "0", font: "400 clamp(16px,1.15vw,19px)/1.62 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>What comes back is not a list of everything imperfect. Any competent observer can produce that in an afternoon. It is a scored baseline, an ordered set of constraints, and a considered judgment about what to do first — with the reasoning shown, so that your governing body can argue with it.</p>
          <div style={{ display: "grid", gap: "14px", font: "500 11px/1.5 'JetBrains Mono',monospace", color: "#4f5b76" }}>
            <div><span style={{ color: "#4a5570", letterSpacing: ".12em" }}>DURATION</span><br /><span style={{ color: "#1d2433" }}>Two weeks</span></div>
            <div><span style={{ color: "#4a5570", letterSpacing: ".12em" }}>ASSESSMENT</span><br /><span style={{ color: "#1d2433" }}>Nine dimensions</span></div>
            <div><span style={{ color: "#4a5570", letterSpacing: ".12em" }}>DELIVERABLE</span><br /><span style={{ color: "#1d2433" }}>30–50 page report and a leadership session</span></div>
            <div><span style={{ color: "#4a5570", letterSpacing: ".12em" }}>TERMS</span><br /><span style={{ color: "#1d2433" }}>Paid engagement, fixed fee</span></div>
          </div>
        </div>
      </div>
      <div style={{ viewTimelineName: "--days", viewTimelineAxis: "block", height: "320vh", position: "relative", marginTop: "clamp(40px,5vw,72px)" }}>
        <div style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: "1360px", width: "100%", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)" }}>
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "#56627d" }}>Inside the two weeks</div>
            <div style={{ marginTop: "26px", position: "relative", paddingBottom: "34px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(14,1fr)", alignItems: "end", height: "clamp(96px,18vh,190px)", borderBottom: "1px solid #b9cae4" }}>
                <div style={{ height: "36%", borderLeft: "1px solid #4f46e5", paddingLeft: "6px" }} />
                <div style={{ height: "36%", borderLeft: "1px solid #4f46e5" }} />
                <div style={{ height: "23%", borderLeft: "1px solid #aabddc" }} />
                <div style={{ height: "23%", borderLeft: "1px solid #aabddc" }} />
                <div style={{ height: "23%", borderLeft: "1px solid #aabddc" }} />
                <div style={{ height: "23%", borderLeft: "1px solid #aabddc" }} />
                <div style={{ height: "23%", borderLeft: "1px solid #aabddc" }} />
                <div style={{ height: "32%", borderLeft: "1px solid #16a34a" }} />
                <div style={{ height: "32%", borderLeft: "1px solid #16a34a" }} />
                <div style={{ height: "32%", borderLeft: "1px solid #16a34a" }} />
                <div style={{ height: "32%", borderLeft: "1px solid #16a34a" }} />
                <div style={{ height: "46%", borderLeft: "1px solid #16a34a" }} />
                <div style={{ height: "46%", borderLeft: "1px solid #16a34a" }} />
                <div style={{ height: "46%", borderLeft: "1px solid #16a34a" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(14,1fr)", marginTop: "10px", font: "600 10px/1 'JetBrains Mono',monospace", color: "#4a5570" }}>
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
              </div>
              <div style={{ position: "absolute", left: "0", top: "0", bottom: "24px", width: "calc(100% / 14)", pointerEvents: "none", "--sweep": "1300%", animation: "wkSweep linear both", animationTimeline: "--days", animationRange: "contain 2% contain 98%" }}>
                <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "2px", background: "#4f46e5" }} />
                <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", right: "0", background: "linear-gradient(90deg,rgba(79,70,229,.20),transparent)" }} />
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "clamp(186px,31vh,330px)", marginTop: "12px" }}>
              <div style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(24px,4vw,64px)", animation: "wkPhase linear both", animationTimeline: "--days", animationRange: "contain 0% contain 28%" }}>
                <div>
                  <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4f46e5" }}>DAYS 1–2</div>
                  <h3 style={{ margin: "12px 0 0", font: "700 clamp(28px,3.4vw,50px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.024em", color: "#0f1420" }}>Alignment</h3>
                </div>
                <p style={{ margin: "0", alignSelf: "center", font: "400 clamp(17px,1.35vw,22px)/1.55 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>Interviews with the chairman, vice-chancellor or principal, and with the people who actually run the institution day to day.</p>
              </div>
              <div style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(24px,4vw,64px)", animation: "wkPhase linear both", animationTimeline: "--days", animationRange: "contain 24% contain 56%" }}>
                <div>
                  <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4f46e5" }}>DAYS 3–7</div>
                  <h3 style={{ margin: "12px 0 0", font: "700 clamp(28px,3.4vw,50px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.024em", color: "#0f1420" }}>Evidence</h3>
                </div>
                <p style={{ margin: "0", alignSelf: "center", font: "400 clamp(17px,1.35vw,22px)/1.55 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>Academic, governance, data and technology systems examined as they are used, rather than as they are described.</p>
              </div>
              <div style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(24px,4vw,64px)", animation: "wkPhase linear both", animationTimeline: "--days", animationRange: "contain 50% contain 80%" }}>
                <div>
                  <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4f46e5" }}>DAYS 8–11</div>
                  <h3 style={{ margin: "12px 0 0", font: "700 clamp(28px,3.4vw,50px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.024em", color: "#0f1420" }}>Scoring</h3>
                </div>
                <p style={{ margin: "0", alignSelf: "center", font: "400 clamp(17px,1.35vw,22px)/1.55 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>The nine dimensions scored against the instrument, with the reasoning behind each judgment recorded.</p>
              </div>
              <div style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(24px,4vw,64px)", animation: "wkHold linear both", animationTimeline: "--days", animationRange: "contain 74% contain 90%" }}>
                <div>
                  <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4f46e5" }}>DAYS 12–14</div>
                  <h3 style={{ margin: "12px 0 0", font: "700 clamp(28px,3.4vw,50px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.024em", color: "#0f1420" }}>Judgment</h3>
                </div>
                <p style={{ margin: "0", alignSelf: "center", font: "400 clamp(17px,1.35vw,22px)/1.55 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>The constraints identified, the order of work set, and the report written for a governing body to argue with.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,3vw,48px) clamp(70px,8vw,120px)" }}>
        <h3 style={{ margin: "0 0 26px", font: "700 clamp(19px,1.6vw,24px)/1.2 'Plus Jakarta Sans',sans-serif", color: "#0f1420" }}>What leadership is left with</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,max(250px,30%)),1fr))", gap: "1px", background: "#c5d3e9", border: "1px solid #c5d3e9" }}>
          <div style={{ background: "#e9eff9", padding: "26px" }}>
            <div style={{ font: "500 14px/1.3 'JetBrains Mono',monospace", color: "#161c28" }}>Institutional Transformation Score</div>
            <p style={{ margin: "12px 0 0", font: "400 15px/1.55 'Plus Jakarta Sans',sans-serif", color: "#4f5b76" }}>Dimension by dimension, against a defined scale and the peer median.</p>
          </div>
          <div style={{ background: "#e9eff9", padding: "26px" }}>
            <div style={{ font: "500 14px/1.3 'JetBrains Mono',monospace", color: "#161c28" }}>Pathway readiness position</div>
            <p style={{ margin: "12px 0 0", font: "400 15px/1.55 'Plus Jakarta Sans',sans-serif", color: "#4f5b76" }}>Where you stand against the pathway you are pursuing — autonomy, university status, an accreditation cycle or NEP implementation.</p>
          </div>
          <div style={{ background: "#e9eff9", padding: "26px" }}>
            <div style={{ font: "500 14px/1.3 'JetBrains Mono',monospace", color: "#161c28" }}>Constraint identification</div>
            <p style={{ margin: "12px 0 0", font: "400 15px/1.55 'Plus Jakarta Sans',sans-serif", color: "#4f5b76" }}>The two or three constraints actually limiting the institution, and the reasoning behind that judgment.</p>
          </div>
          <div style={{ background: "#e9eff9", padding: "26px" }}>
            <div style={{ font: "500 14px/1.3 'JetBrains Mono',monospace", color: "#161c28" }}>Twelve-month order of work</div>
            <p style={{ margin: "12px 0 0", font: "400 15px/1.55 'Plus Jakarta Sans',sans-serif", color: "#4f5b76" }}>What to build immediately, what to defer, and a three-year direction.</p>
          </div>
          <div style={{ background: "#e9eff9", padding: "26px" }}>
            <div style={{ font: "500 14px/1.3 'JetBrains Mono',monospace", color: "#161c28" }}>Technology, faculty and student position</div>
            <p style={{ margin: "12px 0 0", font: "400 15px/1.55 'Plus Jakarta Sans',sans-serif", color: "#4f5b76" }}>A written view on each of the three, and on how they interact.</p>
          </div>
          <div style={{ background: "#e9eff9", padding: "26px" }}>
            <div style={{ font: "500 14px/1.3 'JetBrains Mono',monospace", color: "#161c28" }}>Recommended transformation architecture</div>
            <p style={{ margin: "12px 0 0", font: "400 15px/1.55 'Plus Jakarta Sans',sans-serif", color: "#4f5b76" }}>The architecture we would put in place, and what it would cost.</p>
          </div>
        </div>
        <p style={{ margin: "26px 0 0", maxWidth: "64ch", font: "400 italic clamp(16px,1.15vw,19px)/1.6 'Plus Jakarta Sans',sans-serif", color: "#2a3242" }}>It is a paid engagement, not a courtesy audit. That is deliberate. Free assessments are written to win the work that follows them.</p>
      </div>
    </section>
  );
}
