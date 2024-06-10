import LoginCriarForm from "@/components/login/login-criar-form";
import { Metadata } from "next";

export const metadate: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta no site dogs.",
};

export default function criarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastra-se</h1>
      <LoginCriarForm />
    </div>
  );
}
