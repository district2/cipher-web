import { allPosts } from "@/.contentlayer/generated"
import PostCard from "@/components/post-card";
import { formatDate } from "@/lib/date";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default function Blog() {

    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <div className="min-h-screen flex flex-col items-center p-20 gap-y-14">
            <h1 className="text-4xl text-center bg-gradient-to-b from-neutral-600 to-gray-500 bg-clip-text text-transparent">
                Read our news
            </h1>
            <div className="flex flex-wrap">
                {posts.map((post, i) =>
                    <PostCard {...post} key={i} />
                )}
            </div>
        </div>
    )
}