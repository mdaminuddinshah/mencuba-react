import Title from "./components/Title.jsx";
import Cat from "./components/Cat.jsx";

function App(){

  const lastName = "Masurom";
  

  return(
    <div style={{
      display: 'flex',
      flexDirection: "column",
      gap: "7px",
      padding: "15px",
      // border: '1px solid black'

    }}>
      <Title />
      <Title />
      {/* only string dont need curly bracket */}
      {/* other types, number, expression all need curly bracket */}
      <Cat 
        name="shah"
        role={21}
        isTrue={true}
      />
      <Cat 
        name={`aminuddin ${lastName}`}
        role={23}
        isTrue={true}
        test={()=>console.log("okay")}
      />
    </div>
  )
}

export default App;