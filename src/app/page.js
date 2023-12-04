import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
  );
  const topAnime = await response.json();

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
