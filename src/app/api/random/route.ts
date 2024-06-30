export async function GET(req: any) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const category = searchParams.get("category");
  const endpoint = category
    ? `https://api.chucknorris.io/jokes/random?category=${category}`
    : `https://api.chucknorris.io/jokes/random`;
  const res = await fetch(endpoint, {
    cache: "no-store",
  });
  const data = await res.json();

  return Response.json(data.value);
}
