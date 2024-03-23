export const uiContent = {
    es: {
        sections: {
            about: 'Sobre mí',
            experience: 'Experiencia laboral',
            projects: 'Proyectos',
            skills: 'Habilidades',
            education: 'Educación',
            awards: 'Premios',
            publications: 'Publicaciones',
            references: 'Referencias',
        },
        current: 'Actual',
        pageTitle: (name: string, label: string) => `Portafolio de ${name} - ${label}`,
        contact: {
            email: (name: string, email: string) => `Enviar un correo electrónico a ${name} al correo ${email}`,
            phone: (name: string, phone: string) => `Llamar por teléfono ${name} al número ${phone}`,
            socialMedia: (name: string, socialMedia: string) => `Visita el perfil de ${name} en ${socialMedia}`,
        },
        keyboardManager: {
            label: 'Pulsa <kbd>Cmd</kbd> + <kbd>K</kbd> para abrir la paleta de comandos.'
        }
    },
    en: {
        sections: {
            about: 'About me',
            experience: 'Work experience',
            projects: 'Projects',
            skills: 'Skills',
            education: 'Education',
            awards: 'Awards',
            publications: 'Publications',
            references: 'References',
        },
        current: 'Current',
        pageTitle: (name: string, label: string) => `${name}'s Portfolio - ${label}`,
        contact: {
            email: (name: string, email: string) => `Send an email to ${name}`,
            phone: (name: string, phone: string) => `Call ${name} to the phone ${phone}`,
            socialMedia: (name: string, socialMedia: string) => `Visit ${name}'s profile on ${socialMedia}`,
        },
        keyboardManager: {
            label: 'Press <kbd>Cmd</kbd> + <kbd>K</kbd> to open the command menu.'
        }
    }
} as const