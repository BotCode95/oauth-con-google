import React, { Component } from 'react'
// import GoogleLogin, { GoogleLogout } from 'react-google-login'
import GoogleBtn from './GoogleBtn'


export class App extends Component {
  

   responseGoogle=(response) => {
    
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div id="btn">
       
        <GoogleBtn/>
       
      </div>
    )
  }
}

export default App
