import Title from "./components/Title.jsx";
import Test2 from "./components/Test2.jsx";
import Test from "./components/Test.jsx";

function App(){

  const test2 = () => {
    return <p>Evening</p>
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
      {/* only string dont need curly bracket */}
      {/* other types, number, expression all need curly bracket */}
      <Test2 
        name='amin'
        role={21}
        isTrue={true}
        test={() => {return <p>Hello</p>}}
        test2={test2}

      />
      
      
      {/* cara buat map di react */}
      {
      users.map((id) => {
        return <Test 
          acc={id}
          occupation="Engineer"
          hidden={id.active}
          key={users}
          />
      })
      }

      <Title />

    </div>
  )
}

export default App;