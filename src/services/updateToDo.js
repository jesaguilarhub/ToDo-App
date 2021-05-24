const baseURL = 'https://todos-go.herokuapp.com/api/todos/';
const updateToDo = (id, todoUpdate) => {
	return fetch(baseURL + id, {
		method  : 'PUT',
		headers : { 'Content-Type': 'application/json' },
		body    : JSON.stringify(todoUpdate)
	}).then((res) => res.json());
};

export default updateToDo;
