import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title}) => {
    // event function for button
    const onClick = () => {
        console.log('click');
    }

    return (
        <header className='header'>
            <h1> {title} </h1>
            {/* button with props */}
            <Button color='green' text='Add' onClick={onClick} />
        </header>
        
    )
}
// if Header is not defined in App.js
Header.defaultProps = {
    title : 'Task Tracker',
}
// error management incase {title} is not string
Header.propTypes = {
    title : PropTypes.string.isRequired,
}
// css in js
// const headerStyle = {
//     color: 'red', 
//     backgroundColor:'yellow'
// }



export default Header
