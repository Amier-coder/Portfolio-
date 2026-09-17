export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />
      <div className="bg-grid mask-fade-y absolute inset-0 opacity-60" />

      <div className="animate-blob absolute -left-32 top-[-10%] h-[520px] w-[520px] rounded-full bg-primary-600/20 blur-[130px]" />
      <div
        className="animate-blob absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full bg-accent-500/15 blur-[130px]"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="animate-blob absolute bottom-[-15%] left-[30%] h-[520px] w-[520px] rounded-full bg-fuchsia-600/15 blur-[140px]"
        style={{ animationDelay: "5s" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-base/0 via-base/40 to-base" />
    </div>
  );
}
