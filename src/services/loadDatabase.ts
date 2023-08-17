import { getAuth } from "firebase/auth";

export const loadTasksFromDatabase = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
        return [];
    }
    
    const userUid = user.uid;

    let apiUrl = '';

    if (process.env.NODE_ENV === 'production') {
        apiUrl = 'https://taskmanager-vip-backend-vq3o.vercel.app';
    } else {
        apiUrl = 'http://localhost:3000';
    }
    
    try {
        const response = await fetch(`${apiUrl}/api/tasks?userUid=${userUid}`);
        if(response.ok) {
            const tasks = await response.json();
            return tasks;
        } else {
            console.error('Falha ao buscar as tarefas da API.');
            return [];
        }
    } catch (error) {
        console.error("Ocorreu um erro:", error);
        return [];
    }
}
