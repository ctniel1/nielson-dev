import '../assets/styles/workhistory.css'

export default function WorkBio({ image, imageAlt, title, position, duration, summary, leftAlign }) {
  return (
    <div className='work-container'>
      {leftAlign && (
        <div>
          <img className='work-img' src={image} alt={imageAlt} />
        </div>
      )}
      <div className='work-title'>
        <h1><strong>{title}</strong></h1>
        <div className='work-role'>
          <h2>{position}</h2>
          <h2>{duration}</h2>
        </div>
        {summary.map((p) => (
          <p className='work-p'>{p}</p>
        ))}
      </div>
      {!leftAlign && (
        <div>
          <img className='work-img' src={image} alt={imageAlt} />
        </div>
      )}
    </div>
  )
}