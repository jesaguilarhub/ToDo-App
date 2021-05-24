import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TodoItem = ({ id, student, task, isCompleted, handleChecked, handleDelete }) => {
	return (
		<div style={{ margin: '15px' }}>
			<h2>Student: {student}</h2>
			<h3>Task: {task}</h3>
			<FormControlLabel
				label="To-Do Completed:"
				control={
					<CheckBox
						defaultChecked={isCompleted}
						color="primary"
						onChange={() => handleChecked({ id, student, task, isCompleted: !isCompleted })}
					/>
				}
			/>
			<br />
			<Button variant="contained" color="secondary" onClick={() => handleDelete(id)} startIcon={<DeleteIcon />}>
				Delete
			</Button>
		</div>
	);
};

export default TodoItem;
