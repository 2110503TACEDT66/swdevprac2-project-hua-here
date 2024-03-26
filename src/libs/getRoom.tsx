export default async function getRoomForHotel(hid: string) {
    const response = await fetch(`http://localhost:5000/api/v1/hotels/${hid}/rooms`);
    if (!response.ok) throw new Error("Failed to fetch hotel id: " + hid);

    return await response.json();
}