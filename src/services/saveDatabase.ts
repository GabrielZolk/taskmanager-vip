import { getAuth } from "firebase/auth";
import { Task } from "../types/Task";

export const saveTaskToDatabase = async ({ id, date, content, completed }: Task) => {

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        const uid = user.uid;
        const task = {
            id,
            uid,
            date,
            content,
            completed,
        };

        try {
            const response = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
            } else {
                console.error('Failed to save task.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

}