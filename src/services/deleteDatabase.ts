export const deleteTaskFromDatabase = async (taskId: string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
        } else {
            console.error('Failed to delete task from the database.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};


