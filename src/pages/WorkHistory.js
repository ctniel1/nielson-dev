import '../assets/styles/workhistory.css'
import FamilySearchImg from '../assets/images/familysearch.jpeg'
import CaravelImg from '../assets/images/caravel.jpeg'
import YBAShirtsImg from '../assets/images/ybaShirts.jpeg'
import byuImg from '../assets/images/byu.jpeg'
import symantecImg from '../assets/images/symantec.jpeg'
import entrataImg from '../assets/images/entrata.jpeg'
import vivintImg from '../assets/images/vivint.jpeg'
import text from '../assets/strings/workhistory.json'
import WorkBio from '../components/WorkBio'

export default function WorkHistory() {
  return (
    <div className="container">
      <WorkBio
        image={FamilySearchImg}
        imageAlt="FamilySearch"
        title={text.familysearch.title}
        position={text.familysearch.position}
        duration={text.familysearch.duration}
        summary={text.familysearch.summary}
        leftAlign
      />
      <WorkBio
        image={CaravelImg}
        imageAlt="Caravel"
        title={text.caravel.title}
        position={text.caravel.position}
        duration={text.caravel.duration}
        summary={text.caravel.summary}
      />
      <WorkBio
        image={YBAShirtsImg}
        imageAlt="YBA Shirts"
        title={text.ybaShirts.title}
        position={text.ybaShirts.position}
        duration={text.ybaShirts.duration}
        summary={text.ybaShirts.summary}
        leftAlign
      />
      <WorkBio
        image={byuImg}
        imageAlt="BYU Athletics"
        title={text.byuAthletics.title}
        position={text.byuAthletics.position}
        duration={text.byuAthletics.duration}
        summary={text.byuAthletics.summary}
      />
      <WorkBio
        image={symantecImg}
        imageAlt="Symantec"
        title={text.symantec.title}
        position={text.symantec.position}
        duration={text.symantec.duration}
        summary={text.symantec.summary}
        leftAlign
      />
      <WorkBio
        image={byuImg}
        imageAlt="BYU OIT"
        title={text.byuOIT.title}
        position={text.byuOIT.position}
        duration={text.byuOIT.duration}
        summary={text.byuOIT.summary}
      />
      <WorkBio
        image={entrataImg}
        imageAlt="Entrata"
        title={text.entrata.title}
        position={text.entrata.position}
        duration={text.entrata.duration}
        summary={text.entrata.summary}
        leftAlign
      />
      <WorkBio
        image={byuImg}
        imageAlt="BYU Vending"
        title={text.byuVending.title}
        position={text.byuVending.position}
        duration={text.byuVending.duration}
        summary={text.byuVending.summary}
      />
      <WorkBio
        image={vivintImg}
        imageAlt="Vivint"
        title={text.vivint.title}
        position={text.vivint.position}
        duration={text.vivint.duration}
        summary={text.vivint.summary}
        leftAlign
      />
    </div>
  )
}