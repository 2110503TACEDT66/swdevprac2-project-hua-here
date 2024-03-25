import RoomCard from "./RoomCartd";
import Link from "next/link";


export default  function RoomCatalog({roomJson}:{roomJson:RoomItem[]}){



    return(
        <div className="text-black">
        Explore Rooms in our catalog
        
        
        <div className="m-20 flex flex-row  flex-wrap gap-6 item-center">
            {
               roomJson?.map((RoomItems)=>(
                <Link href="/dsdsds" className="w-1/5">
                    <RoomCard roomNo={RoomItems.roomNo} roomPrice={RoomItems.price} roomType={RoomItems.roomType} 
                    imgSrc={RoomItems.picture} key={RoomItems.roomNo}>
                    </RoomCard>
                    </Link>

                ))
            }
        
        </div>
        </div>
    )


}