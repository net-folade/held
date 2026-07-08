/**
 * The signature element — one breathing radial gradient per page, never more.
 * Position it with the `className` (absolute offsets + size) per screen.
 */
export default function Ember({
  className,
  animation = "animate-breathe",
}: {
  className: string;
  animation?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${animation} ${className}`}
      style={{
        background:
          "radial-gradient(circle at 50% 40%, rgba(156,63,33,.45) 0%, rgba(226,141,96,.25) 45%, rgba(244,234,221,0) 72%)",
      }}
    />
  );
}
