const baseURL = 'https://todos-go.herokuapp.com/api/todos';

const readToDos = () => {
	return fetch(baseURL).then((res) => res.json());
};

export default readToDos;
