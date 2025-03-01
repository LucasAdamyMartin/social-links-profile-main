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
    <h3 id="description">"Front-end developer and avid reader."</h3>
    {NavigationItems.map((item) => (
      <div id="link" key={item}>{item}</div>
    ))}
    
    </div>
  )
}

export default App
