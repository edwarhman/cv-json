import type { ButtonHTMLAttributes } from "react";
import DottedBox from "../BigButton/BigButton";
import styles from './dottedButton.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'internal' | 'external'
    children: React.ReactNode
}

export default function DottedButton({
    size = 'internal',
    children,
    ...props
}: Props) {

    const typeStyle = size === 'internal' ? styles.internal : styles.external

    return (
        <DottedBox>
            <button className={`${styles.internalButton} ${typeStyle}`} {...props}>
                <div className="button">
                    {children}
                </div>
            </button>
        </DottedBox>
    )
}