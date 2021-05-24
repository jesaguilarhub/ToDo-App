import { useEffect, useState } from 'react';
import readToDos from '../services/readToDos';
import deleteToDo from '../services/deleteToDo';
import createToDo from '../services/createToDo';
import updateToDo from '../services/updateToDo';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';
import CircularProgress from '@material-ui/core/CircularProgress';
const TodoContainer = () => {
	const [
		todos,
		setTodos
	] = useState([]);

	const [
		toBeDeleted,
		setToBeDeleted
	] = useState(null);

	const [
		toBeCreated,
		setToBeCreated
	] = useState(null);

	const [
		isLoading,
		setIsLoading
	] = useState(false);

	const [todoUpdate, setTodoUpdate] = useState(null);

		useEffect(() => {
		setIsLoading(true);
		readToDos().then((todosData) => {
			setTodos(todosData.todos);
			setIsLoading(false);
		});
	}, []);

	useEffect(
		() => {
			if (toBeDeleted) {
				setIsLoading(true);
				deleteToDo(toBeDeleted)
					.then(() => {
						setTodos((prev) => {
							return prev.filter((todo) => todo.id !== toBeDeleted);
						});
						setIsLoading(false);
					})
					.catch((err) => {
						console.error(err)
						setIsLoading(false);
					});
			}
		},
		[
			toBeDeleted
		]
	);

	const handleDelete = (id) => {
		setToBeDeleted(id);
	};

	useEffect(
		() => {
			if (toBeCreated) {
				setIsLoading(true);
				createToDo(toBeCreated)
					.then((newTodo) => {
						setTodos((prev) => [
							newTodo,
							...prev
						]);
						setIsLoading(false);
					})
					.catch((err) => {
						console.error(err);
						setIsLoading(false);
					});
			}
		},
		[
			toBeCreated
		]
	);
	const handleCreate = (values) => {
		setToBeCreated(values);
	};
	
	useEffect(() => {
		if(todoUpdate) {
			const {id, student, task, isCompleted} = todoUpdate;
			setIsLoading(true);
			updateToDo(id, {student, task, isCompleted}).then((updated) => {
				setTodos(prev => {
					return prev.map(todo => {
						if(todo.id === updated.id) {
							return updated;
						}
						return todo;
					})
				})
				setIsLoading(false);
			})
		}
	}, [todoUpdate]);

	const handleChecked = (values) => {
		setTodoUpdate(values);	
	}

	const list = todos.map(({ id, student, task, isCompleted }) => {
		return <TodoItem key={id} id={id} student={student} task={task} isCompleted={isCompleted} handleChecked={handleChecked} handleDelete={handleDelete} />;
	});

	return (
		<div>
			{isLoading ? (
			<CircularProgress /> 
			) : (
			<>
				<CreateTodo handleCreate={handleCreate} />
				<div>
				<ul>{list}</ul>
				</div>
			</>
			)}
			
		</div>
	);
};

export default TodoContainer;
