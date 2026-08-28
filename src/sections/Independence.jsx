export default function Independence() {
  return (
    <section id="independence" style={{ background: "#f1f1f4", padding: "clamp(70px,8vw,120px) 0", borderTop: "1px solid #e8e8ee" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(32px,5vw,80px)" }}>
        <div>
          <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "#4a5570" }}>Independence</div>
          <h2 style={{ margin: "20px 0 0", font: "700 clamp(30px,4.4vw,60px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.026em", color: "#101014" }}>Where our incentives sit.</h2>
          <p style={{ margin: "22px 0 0", maxWidth: "46ch", font: "400 clamp(16px,1.15vw,19px)/1.62 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>An adviser’s recommendation is shaped by how they are paid. Ours is narrow on purpose.</p>
          <div style={{ marginTop: "clamp(28px,3vw,40px)", maxWidth: "520px" }}>
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4a5570" }}>HOW AN ADVISER CAN BE PAID</div>
            <div style={{ marginTop: "20px", display: "grid", gap: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", animation: "wkFadeUp .6s .05s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 8% cover 30%" }}>
                <svg width="15" height="15" viewBox="0 0 15 15" style={{ display: "block", flex: "none" }}><path d="M1.5 1.5l12 12M13.5 1.5l-12 12" stroke="#55617c" strokeWidth="1.8" fill="none" /></svg>
                <span style={{ font: "500 13px/1.45 'JetBrains Mono',monospace", letterSpacing: ".07em", color: "#55617c", textDecoration: "line-through" }}>TECHNOLOGY COMMISSION</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", animation: "wkFadeUp .6s .15s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 8% cover 30%" }}>
                <svg width="15" height="15" viewBox="0 0 15 15" style={{ display: "block", flex: "none" }}><path d="M1.5 1.5l12 12M13.5 1.5l-12 12" stroke="#55617c" strokeWidth="1.8" fill="none" /></svg>
                <span style={{ font: "500 13px/1.45 'JetBrains Mono',monospace", letterSpacing: ".07em", color: "#55617c", textDecoration: "line-through" }}>PLACEMENT FEES</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", animation: "wkFadeUp .6s .25s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 8% cover 30%" }}>
                <svg width="15" height="15" viewBox="0 0 15 15" style={{ display: "block", flex: "none" }}><path d="M1.5 1.5l12 12M13.5 1.5l-12 12" stroke="#55617c" strokeWidth="1.8" fill="none" /></svg>
                <span style={{ font: "500 13px/1.45 'JetBrains Mono',monospace", letterSpacing: ".07em", color: "#55617c", textDecoration: "line-through" }}>A PROMISED GRADE</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", animation: "wkFadeUp .6s .35s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 8% cover 30%" }}>
                <span style={{ flex: "none", width: "15px", display: "grid", placeItems: "center" }}><span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4f46e5", display: "block" }} /></span>
                <span style={{ font: "600 13px/1.45 'JetBrains Mono',monospace", letterSpacing: ".07em", color: "#101014" }}>THE WORK ITSELF</span>
              </div>
            </div>
            <div style={{ margin: "10px 0 0 7px", height: "42px", borderLeft: "1.5px solid #101014", position: "relative" }}>
              <div style={{ position: "absolute", left: "0", right: "11px", bottom: "0", height: "1.5px", background: "#101014", transformOrigin: "0 50%", animation: "wkGrowX 1.1s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 10% cover 34%" }} />
              <span style={{ position: "absolute", right: "0", bottom: "-5px", width: "11px", height: "11px", borderRadius: "50%", background: "#4f46e5", display: "block", animation: "wkFade .5s ease-out both", animationTimeline: "view()", animationRange: "entry 24% cover 42%" }} />
            </div>
            <div style={{ margin: "16px 0 0 31px", font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".14em", color: "#4a5570" }}>WHAT WE RECOMMEND</div>
          </div>
        </div>
        <div style={{ display: "grid", gap: "0", alignContent: "start" }}>
          <div style={{ borderTop: "1px solid #e5e5ea", padding: "22px 0" }}>
            <div style={{ font: "600 clamp(18px,1.5vw,22px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>We take no commission on technology.</div>
            <p style={{ margin: "10px 0 0", font: "400 15px/1.6 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>We hold no reseller agreement with any ERP, LMS or platform vendor. If your existing systems are adequate we will say so, which is a sentence a vendor has no reason to say.</p>
          </div>
          <div style={{ borderTop: "1px solid #e5e5ea", padding: "22px 0" }}>
            <div style={{ font: "600 clamp(18px,1.5vw,22px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>We take no placement or recruitment fees.</div>
            <p style={{ margin: "10px 0 0", font: "400 15px/1.6 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>Industry relationships are institutional capability, not a transaction. Being paid per placed student would change what we recommend, so we are not.</p>
          </div>
          <div style={{ borderTop: "1px solid #e5e5ea", padding: "22px 0" }}>
            <div style={{ font: "600 clamp(18px,1.5vw,22px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>We promise no regulatory outcome.</div>
            <p style={{ margin: "10px 0 0", font: "400 15px/1.6 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>Accreditation grades, autonomy and university status are decided by regulators on evidence. We build the capability and the evidence. Be cautious of anyone who offers more than that.</p>
          </div>
          <div style={{ borderTop: "1px solid #e5e5ea", borderBottom: "1px solid #e5e5ea", padding: "22px 0" }}>
            <div style={{ font: "600 clamp(18px,1.5vw,22px)/1.3 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>We will decline the work.</div>
            <p style={{ margin: "10px 0 0", font: "400 15px/1.6 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>If the diagnostic does not justify a transformation programme, we will say so. The diagnostic is priced to stand on its own precisely so that we can afford to.</p>
          </div>
          <p style={{ margin: "22px 0 0", font: "400 italic clamp(16px,1.15vw,19px)/1.6 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>None of this is generosity. It is what makes the advice worth paying for.</p>
        </div>
      </div>
    </section>
  );
}
