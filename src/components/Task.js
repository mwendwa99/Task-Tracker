import { FaTimes } from 'react-icons/fa';

const Task = ( {item, onDelete} ) => {
    return (
        <div className='task'>
            <h3> {item.text} <FaTimes style={{ color:'red', cursor:'pointer' }}
            onClick={ () => onDelete(item.id)} /> </h3>
            <p> {item.day} </p>
        </div>
    )
}

export default Task
