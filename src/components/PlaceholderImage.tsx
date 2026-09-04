import { Camera } from "@phosphor-icons/react/dist/ssr";

type PlaceholderImageProps = {
  label: string;
  className?: string;
};

/**
 * Explicit placeholder for photography not yet supplied by the client.
 * Never used to fake a real photo: label always visible.
 */
export function PlaceholderImage({ label, className }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden border border-dashed border-ink-500 bg-ink-800 px-6 text-center ${className ?? ""}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          color: "#F0B429",
        }}
      />
      <Camera className="h-7 w-7 text-paper-500" weight="light" />
      <p className="max-w-[22ch] text-sm font-medium text-paper-500">
        Photo à venir
        <span className="mt-1 block text-xs font-normal text-paper-500/70">
          {label}
        </span>
      </p>
    </div>
  );
}
