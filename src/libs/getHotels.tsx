export default async function getHotels() {
    const response = await fetch('http://localhost:5001/api/v1/hotels');
    if (!response.ok) throw new Error("Failed to fetch Hotels")

    return response.json();
}