import type { CV } from '@/cv'
import { atom } from 'nanostores'

export const cvItems = atom<CV>({} as CV)

export function updateCv (cv: CV) {
  cvItems.set(cv)
}
