import React from 'react'
import logo from "../../../public/images/littlelogo.png"
import flogo from "../../../public/images/logo.png"
import food1 from "../../../public/images/food1.png"
import food2 from "../../../public/images/food2.jpeg"
import food3 from "../../../public/images/food3.jpeg"
import food4 from "../../../public/images/food4.webp"
import Image from 'next/image'

export default function page() {
  return (
    <div className='flex flex-col mx-auto justify-center items-center'>
        <section className='p-8'>
        <Image src={logo} height={200} width={1000} alt='logo' />
        <nav className='p-4 rounded-xl m-8 bg-gray-600' >
            <ul className='flex flex-row justify-evenly text-white font-semibold text-lg'>
                <li>Home</li>
                <li>Menu</li>
                <li>Book</li>
                <li>About</li>
            </ul>
        </nav>
        </section>

        <div className='bg-cover bg-center  text-white p-8 rounded-xl' style={{ 'backgroundImage': 'url("https://cdn.georgeinstitute.org/sites/default/files/styles/width1920_fallback/public/2020-10/world-food-day-2020.png")' }}>
            <h2 className='text-3xl font-bold'>30% Off This Weekend</h2>
            <p className='mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, reiciendis maiores id quod ea odit ad tempore ex error assumenda qui expedita debitis, iure aspernatur placeat sed vel fugit cupiditate.</p>
        </div>


        <div className='grid grid-cols-3 w-full gap-16 py-4'>
            <div className='bg-amber-100 p-6 rounded-xl h-full w-full'>
                <h3 className='text-2xl font-bold'>Our New Menu</h3>
                <div className='h-56 w-full mt-4'>
                    <Image src={food1} width={2000} height={2000} alt='food1' className='object-cover w-full h-full'/>
                </div>
                <p className='py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic aliquid, sint, perferendis voluptatum suscipit molestias labore amet corrupti voluptates sapiente nesciunt exercitationem reprehenderit fuga fugit delectus. Animi, aspernatur impedit.</p>
                <a href="/" className='text-blue-500 underline'>See our new menu</a>

            </div>

            <div className='bg-amber-100 p-6 rounded-xl h-full w-full'>
                <h3 className='text-2xl font-bold'>Our New Menu</h3>
                <div className='h-56 w-full mt-4'>
                    <Image src={food1} width={2000} height={2000} alt='food1' className='object-cover w-full h-full'/>
                </div>
                <p className='py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic aliquid, sint, perferendis voluptatum suscipit molestias labore amet corrupti voluptates sapiente nesciunt exercitationem reprehenderit fuga fugit delectus. Animi, aspernatur impedit.</p>
                <a href="/" className='text-blue-500 underline'>See our new menu</a>

            </div>

            <div className='bg-amber-100 p-6 rounded-xl h-full w-full'>
                <h3 className='text-2xl font-bold'>Our New Menu</h3>
                <div className='h-56 w-full mt-4'>
                    <Image src={food1} width={2000} height={2000} alt='food1' className='object-cover w-full h-full'/>
                </div>
                <p className='py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic aliquid, sint, perferendis voluptatum suscipit molestias labore amet corrupti voluptates sapiente nesciunt exercitationem reprehenderit fuga fugit delectus. Animi, aspernatur impedit.</p>
                <a href="/" className='text-blue-500 underline'>See our new menu</a>

            </div>

        </div>
        <footer className='flex items-center justify-between gap-8 w-full'>
            <Image src={flogo} width={2000} height={2000} alt='logo' className='w-20'/>
            <p className='border-t-2 border-black pl-24'>Copyright Little Lemon</p>

        </footer>
    </div>
  )
}
