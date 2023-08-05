import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase";

const bookData = [{}];

const createBook = async () => {
  const bookUpload = bookData.map(async (book) => {
    const bookDocRef = doc(collection(firebaseDB, "books"));
    await setDoc(bookDocRef, {
      id: bookDocRef.id,
      ...book,
    });
  });
  await Promise.all(bookUpload);
};
