import PropTypes from 'prop-types'

function State (props) {
  return (
    <div>
        {`Counter: ${props.display}`}
        <button onClick={() => props.counter((bfr) => bfr +1 )}>Increase</button>
    </div>
  )
}

State.propTypes = {
    display: PropTypes.number,
    counter: PropTypes.func
}

export default State;
