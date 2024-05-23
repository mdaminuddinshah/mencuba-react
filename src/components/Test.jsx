import PropTypes from 'prop-types'

const Test = (props) => {

  // boolean
  if(props.hidden) return null;


  return (
    <div style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px"
    }}>
        <p>{`Occupation: ${props.occupation}`}</p>
        <p>{`Firstname: ${props.acc.firstName}`}</p>
        <p>{`Lastname: ${props.acc.lastName}`}</p>
        <p>{`Age: ${props.acc.age}`}</p>


    </div>
  )
}

Test.propTypes = {
    acc: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number
    }),
    occupation: PropTypes.string,
    hidden: PropTypes.bool,
    
}

export default Test