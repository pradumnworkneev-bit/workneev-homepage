export default function About() {
  return (
    <section id="about" style={{ background: "#f7f7f9", padding: "clamp(70px,8vw,120px) 0" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,3vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(32px,5vw,80px)" }}>
          <div>
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "#4a5570" }}>Where Workneev came from</div>
            <h2 style={{ margin: "20px 0 0", maxWidth: "18ch", font: "700 clamp(30px,4.4vw,60px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: "-.026em", color: "#101014" }}>We started by solving the wrong problem well.</h2>
          </div>
          <div style={{ alignSelf: "end", display: "grid", gap: "16px", maxWidth: "56ch" }}>
            <p style={{ margin: "0", font: "400 clamp(16px,1.15vw,19px)/1.62 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>For years we worked with institutions on the things they were ready to buy — employability, faculty development, curriculum projects, placement outcomes. The work was good. A programme lifted a batch. A workshop was well received and genuinely useful. A curriculum project met its brief.</p>
            <p style={{ margin: "0", font: "400 clamp(16px,1.15vw,19px)/1.62 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>And the institution stayed as it was. The following year the same constraint produced the same result, and someone bought the same intervention again.</p>
            <p style={{ margin: "0", font: "400 italic clamp(16px,1.15vw,19px)/1.62 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>Eventually the more interesting question became unavoidable. What if the thing that needed work was not the intervention, but the institution underneath it? Workneev is the answer we built to that question.</p>
          </div>
        </div>
        <div id="people" style={{ marginTop: "clamp(56px,7vw,104px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,max(230px,31%)),1fr))", gap: "clamp(24px,3vw,48px)", alignItems: "start" }}>
          <div>
            <div style={{ marginTop: "0", borderTop: "1px solid #e5e5ea", paddingTop: "20px", font: "700 clamp(19px,1.6vw,24px)/1.2 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>Pradip Chetry</div>
            <div style={{ marginTop: "6px", font: "500 11px/1.4 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#4f46e5" }}>FOUNDER &amp; CHIEF EXECUTIVE</div>
            <p style={{ margin: "12px 0 0", font: "400 15px/1.6 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>Education strategist and institution builder, working across institutional transformation, education policy and technology in Indian higher education.</p>
          </div>
          <div>
            <div style={{ marginTop: "0", borderTop: "1px solid #e5e5ea", paddingTop: "20px", font: "700 clamp(19px,1.6vw,24px)/1.2 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>Pradumn Yadav</div>
            <div style={{ marginTop: "6px", font: "500 11px/1.4 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#4f46e5" }}>CO-FOUNDER &amp; MANAGING DIRECTOR</div>
          </div>
          <div style={{ background: "#ececf1", border: "1px solid #e5e5ea", padding: "clamp(22px,2.4vw,34px)", display: "flex", flexDirection: "column" }}>
            <div style={{ font: "700 clamp(19px,1.6vw,24px)/1.25 'Plus Jakarta Sans',sans-serif", color: "#101014" }}>The Workneev Expert Council</div>
            <p style={{ margin: "14px 0 0", font: "400 15px/1.6 'Plus Jakarta Sans',sans-serif", color: "#5a5a66" }}>We are assembling a council of senior academics, institutional leaders, researchers, policy specialists and technology practitioners, so that each engagement can draw on people who have done the specific thing it needs. Members will be named here as they join.</p>
            <div style={{ marginTop: "auto", paddingTop: "26px", display: "grid", gap: "8px" }}>
              <div style={{ height: "1px", background: "#e5e5ea" }} />
              <div style={{ height: "1px", background: "#e5e5ea" }} />
              <div style={{ height: "1px", background: "#e5e5ea" }} />
              <div style={{ height: "1px", background: "#e5e5ea" }} />
              <div style={{ marginTop: "10px", font: "600 10px/1.5 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#4a5570" }}>ONE INSTITUTION · SEVERAL DISCIPLINES · ONE TRANSFORMATION AGENDA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
