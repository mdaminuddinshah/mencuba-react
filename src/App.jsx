import Title from "./components/Title.jsx";
import Cat from "./components/Cat.jsx";
import Test from "./components/Test.jsx";

function App(){

  const lastName = "Masurom";
  const testFunc = () => {
    console.log("Hello");
    return <p>Hello</p>;
  }

  const users = [
    {
    firstName: "aminuddin",
    lastName: "masurom",
    age: 21,
    active: true
    },
    {
    firstName: "hanim",
    lastName: "bukhari",
    age: 20,
    active: false
    }

];
  

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
      
      {/* cara buat map di react */}
      {
      users.map((id) => {
        return <Test 
          acc={id}
          occupation="Engineer"
          hidden={id.active}
          />
      })
      }


    </div>
  )
}

export default App;