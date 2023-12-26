import { useEffect, useState } from "react"
import { toast } from 'sonner'
import useDebouncer from './useDebouncer'
import getPokemons from '../services/getPokemons'

export function usePokedex () {
    const [ loading, setLoading ] = useState(false)
    const [ pokemons, setPokemons ] = useState([])
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const pokemons = await getPokemons({ limit, page, search})
                setPokemons(pokemons)
            } catch (err) {
                setPokemons([])
                toast.error(err.message)
            } finally {
                setLoading(false)
            }
        })()
    }, [limit, page, search, setPokemons, setLoading])

    const handleLimitChange = (value) => {
        setLimit(value)
    }

    const handlePageChange = (value) => {
        setPage(value)
    }

    const handleSearchChange = useDebouncer((value) => {
        setSearch(value)
    }, 500)
    
    return {
        loading,
        pokemons,
        limit,
        page,
        search,
        handleLimitChange,
        handlePageChange,
        handleSearchChange
    }
}