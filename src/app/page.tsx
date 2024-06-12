import photosGEt from "@/actions/photo-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const { data } = await photosGEt();

  return (
    <section className="container mainContainer">
      {data && <Feed photos={data} />}
    </section>
  );
}
