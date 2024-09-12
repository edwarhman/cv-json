import FormFieldsList from "@/core/components/FormFieldsList";
import { updateCv } from "@/core/stores/cv.store";
import type { CV, Education, Project, Work } from "@/cv";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";


export default function Form() {
    const { register, getValues, control } = useForm<CV>();
    const {
        fields: experienceFields,
        append: appendExperience,
        remove: removeExperience
    } = useFieldArray({
        control,
        name: 'work'
    })
    const {
        fields: educationFields,
        append: appendEducation,
        remove: removeEducation
    } = useFieldArray({
        control,
        name: 'education'
    })
    const {
        fields: projectFields,
        append: appendProject,
        remove: removeProject
    } = useFieldArray({
        control,
        name: 'projects'
    })


    function onChange(event: any) {
        updateCv(getValues())
    }

    useEffect(() => {
        updateCv(getValues())
    })

    console.log('form: ', getValues())

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
                {
                    experienceFields.map((field, index) => {
                        return (
                            <div key={field.id}>
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
                                <button type="button" onClick={() => removeExperience(index)}>Remove Experience</button>
                            </div>
                        )
                    })
                }
                <button type="button" onClick={() => appendExperience({} as Work)}>Add Experience</button>
            </section>
            <section>
                <h4>Education</h4>
                {
                    educationFields.map((field, index) => {
                        return (
                            <div key={field.id}>
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
                                <button type="button" onClick={() => removeEducation(index)}>Remove Education</button>
                            </div>
                        )
                    })
                }
                <button type="button" onClick={() => appendEducation({} as Education)}>Add Education</button>
            </section>
            <section>
                <h4>Projects</h4>
                {
                    projectFields.map((field, index) => {
                        return (
                            <div key={field.id}>
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
                                        onChange={() => updateCv(getValues())}
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
                                <button type="button" onClick={() => removeProject(index)}>Remove Project</button>
                            </div>
                        )
                    })
                }
                <button type="button" onClick={() => appendProject({} as Project)}>Add Project</button>
            </section>
            <button type="submit">Send</button>
        </form>
    );
}