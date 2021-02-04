import Task from './Task'

//set array of tasks into a state within a function
const Tasks = ({tasks, onDelete}) => {
    
    return(
        <>
        {/* for each item in arrray */}
            {tasks.map((item) => (
                // map item to text element with key id
            <Task key={item.id} item= {item} onDelete={onDelete} />
                ))}
        </>
    )
}


export default Tasks;