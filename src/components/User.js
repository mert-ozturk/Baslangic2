import React from 'react'

const User = ({name,isLoggedIn,friends}) => {
  return (
    <h1>
        {isLoggedIn ? `Adım: ${name}`: 'Giriş Yapılmadı'}
      {
        friends.map((friend,index)=> {
            return <div key={friend.id}>{friend.name}</div>
        }
            
        )
      }
    </h1>
  )
}

export default User
