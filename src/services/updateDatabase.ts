import { collection, query, where, getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";
import { firebaseConfig } from "../config/firebase";
import { Task } from "../types/Task";

export const updateTaskInDatabase = async ({ id, content }: Task) => {
    const db = getFirestore(firebaseConfig);

    try {
        const tasksRef = collection(db, "tasks");
        const q = query(tasksRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const taskDoc = querySnapshot.docs[0];
            const taskRef = doc(db, "tasks", taskDoc.id);
            
            await updateDoc(taskRef, { content: content });
            console.log("Task updated successfully!");
        } else {
            console.log("No matching document found for the provided ID.");
        }
    } catch (error) {
        console.error("Error updating task:", error);
    }
};
