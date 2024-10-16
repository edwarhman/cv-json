import type { ReactNode } from 'react'
import { useFieldArray, type Control } from 'react-hook-form'
import styles from './formFieldsList.module.css'
import Trash from '@/core/icons/Trash'
import DottedButton from '../DottedButton/DottedButton'

interface Props {
  control: Control<any>
  name: string
  defaultValue?: any
  render: (props: { index: number }) => ReactNode
  onChange?: CallableFunction
  type?: 'external' | 'internal'
}

export default function ({ control, name, defaultValue, render, onChange, type = 'external' }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name
  })
  const typeStyle = type === 'internal' ? styles.internal : styles.external

  const handleAppend = () => {
    append(defaultValue)
    onChange?.()
  }

  function handleRemove(index: number) {
    remove(index)
    onChange?.()
  }
  return (
    <div className={`${styles.formFieldsList} ${typeStyle}`}>
      {
        fields.map((field, index) => {
          const children = render({ index })
          return (
            <div key={field.id} className={`${styles.fieldWrapper}`}>
              <button className='button' type='button' onClick={() => handleRemove(index)}><Trash /></button>
              <div className={styles.field}>
                {children}
              </div>
            </div>
          )
        })
      }
      <div className={`${styles.fieldWrapper} ${styles.footer}`}>
        <div className={styles.footerSpacing}>
          <button className='button'>a</button>
        </div>
        <div className={styles.field}>
          <DottedButton size={type} onClick={handleAppend} type='button'>
            +
          </DottedButton>
        </div>
      </div>
    </div>
  )
}
