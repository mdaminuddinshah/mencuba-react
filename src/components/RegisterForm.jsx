import {useState} from "react";

function RegisterForm() {

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username >>>", user);
        console.log("password >>>", pwd);
        console.log("age >>>", age);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="username">Username: </label>
            <input 
                type="text" 
                id="username" 
                name="username" 
                onChange={(e) => {setUser(e.target.value)}}   
            ></input>
        </fieldset>
        <fieldset>
            <label htmlFor="password">Password: </label>
            <input 
                type="password" 
                id="password" 
                name="password"
                onChange={(e) => {setPwd(e.target.value)}}    
            ></input>
        </fieldset>
        <fieldset>
            <label htmlFor="age">Age: </label>
            <input 
                type="number" 
                id="age" 
                name="age"
                onChange={(e) => {setAge(e.target.value)}}    
            ></input>
        </fieldset>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default RegisterForm
