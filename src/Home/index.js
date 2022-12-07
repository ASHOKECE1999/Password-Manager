import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ListItem from '../ListItem/index'
import './index.css'

class Home extends Component {
  state = {
    userLink: '',
    userName: '',
    userPassword: '',
    myList: [],
    searchInput: '',
    isDisplay: true,
  }

  changeTheDisplay = () => {
    this.setState(prevState => ({isDisplay: !prevState.isDisplay}))
  }

  linkTaker = event => {
    this.setState({userLink: event.target.value})
  }

  userPassTaker = event => {
    this.setState({userPassword: event.target.value})
  }

  userNameTaker = event => {
    this.setState({userName: event.target.value})
  }

  addItems = event => {
    event.preventDefault()
    const {userLink, userName, userPassword, myList} = this.state
    if (userLink !== '' && userName !== '' && userPassword !== '') {
      // console.log('Hi ashok')
      const data = {
        id: uuidv4(),
        userLink,
        userName,
        userPassword,
      }
      this.setState({myList: [...myList, data]})
    }
  }

  viewBasedOnTheSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  renderFailureView = () => (
    <div className="failView">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
        alt="no passwords"
      />
      <p>No Passwords</p>
    </div>
  )

  deleteTheListElement = id => {
    const {myList} = this.state
    const updatedArray = myList.filter(eachItem => eachItem.id !== id)
    this.setState({myList: updatedArray})
  }

  renderListItems = () => {
    const {myList, searchInput, isDisplay} = this.state
    const updatedList = myList.filter(eachItem =>
      eachItem.userLink.includes(searchInput),
    )
    // this.setState({initialCount: updatedList.length})
    return (
      <ul className="myListOne">
        {updatedList.map(eachItem => (
          <ListItem
            eachItem={eachItem}
            key={eachItem.id}
            deleteTheListElement={this.deleteTheListElement}
            isDisplay={isDisplay}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {userLink, userName, userPassword, myList, searchInput} = this.state
    const updatedList = myList.filter(eachItem =>
      eachItem.userLink.includes(searchInput),
    )
    const isHigher = myList.length > 0
    // console.log(myList)
    return (
      <div className="main-container">
        <div className="app-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="form-container">
          <div className="form-manager">
            <h1>Add New Password</h1>
            <form onSubmit={this.addItems}>
              <div className="inputTaker">
                <div className="logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.linkTaker}
                  value={userLink}
                />
              </div>
              <div className="inputTaker">
                <div className="logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.userNameTaker}
                  value={userName}
                />
              </div>
              <div className="inputTaker">
                <div className="logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                  />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.userPassTaker}
                  value={userPassword}
                />
              </div>
              <button type="submit" className="myButton">
                Add
              </button>
            </form>
          </div>
          <div className="pass-manager">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
            />
          </div>
        </div>
        <div className="card-manager">
          <div className="header">
            <div className="items">
              <h1>Your Passwords</h1>
              <span>{updatedList.length}</span>
            </div>

            <div className="inputTaker">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png  "
                  alt="search"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                id="ashok"
                onChange={this.viewBasedOnTheSearch}
              />
            </div>
          </div>
          <hr />
          <div
            className="bubbling"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                color: '#ffffff',
                marginRight: '20px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                onClick={this.changeTheDisplay}
                type="checkbox"
                id="ashokId"
                style={{height: '17px', width: '30px'}}
              />
              <label htmlFor="ashokId">Show passwords</label>
            </div>
          </div>
          <div className="list-card-container">
            {isHigher ? this.renderListItems() : this.renderFailureView()}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
