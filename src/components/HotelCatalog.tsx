import Card from "./Card";
import Link from "next/link";




export default async function HotelCatalog({hotelJson}:{hotelJson:Promise<HotelJson>}){
    const hotelJsonReady = await hotelJson
    
    return(
      <div className="m-20 flex flex-row justify-around felx-wrap gap-6">
        {
            hotelJsonReady?.data.map((HotelItems)=>(
                <Link href={`/hotel/${HotelItems.id}`} className="w-1/5">
                <Card hotelName={HotelItems.name} imgSrc={HotelItems.picture} key={HotelItems.id} ></Card>
                </Link>
                ))
        }
      </div>
    )
}