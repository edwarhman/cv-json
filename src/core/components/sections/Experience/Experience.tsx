import type { Work } from "@/cv";
import Section from "../../Section/Section";
import styles from './experience.module.css'

interface Props {
    works: Work[];
    uiContent: any;
}

export default function Work({ works, uiContent }: Props) {
    return (
        works.length > 0 && (
            <Section title={uiContent.sections.experience}>
                <div className={styles.experience}>
                    <ul>
                        {
                            works.map(
                                ({ name, startDate, endDate, position, summary, highlights, url }) => {
                                    let startYear: number = new Date(startDate).getFullYear() ?? uiContent.missingDate;
                                    startYear = Number.isNaN(startYear) ? uiContent.missingDate : startYear;
                                    const startMonth =
                                        uiContent.months[Number(new Date(startDate).getMonth())] ?? "";
                                    let endYear: number =
                                        endDate != null
                                            ? new Date(endDate).getFullYear()
                                            : uiContent.current;
                                    endYear = Number.isNaN(endYear) ? uiContent.current : endYear;
                                    let endMonth = endDate ? uiContent.months[Number(new Date(endDate).getMonth())] : "";
                                    endMonth = endMonth ? endMonth : '';
                                    const years = `${startMonth} ${startYear} - ${endMonth} ${endYear}`;

                                    return (
                                        <li>
                                            <article>
                                                <header>
                                                    <div>
                                                        <h3>
                                                            <a href={url} title={`Ver ${name}`} target="_blank">
                                                                {name}
                                                            </a>
                                                        </h3>
                                                        <h4>{position}</h4>
                                                    </div>

                                                    <time>{years}</time>
                                                </header>

                                                <footer>
                                                    <p>{summary}</p>
                                                </footer>
                                            </article>
                                        </li>
                                    );
                                },
                            )
                        }
                    </ul>
                </div>
            </Section>
        )
    )
}