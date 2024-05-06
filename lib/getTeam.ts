export default async function getTeams() {
  try {
    const api_url = `https://dashboard.acce-abuja.com/api/teams`;
    const res = await fetch(api_url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Cannot get teams");
    }

    return res.json();
  } catch (error) {
    // You can handle the error here, log it, or return a default value
    console.error("Error fetching posts:", error);
    return []; // Returning an empty array as a default value
  }
}
