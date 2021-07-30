import PropTypes from 'prop-types'
import Button from "../components/Button";

const Header = (props) => {
  const onClick = () => {
    
  }

  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color="green" onClick={onClick}></Button>
    </header>
  )
}

Header.defaultProps = {
  title:"Task Tracker"
}

Header.propTypes = {
  title: PropTypes.string.isRequired 

}

/* const headingStyle = {
  background: 'lightgrey'
} */

export default Header
