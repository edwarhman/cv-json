export interface CV {
  basics: Basics
  work: Work[]
  volunteer: Volunteer[]
  education: Education[]
  awards: Awards[]
  certificates: Certificates[]
  publications: Publications[]
  skills: Skills[]
  languages: Languages[]
  interests: Interests[]
  references: References[]
  projects: Projects[]
}

interface Basics {
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Profiles[]
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr | null
  summary: string
  highlights: Highlight
}

type DateStr = `${string}-${string}-${string}`

interface Volunteer {
  organization: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr
  summary: string
  highlights: Highlight
}

interface Skills {
  name: string
  level: string
  keywords: string[]
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

interface Certificates {
  name: string
  date: DateStr
  issuer: string
  url: string
}

interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: DateStr
  endDate: DateStr
  score: string
  courses: string[]
}

interface Languages {
  language: Language
  fluency: string
}

type Language =
  'Spanish'
  | 'English'
  | 'German'
  | 'France'
  | 'Italian'
  | 'Korean'
  | 'Portuguese'
  | 'Chinese'
  | 'Arabic'
  | 'Dutch'
  | 'Finnish'
  | 'Russian'
  | 'Turkish'
  | 'Hindi'
  | 'Bengali'
  | string

interface Projects {
  name: string
  isActive: boolean
  description: string
  highlights: Highlight
  url: string
  github?: string
}

interface Interests {
  name: string
  keywords: string[]
}

interface References {
  name: string
  reference: string
}

type Highlight = String[]
