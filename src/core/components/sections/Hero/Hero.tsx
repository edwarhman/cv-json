import type { Basics } from "@/cv";
import Section from "../../Section/Section"
import { useTranslation, type Locale, type UI_CONTENT } from "@/core/i18n/utils";
import type { SocialIcon } from "@/types";
import GitHub from "@/core/icons/GitHub";
import LinkedIn from "@/core/icons/LinkedIn";
import X from "@/core/icons/X";
import WorldMap from "@/core/icons/WorldMap";
import Mail from "@/core/icons/Mail";
import Phone from "@/core/icons/Phone";
import { uiContent as uiUtils } from "@/core/i18n/interface";
import styles from './hero.module.css'

interface Props {
    basics: Basics;
    uiContent: any;
}

const SOCIAL_ICONS: SocialIcon = {
    GitHub,
    LinkedIn,
    X,
}


export default function Hero({ basics, uiContent }: Props) {
    const { name, label, image, location, profiles, phone, email } = basics
    const { city, region } = location
    const linkedInfo = profiles?.find(({ network }) => network === "LinkedIn")
    const linkedUrl = linkedInfo?.url
    const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" • ")

    return (
        <Section>
            <div className={styles.heroContainer}>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>{label}</h2>
                    <span>
                        <WorldMap />
                        {city}, {region}
                    </span>
                    <footer className="print">
                        {printInfo}
                    </footer>
                    <footer className="no-print">
                        {
                            email && (
                                <a
                                    href={`mailto:${email}`}
                                    title={uiUtils[uiContent.locale as Locale].contact.email(name, email)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail />
                                </a>
                            )
                        }
                        {
                            phone && (
                                <a
                                    href={`tel:${phone}`}
                                    title={uiUtils[uiContent.locale as Locale].contact.phone(name, phone)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Phone />
                                </a>
                            )
                        }
                        {
                            profiles?.map(({ network, url, username }) => {
                                const Icon = SOCIAL_ICONS[network]

                                console.log({ Icon, network })

                                return (
                                    <a
                                        key={network + '-contact'}
                                        href={url}
                                        title={uiUtils[uiContent.locale as Locale].contact.socialMedia(name, network)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {Icon ? <Icon /> : network}
                                    </a>
                                )
                            })
                        }
                    </footer>
                </div>
                <figure className="no-print">
                    <img src={image} alt={name} />
                </figure>
            </div>
        </Section>
    )
}