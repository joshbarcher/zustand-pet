import { usePet } from './PetContext'

export function NameInput() {
    const { name, rename } = usePet()

    return (
        <label className="name-input">
            Pet name
            <input value={name} onChange={(e) => rename(e.target.value)} />
        </label>
    )
}
