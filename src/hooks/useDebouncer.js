import { useEffect, useCallback } from 'react'

export default function useDebouncer(callback, delay) {
    let timeoutId

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const debouncedCallback = useCallback((value) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            callback(value)
        }, delay)
    }, [callback, delay])

    return debouncedCallback
}