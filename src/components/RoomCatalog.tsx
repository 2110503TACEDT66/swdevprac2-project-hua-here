import Card from "./Card";
import Link from "next/link";


export default async function RoomCatalog({roomJson}:{roomJson:Promise<RoomJson>}){
    const roomJsonReady = await roomJson
    return (
        <div className="m-5 flex flex-row flex-wrap justify-around content-around p-2.5">
        {
            roomJsonReady.data.map((RoomItem)=>(
                <Link href={`/rooms/${RoomItem._id}`} className="w-1/5" key={RoomItem._id}>
                  <Card hotelName={RoomItem.roomNo} imgSrc={RoomItem.picture} />
                </Link>
            ))
        }
        </div>
    )
}