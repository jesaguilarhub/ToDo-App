const baseURL = 'https://todos-go.herokuapp.com/api/todos/';

const deleteToDo = (id) => {
	return fetch(baseURL + id, {
		method : 'DELETE'
	});
};

export default deleteToDo;
