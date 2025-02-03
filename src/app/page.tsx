// import Link from 'nextLink';
// import Image from 'next/image';
// import { client } from '../sanity/client';
// import ImageUrlBuilder  from '@sanity/image-url';

// interface Iproduct{
//     name: string;
//     tittle: string;
//     image:any;
//     _id:string;
//     stock:string;
//     slug:{current:string};
//     price:number;
//     type?:string;
//     fuelCapacity?:string;
//     transmission?:string;
//     capacity?:string;

// }
// const builder = ImageUrlBuilder(client);
// function builder.image(source).url()
import React from 'react'
import Hero from './Component/Section1'
import Section2 from './Component/Section2'
import Herosection from './Component/Herosection'

const page = () => {
  return (
    <main>
    <div>
     <Herosection/>
     {/* <PickDropSec  /> */}
        <Hero/>
        <Section2/>
        {/* <Section2/> */}
    </div>
    </main>
  )
}

export default page