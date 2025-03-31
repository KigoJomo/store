export default function CollectionLoading() {
  return (
    <section className="flex flex-col gap-8">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <div className="w-full h-full bg-gradient-background animate-pulse" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background/90 to-transparent">
          <div className="h-10 w-1/3 bg-gradient-background animate-pulse rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-gradient-background animate-pulse rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-background-light rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-background animate-pulse"></div>
              <div className="p-4">
                <div className="h-4 w-2/3 bg-gradient-background animate-pulse rounded mb-2"></div>
                <div className="h-4 w-1/3 bg-gradient-background animate-pulse rounded"></div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
