export default async function addBooking(token:string ,bookingData:BookingData) {
    const response = await fetch(`http://localhost:5000/api/v1/hotels/${bookingData.hid}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            room: bookingData.roomid,
            bookingDate: bookingData.bDate,
            bookingEnd: bookingData.bEnd
        })
    });
    console.log(response)

    return response.json();
}