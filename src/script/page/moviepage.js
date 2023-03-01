export const moviePage = () => {
  document.getElementById('mainshown').innerHTML +=
    `
    <h2 class="p-3 text-center border-black border-y-4 text-4xl">Latest</h2>
    <div id="popular" class="gap-4 p-3 flex overflow-x-scroll scrollbar-hide"></div>
    <h2 class="p-3 text-center border-black border-y-4 text-4xl">Top Rated</h2>
    <div id="toprated" class="gap-4 p-3 flex overflow-x-scroll scrollbar-hide"></div>
    <h2 class="p-3 text-center border-black border-y-4 text-4xl">Upcoming</h2>
    <div id="upcoming" class="gap-4 p-3 flex overflow-x-scroll scrollbar-hide"></div>
    `
}
