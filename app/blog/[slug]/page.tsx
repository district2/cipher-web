import { Post, allPosts } from "@/.contentlayer/generated";
import Mdx from "@/components/mdx";
import { formatDate } from "@/lib/date";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {

    const post = allPosts.filter((post) => post._raw.flattenedPath == params.slug)[0]

    return {
        title: post.title,
    }
}

export function generateStaticParams() {
    return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export default function Post({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) notFound()

    return (
        <article className="p-8 mx-auto max-w-6xl lg:p-16">
            <div className="flex flex-col gap-y-10 items-center">
                <div className="flex flex-col w-full">
                    <h1 className="text-3xl font-medium">
                        {post.title}
                    </h1>
                    <div className="flex justify-between text-neutral-500">
                        <h2>
                            {formatDate(post.date)}
                        </h2>
                        <p>
                            by <span className="font-medium text-white/80">{post.author}</span>
                        </p>
                    </div>
                </div>
                <Mdx code={post.body.code} />
            </div>
        </article>
    )
}