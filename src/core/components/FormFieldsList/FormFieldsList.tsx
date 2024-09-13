import type { ReactNode } from "react"
import { useFieldArray, type Control, type UseFormRegister } from "react-hook-form"
import styles from './formFieldsList.module.css'

interface Props {
    control: Control<any>
    name: string
    defaultValue?: any
    render: (props: { index: number }) => ReactNode
    onChange?: CallableFunction
}

export default function ({ control, name, defaultValue, render, onChange }: Props) {
    const { fields, append, remove } = useFieldArray({
        control,
        name
    })

    const handleAppend = () => {
        append(defaultValue)
        onChange?.()
    }

    function handleRemove(index: number) {
        remove(index)
        onChange?.()
    }
    return (
        <div className={styles.formFieldsList}>
            {
                fields.map((field, index) => {
                    const children = render({ index })
                    return (
                        <div key={field.id} className={styles.childrenWrapper}>
                            <button type="button" onClick={() => handleRemove(index)}>&times;</button>
                            <div className={styles.children}>
                                {children}
                            </div>
                        </div>
                    )
                })
            }
            <div className={styles.addButtonWrapper}>
                <button className={styles.addButton} type="button" onClick={handleAppend}>+</button>
            </div>
        </div>
    )
}