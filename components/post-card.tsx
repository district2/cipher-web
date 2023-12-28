import { Post } from "@/.contentlayer/generated";
import { formatDate } from "@/lib/date";
import Link from "next/link";

export default function PostCard(post: Post) {
    return (
        <Link href={post.url} className="w-60 h-24 bg-neutral-950 p-3 ring-neutral-700 transition-shadow ease-linear hover:ring rounded-lg">
            <div className="break-words">
                <h1 className="font-medium">
                    {post.title}
                </h1>
                <h2 className="text-white/80">
                    {formatDate(post.date)}
                </h2>
            </div>
        </Link>
    )
}