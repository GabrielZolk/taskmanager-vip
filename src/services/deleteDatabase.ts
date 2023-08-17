export const deleteTaskFromDatabase = async (taskId: string) => {
    let apiUrl = '';

    if (process.env.NODE_ENV === 'production') {
        apiUrl = 'https://taskmanager-vip-backend-vq3o.vercel.app';
    } else {
        apiUrl = 'http://localhost:3000';
    }

    try {
        const response = await fetch(`${apiUrl}/api/tasks/${taskId}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
        } else {
            console.error('Falha ao deletar a tarefa do banco de dados.');
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
};
