import { createContext, useContext, useState } from 'react'

const PetContext = createContext(null)

export function PetProvider({ children }) {
    const [name, setName] = useState('Biscuit')
    const [mood, setMood] = useState('calm')
    const [status, setStatus] = useState('is just chilling')

    const feed = () => {
        setMood('happy')
        setStatus('is munching happily')
    }
    const play = () => {
        setMood('excited')
        setStatus('is having a blast')
    }
    const sleep = () => {
        setMood('sleepy')
        setStatus('is taking a nap')
    }
    const rename = (newName) => setName(newName)

    return (
        <PetContext
            value={{
                name, mood, status,
                feed, play, sleep, rename,
            }}
        >
            {children}
        </PetContext>
    )
}

export function usePet() {
    return useContext(PetContext)
}
