import Image from 'next/image'
import Banner from '@/components/Banner'
import HotelCatalog from '@/components/HotelCatalog'
import getHotels from '@/libs/getHotels'

export default function Home() {
  const hotel = getHotels()
  return (
    <main>
      <Banner/>
      <HotelCatalog hotelJson={hotel}/>
    </main>
  )
}
