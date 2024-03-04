import { allPosts } from "@/.contentlayer/generated/index.mjs";
import PostCard from "@/components/post-card";
import { compareDesc } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
};

export default function Blog() {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date)),
	);

	return (
		<div className="flex flex-col gap-y-14 items-center p-20 min-h-screen">
			<h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-b to-gray-500 from-neutral-600">
				Read our news
			</h1>
			<div className="flex flex-wrap">
				{posts.map((post, i) => (
					<PostCard {...post} key={i} />
				))}
			</div>
		</div>
	);
}
