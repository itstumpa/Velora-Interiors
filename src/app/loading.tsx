export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Logo Skeleton */}
      <div className="mb-8 h-10 w-48 animate-pulse rounded bg-background-alt" />

      {/* Content Skeletons */}
      <div className="space-y-4">
        <div className="h-6 w-64 animate-pulse rounded bg-background-alt" />
        <div className="h-4 w-48 animate-pulse rounded bg-background-alt" />
        <div className="h-4 w-40 animate-pulse rounded bg-background-alt" />
      </div>

      {/* Spinner */}
      <div className="mt-8">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
