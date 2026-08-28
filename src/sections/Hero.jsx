export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", background: "#e9eff9", color: "#141a26", overflow: "hidden", padding: "clamp(44px,5vw,76px) 0 clamp(36px,4vw,58px)" }}>
      <div style={{ position: "absolute", inset: "-10% -5%", opacity: ".5", animation: "wkDrift linear", animationTimeline: "view()", animationRange: "cover 0% cover 100%" }}>
        <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
          <g stroke="#cad7eb" strokeWidth="1" fill="none">
            <path d="M120 0V1000M320 0V1000M520 0V1000M720 0V1000M920 0V1000M1120 0V1000M1320 0V1000M1520 0V1000" stroke="#e4ebf7" />
          </g>
        </svg>
      </div>
      <div style={{ position: "relative", maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,430px),1fr))", gap: "clamp(32px,5vw,80px)", alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", opacity: "0", animation: "wkFade .8s .05s ease-out forwards" }}>
            <span style={{ width: "34px", height: "1px", background: "#4f46e5", display: "block" }} />
            <span style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".18em", textTransform: "uppercase", color: "#4f5b76" }}>Institutional transformation · Indian higher education</span>
          </div>
          <h1 style={{ margin: "20px 0 0", font: "700 clamp(28px,2.7vw,46px)/1.08 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.028em", color: "#0f1420", textWrap: "pretty", opacity: "0", animation: "wkFadeUp 1.1s .12s cubic-bezier(.16,1,.3,1) forwards" }}>Most Indian higher-education institutions know what they want to become.<span style={{ display: "block", color: "#4f46e5" }}>Far fewer know what it will take to get there.</span></h1>
          <p style={{ margin: "24px 0 0", maxWidth: "62ch", font: "400 clamp(15px,1.12vw,17.5px)/1.58 'Plus Jakarta Sans',sans-serif", color: "#374057", opacity: "0", animation: "wkFadeUp 1.1s .28s cubic-bezier(.16,1,.3,1) forwards" }}>Workneev is an institutional transformation partner. We work with college and university leadership to see the institution as it actually is, identify the two or three constraints that matter first, and build both the capability and the evidence over the years that takes.</p>
          <p style={{ margin: "16px 0 0", maxWidth: "58ch", font: "400 14px/1.6 'Plus Jakarta Sans',sans-serif", color: "#55617c", opacity: "0", animation: "wkFadeUp 1.1s .38s cubic-bezier(.16,1,.3,1) forwards" }}>From NEP 2020 to autonomy, accreditation and university status — we work on the institution underneath the paperwork.</p>
          <div style={{ margin: "30px 0 0", display: "flex", flexWrap: "wrap", gap: "12px", opacity: "0", animation: "wkFadeUp 1s .5s cubic-bezier(.16,1,.3,1) forwards" }}>
            <a href="#contact" style={{ font: "500 12px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#ffffff", background: "#4f46e5", padding: "14px 24px" }}>Start a conversation</a>
            <a href="#method" style={{ font: "500 12px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#232b3b", border: "1px solid #b3c4e0", padding: "14px 24px" }}>How we work</a>
          </div>
        </div>
        <div style={{ width: "100%", maxWidth: "min(100%,400px)", marginInline: "auto", opacity: "0", animation: "wkFade 1.4s .4s ease-out forwards" }}>
          <div style={{ aspectRatio: "1", width: "100%" }}>
            <svg viewBox="0 0 520 520" style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}>
              <g transform="translate(260,260)">
                <g stroke="#cad7eb" fill="none" strokeWidth="1">
                  <circle r="60" />
                  <circle r="105" />
                  <circle r="150" />
                  <circle r="195" />
                  <circle r="228" stroke="#c1d0e8" />
                </g>
                <g stroke="#c5d3e9" strokeWidth="1">
                  <line y2="-228" />
                  <line y2="-228" transform="rotate(40)" />
                  <line y2="-228" transform="rotate(80)" />
                  <line y2="-228" transform="rotate(120)" />
                  <line y2="-228" transform="rotate(160)" />
                  <line y2="-228" transform="rotate(200)" />
                  <line y2="-228" transform="rotate(240)" />
                  <line y2="-228" transform="rotate(280)" />
                  <line y2="-228" transform="rotate(320)" />
                </g>
                <g style={{ animation: "wkTurn 160s linear infinite", transformOrigin: "0 0" }}>
                  <circle r="228" fill="none" stroke="#b1c3de" strokeWidth="1" strokeDasharray="2 14" />
                </g>
                <polygon points="0,-132 132,-48 122,80 0,140 -87,105 -139,4 -108,-84 -60,-125 -46,-64" fill="rgba(22,163,74,.10)" stroke="#16a34a" strokeWidth="1.4" strokeDasharray="1400" style={{ animation: "wkDraw 2.2s .6s cubic-bezier(.4,0,.2,1) forwards, wkFade .6s .6s ease-out backwards", "--dash": "1400" }} />
                <polygon points="0,-107 102,-37 95,62 0,109 -68,82 -108,3 -84,-65 -47,-97 -36,-50" fill="none" stroke="#93a1bd" strokeWidth="1" strokeDasharray="4 5" opacity="0" style={{ animation: "wkFade .8s 2.4s ease-out forwards" }} />
                <g opacity="0" style={{ animation: "wkFade .7s 2.1s ease-out forwards" }}>
                  <circle cx="0" cy="-132" r="4" fill="#16a34a" />
                  <circle cx="132" cy="-48" r="4" fill="#16a34a" />
                  <circle cx="122" cy="80" r="4" fill="#16a34a" />
                  <circle cx="0" cy="140" r="4" fill="#16a34a" />
                  <circle cx="-87" cy="105" r="4" fill="#16a34a" />
                  <circle cx="-139" cy="4" r="5.5" fill="#4f46e5" />
                  <circle cx="-108" cy="-84" r="5.5" fill="#4f46e5" />
                  <circle cx="-60" cy="-125" r="4" fill="#16a34a" />
                  <circle cx="-46" cy="-64" r="5.5" fill="#4f46e5" />
                </g>
                <g fontFamily="'JetBrains Mono',monospace" fontSize="9" letterSpacing="1.4" fill="#4a5570" opacity="0" style={{ animation: "wkFade 1s 2.5s ease-out forwards" }}>
                  <text x="0" y="-244" textAnchor="middle">STRATEGY</text>
                  <text x="168" y="-72" textAnchor="start">AUTONOMY</text>
                  <text x="160" y="106" textAnchor="start">ACADEMIC</text>
                  <text x="0" y="256" textAnchor="middle">FACULTY</text>
                  <text x="-160" y="196" textAnchor="end">STUDENT</text>
                  <text x="-244" y="8" textAnchor="end">INDUSTRY</text>
                  <text x="-196" y="-150" textAnchor="end">RESEARCH</text>
                  <text x="-58" y="-244" textAnchor="middle">QUALITY</text>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ marginTop: "34px", font: "600 10px/1.6 'JetBrains Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#4a5570", opacity: "0", animation: "wkFade 1s 2.7s ease-out forwards" }}>The instrument — nine dimensions<br /><span style={{ color: "#4f46e5" }}>▪</span> constraints &nbsp; <span style={{ color: "#4a5570" }}>┈</span> peer median &nbsp; illustrative</div>
        </div>
      </div>
      <div style={{ position: "relative", maxWidth: "1360px", margin: "clamp(40px,5vw,72px) auto 0", padding: "0 clamp(20px,3vw,48px)" }}>
        <div style={{ borderTop: "1px solid #c5d3e9", paddingTop: "26px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "clamp(20px,3vw,44px)" }}>
          <p style={{ margin: "0", gridColumn: "span 2", maxWidth: "62ch", font: "400 clamp(16px,1.15vw,19px)/1.62 'Plus Jakarta Sans',sans-serif", color: "#48546f" }}>A first conversation is forty-five minutes with your chairman, vice-chancellor, principal or governing board. We ask three things: what you are trying to build, what you have already tried, and what stopped it. <em style={{ color: "#232a3a" }}>We do not present.</em></p>
          <div>
            <div style={{ font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "#5c6883" }}>Who we work with</div>
            <ul style={{ margin: "14px 0 0", padding: "0", listStyle: "none", display: "grid", gap: "7px", font: "500 14px/1.4 'Plus Jakarta Sans',sans-serif", color: "#3b4459" }}>
              <li>Private and autonomous colleges</li>
              <li>Private and state universities</li>
              <li>Institutions pursuing autonomy</li>
              <li>Institutions preparing for university status</li>
              <li>Education groups and trusts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
