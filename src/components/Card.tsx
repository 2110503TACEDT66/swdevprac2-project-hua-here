'use client'
import Image from "next/image"
import InteractCard from "./InteractCard"
import Rating from "@mui/material/Rating" 
import { Children, useState } from "react"



export default function Card({hotelName,imgSrc}:{hotelName:string,imgSrc:string}){
    const[value,setValue] = useState<number|null>(5);
    return(
           <InteractCard chlidren={ 
           <div>
           <div className="w-[50%] h-full relative rounded-t-lg">
           <Image src={imgSrc}
           alt='hotel'
           fill={true}
           className="object-cover rounded-t-lg"/>
       </div>
       <div className="ww-[50%] h-full text-black">{hotelName}</div>
       <Rating name="star" value={value} onChange={(event,newValue)=>{setValue(newValue)}}
       />
       </div>}>
       
            
           
           
            </InteractCard>
        
    )

}
