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
                                let startYear = new Date(startDate).getFullYear()
                                startYear = Number.isNaN(startYear) ? uiContent.missingDate : startYear
                                let endYear =
                                    endDate != null ? new Date(endDate).getFullYear() : uiContent.current
                                endYear = Number.isNaN(endYear) ? uiContent.missingDate : endYear
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