import styles from './section.module.css'

interface Props {
  title?: string
  children: React.ReactNode
}

export default function Section ({ children, title }: Props) {
  return (
    <div className={styles.cvSection}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}
