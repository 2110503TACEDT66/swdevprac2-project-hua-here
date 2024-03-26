export default async function getBookings(token: string) {
    const response = await fetch('http://localhost:5001/api/v1/bookings', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error("Failed to fetch bookings")

    return response.json();
}