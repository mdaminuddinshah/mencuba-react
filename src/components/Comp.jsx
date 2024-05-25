import PropTypes from 'prop-types';
import { useState } from 'react';

function Comp(props) {

  const [btn, setBtn] = useState(0);
  const [minus, setMinus] = useState(0);
  const nilai = 'nilai:  ';

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const submits = (e) => {
    e.preventDefault();
    console.log("user >>>", user);
    console.log("pwd >>>", pwd);
  }

  return (
    <div style={{
        border: "2px solid red",
        borderRadius: "15px",
        padding: "5px"
    }}>
        <p>{props.name}</p>
        <div style={{display: "flex", flexDirection: "row"}}>
          <p>{nilai}</p>
          <p>{btn}</p>
          <button onClick={() => {setBtn((bfr) => bfr + 1)}}>Tambah</button>
        </div>
        <div style={{display: "flex", flexDirection: "row"}}>
          <p>{nilai}</p>
          <p>{minus}</p>
          <button onClick={() => {setMinus((bfr) => bfr - 1)}}>Tolak</button>
        </div>

        <form onSubmit={submits}>
          <fieldset>
            <label htmlFor="username">Username: </label>
            <input id="username" name="username" placeholder="username" onChange={(e) => {setUser(e.target.value)}}></input>
          </fieldset>
          <fieldset>
            <label htmlFor="pwd">Password: </label>
            <input type="password" id="pwd" name="pwd" placeholder='password' onChange={(e) => {setPwd(e.target.value)}}></input>
          </fieldset>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}

Comp.propTypes = {
    name: PropTypes.string
}

export default Comp;
