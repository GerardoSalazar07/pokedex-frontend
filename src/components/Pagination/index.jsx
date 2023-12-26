import { Button } from "keep-react"

// eslint-disable-next-line react/prop-types
export default function Pagination ({ page, handlePageChange }) {
    return (
        <div className='flex items-center gap-2'>
            <Button size="sm" type="outlinePrimary" onClick={() => handlePageChange((page) => Math.max(page - 1, 1))}>Página anterior</Button>
            <span className="text-sm font-bold">{page}</span>
            <Button size="sm" type="outlinePrimary" onClick={() => handlePageChange((page) => page + 1)}>Página siguiente</Button>
        </div>
    )
}