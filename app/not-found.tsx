import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center gap-y-10 p-5 min-h-screen">
            <div className="max-w-sm text-center">
                <h1 className="text-4xl font-medium bg-gradient-to-b from-slate-600 to-red-500 bg-clip-text text-transparent">
                    Page not found
                </h1>
                <p className="text-lg">
                    The page that you are trying to open has not been found on our systems.
                </p>
            </div>
            <Link className={`px-5 py-2 text-lg rounded-lg text-white/80 font-medium transition-colors duration-300 hover:bg-neutral-800/70 hover:text-white lg:text-xl`}
                href={"/"}>
                &lt;- Go back to homepage
            </Link>
        </div>
    )
}