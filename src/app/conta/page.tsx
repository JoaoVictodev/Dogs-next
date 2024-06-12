import photosGEt from "@/actions/photo-get";
import userGet from "@/actions/user-get";
import Feed from "@/components/feed/feed";
import Link from "next/link";

export default async function ContaPage() {
  const { data: user } = await userGet();
  const { data } = await photosGEt({ user: user?.username });

  return (
    <section>
      {data?.length ? (
        <Feed photos={data} user={user?.username} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.15rem", marginBottom: "1rem" }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href={"conta/postar"}
            className="button"
            style={{ display: "inline-block" }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
}
