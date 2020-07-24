import React from 'react';
import Profile from "../demo/Profile";

const Index = () => {
  return (
    <Profile 
      person={{name: "Timithord"}}
      hobbies={["Reading", "Talking a lot"]}
      favoriteBooks={[
        {name: "Lord of the Rings"},
        {name: "Harry Potter"}
      ]}
    />
  )
}

export default Index