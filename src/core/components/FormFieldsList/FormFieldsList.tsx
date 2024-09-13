import type { ReactNode } from "react"
import { useFieldArray, type Control, type UseFormRegister } from "react-hook-form"
import styles from './formFieldsList.module.css'
import Trash from "@/core/icons/Trash"

interface Props {
    control: Control<any>
    name: string
    defaultValue?: any
    render: (props: { index: number }) => ReactNode
    onChange?: CallableFunction
    type?: 'external' | 'internal'
}

export default function ({ control, name, defaultValue, render, onChange, type }: Props) {
    const { fields, append, remove } = useFieldArray({
        control,
        name
    })
    const footerStyle = type === 'internal' ? styles.internalFooter : styles.externalFooter
    const childrenWrapperInternal = type === 'internal' ? styles.internalChildrenWrapper : ''
    const footerSpacingType = type === 'internal' ? styles.footerSpacingInternal : ''
    const typeStyle = type === 'internal' ? styles.internal : styles.external

    const handleAppend = () => {
        append(defaultValue)
        onChange?.()
    }

    function handleRemove(index: number) {
        remove(index)
        onChange?.()
    }
    return (
        <div className={`${styles.formFieldsList} ${typeStyle}`}>
            {
                fields.map((field, index) => {
                    const children = render({ index })
                    return (
                        <div key={field.id} className={`${styles.childrenWrapper} ${childrenWrapperInternal}`}>
                            <button type="button" onClick={() => handleRemove(index)}><Trash /></button>
                            <div className={styles.children}>
                                {children}
                            </div>
                        </div>
                    )
                })
            }
            <div className={`${styles.childrenWrapper} ${styles.footer} ${footerStyle}`}>
                <button type="button" className={styles.addButtonWrapper} onClick={handleAppend}>
                    <button className={styles.addButton} type="button">+</button>
                </button>
                <div className={styles.footerSpacing}><button className={type === 'internal' ? styles.internalButton : styles.externalButton} disabled>a</button></div>
            </div>
        </div>
    )
}