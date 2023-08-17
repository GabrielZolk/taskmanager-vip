import { getAuth } from "firebase/auth";

export const loadTasksFromDatabase = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
        return [];
    }
    
    const userUid = user.uid;
    
    try {
        const response = await fetch(`http://localhost:3000/api/tasks?userUid=${userUid}`);
        if(response.ok) {
            const tasks = await response.json();
            return tasks;
        } else {
            console.error('Failed to fetch tasks from API.');
            return [];
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
}