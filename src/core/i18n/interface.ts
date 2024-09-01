export const uiContent = {
  es: {
    sections: {
      about: 'Sobre mí',
      experience: 'Experiencia laboral',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación y certificaciones',
      awards: 'Premios',
      publications: 'Publicaciones',
      references: 'Referencias'
    },
    errors: {
      notFound: 'No se encontró la página',
      goBack: 'Volver'
    },
    current: 'Actualidad',
    visit: 'Visitar',
    pageTitle: (name: string, label: string) => `Portafolio de ${name} - ${label}`,
    contact: {
      email: (name: string, email: string) => `Enviar un correo electrónico a ${name} al correo ${email}`,
      phone: (name: string, phone: string) => `Llamar por teléfono ${name} al número ${phone}`,
      socialMedia: (name: string, socialMedia: string) => `Visita el perfil de ${name} en ${socialMedia}`
    },
    keyboardManager: {
      footer: (container: HTMLElement) => {
        const cmdKbr = document.createElement('kbd')
        cmdKbr.appendChild(document.createTextNode('Cmd'))
        const kKey = document.createElement('kbd')
        kKey.appendChild(document.createTextNode('K'))
        container.innerHTML = 'Pulsa '
        container.appendChild(cmdKbr)
        container.innerHTML += ' + '
        container.appendChild(kKey)
        container.innerHTML += ' para abrir la paleta de comandos.'
        return container
      },
      searchPlaceholder: 'Buscar comando',
      listSections: {
        actions: {
          title: 'Acciones',
          commands: [{
            label: 'print',
            ui: 'Imprimir'
          }]
        }
      }
    },
    months: [
      'Enero', // January
      'Febrero', // February
      'Marzo', // March
      'Abril', // April
      'Mayo', // May
      'Junio', // June
      'Julio', // July
      'Agosto', // August
      'Septiembre', // September
      'Octubre', // October
      'Noviembre', // November
      'Diciembre' // December
    ]
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
      references: 'References'
    },
    errors: {
      notFound: 'Page not found',
      goBack: 'Go back'
    },
    current: 'Current',
    visit: 'Visit',
    pageTitle: (name: string, label: string) => `${name}'s Portfolio - ${label}`,
    contact: {
      email: (name: string, email: string) => `Send an email to ${name}`,
      phone: (name: string, phone: string) => `Call ${name} to the phone ${phone}`,
      socialMedia: (name: string, socialMedia: string) => `Visit ${name}'s profile on ${socialMedia}`
    },
    keyboardManager: {
      footer: (container: HTMLElement) => {
        const cmdKbr = document.createElement('kbd')
        cmdKbr.appendChild(document.createTextNode('Cmd'))
        const kKey = document.createElement('kbd')
        kKey.appendChild(document.createTextNode('K'))
        container.innerHTML = 'Press '
        container.appendChild(cmdKbr)
        container.innerHTML += ' + '
        container.appendChild(kKey)
        container.innerHTML += ' to open the command menu.'
        return container
      },
      searchPlaceholder: 'Search command',
      listSections: {
        actions: {
          title: 'Actions',
          commands: [{
            label: 'print',
            ui: 'Print'
          }]
        }
      }
    },
    months: [
      'January', // Enero
      'February', // Febrero
      'March', // Marzo
      'April', // Abril
      'May', // Mayo
      'June', // Junio
      'July', // Julio
      'August', // Agosto
      'September', // Septiembre
      'October', // Octubre
      'November', // Noviembre
      'December' // Diciembre
    ]
  }
} as const
