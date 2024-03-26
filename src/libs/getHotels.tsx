export default async function getHotels() {
    const response = await fetch('http://localhost:5000/api/v1/hotels', { next: {tags: ['hotels']}});
    if (!response.ok) throw new Error("Failed to fetch Hotels")

    return response.json();
}