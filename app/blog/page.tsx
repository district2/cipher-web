import { allPosts } from "@/.contentlayer/generated/index.mjs";
import GradientText from "@/components/gradient-text";
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
			<GradientText text="Read our news" />
			<div className="flex flex-wrap">
				{posts.map((post) => (
					<PostCard {...post} key={post._id} />
				))}
			</div>
		</div>
	);
}
