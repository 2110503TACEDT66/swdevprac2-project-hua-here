interface HotelItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    region: string,
    picture: string,
    __v: number,
    rooms: RoomItem[],
    bookings: BookingItem[],
    id: string
}

interface RoomItem {
    _id: string,
    roomNo: string,
    hotel: string,
    roomType: string,
    price: string,
    picture: string,
    __v: string
}
interface RoomJson{
    data: RoomItem[]
}

interface BookingItem {
    _id: string,
    bookingDate: string,
    bookingEnd: string,
    user: string,
    hotel: string,
    room: string,
    createdAt: string,
    __v: string
}
    
interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HotelItem[]
}