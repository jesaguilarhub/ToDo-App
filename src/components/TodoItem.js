const TodoItem = ({ id, student, task, isCompleted, handleChecked, handleDelete }) => {
	return (
		<div>
			<h2>Student: {student}</h2>
			<h3>Task: {task}</h3>
			<label htmlFor="isCompleted">To-Do Completed: </label>
			<input
				type="checkbox"
				name="isCompleted"
				id="isCompleted"
				defaultChecked={isCompleted}
				onChange={() => handleChecked({ id, student, task, isCompleted: !isCompleted })}
			/>{' '}
			<br />
			<button onClick={() => handleDelete(id)}>Delete</button>
		</div>
	);
};

export default TodoItem;
