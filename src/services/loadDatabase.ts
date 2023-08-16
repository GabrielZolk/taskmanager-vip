import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import { firebaseConfig } from "../config/firebase"
import { Task } from "../types/Task";
import { getAuth } from "firebase/auth";

export const loadTasksFromDatabase = async () => {
    const db = getFirestore(firebaseConfig)

    const auth = getAuth()
    const user = auth.currentUser;

    try {
        const q = query(
            collection(db, 'tasks'),
            where('uid', '==', user!.uid)
        );

        const querySnapshot = await getDocs(q);

        const tasks: Task[] = [];

        querySnapshot.forEach((doc) => {
            const taskData = doc.data() as Task;
            tasks.push(taskData);
        });

        return tasks;
    } catch (error) {
        console.error("Error loading tasks from database:", error);
        return [];
    }
}
