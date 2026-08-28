export default function SystemsView() {
  return (
    <section style={{ background: "#e9eff9", color: "#141a26", timelineScope: "--sys" }}>
      <div style={{ viewTimelineName: "--sys", viewTimelineAxis: "block", height: "360vh", position: "relative" }}>
        <div style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ maxWidth: "1360px", width: "100%", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)", display: "flex", flexDirection: "column", gap: "clamp(18px,3vh,42px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "clamp(18px,3vw,56px)", alignItems: "start" }}>
              <div>
                <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "#56627d" }}>Why effort stops compounding</div>
                <h2 style={{ margin: "22px 0 0", font: "700 clamp(25px,2.8vw,42px)/1.08 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.025em", color: "#0f1420", textWrap: "balance" }}>Institutions do not transform one piece at a time. They change as systems.</h2>
              </div>
              <div style={{ position: "relative", minHeight: "128px" }}>
                <div style={{ position: "absolute", inset: "0", animation: "wkPhase linear both", animationTimeline: "--sys", animationRange: "contain 0% contain 34%" }}>
                  <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4f46e5" }}>01 &nbsp;ONE PIECE STRENGTHENED</div>
                  <p style={{ margin: "14px 0 0", font: "400 clamp(16px,1.2vw,19px)/1.58 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>You can run a well-designed faculty development programme and see nothing change in the classroom, because the academic structure never gave anyone room to teach differently.</p>
                </div>
                <div style={{ position: "absolute", inset: "0", animation: "wkPhase linear both", animationTimeline: "--sys", animationRange: "contain 28% contain 60%" }}>
                  <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4f46e5" }}>02 &nbsp;AND ANOTHER</div>
                  <p style={{ margin: "14px 0 0", font: "400 clamp(16px,1.2vw,19px)/1.58 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>You can build industry relationships that produce nothing, because no one owns the curriculum they were meant to inform. You can install a capable system and still be unable to answer a simple question about your own institution.</p>
                </div>
                <div style={{ position: "absolute", inset: "0", animation: "wkPhase linear both", animationTimeline: "--sys", animationRange: "contain 54% contain 82%" }}>
                  <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4f46e5" }}>03 &nbsp;AND IT FALLS BACK</div>
                  <p style={{ margin: "14px 0 0", font: "400 clamp(16px,1.2vw,19px)/1.58 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>You can lift a placement percentage for one batch and watch it fall back the next, because nothing underneath it changed. None of this is a failure of effort.</p>
                </div>
                <div style={{ position: "absolute", inset: "0", animation: "wkHold linear both", animationTimeline: "--sys", animationRange: "contain 76% contain 92%" }}>
                  <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#116932" }}>04 &nbsp;IN ORDER, AS A SYSTEM</div>
                  <p style={{ margin: "14px 0 0", font: "400 clamp(16px,1.2vw,19px)/1.58 'Plus Jakarta Sans',sans-serif", color: "#252d3d" }}>A great deal of activity; very little that compounds. That distance — between the institution you have and the institution you intend — is what we work on. Not one department of it.</p>
                </div>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "clamp(230px,56vh,600px)", display: "block", overflow: "visible" }}>
                <g stroke="#becde6" strokeWidth="1.2" fill="none" strokeDasharray="900" style={{ animation: "wkDraw linear both", animationTimeline: "--sys", animationRange: "contain 0% contain 10%", "--dash": "900" }}>
                  <path d="M500 90 250 200M500 90 640 265M500 90 830 165M500 90 560 480M250 200 640 265M250 200 420 345M250 200 180 430M640 265 420 345M640 265 790 400M420 345 790 400M420 345 560 480M420 345 330 525M180 430 560 480M560 480 330 525M830 165 560 480M790 400 330 525M180 430 330 525" />
                </g>
                <g opacity="0" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 3% contain 10%" }}>
                  <g fill="#ffffff" stroke="#b1c3de" strokeWidth="1.2">
                    <circle cx="500" cy="90" r="17" />
                    <circle cx="250" cy="200" r="17" />
                    <circle cx="640" cy="265" r="17" />
                    <circle cx="830" cy="165" r="17" />
                    <circle cx="420" cy="345" r="17" />
                    <circle cx="180" cy="430" r="17" />
                    <circle cx="790" cy="400" r="17" />
                    <circle cx="560" cy="480" r="17" />
                    <circle cx="330" cy="525" r="17" />
                  </g>
                  <g fontFamily="'JetBrains Mono',monospace" fontSize="11" letterSpacing="1.2" fill="#5f6b86">
                    <text x="500" y="62" textAnchor="middle">GOVERNANCE</text>
                    <text x="222" y="196" textAnchor="end">ACADEMIC</text>
                    <text x="668" y="261" textAnchor="start">FACULTY</text>
                    <text x="858" y="161" textAnchor="start">AUTONOMY</text>
                    <text x="392" y="341" textAnchor="end">STUDENT</text>
                    <text x="152" y="426" textAnchor="end">RESEARCH</text>
                    <text x="818" y="396" textAnchor="start">INDUSTRY</text>
                    <text x="588" y="476" textAnchor="start">QUALITY</text>
                    <text x="330" y="566" textAnchor="middle">DIGITAL</text>
                  </g>
                </g>
                <g opacity="0" style={{ animation: "wkPhase linear both", animationTimeline: "--sys", animationRange: "contain 6% contain 36%" }}>
                  <circle cx="640" cy="265" r="17" fill="#4f46e5" />
                  <circle cx="640" cy="265" r="30" fill="none" stroke="#4f46e5" strokeWidth="1" opacity=".45" />
                  <g stroke="#b6c1d6" strokeWidth="1.2"><path d="M640 265 500 90M640 265 250 200M640 265 420 345M640 265 790 400" /></g>
                  <g stroke="#7d8ba9" strokeWidth="1.6"><path d="M566 172 l10 10M576 172 l-10 10M441 227 l10 10M451 227 l-10 10M525 300 l10 10M535 300 l-10 10M710 328 l10 10M720 328 l-10 10" /></g>
                </g>
                <g opacity="0" style={{ animation: "wkPhase linear both", animationTimeline: "--sys", animationRange: "contain 28% contain 60%" }}>
                  <circle cx="790" cy="400" r="17" fill="#4f46e5" />
                  <circle cx="330" cy="525" r="17" fill="#4f46e5" />
                  <circle cx="790" cy="400" r="30" fill="none" stroke="#4f46e5" strokeWidth="1" opacity=".45" />
                  <g stroke="#b6c1d6" strokeWidth="1.2" fill="none"><path d="M790 400 420 345M790 400 640 265M330 525 180 430M330 525 560 480" /></g>
                  <g stroke="#7d8ba9" strokeWidth="1.6"><path d="M600 367 l10 10M610 367 l-10 10M710 327 l10 10M720 327 l-10 10M250 472 l10 10M260 472 l-10 10M440 497 l10 10M450 497 l-10 10" /></g>
                </g>
                <g opacity="0" style={{ animation: "wkPhase linear both", animationTimeline: "--sys", animationRange: "contain 54% contain 82%" }}>
                  <circle cx="420" cy="345" r="17" fill="#4f46e5" />
                  <circle cx="420" cy="345" r="31" fill="none" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3 5" opacity=".6" />
                  <circle cx="420" cy="345" r="46" fill="none" stroke="#7d8ba9" strokeWidth="1" strokeDasharray="2 9" opacity=".55" />
                  <g stroke="#b6c1d6" strokeWidth="1.2" fill="none"><path d="M420 345 250 200M420 345 560 480M420 345 330 525" /></g>
                  <g stroke="#7d8ba9" strokeWidth="1.6"><path d="M330 267 l10 10M340 267 l-10 10M485 407 l10 10M495 407 l-10 10M370 430 l10 10M380 430 l-10 10" /></g>
                  <g stroke="#4f46e5" strokeWidth="1.4" fill="none"><path d="M420 396 v30M412 418 l8 9 8 -9" /></g>
                </g>
                <g opacity="0" style={{ animation: "wkHold linear both", animationTimeline: "--sys", animationRange: "contain 74% contain 84%" }}>
                  <g stroke="#16a34a" strokeWidth="1.6" fill="none" strokeDasharray="900" style={{ animation: "wkDraw linear both", animationTimeline: "--sys", animationRange: "contain 74% contain 92%", "--dash": "900" }}>
                    <path d="M500 90 250 200M500 90 640 265M500 90 830 165M500 90 560 480M250 200 640 265M250 200 420 345M250 200 180 430M640 265 420 345M640 265 790 400M420 345 790 400M420 345 560 480M420 345 330 525M180 430 560 480M560 480 330 525M830 165 560 480M790 400 330 525M180 430 330 525" />
                  </g>
                  <g fill="#16a34a">
                    <circle cx="500" cy="90" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 76% contain 79%" }} />
                    <circle cx="250" cy="200" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 78% contain 81%" }} />
                    <circle cx="640" cy="265" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 80% contain 83%" }} />
                    <circle cx="420" cy="345" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 82% contain 85%" }} />
                    <circle cx="830" cy="165" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 84% contain 87%" }} />
                    <circle cx="180" cy="430" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 86% contain 89%" }} />
                    <circle cx="790" cy="400" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 88% contain 91%" }} />
                    <circle cx="560" cy="480" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 90% contain 93%" }} />
                    <circle cx="330" cy="525" r="17" style={{ animation: "wkFade linear both", animationTimeline: "--sys", animationRange: "contain 92% contain 95%" }} data-last="1" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
