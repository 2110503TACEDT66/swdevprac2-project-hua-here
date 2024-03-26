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
    hotel: {
        _id: string,
        name: string,
        province: string,
        tel: string,
        id: string
    },
    roomType: string,
    price: string,
    picture: string,
    __v: string
}

interface BookingItem {
    _id: string,
    bookingDate: string,
    bookingEnd: string,
    user: string,
    hotel: {
        _id: string,
        name: string,
        province: string,
        tel: string,
        id: string
    }
    room: {
        _id: string,
        roomNo: string,
        roomType: string
    }
    createdAt: string,
    __v: string
}
    
interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HotelItem[]
}

interface RoomJson {
    success: boolean,
    count: number,
    data: RoomItem[]
}

interface BookingJson {
    success: boolean,
    count: number,
    data: BookingItem[]
}