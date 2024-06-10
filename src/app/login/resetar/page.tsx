import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resetar a sua senha.",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};
export default function ResetarPage({ searchParams }: ResetarSearchParams) {
  console.log(searchParams);

  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
