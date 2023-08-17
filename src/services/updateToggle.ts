export const updateTaskCompletedStatus = async (id: string, newCompletedStatus: boolean) => {
    const updatedStatus = {
        id, 
        newCompletedStatus
    }

    try {
        const response = await fetch('http://localhost:3000/api/tasks/status', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(updatedStatus)
        })

        if(response.ok) {
            const data = await response.json()
            console.log(data.message)
        } else {
            console.log("Failed to update task status");
        }
    } catch (error) {
        console.error("Error updating task completed status:", error);
    }
};
