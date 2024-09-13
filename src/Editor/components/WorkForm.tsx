import type { UseFormRegister } from "react-hook-form";

interface Props {
    index: number;
    register: UseFormRegister<any>;
}

export default function ({ index, register }: Props) {
    return (
        <div>
            <label>
                Name
                <input {...register(`work.${index}.name`, { required: true })} />
            </label>
            <label>
                Position
                <input {...register(`work.${index}.position`, { required: true })} />
            </label>
            <label>
                Url
                <input {...register(`work.${index}.url`, { required: true })} />
            </label>
            <label>
                Start Date
                <input {...register(`work.${index}.startDate`, { required: true })} />
            </label>
            <label>
                End Date
                <input {...register(`work.${index}.endDate`, { required: true })} />
            </label>
            <label>
                Summary
                <textarea {...register(`work.${index}.summary`, { required: true })} />
            </label>
        </div>
    )
}