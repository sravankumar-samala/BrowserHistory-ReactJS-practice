import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const EmptyMessage = () => (
  <div className="empty-message">
    <p>There is no history to show</p>
  </div>
)

export default class SearchHistoryResults extends Component {
  constructor(props) {
    super(props)
    const {historyList} = props
    this.state = {
      mainHistoryList: historyList,
      searchInput: '',
    }
    this.deleteHistoryItem = this.deleteHistoryItem.bind(this)
  }

  searchHistory = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  deleteHistoryItem = id => {
    const {mainHistoryList} = this.state
    const nonDeletedHistoryList = mainHistoryList.filter(
      eachObj => eachObj.id !== id,
    )
    this.setState({mainHistoryList: nonDeletedHistoryList})
  }

  render() {
    const {searchInput, mainHistoryList} = this.state
    const filteredList = mainHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main">
        <div className="nav-div">
          <div className="logo-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo"
            />
          </div>
          <div className="search-container">
            <div className="icon-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="icon"
              />
            </div>
            <input
              type="search"
              className="input-search"
              placeholder="Search History"
              value={searchInput}
              onChange={this.searchHistory}
            />
          </div>
        </div>
        <div className="history-items">
          <ul>
            {filteredList.length !== 0 ? (
              filteredList.map(eachObj => (
                <HistoryItem
                  historyItemObject={eachObj}
                  key={eachObj.id}
                  deleteHistoryItem={this.deleteHistoryItem}
                />
              ))
            ) : (
              <EmptyMessage />
            )}
          </ul>
        </div>
      </div>
    )
  }
}
