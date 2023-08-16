import { collection, query, where, getDocs, getFirestore, deleteDoc, doc } from "firebase/firestore";
import { firebaseConfig } from "../config/firebase";

export const deleteTaskFromDatabase = async (id: string) => {
    const db = getFirestore(firebaseConfig);

    try {
        const tasksRef = collection(db, "tasks");
        const q = query(tasksRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const taskDoc = querySnapshot.docs[0];
            const taskRef = doc(db, "tasks", taskDoc.id);
            
            await deleteDoc(taskRef);
            console.log("Task deleted successfully from the database!");
        } else {
            console.log("No matching document found for the provided ID.");
        }
    } catch (error) {
        console.error("Error deleting task from the database:", error);
    }
};
