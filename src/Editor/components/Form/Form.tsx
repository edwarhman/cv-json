import FormFieldsList from '@/Editor/components/FormFieldsList/FormFieldsList'
import { updateCv } from '@/core/stores/cv.store'
import type { CV, } from '@/cv'
import { useEffect, useState, type ChangeEvent } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import WorkForm from '../WorkForm'
import EducationForm from '../EducationForm'
import ProjectsForm from '../ProjectsForm'
import ProfileForm from '../ProfileForm'
import styles from './form.module.css'
import Row from '@/core/components/Row'
import BigButton from '../BigButton/BigButton'

interface Props {
  defaultValues: CV
}

export default function Form({ defaultValues }: Props) {
  const { register, getValues, control, setValue } = useForm<CV>()
  const [image, setImage] = useState('')

  useEffect(() => {

    const localStorageString = localStorage.getItem("cv")
    const initialValues = localStorageString ? JSON.parse(localStorageString) : defaultValues
    setValue('basics', initialValues.basics)
    setValue('work', initialValues.work)
    setValue('education', initialValues.education)
    setValue('projects', initialValues.projects)
  }, [])

  function updateLocalStorage(data: CV) {
    localStorage.setItem("cv", JSON.stringify(data))
  }

  function handleFormChange(event: any) {
    updateCv(getValues())
    updateLocalStorage(getValues())
  }

  useEffect(() => {
    updateCv(getValues())
  })

  function handleImageChange(e: ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0]
    if (!file) return

    setImage(URL.createObjectURL(file))

    console.log({ file })
  }

  return (
    <form
      className={styles.form}
      action='#'
      onChange={handleFormChange}
      onError={(e) => console.log(e)} onSubmit={(e) => console.log(e)}
    >
      <section>
        <h3>Contact info</h3>
        <label>Name
          <input {...register('basics.name', { required: true })} />
        </label>

        <label>
          Image
          <div className={styles.profileImageWrapper}>
            <BigButton>
              upload image
            </BigButton>
            {
              image
              && <img src={image} alt='profile-image' className={styles.profileImage} />
            }
            <input
              {...register('basics.image', { required: true })}
              type='file'
              accept='image/*'
              onChange={(e) => handleImageChange(e)}
            />
          </div>
        </label>

        <label>
          Label
          <input {...register('basics.label', { required: true })} />
        </label>

        <label>
          Email
          <input {...register('basics.email', { required: true, pattern: /^\S+@\S+$/i })} />
        </label>

        <label>
          Phone
          <input {...register('basics.phone', { required: true })} />
        </label>

        <label>
          Url
          <input {...register('basics.url', { required: true })} />
        </label>

        <label>
          Summary
          <textarea {...register('basics.summary', { required: true })} />
        </label>

        <section>
          <h3>Location</h3>
          <label>
            Address
            <input {...register('basics.location.address', { required: true })} />
          </label>

          <Row>
            <label>
              City
              <input {...register('basics.location.city', { required: true })} />
            </label>
            <label>
              Region
              <input {...register('basics.location.region', { required: true })} />
            </label>
          </Row>
          <Row>
            <label>
              Postal Code
              <input {...register('basics.location.postalCode', { required: true })} />
            </label>
            <label>
              Country Code
              <input {...register('basics.location.countryCode', { required: true })} />
            </label>
          </Row>
        </section>
        <section>
          <h3>Social profiles</h3>
          <FormFieldsList
            control={control}
            name='basics.profiles'
            render={({ index }) => <ProfileForm register={register} index={index} />}
            onChange={handleFormChange}
          />
        </section>
      </section>
      <section>
        <h3>Work</h3>
        <FormFieldsList
          control={control}
          name='work'
          render={({ index }) => <WorkForm register={register} index={index} />}
          onChange={handleFormChange}
        />
      </section>
      <section>
        <h3>Education</h3>
        <FormFieldsList
          control={control}
          name='education'
          render={({ index }) => <EducationForm register={register} index={index} />}
          onChange={handleFormChange}
        />
      </section>
      <section>
        <h3>Projects</h3>
        <FormFieldsList
          control={control}
          name='projects'
          render={({ index }) => <ProjectsForm register={register} index={index} control={control} onChange={() => updateCv(getValues())} />}
          onChange={handleFormChange}
        />
      </section>
      <button type='submit'>Send</button>
    </form>
  )
}
