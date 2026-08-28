export default function ScrollProgress() {
  return (
    <div style={{ position: "fixed", top: "0", left: "0", right: "0", height: "2px", zIndex: "60", background: "transparent" }}>
      <div style={{ height: "100%", background: "#4f46e5", transformOrigin: "0 50%", animation: "wkGrowX linear", animationTimeline: "scroll(root block)" }} />
    </div>
  );
}
