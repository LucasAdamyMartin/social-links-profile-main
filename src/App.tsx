import './App.css'

function App() {
  const NavigationItems : string[] = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram"
  ]
  return (
    <div id="container">
      <img id="image" src='/images/avatar-jessica.jpeg' alt="avatar"/>
      <h2 id="name">Jessica Randall</h2>
      <h3 id="city">London, United Kingdom</h3>
      <p id="description">"Front-end developer and avid reader."</p>
      <div id="links">
        {NavigationItems.map((item) => (
            <p id="link" key={item}>{item}</p>
        ))}
      </div>

    </div>
  )
}

export default App
