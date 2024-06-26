import Test2 from "./components/Test2.jsx";
import Test from "./components/Test.jsx";
import Test3 from "./components/Test3.jsx";
import Count from "./components/Count.jsx";
import State2 from "./components/State2.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Comp from "./components/Comp.jsx";

function App(){

  const test2 = () => {
    return <p>Evening</p>
  }

  const students = ['amin', 'hanim', 'shah', 'farida'];

  const acc = [
    {name: "amin"},
    {name: "hanim"}
  ];
  const acc2 = [
    {nama: "amin"},
    {nama: "hanim"}
  ];

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

      <Comp 
        name="amin"
      />

      <RegisterForm />

      <Count/>
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
          // occupation="Engineer"
          // hidden={id.active}
          key={users}
          />
      })
    }
   
   {acc.map((ab) => {
    return <Test3 
      acc={ab}
      key={acc}
    />
   })}

   {acc2.map((abc) => {
    return <Test3 
        duo={abc}
        key={acc2}
    />
   })}
      
      {students.map((abc) => {
        return <State2 
          sdt={abc}
          key={students}
        />
      })}
    </div>
  )
}

export default App;