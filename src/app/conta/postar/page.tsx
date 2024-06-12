import ContaPhotoPost from "@/components/conta/conta-photo-post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export default function PostarPage() {
  return (
    <main>
      <ContaPhotoPost />
    </main>
  );
}
