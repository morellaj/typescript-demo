import React from 'react';
import Profile from "../demo-ts/Profile";

const Index = () => {
  return (
    <Profile 
      person={{name: "Timithord"}}
      hobbies={["rolling", "looking up"]}
      favoriteBooks={[
        {name: "Lord of the Rings"},
        {name: "Harry Potter"}
      ]}
    />
  )
}

export default Index