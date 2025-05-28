import { Spinner } from "@xjectro/react/components/loaders";

export function PreloadPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
