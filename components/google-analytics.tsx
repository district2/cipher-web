import Script from "next/script"

interface GoogleAnalyticsProps {
    ga_id: string
}

export default function GoogleAnalytics({ ga_id }: GoogleAnalyticsProps) {
    return (
        <>
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
            />
            <Script
                id="google-analytics"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
                }}
            />
        </>
    )
}