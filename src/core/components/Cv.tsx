import type { CV } from "@/cv";
import Hero from "./sections/Hero";
import type { Locale, UI_CONTENT } from "../i18n/utils";
import { useStore } from "@nanostores/react";
import { cvItems } from "../stores/cv.store";
import About from "./sections/About";

interface Props {
    cv?: CV;
    uiContent: any;
}
export default function Cv({ cv, uiContent }: Props) {
    const $cvItems = cv ?? useStore(cvItems)

    console.log({ $cvItems })

    return (
        <div>
            {$cvItems.basics != null && <Hero uiContent={uiContent} basics={$cvItems.basics} />}
            {$cvItems.basics != null && <About title={uiContent.sections.about} basics={$cvItems.basics} />}
        </div>
    )
}