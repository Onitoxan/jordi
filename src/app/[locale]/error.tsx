"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {error.message}
      <button onClick={reset}>RESET</button>
    </main>
  );
}
