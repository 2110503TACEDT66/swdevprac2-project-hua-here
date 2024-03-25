
import Image from "next/image";
import RoomInteract from "./RoomInteract";

export default function RoomCard({roomNo,roomType,imgSrc,roomPrice}:{roomNo:string,roomType:string,imgSrc:string,roomPrice:string}){
  
    return(
            <RoomInteract chlidren={
            <div>
            <div className="w-[50%] h-full relative rounded-t-lg">
            <Image src={imgSrc}
            alt='room'
            fill={true}
            className="object-cover rounded-t-lg"/>
           </div>
           <div className="text-medium text-balck mx-5">{roomNo}</div>
           <div className="text-medium text-balck mx-5">{roomType}</div>
           <div className="text-medium text-black mx-5">{roomPrice}</div>
           </div>}>
           
            
       </RoomInteract>



        
    )

}