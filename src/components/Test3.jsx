import PropTypes from 'prop-types'

const Test3 = (props) => {

   

  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "5px",
      padding: "10px"
  }}>
        <p>{props.acc?.name}</p>
        <p>{props.duo?.nama}</p>
    </div>
  )
}

Test3.propTypes = {
  acc: PropTypes.shape({
      name: PropTypes.string
  }),

  duo: PropTypes.shape({
    nama: PropTypes.string
  }),
  
}

export default Test3