'use client'
import Image from "next/image"
import InteractiveCard from "./InteractiveCard"
import Rating from "@mui/material/Rating" 
import { Children, useState } from "react"



export default function Card({hotelName,imgSrc}:{hotelName:string,imgSrc:string}){
    const[value,setValue] = useState<number|null>(5);
    
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Hotel Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px]'>
                {hotelName}
            </div>
            <Rating id={hotelName + ' Rating'} name={hotelName + ' Rating'} value={value} 
            className='h-[15%] px-3' onClick={(e) => e.stopPropagation()}
                onChange={(event, newValue) => {
                    setValue(newValue);
            }}/>
        </InteractiveCard>
    )
}