import GradientText from "@/components/gradient-text"
import { readdir } from "fs/promises"
import Image from "next/image"

export default async function Gallery() {

    const files = await readdir("public/images/gallery/")

    return (
        <div className="min-h-screen flex flex-col gap-y-14 p-12 items-center">
            <GradientText text="Check our sexy views" />
            <div className="flex flex-wrap gap-12 justify-center">
                {
                    files.map((image, i) =>
                        <Image className="w-auto h-auto" src={`/images/gallery/${image}`} key={image}
                            alt={`CipherOS screen ${i}`} width={300} height={500} />
                    )
                }
            </div>
        </div >
    )
}