import '../assets/styles/workhistory.css'
import text from '../assets/strings/workhistory.json'
import WorkBio from '../components/WorkBio'
import ByuImg from '../assets/images/byu.jpeg'
import CaravelImg from '../assets/images/caravel.jpeg'
import DomoImg from '../assets/images/domo.png'
import EntrataImg from '../assets/images/entrata.jpeg'
import FamilySearchImg from '../assets/images/familysearch.jpeg'
import SymantecImg from '../assets/images/symantec.jpeg'
import VivintImg from '../assets/images/vivint.jpeg'
import YbaShirtsImg from '../assets/images/ybaShirts.jpeg'

const logos = {
  byu: ByuImg,
  caravel: CaravelImg,
  domo: DomoImg,
  entrata: EntrataImg,
  familysearch: FamilySearchImg,
  symantec: SymantecImg,
  vivint: VivintImg,
  ybaShirts: YbaShirtsImg
}

export default function WorkHistory() {
  return (
    <div className="container">
      {text.jobs.map((job, i) => (
        <WorkBio
          image={logos[job.img]}
          imageAlt={job.title}
          title={job.title}
          position={job.position}
          duration={job.duration}
          summary={job.summary}
          leftAlign={i % 2 === 0}
        />
      ))}
    </div>
  )
}