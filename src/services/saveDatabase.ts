import { addDoc, collection, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../config/firebase";
import { getAuth } from "firebase/auth";
import { Task } from "../types/Task";

export const saveTaskToDatabase = async ({ id, date, content, completed }: Task) => {
    const db = getFirestore(firebaseConfig);

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
            const tasksCollectionRef = collection(db, "tasks");
            await addDoc(tasksCollectionRef, task);
            console.log("Save successfully!");
        } catch (error) {
            console.error("Error saving task:", error);
        }
    }
};
