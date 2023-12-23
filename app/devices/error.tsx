'use client'

import { useEffect } from 'react'
import ErrorButton from '@/components/error-button'

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
        <div className="flex flex-col gap-y-5 items-center text-xl p-5 min-h-screen">
            <h1 className='text-3xl text-center text-error'>
                Unable to fetch devices
            </h1>
            <ErrorButton text='Try again' callBack={reset} />
        </div>
    )
}