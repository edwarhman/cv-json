import { cvItems, updateCv } from "@/core/stores/cv.store";
import type { CV } from "@/cv";
import { useStore } from "@nanostores/react";
import { useForm } from "react-hook-form";

export default function Form() {
    const { handleSubmit, register, getValues } = useForm<CV>();

    function onSubmit(data: any) {
        console.log(data);
    }

    function onChange(event: any) {
        updateCv(getValues())
        console.log(getValues());
    }

    return (
        <form className="form" action="#" onChange={onChange} onError={(e) => console.log(e)} onSubmit={(e) => console.log(e)}>
            <section>
                <label>Name
                    <input {...register("basics.name", { required: true })} />
                </label>

                <label>
                    Image
                    <input {...register("basics.image", { required: true })} />
                </label>

                <label>
                    Email
                    <input {...register("basics.email", { required: true, pattern: /^\S+@\S+$/i })} />
                </label>

                <label>
                    Phone
                    <input {...register("basics.phone", { required: true })} />
                </label>

                <label>
                    Url
                    <input {...register("basics.url", { required: true })} />
                </label>

                <label>
                    Summary
                    <textarea {...register("basics.summary", { required: true })} />
                </label>

                <section>
                    <h3>Location</h3>

                    <label>
                        Address
                        <input {...register("basics.location.address", { required: true })} />
                    </label>
                    <label>
                        Postal Code
                        <input {...register("basics.location.postalCode", { required: true })} />
                    </label>
                    <label>
                        City
                        <input {...register("basics.location.city", { required: true })} />
                    </label>
                    <label>
                        Country Code
                        <input {...register("basics.location.countryCode", { required: true })} />
                    </label>
                    <label>
                        Region
                        <input {...register("basics.location.region", { required: true })} />
                    </label>
                </section>

                <section>
                    <h3>Profiles</h3>
                    <label>
                        Network
                        <input {...register("basics.profiles.0.network", { required: true })} />
                    </label>
                    <label>
                        Username
                        <input {...register("basics.profiles.0.username", { required: true })} />
                    </label>
                    <label>
                        Url
                        <input {...register("basics.profiles.0.url", { required: true })} />
                    </label>
                </section>

            </section>

            <button type="submit">Send</button>
            <style>
            </style>
        </form>
    );
}