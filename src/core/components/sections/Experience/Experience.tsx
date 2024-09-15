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
            <Section title={uiContent.sections.work}>
                <div className={styles.experience}>
                    <ul>
                        {
                            works.map(
                                ({ name, startDate, endDate, position, summary, highlights, url }) => {
                                    const startYear = new Date(startDate).getFullYear();
                                    const startMonth =
                                        uiContent.months[Number(new Date(startDate).getMonth())];
                                    const endYear =
                                        endDate != null
                                            ? new Date(endDate).getFullYear()
                                            : uiContent.current;
                                    const endMonth =
                                        endDate != null
                                            ? uiContent.months[Number(new Date(endDate).getMonth())]
                                            : "";
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