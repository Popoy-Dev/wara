export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-5 sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 lg:w-3/4 lg:h-3/4 w-3/4 h-3/4 row-start-2 items-center sm:items-start">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://cloud.onlinegames.io/games/2024/construct/289/egg-car-racing/index-og.html"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}
