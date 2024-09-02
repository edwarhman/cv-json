import type { Basics } from "@/cv";
import Section from "../../Section";

interface Props {
    title: string;
    basics: Basics;
}

export default function About({ title, basics }: Props) {
    const { summary } = basics
    return (
        <Section title={title}>
            <p>
                {summary}
            </p>
        </Section>
    )
}
