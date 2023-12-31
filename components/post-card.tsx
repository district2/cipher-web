import { Post } from "@/.contentlayer/generated";
import { formatDate } from "@/lib/date";
import Link from "next/link";

export default function PostCard(post: Post) {
    return (
        <Link href={post.url} className="p-3 w-60 h-24 rounded-lg transition-shadow ease-linear bg-neutral-950 ring-neutral-700 hover:ring">
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