import { ImageResponse } from "next/og";

const size = {
    width: 1200,
    height: 630,
}

export const runtime = 'edge'

export default async function Image() {
    const interBold = fetch(
        new URL('../assets/Inter-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse((
        <div
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '-.02em',
                fontWeight: 700,
                background: 'black',
            }}
        >
            <div
                style={{
                    left: 42,
                    top: 42,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <span
                    style={{
                        width: 24,
                        height: 24,
                        background: 'white',
                    }}
                />
                <span
                    style={{
                        marginLeft: 8,
                        fontSize: 20,
                        color: "white"
                    }}
                >
                    cipheros.online
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: '20px 50px',
                    margin: '0 42px',
                    fontSize: 40,
                    width: 'auto',
                    maxWidth: 550,
                    textAlign: 'center',
                    backgroundColor: 'white',
                    color: 'black',
                    lineHeight: 1.4,
                }}
            >
                Revamping Android.
                Making it faster.
            </div>
        </div>
    ),
        {
            ...size,
            fonts: [
                {
                    name: 'Inter-Bold',
                    data: await interBold,
                    style: 'normal',
                    weight: 400
                },
            ],
        })
}