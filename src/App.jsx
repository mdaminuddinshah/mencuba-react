import { styleRdm } from "./random.js"

function App() {

  const randomStyle = {
    color: "orange",
    fontSize: "35px"
  };

  return (
    <div>
      <p style={{color:"lightblue", fontSize:"25px"}}>aminuddin</p>
      <p style={styleRdm}>aminuddin</p>
      <p style={randomStyle}>aminuddin</p>
    </div>
  )
}

export default App
