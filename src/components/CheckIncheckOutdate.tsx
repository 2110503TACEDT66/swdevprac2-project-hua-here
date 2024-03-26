"use client"

import DataReserve from "./DateReserve"
import { useState } from "react"
import {Dayjs} from "dayjs";
import React from "react";

export default function CheckIncheckoutDate() {
    const [checkInDate,setCheckInDate] = useState<Dayjs | null>(null)
    const [checkOutdate,setCheckOutDate] = useState<Dayjs | null>(null)

    return (
        <div className="my-10 flex flex-col">
            <div>Check-In</div>
            <DataReserve onDateChange={(value:Dayjs)=> setCheckInDate(value)} value={null} name="checkIn"/>
            <div>Check-Out</div>
            <DataReserve onDateChange={(value:Dayjs)=> setCheckOutDate(value)} value={null} name="checkOut"/>
        </div>
    
    )
}


