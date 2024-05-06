export default async function getPosts() {
  try {
    const api_url = `https://dashboard.acce-abuja.com/api/posts`;
    const res = await fetch(api_url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Cannot get posts");
    }

    return res.json();
  } catch (error) {
    // You can handle the error here, log it, or return a default value
    console.error("Error fetching posts:", error);
    return []; // Returning an empty array as a default value
  }
}
