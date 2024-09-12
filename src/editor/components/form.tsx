import FormFieldsList from "@/core/components/FormFieldsList";
import { updateCv } from "@/core/stores/cv.store";
import type { CV, Education, Project, Work } from "@/cv";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import ProjectsForm from "./ProjectsForm";
import ProfileForm from "./ProfileForm";


export default function Form() {
    const { register, getValues, control } = useForm<CV>();


    function handleFormChange(event: any) {
        updateCv(getValues())
    }

    useEffect(() => {
        updateCv(getValues())
    })

    console.log('form: ', getValues())

    return (
        <form className="form" action="#" onChange={handleFormChange} onError={(e) => console.log(e)} onSubmit={(e) => console.log(e)}>
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
                    <FormFieldsList
                        control={control}
                        name="basics.profiles"
                        render={({ index }) => <ProfileForm register={register} index={index} />}
                        onChange={handleFormChange}
                    />
                </section>
            </section>
            <section>
                <h4>Work</h4>
                <FormFieldsList
                    control={control}
                    name="work"
                    render={({ index }) => <WorkForm register={register} index={index} />}
                    onChange={handleFormChange}
                />
            </section>
            <section>
                <h4>Education</h4>
                <FormFieldsList
                    control={control}
                    name="education"
                    render={({ index }) => <EducationForm register={register} index={index} />}
                    onChange={handleFormChange}
                />
            </section>
            <section>
                <h4>Projects</h4>
                <FormFieldsList
                    control={control}
                    name="projects"
                    render={({ index }) => <ProjectsForm register={register} index={index} control={control} onChange={() => updateCv(getValues())} />}
                    onChange={handleFormChange}
                />
            </section>
            <button type="submit">Send</button>
        </form>
    );
}