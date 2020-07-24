import React from "react"
//import PropTypes from "prop-types";

interface IProfile {
  person: {name: string, age: number},
  hobbies: string[],
  favoriteBooks: {name: string, author: string}[]
}


const Profile = (props: IProfile) => {
  const {person: {name, age}, hobbies, favoriteBooks} = props;
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Hobbies: {hobbies.map(hobby => <div>{hobby}</div>)}</div>
      <div>
      Favorite books: {favoriteBooks.map(book =>(
        <div>
          <div>Book: {book.name}</div>
          <div>Author: {book.author}</div>
        </div>
        ))
        }
      </div>
    </div>
  )
}
export default Profile

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
