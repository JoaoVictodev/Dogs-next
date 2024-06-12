"use client";

import { useUser } from "@/context/use-context";

export default function ContaPage() {
  const { user } = useUser();

  return (
    <main>
      <h1 className="title">Minha Conta</h1>
    </main>
  );
}
