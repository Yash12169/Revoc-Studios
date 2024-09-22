import Project from './project/Project'
import './Work.css'
import img1 from '../../assets/work-5.png'
import img2 from '../../assets/work-2.png'
import img3 from '../../assets/work-3.png'
import img4 from '../../assets/work-4.png'
import img5 from '../../assets/work-1.png'
export default function Work() {

  const projects = [
    {
      title1: "Silver",
      title2: "Oak Studio",
      src: img1,
    },
    {
      title1: "Crimson",
      title2: "Fox",
      src: img2
    },
    {
      title1: "Le",
      title2: "Chateau",
      src: img3
    },
    {
      title1: "Golden Thread",
      title2: "Studio",
      src: img4
    },
    {
      title1: "Lunar",
      title2: "Vista",
      src: img5
    }
  ]

  return (
    <main className={'main-work'}>
      <div className={'gallery-work'}>
        <p>Featured Work</p>
          {
            projects.map( project => {
              return <Project project={project}/>
            })
          }
      </div>
    </main>
  )
}