import styles from './bigButton.module.css'

interface Props {
    children: React.ReactNode
    type?: 'internal' | 'external'
    onClick?: () => void
}

export default function BigButton({
    children,
    type = 'internal',
    onClick
}: Props) {

    const typeStyle = type === 'internal' ? styles.internal : styles.external

    return (

        <button type='button' className={`${styles.bigButton} ${typeStyle}`} onClick={onClick}>
            {children}
        </button>
    )
}