import { atom } from 'jotai'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img6.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img4.jpg'
import vid from '../assets/heroVideo.mp4'


export const vidAtom = atom([vid]);
export const imgAtom = atom([img1,img2,img3,img4,img5,img6]);