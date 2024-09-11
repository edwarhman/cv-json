import { cvItems, updateCv } from "@/core/stores/cv.store";
import type { CV } from "@/cv";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
    const { handleSubmit, register, getValues } = useForm<CV>();

    function onSubmit(data: any) {
        console.log(data);
    }

    function onChange(event: any) {
        updateCv(getValues())
    }

    useEffect(() => {
        updateCv(getValues())
    }, [])

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
                    Label
                    <input {...register("basics.label", { required: true })} />
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
                    <h4>Location</h4>

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
                    <h4>Profiles</h4>
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
            <section>
                <h4>Work</h4>
                <label>
                    Name
                    <input {...register("work.0.name", { required: true })} />
                </label>
                <label>
                    Position
                    <input {...register("work.0.position", { required: true })} />
                </label>
                <label>
                    Url
                    <input {...register("work.0.url", { required: true })} />
                </label>
                <label>
                    Start Date
                    <input {...register("work.0.startDate", { required: true })} />
                </label>
                <label>
                    End Date
                    <input {...register("work.0.startDate", { required: true })} />
                </label>
                <label>
                    Summary
                    <textarea {...register("work.0.summary", { required: true })} />
                </label>
            </section>
            <section>
                <h4>Education</h4>
                <label>
                    Institution
                    <input {...register("education.0.institution", { required: true })} />
                </label>
                <label>
                    Start Date
                    <input {...register("education.0.startDate", { required: true })} />
                </label>
                <label>
                    End Date
                    <input {...register("education.0.endDate", { required: true })} />
                </label>
                <label>
                    Area
                    <input {...register("education.0.area", { required: true })} />
                </label>
            </section>
            <button type="submit">Send</button>
        </form>
    );
}