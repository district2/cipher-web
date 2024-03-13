interface GradientTextProps {
    text: string
}

export default function GradientText({ text }: GradientTextProps) {
    return (
        <h1 className="text-3xl cipher-gradient lg:text-4xl">
            {text}
        </h1>
    )
}   