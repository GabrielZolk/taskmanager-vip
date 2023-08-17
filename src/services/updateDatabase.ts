import { Task } from "../types/Task";

export const updateTaskInDatabase = async ({ id, content }: Task) => {
    const updatedTask = {
        id,
        content
    };

    let apiUrl = '';

    if (process.env.NODE_ENV === 'production') {
        apiUrl = 'https://taskmanager-vip-backend-vq3o.vercel.app';
    } else {
        apiUrl = 'http://localhost:3000';
    }

    try {
        const response = await fetch(`${apiUrl}/api/tasks`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
        } else {
            console.log('Erro ao atualizar a tarefa');
        }

    } catch (error) {
        console.log('Erro ao buscar:', error);
    }
};
