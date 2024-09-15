import type { Project } from "@/cv";
import Section from "../../Section/Section"
import GitHub from "@/core/icons/GitHub";
import styles from './projects.module.css'

interface Props {
    projects: Project[];
    uiContent: any;
}

export default function Projects({ uiContent, projects }: Props) {
    return (
        projects.length > 0 && (
            <Section title={uiContent.sections.projects}>
                <div className={styles.projects}>
                    <ul>
                        {
                            projects.map(
                                ({ url, description, highlights, name, isActive, github }) => {
                                    return (
                                        <li>
                                            <article>
                                                <header>
                                                    <h3>
                                                        <a href={url} target="_blank" title={`Ver el proyecto ${name}`}>
                                                            {name}
                                                        </a>
                                                        {isActive && <span>•</span>}
                                                        {github && (
                                                            <a
                                                                className="github-code-link"
                                                                href={github}
                                                                target="_blank"
                                                                title={`Ver código fuente del proyecto ${name}`}
                                                            >
                                                                <GitHub />
                                                            </a>
                                                        )}
                                                    </h3>
                                                    <p>{description}</p>
                                                </header>
                                                <footer>
                                                    {highlights?.map((highlight) => {
                                                        return <span>{highlight}</span>
                                                    })}
                                                </footer>
                                            </article>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </Section>
        )
    )
}
