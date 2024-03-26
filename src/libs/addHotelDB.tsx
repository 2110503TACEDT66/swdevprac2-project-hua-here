export default async function addHotelDB(token:string ,hotelData:HotelData) {
    const response = await fetch('http://localhost:5000/api/v1/hotels', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: hotelData.name,
            address: hotelData.address,
            district: hotelData.district,
            province: hotelData.province,
            postalcode: hotelData.postalcode,
            tel: hotelData.tel,
            region: hotelData.region,
            picture: hotelData.picture
        })
    });
    if (!response.ok) throw new Error("Failed to fetch Hotels")

    return response.json();
}