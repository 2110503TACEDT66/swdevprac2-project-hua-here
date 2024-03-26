import getRoomForHotel from "@/libs/getRoom";
import CheckIncheckoutDate from "@/components/CheckIncheckOutdate";

export default async function BookingPage({params} : {params: {hid:string,roomid:string}}) {
    const promiseHotel = await getRoomForHotel(params.roomid)
    const hotel = await promiseHotel

    return (
        <main className="left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
            <div className="flex flex-col mt-20 bg-gray-400 p-7 pt-1 rounded-2xl">
                <CheckIncheckoutDate/>
                {/* <Link href={`/mybooking`}> */}
                    <button className="bg-cyan-400 p-3 text-xl rounded-xl hover:bg-cyan-500">Booking</button> 
                {/* </Link> */}
            </div>      
            
        </main>
    )
}