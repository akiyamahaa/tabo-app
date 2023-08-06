import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase";
import { IBook } from "../types/book";

const bookData: IBook[] = [];

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
