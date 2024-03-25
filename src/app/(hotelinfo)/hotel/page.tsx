import HotelCatalog from "@/components/HotelCatalog";
import getHotels from "@/libs/getHotels";

export default function Hotel(){
    const hotel = getHotels()
    return (
        <main>
            <HotelCatalog hotelJson={hotel}/>
        </main>
    )
}