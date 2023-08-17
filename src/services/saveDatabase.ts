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

        let apiUrl = '';

        if (process.env.NODE_ENV === 'production') {
            apiUrl = 'https://taskmanager-vip-backend-vq3o.vercel.app';
        } else {
            apiUrl = 'http://localhost:3000';
        }

        try {
            const response = await fetch(`${apiUrl}/api/tasks`, {
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
                console.error('Falha ao salvar a tarefa.');
            }
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }
    }
}
