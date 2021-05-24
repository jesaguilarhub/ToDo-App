const baseURL = 'https://todos-go.herokuapp.com/api/todos';
const createToDo = (newToDo) => {
	return fetch(baseURL, {
		method  : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		body    : JSON.stringify(newToDo)
	}).then((response) => response.json());
};

export default createToDo;
