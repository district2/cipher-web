'use client'

import ErrorButton from "@/components/error-button"
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col gap-y-5 items-center p-5 min-h-screen text-xl">
            <h1 className='text-3xl text-center text-error'>Unable to fetch blog post</h1>
            <ErrorButton text='Try again' callBack={reset} />
        </div>
    )
}