export default async function getPostBySlug(slug: string) {
  const api_url = `https://dashboard.acce-abuja.com/api/post/${slug}`;
  const res = await fetch(api_url, { cache: "no-store" });

  if (!res.ok) throw new Error("Cannot get post");

  return res.json();
}
