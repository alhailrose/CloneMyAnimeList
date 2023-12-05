import { getAnimeResponse } from "@/app/libs/apiLibs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Search For ${decodeKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
      {/* anime terbaru */}
    </>
  );
};

export default Page;
