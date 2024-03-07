import { readdir } from "fs/promises"
import Image from "next/image"

export default async function Gallery() {

    const files = await readdir("public/images/gallery/")

    return (
        <div className="min-h-screen flex flex-col gap-y-14 p-12 items-center">
            <h1 className="text-3xl lg:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-b to-gray-500 from-neutral-600">
                Check our sexy views
            </h1>
            <div className="flex flex-wrap gap-12 justify-center">
                {
                    files.map((image, i) =>
                        <Image className="w-auto min-h-[410px] max-h-[30vw]" src={`/images/gallery/${image}`} key={image}
                            alt={`CipherOS screen ${i}`} width={300} height={500} />
                    )
                }
            </div>
        </div >
    )
}