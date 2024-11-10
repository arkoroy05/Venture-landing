import Globe from "@/app/components/ui/globe";

export function Connect() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-20 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <Globe className="top-28 w-[80%] h-[80%]" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
