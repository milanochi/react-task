
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    role: null,
};

const setToken = (value) => dispatch({ type: 'LOGIN', payload: value })

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            //TODO
            return {
                ...state,
                token: action.payload,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

React.useEffect(async () => {
    try {
        const values = {
            email,
            password,
        }
        const response = await fetch('https://reacttask.mkdlabs.com/v2/api/lambda/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: values
        });
        const data = await response.data
        setToken(data.token)
    }

    catch (error) {
        console.log(error.message)
    }

}, [])
