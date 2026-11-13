import { PetProvider } from './PetContext'
import { Pet } from './Pet'
import { Controls } from './Controls'
import { NameInput } from './NameInput'

export default function App() {
    return (
        <PetProvider>
            <main className="card">
                <h1 className="title">My Zustand Pet</h1>
                <NameInput />
                <Pet />
                <Controls />
            </main>
        </PetProvider>
    )
}
