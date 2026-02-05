export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <span className="text-2xl text-foreground animate-pulse">
        Carregando...
      </span>
    </div>
  );
}