import styles from './bigButton.module.css'

interface Props {
    children: React.ReactNode
}

export default function DottedBox({
    children,
}: Props) {

    return (
        <div className={`${styles.bigButton}`}>
            {children}
        </div>
    )
}