import type { Education } from "@/cv";
import Section from "../../Section/Section"
import styles from './education.module.css'


interface Props {
    uiContent: any;
    education: Education[]
}

export default function Education({ uiContent, education }: Props) {
    return (
        education.length > 0 && (
            <Section title={uiContent.sections.education}>
                <div className={styles.education}>
                    <ul>
                        {
                            education.map(({ institution, startDate, endDate, area }) => {
                                const startYear = new Date(startDate).getFullYear()
                                const endYear =
                                    endDate != null ? new Date(endDate).getFullYear() : uiContent.current
                                const years = startDate ? `${startYear} - ${endYear}` : `${endYear}`

                                return (
                                    <li>
                                        <article>
                                            <header>
                                                <div>
                                                    <h3>{institution}</h3>
                                                </div>

                                                <time>{years}</time>
                                            </header>

                                            <footer>
                                                <p>{area}</p>
                                            </footer>
                                        </article>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Section>
        )
    )
}