import type { UseFormRegister } from "react-hook-form";

interface Props {
    index: number;
    register: UseFormRegister<any>;
}

export default function ({ index, register }: Props) {
    return (
        <div>
            <label>
                Network
                <select {...register(`basics.profiles.${index}.network`, { required: true })} >
                    <option value="GitHub">Github</option>
                    <option value="LinkedIn">Linkedin</option>
                    <option value="X">X</option>
                </select>
            </label>
            <label>
                Username
                <input {...register(`basics.profiles.${index}.username`, { required: true })} />
            </label>
            <label>
                Url
                <input {...register(`basics.profiles.${index}.url`, { required: true })} />
            </label>
        </div>
    )
}