import type { UseFormRegister } from "react-hook-form";

interface Props {
    index: number;
    register: UseFormRegister<any>;
}

export default function ({ index, register }: Props) {
    return (
        <div>
            <label>
                Institution
                <input {...register(`education.${index}.institution`, { required: true })} />
            </label>
            <label>
                Start Date
                <input {...register(`education.${index}.startDate`, { required: true })} />
            </label>
            <label>
                End Date
                <input {...register(`education.${index}.endDate`, { required: true })} />
            </label>
            <label>
                Area
                <input {...register(`education.${index}.area`, { required: true })} />
            </label>
        </div>
    )
}