import { usePet } from './PetContext'
import { PetFace } from './PetFace'

export function Pet() {
    const { name, mood, status } = usePet()

    return (
        <div className="pet">
            <div className="pet-face" key={mood}>
                <PetFace mood={mood} />
            </div>
            <h2 className="pet-status">
                <span className="pet-name">{name ||
                    'Your pet'}</span> {status}
            </h2>
        </div>
    )
}
