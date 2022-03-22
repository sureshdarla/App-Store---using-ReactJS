import './index.css'

const TabItem = props => {
  const {tabItems, onclickChangeTabId} = props
  const {tabId, displayText} = tabItems
  console.log('in tabitem : ', tabItems)

  const onclickTabItem = event => {
    console.log(event.target)
    onclickChangeTabId(tabId)
  }

  return (
    <li onClick={onclickTabItem}>
      <button type="button" className="tab-item">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
