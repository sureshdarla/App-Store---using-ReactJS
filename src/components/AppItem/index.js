import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl, category} = eachApp

  return (
    <li className="app-item">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
