import { Task } from "../types/Task";

export const updateTaskInDatabase = async ({ id, content }: Task) => {
    const updatedTask = {
        id,
        content
    }

    try {
        const response = await fetch('http://localhost:3000/api/tasks', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })

        if (response.ok) {
            const data = await response.json()
            console.log(data.message)
        } else {
            console.log('Error updating task')
        }

    } catch (error) {
        console.log('Error fetching:', error)
    }
};
