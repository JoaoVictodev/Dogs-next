export default function UserPage({ params }: { params: { user: string } }) {
  return (
    <main>
      <h1 className="title">User Page: {params.user}</h1>
    </main>
  );
}
