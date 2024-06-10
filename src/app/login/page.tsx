import LoginForm from "@/components/login/login-form";
import { Metadata } from "next";

export const metadate: Metadata = {
  title: "Login | Dogs",
  description: "Logue na sua conta no site Dogs",
};

export default function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
}
