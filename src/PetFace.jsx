import { Meh, Smile, Laugh, Moon } from 'lucide-react'

const icons = {
    calm: Meh,
    happy: Smile,
    excited: Laugh,
    sleepy: Moon,
}

export function PetFace({ mood }) {
    const Icon = icons[mood]
    return <Icon size={112} />
}
