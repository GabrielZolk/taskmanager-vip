export const updateTaskCompletedStatus = async (id: string, newCompletedStatus: boolean) => {
    const updatedStatus = {
        id, 
        newCompletedStatus
    };

    let apiUrl = '';

    if (process.env.NODE_ENV === 'production') {
        apiUrl = 'https://taskmanager-vip-backend-vq3o.vercel.app';
    } else {
        apiUrl = 'http://localhost:3000';
    }

    try {
        const response = await fetch(`${apiUrl}/api/tasks/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(updatedStatus)
        });

        if(response.ok) {
            const data = await response.json();
            console.log(data.message);
        } else {
            console.log("Falha ao atualizar o status da tarefa");
        }
    } catch (error) {
        console.error("Erro ao atualizar o status de conclusão da tarefa:", error);
    }
};
