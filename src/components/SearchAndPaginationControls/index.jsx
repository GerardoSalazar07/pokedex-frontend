import { Label, NumberInput, TextInput } from "keep-react"

// eslint-disable-next-line react/prop-types
export default function Pagination ({ limit, search, handleLimitChange, handleSearchChange }) {
    return (
        <div className='flex gap-5'>
            <div className='flex items-center gap-2'>
                <Label htmlFor="#search" value="Buscar" />
                <TextInput
                    id="#search"
                    value={search}
                    handleOnChange={(e) => handleSearchChange(e.target.value)}
                    color="gray"
                    sizing="sm"
                />
            </div>

            <div className='flex items-center gap-2'>
                <Label htmlFor="#limit" value="Pokémons por página" />
                <NumberInput
                    id="#limit"
                    value={limit}
                    setValue={handleLimitChange}
                    sizing="sm"
                />
            </div>
        </div>
    )
}