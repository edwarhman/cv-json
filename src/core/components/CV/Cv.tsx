import type { CV } from '@/cv'
import Hero from '../sections/Hero/Hero'
import type { Locale, UI_CONTENT } from '../../i18n/utils'
import { useStore } from '@nanostores/react'
import { cvItems } from '../../stores/cv.store'
import About from '../sections/About'
import Experience from '../sections/Experience/Experience'
import Education from '../sections/Education/Education'
import Projects from '../sections/Projects/Projects'
import styles from './cv.module.css'
import { useEffect, useState } from 'react'

interface Props {
  cv?: CV
  uiContent: any
}
export default function Cv({ cv, uiContent }: Props) {
  const cvStore = cv ?? useStore(cvItems)
  const [$cvItems, setItems] = useState<CV>()
  console.log({ $cvItems })

  function checkEmpty(obj: any) {
    const values = Object.values(obj)
    console.log({ values })
    return values.every(value => value == null)
  }

  useEffect(() => {
    console.log({ cvStore })
    setItems(cvStore)
  }, [cvStore])

  if (!$cvItems) {
    return <div>Loading...</div>
  }

  if (checkEmpty($cvItems)) {
    return <div className={styles.empty}>
      <p>{uiContent.preview.emptyMessage}</p>
      <p className='mobile'>{uiContent.preview.emptyMessageMobile}</p>
    </div>
  }

  return (
    <div className={styles.cvContainer}>
      {$cvItems?.basics != null && <Hero uiContent={uiContent} basics={$cvItems.basics} />}
      {$cvItems?.basics != null && <About title={uiContent.sections.about} basics={$cvItems.basics} />}
      {$cvItems?.work != null && <Experience works={$cvItems.work} uiContent={uiContent} />}
      {$cvItems?.education != null && <Education education={$cvItems.education} uiContent={uiContent} />}
      {$cvItems?.projects != null && <Projects projects={$cvItems.projects} uiContent={uiContent} />}
    </div>
  )
}
