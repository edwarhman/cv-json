import Row from "@/core/components/Row";
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
                Area
                <input {...register(`education.${index}.area`, { required: true })} />
            </label>
            <Row>
                <label>
                    Start Date
                    <input {...register(`education.${index}.startDate`, { required: true })} type="date" />
                </label>
                <label>
                    End Date
                    <input {...register(`education.${index}.endDate`, { required: true })} type="date" />
                </label>
            </Row>
        </div>
    )
}