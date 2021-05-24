import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const CreateTodo = ({ handleCreate }) => {
	const { handleSubmit, register, reset } = useForm();
	const onSubmit = (values) => {
		handleCreate(values);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit, (e) => alert(e))}>
			<div>
				<TextField id="task" label="Task" {...register('task', { required: true })} />
			</div>
			<div>
				<TextField id="student" label="Student" {...register('student', { required: true })} />
			</div>
			<Button type="submit" variant="contained" color="default" startIcon={<CloudUploadIcon />}>
				Upload
			</Button>
		</form>
	);
};

export default CreateTodo;
