/**
 * Ambient background: animated aurora blobs + a masked grid + a grain overlay.
 * Purely decorative, fixed behind all content.
 */
export default function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />

      <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px] animate-aurora dark:bg-violet-600/25" />
      <div className="absolute top-1/3 -left-24 h-[26rem] w-[26rem] rounded-full bg-indigo-500/15 blur-[110px] animate-aurora [animation-delay:-6s] dark:bg-indigo-600/20" />
      <div className="absolute bottom-0 -right-20 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-[120px] animate-aurora [animation-delay:-12s] dark:bg-fuchsia-600/15" />

      <div className="absolute inset-0 noise opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]" />
    </div>
  );
}
