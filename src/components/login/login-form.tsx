import login from "@/actions/login";

export default function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />
        <button>Entrar</button>
      </form>
    </>
  );
}
