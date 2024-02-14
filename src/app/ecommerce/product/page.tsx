
// import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import Image from 'next/image';
import Link from 'next/link';
const colorVariants = ['black','green', 'blue'];
const sizeVariants = ['xs', 's', 'md', 'l', 'xl'];
const imageUrls = {
    black : 'https://cdn.dummyjson.com/product-images/53/3.jpg',
    green: 'https://cdn.dummyjson.com/product-images/53/2.jpg',
    blue: 'https://cdn.dummyjson.com/product-images/55/3.jpg'
} as any;
export default function ProductPage({searchParams}: any) {
    const selectedColor = searchParams.color || "black";
    const selectedSize = searchParams.size || 'md';

    return (
        <main className="min-h-screen bg-gray-200 flex items-ceneter justify-ceneter">
            <div className="bg-white flex items-center w-[96%] round min-h-[75vh]">
                <div className="flex-[2] flex justify-ceneter">
                    <Image
                      src ={imageUrls[selectedColor]}
                      alt="sample shirt"
                      width={200}
                      height={300}
                    />
                </div>
                <div className="flex-1">
                    <h1 className='text-3xl font-semibold'> T Shirts</h1>
                     <section className='bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3 mb-10'>
                        $40.00 USD
                     </section>
                     <div>
                     <h2 className='font-semibold'> COLORS</h2>
                      <div className='flex gap-2'>
                       {colorVariants.map((color, index) => (
                        <Link
                         key={index}
                         href={`?${new URLSearchParams({
                            color,
                            size: selectedSize
                         })}`}
                         className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${selectedColor === color ? "border-blue-500" : "border-gray-200"}`}
                        >{color}</Link>
                       ))}
                      </div>

                       <div>
                     <h2 className='font-semibold'> SIZES</h2>
                      <div className='flex gap-2'>
                       {sizeVariants.map((size, index) => (
                        <Link
                         key={index}
                         href={`?${new URLSearchParams({
                            color: selectedColor,
                            size
                         })}`}
                         className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${selectedSize === size ? "border-blue-500" : "border-gray-200"}`}
                        >{size}</Link>
                       ))}
                      </div>
                      </div>
                     </div>
                </div>
            </div>

        </main>
    )
};