import RoomCatalog from "@/components/RoomCatalog";
import getHotel from "@/libs/getHotel";
import getRoomForHotel from "@/libs/getRoom";
import Image from "next/image";

export default async function HotelDetailPage({params}:{params:{hid:string}}){
    const hotelDetail = await getHotel(params.hid)
    const roomDetail = await getRoomForHotel(params.hid)

    return(
        <main >
            <div className="flex flex-row my-5">
                <div><Image src={hotelDetail.data.picture}
                alt="Hotel"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg w-[30%] text-sky-400" />
                </div>
                <div>
                    <div className="text-medium mx-5 text-black text-left">{hotelDetail.data.name} </div>
                    <div className="text-medium mx-5 text-black"> address : {hotelDetail.data.address}</div>
                    <div className="text-medium mx-5 text-black"> tel : {hotelDetail.data.tel}</div>
                </div>
            </div>
            <div className="flex flex-row">
                <RoomCatalog roomJson={roomDetail} />
            </div>
        </main>
    )
}