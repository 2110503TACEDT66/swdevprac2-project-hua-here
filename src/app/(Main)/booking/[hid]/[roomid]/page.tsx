import CheckIncheckoutDate from "@/components/CheckIncheckOutdate";

export default async function BookingPage({params} : {params: {hid:string,roomid:string}}) {

    return (
        <main className="left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
            <CheckIncheckoutDate hid={params.hid} roomid={params.roomid} />
        </main>
    )
}