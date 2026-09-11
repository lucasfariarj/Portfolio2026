type MockupKind = "analytics" | "ecommerce" | "ai";

function AnalyticsMockup() {
  const bars = [40, 65, 35, 80, 55, 90, 48, 70];
  return (
    <div className="flex h-full flex-col justify-between bg-gradient-to-br from-slate-100 to-slate-200 p-4 text-slate-900">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold">Welcome, Employer!</p>
        <span className="rounded bg-white/70 px-2 py-0.5 text-[9px] font-medium text-slate-500">
          search...
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["5", "42", "85%", "1,502"].map((v) => (
          <div key={v} className="rounded-md bg-white/80 p-2">
            <p className="text-sm font-bold">{v}</p>
          </div>
        ))}
      </div>
      <div className="flex h-16 items-end gap-1.5 rounded-md bg-white/60 p-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-accent/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function EcommerceMockup() {
  const bars = [20, 55, 90, 60, 30, 75, 45, 65, 25, 50];
  return (
    <div className="flex h-full flex-col justify-between bg-slate-950 p-4">
      <p className="font-mono-label text-[10px] text-emerald-400">
        USERS: LAST 7 DAYS · MEDIAN
      </p>
      <div className="flex h-16 items-end gap-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-cyan-400/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="h-10 w-full rounded-md border border-white/10" />
    </div>
  );
}

function AiMockup() {
  return (
    <div className="flex h-full flex-col justify-between bg-neutral-950 p-4">
      <p className="text-xs font-medium text-white">✦ Hello</p>
      <p className="text-sm text-white/70">Where should we start?</p>
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2">
        <span className="text-[11px] text-white/40">Ask Gemini</span>
        <span className="h-4 w-4 rounded-full bg-accent/70" />
      </div>
    </div>
  );
}

export default function ProjectMockup({ kind }: { kind: MockupKind }) {
  if (kind === "analytics") return <AnalyticsMockup />;
  if (kind === "ecommerce") return <EcommerceMockup />;
  return <AiMockup />;
}
