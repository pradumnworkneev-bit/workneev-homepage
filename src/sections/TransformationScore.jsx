import CountUp from '../components/CountUp.jsx';

export default function TransformationScore() {
  return (
    <section style={{ background: "#f1f1f4", padding: "clamp(70px,8vw,120px) 0", borderTop: "1px solid #e8e8ee", borderBottom: "1px solid #e8e8ee" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}>
          <div>
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "#4a5570" }}>The instrument</div>
            <h2 style={{ margin: "16px 0 0", font: "700 clamp(26px,3vw,42px)/1.08 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.022em", color: "#101014" }}>Institutional Transformation Score</h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ font: "700 clamp(52px,7vw,104px)/.88 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.04em", color: "#101014" }}><CountUp to={67} /><span style={{ fontSize: ".32em", color: "#4a5570" }}>/100</span></div>
            <div style={{ marginTop: "8px", font: "600 10px/1.5 'JetBrains Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#4a5570" }}>Illustrative. Not an actual institution’s result.</div>
          </div>
        </div>
        <p style={{ margin: "22px 0 0", maxWidth: "60ch", font: "400 16px/1.62 'Plus Jakarta Sans',sans-serif", color: "#6b6b78" }}>Composite of nine dimensions, weighted to the ambition the institution has stated. The vertical rule on each bar is the peer median, 61.</p>
        <div style={{ marginTop: "clamp(48px,4vw,60px)", position: "relative" }}>
          <div data-bar="83" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "0", padding: "9px 0", borderTop: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#33333d" }}>Quality &amp; Institutional Excellence</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }}>
                  <div style={{ position: "absolute", left: "0", bottom: "100%", marginBottom: "8px", transform: "translateX(-50%)", whiteSpace: "nowrap", font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#0f6b32" }}>PEER MEDIAN 61</div>
                </div>
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "83%", background: "#46536f", transformOrigin: "0 50%", animation: "wkGrowX 1.1s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "400 13px/1 'JetBrains Mono',monospace", color: "#33333d" }}>83</div>
            </div>
          </div>
          <div data-bar="79" style={{ padding: "9px 0", borderTop: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#33333d" }}>Academic &amp; Curriculum Architecture</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }} />
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "79%", background: "#46536f", transformOrigin: "0 50%", animation: "wkGrowX 1.1s .05s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "400 13px/1 'JetBrains Mono',monospace", color: "#33333d" }}>79</div>
            </div>
          </div>
          <div data-bar="73" style={{ padding: "9px 0", borderTop: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#33333d" }}>Faculty &amp; Academic Capability</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }} />
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "73%", background: "#46536f", transformOrigin: "0 50%", animation: "wkGrowX 1.1s .1s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "400 13px/1 'JetBrains Mono',monospace", color: "#33333d" }}>73</div>
            </div>
          </div>
          <div data-bar="72" style={{ padding: "9px 0", borderTop: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#33333d" }}>Digital, Data &amp; Institutional Technology</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }} />
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "72%", background: "#46536f", transformOrigin: "0 50%", animation: "wkGrowX 1.1s .15s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "400 13px/1 'JetBrains Mono',monospace", color: "#33333d" }}>72</div>
            </div>
          </div>
          <div data-bar="68" style={{ padding: "9px 0", borderTop: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#33333d" }}>Student Success &amp; Employability</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }} />
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "68%", background: "#46536f", transformOrigin: "0 50%", animation: "wkGrowX 1.1s .2s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "400 13px/1 'JetBrains Mono',monospace", color: "#33333d" }}>68</div>
            </div>
          </div>
          <div data-bar="66" style={{ padding: "9px 0", borderTop: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#33333d" }}>Research, Innovation &amp; Entrepreneurship</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }} />
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "66%", background: "#46536f", transformOrigin: "0 50%", animation: "wkGrowX 1.1s .25s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "400 13px/1 'JetBrains Mono',monospace", color: "#33333d" }}>66</div>
            </div>
          </div>
          <div data-bar="58" style={{ padding: "9px 0", borderTop: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>Strategy, Transformation &amp; Governance</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }} />
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "58%", background: "#4f46e5", transformOrigin: "0 50%", animation: "wkGrowX 1.1s .3s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
                <div style={{ position: "absolute", left: "calc(58% + 12px)", top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap", font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#4f46e5", animation: "wkFade .6s .9s ease both", animationTimeline: "view()", animationRange: "entry 4% cover 26%" }}>THIRD</div>
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "500 13px/1 'JetBrains Mono',monospace", color: "#4f46e5" }}>58</div>
            </div>
          </div>
          <div data-bar="52" style={{ padding: "9px 0", borderTop: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>Industry &amp; Talent Ecosystem</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }} />
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "52%", background: "#4f46e5", transformOrigin: "0 50%", animation: "wkGrowX 1.1s .35s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
                <div style={{ position: "absolute", left: "calc(52% + 12px)", top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap", font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#4f46e5", animation: "wkFade .6s .95s ease both", animationTimeline: "view()", animationRange: "entry 4% cover 26%" }}>SECOND</div>
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "500 13px/1 'JetBrains Mono',monospace", color: "#4f46e5" }}>52</div>
            </div>
          </div>
          <div data-bar="47" style={{ padding: "9px 0", borderTop: "1px solid #e8e8ee", borderBottom: "1px solid #e8e8ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ flex: "none", width: "clamp(150px,17vw,280px)", font: "400 clamp(12px,.95vw,14px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>Autonomy, Growth &amp; University Readiness</div>
              <div style={{ flex: "1", position: "relative", height: "22px", background: "#e6e6ec" }}>
                <div style={{ position: "absolute", left: "61%", top: "-4px", bottom: "-4px", width: "1px", background: "#16a34a", zIndex: "3" }} />
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: "47%", background: "#4f46e5", transformOrigin: "0 50%", animation: "wkGrowX 1.1s .4s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 4% cover 22%" }} />
                <div style={{ position: "absolute", left: "calc(47% + 12px)", top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap", font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#4f46e5", animation: "wkFade .6s 1s ease both", animationTimeline: "view()", animationRange: "entry 4% cover 26%" }}>FIRST</div>
              </div>
              <div style={{ flex: "none", width: "52px", textAlign: "right", font: "500 13px/1 'JetBrains Mono',monospace", color: "#4f46e5" }}>47</div>
            </div>
          </div>
        </div>
        <p style={{ margin: "22px 0 0", maxWidth: "66ch", font: "400 15px/1.62 'Plus Jakarta Sans',sans-serif", color: "#6b6b78" }}>Marked in <span style={{ color: "#4f46e5" }}>indigo</span>: the two or three constraints this institution would be told to address first, and in what order. Everything else is capable of waiting. The ordering, not the list, is the deliverable.</p>
      </div>
    </section>
  );
}
