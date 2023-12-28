import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={
                "mt-2 scroll-m-20 font-heading text-4xl font-bold"}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={
                "mt-12 scroll-m-20 font-heading text-2xl font-semibold tracking-tight first:mt-0"}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={
                "mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight"}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={
                "mt-8 scroll-m-20 font-heading text-lg font-semibold tracking-tight"}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight"}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={
                "mt-8 scroll-m-20 text-base font-semibold tracking-tight"}
            {...props}
        />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={"font-medium underline underline-offset-4"}
            target="_blank"
            {...props}
        />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={"leading-7 [&:not(:first-child)]:mt-6"}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={"my-6 ml-6 list-disc"} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={"my-6 ml-6 list-decimal"} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li className="mt-2" {...props} />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <blockquote
            className="mt-6 border-l-2 pl-6 italic"
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="rounded-md" alt={alt} {...props} />
    ),
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-4 md:my-8" {...props} />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full" {...props} />
        </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className="m-0 border-t p-0 even:bg-muted"
            {...props}
        />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className=
            "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
            {...props}
        />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className=
            "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
            {...props}
        />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className=
            "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
            {...props}
        />
    )
}

export default function Mdx({ code }: { code: string }) {
    const Component = useMDXComponent(code)

    return (
        <div className="mdx">
            <Component components={components} />
        </div>
    )
}       