export default function ProductLoading() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative aspect-square w-full">
        <div className="w-full h-full bg-gradient-background animate-pulse rounded-lg" />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <div className="h-8 w-2/3 bg-gradient-background animate-pulse rounded mb-2"></div>
          <div className="h-6 w-1/4 bg-gradient-background animate-pulse rounded"></div>
        </div>

        <div className="h-24 w-full bg-gradient-background animate-pulse rounded"></div>

        <div className="h-12 w-full md:w-1/3 bg-gradient-background animate-pulse rounded"></div>
      </div>
    </section>
  );
}
