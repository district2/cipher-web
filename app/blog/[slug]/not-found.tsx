import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col gap-y-10 items-center p-5 min-h-screen">
			<div className="max-w-sm text-center">
				<h1 className="text-4xl font-medium text-error">Blog post not found</h1>
				<p className="text-lg">
					The blog post you are trying to reach is not on our systems
				</p>
			</div>
			<Link
				className={"px-5 py-2 text-lg font-medium rounded-lg transition-colors duration-300 text-white/80 hover:bg-neutral-800/70 hover:text-white lg:text-xl"}
				href={"/blog"}
			>
				&lt;- Go back to blog
			</Link>
		</div>
	);
}
