import { FC } from 'react'
import Icon from '../../../component/Icon'

interface ButtonProps {
    item: {
        icon: string;
        name: string;
        text: string;
    }
}

const Button: FC<ButtonProps> = ({ item }) => {
    return (
        <button
            key={item.name}
            className="w-3/4 m-auto flex items-center justify-center gap-2 py-2 px-4 bg-white rounded-md border font-semibold hover:bg-gray-50 text-sm"
        >
            <Icon src={item.icon} alt={item.name} size='md' />
            <span>{item.text}</span>
        </button>
    )
}

export default Button