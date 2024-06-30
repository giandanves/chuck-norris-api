export async function GET(req: any) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const search = searchParams.get("query");

  const res = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${search}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return Response.json(data);
}
