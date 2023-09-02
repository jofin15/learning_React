import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>asdf</h1>
    </div>
  )
}


//react actually converts the above code in this object format
const reactElement={
  type:"a",
  props:{
      href:"https://google.com",
      target:"_blank"
  },
  children:"click me to visit google"
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
)
