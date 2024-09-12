import type { ReactNode } from "react"
import { useFieldArray, type Control, type UseFormRegister } from "react-hook-form"

interface Props {
    control: Control<any>
    name: string
    defaultValue?: any
    render: (props: { index: number }) => ReactNode
    onChange?: () => any
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
        <>
            {
                fields.map((field, index) => {
                    const children = render({ index })
                    return (
                        <div key={field.id}>
                            {children}
                            <button type="button" onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    )
                })
            }
            <button type="button" onClick={handleAppend}>Add</button>
        </>
    )
}