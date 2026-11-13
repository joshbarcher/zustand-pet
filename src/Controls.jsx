import { Drumstick, Volleyball, Bed } from 'lucide-react'
import { usePet } from './PetContext'

export function Controls() {
    const { feed, play, sleep } = usePet()

    return (
        <div className="controls">
            <button onClick={feed}><Drumstick /> Feed</button>
            <button onClick={play}><Volleyball /> Play</button>
            <button onClick={sleep}><Bed /> Sleep</button>
        </div>
    )
}
