export async function GET() {
  const res = await fetch("https://api.chucknorris.io/jokes/categories");
  const data = await res.json();

  return Response.json(data);
}
