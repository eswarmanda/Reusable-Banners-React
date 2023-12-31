import './index.css'

const Banners = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="submit">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banners
