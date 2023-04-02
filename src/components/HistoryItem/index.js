/* eslint-disable react/button-has-type */
import './index.css'
// {
//     id: 0,
//     timeAccessed: '07:45 PM',
//     logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
//     title: 'Instagram',
//     domainUrl: 'instagram.com',
//   },
const HistoryItem = props => {
  const {deleteHistoryItem, historyItemObject} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItemObject

  const deleteItem = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="item-container">
        <div className="application-details">
          <img src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p href={domainUrl} className="domain">
            {domainUrl}
          </p>
        </div>
        <button data-testid="delete" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
