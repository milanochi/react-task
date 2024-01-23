this.login = async function (email, password, role) {
    //TODO
    const credentials = {
        email: email,
        password: password,
        role: role,
    }

    const response = await fetch(
        'https://reacttask.mkdlabs.com/v2/api/lambda/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })

    if (!response.ok) {
        throw new Error(`Login failed with status: ${response.status}`);
    }

    const data = await response.json();


    return data
};


this.check = async function (role) {
    //TODO
    try {
        const response = await fetch('https://reacttask.mkdlabs.com/v2/api/lambda/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.token}`,
            },
            body: {
                "role": role
            }
        });

        if (!response.ok) {
            throw new Error('Token validation failed');
        }

        return true;

    } catch (error) {
        console.error('Token validation error:', error);
        return false;
    }
};
