import FormFieldsList from "@/core/components/FormFieldsList";
import type { Control, UseFormRegister } from "react-hook-form";

interface Props {
    index: number;
    control: Control<any>
    onChange?: CallableFunction
    register: UseFormRegister<any>;
}

export default function ({ index, control, register, onChange }: Props) {
    return (
        <div>
            <label>
                Name
                <input {...register(`projects.${index}.name`, { required: true })} />
            </label>
            <label>
                Url
                <input {...register(`projects.${index}.url`, { required: true })} />
            </label>
            <label>
                Description
                <textarea {...register(`projects.${index}.description`, { required: true })} />
            </label>
            <label>
                Highlights
                <FormFieldsList
                    control={control}
                    name={`projects.${index}.highlights`}
                    render={({ index: fieldIndex }) => <input type="text" placeholder="Highlights" {...register(`projects.${index}.highlights.${fieldIndex}`, { required: true })} />}
                    onChange={onChange}
                />
            </label>
            <label>
                Is Active
                <input {...register(`projects.${index}.isActive`, { required: true })} />
            </label>
            <label>
                Github
                <input {...register(`projects.${index}.github`, { required: true })} />
            </label>
        </div>
    )
}