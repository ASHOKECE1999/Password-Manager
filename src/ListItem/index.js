import './index.css'

const ListItem = props => {
  const {eachItem, deleteTheListElement} = props
  const {userLink, userName, id, userPassword} = eachItem

  // console.log(userName[0])

  const deleteTheItem = () => {
    deleteTheListElement(id)
  }

  return (
    <li>
      <div
        style={{
          color: '#ffffff',
          margin: '9px',
          fontSize: '30px',
          backgroundColor: ' #10b981',
          padding: '16px',
          borderRadius: '300px',
          width: '60px',
          textAlign: 'center',
        }}
      >
        {userName[0]}
      </div>
      <div style={{margin: '10px', display: 'flex', flexDirection: 'column'}}>
        <span>{userLink}</span>
        <span>{userName}</span>
        <span>{userPassword}</span>
      </div>
      <div>
        <button type="button" onClick={deleteTheItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            style={{height: '25px'}}
          />
        </button>
      </div>
    </li>
  )
}
export default ListItem
