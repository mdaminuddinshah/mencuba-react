import Title from "./components/Title.jsx";
import Cat from "./components/Cat.jsx";

function App(){

  const lastName = "Masurom";
  const testFunc = () => {
    console.log("Hello");
    return <p>Hello</p>;
  }
  

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
        role={23}
        name={`aminuddin ${lastName}`}
        isTrue={true}
        // test={()=>console.log("hello")}
        test={testFunc}
        test2={() => {
          return <p>Evening</p>
        }}

      />
    </div>
  )
}

export default App;