import FormFieldsList from '@/Editor/components/FormFieldsList/FormFieldsList'
import type { Control, UseFormRegister } from 'react-hook-form'

interface Props {
  index: number
  control: Control<any>
  onChange?: CallableFunction
  register: UseFormRegister<any>
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
        <textarea {...register(`projects.${index}.description`, { required: true })} maxLength={100} />
      </label>
      <label>
        Highlights
        <FormFieldsList
          control={control}
          name={`projects.${index}.highlights`}
          render={({ index: fieldIndex }) => <input type='text' placeholder='Highlights' {...register(`projects.${index}.highlights.${fieldIndex}`, { required: true })} />}
          onChange={onChange}
          type='internal'
        />
      </label>
      <label>
        Is Online
        <input {...register(`projects.${index}.isActive`, { required: true })} type='checkbox' />
      </label>
      <label>
        Github
        <input {...register(`projects.${index}.github`, { required: true })} />
      </label>
    </div>
  )
}
