import React from "react"

const Profile = (props) => {
  return (
    <div>
      <div>Name: {props.person.name || "!!MISSING!!"}</div>
      <div>Age: {props.person.age || "!!MISSING!!"}</div>
      <div>Hobbies: {props.hobbies.reduce((str, current) => `${str}, ${current}`)  || "!!MISSING!!"}</div>
      <div style={{display: 'flex', width: '600px', justifyContent: 'space-between'}}>
      Favorite books: {props.favoriteBooks.map(book =>(
        <div key={book.name}>
          <div>Book: {book.name  || "!!MISSING!!"}</div>
          <div>Author: {book.author || "!!MISSING!!"}</div>
        </div>
        ))
        }
      </div>
    </div>
  )
}

export default Profile

// import PropTypes from "prop-types";

/*
Profile.propTypes = {
  hobbies: PropTypes.array.isRequired,
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired,
  favoriteBooks: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired
}
*/