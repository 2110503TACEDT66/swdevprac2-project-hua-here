import HotelCatalog from "@/components/HotelCatalog";
import getHotels from "@/libs/getHotels";
import LinearProgress from "@mui/material/LinearProgress";
import { Suspense } from "react";

export default function Hotel(){
    const hotel = getHotels()
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium text-pink-200">Hotels</h1>
            <Suspense fallback = {<h3 className="text-red-400">Loading...<LinearProgress /></h3>}>
                <HotelCatalog hotelJson={hotel} />
            </Suspense>
        </main>
    )
}