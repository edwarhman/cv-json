import './styles.css'

interface Props {
    title?: string;
    children: React.ReactNode;
}

export default function Section({ children, title }: Props) {
    return (
        <div className="cv-section">
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
}