import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col gap-y-10 items-center p-5 min-h-screen">
			<div className="max-w-sm text-center">
				<h1 className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-b to-red-500 from-slate-600">
					Page not found
				</h1>
				<p className="text-lg">
					The page that you are trying to open has not been found on our
					systems.
				</p>
			</div>
			<Link
				className={"px-5 py-2 text-lg font-medium rounded-lg transition-colors duration-300 text-white/80 hover:bg-neutral-800/70 hover:text-white lg:text-xl"}
				href={"/"}
			>
				&lt;- Go back to homepage
			</Link>
		</div>
	);
}
