import PropTypes from 'prop-types'

function Test2(props) {

     // ?. is optional chaining operator
    // if props test not null, have value
    // then it will go to right side
    // () test will run
    // if props.test not null, () will run
    // if props.test is null, () not run
    props.test?.();
    // this ?. just to see exist or not but not execute the function

  return (
    <div style={{
        border: "1px solid brown",
        borderRadius: "5px",
        padding: "10px"
    }}>
        <p>{props.name}</p>
        <p>{props.role}</p>
        {props.isTrue && <p style={{color: "red"}}>Evening</p>}
        
        {/* send boolean here */}
        {/* if true right statement run, if false not run */}
        {/* if isTrue is true then && will execute right side */}
        {/* && sign is for both side must true */}
        {/* for execute function */}
        {props.test && props.test()}
        {props.test2 && props.test2()}
    </div>
  )
}

Test2.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    isTrue: PropTypes.bool,
    test: PropTypes.func,
    test2: PropTypes.func,
    
}

export default Test2;
