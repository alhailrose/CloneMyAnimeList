import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "./libs/apiLibs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title='Most Trending'
          linkTitle='See All'
          linkHref='/trending'
        />
        <AnimeList api={topAnime} />
      </section>
      {/* anime terbaru */}
    </>
  );
};

export default Page;
