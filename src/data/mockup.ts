import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseDB, firebaseStorage } from "../firebase";
import { IBook } from "../types/book";
import uuid from "react-native-uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const bookSample: IBook[] = [
  {
    name: "bookName",
    author: "authorA",
    description: "abcxyz",
    category: "ROMATIC",
    image: "https://clipart-library.com/images/6Tpo6G8TE.jpg",
  },
  {
    name: "bookName",
    author: "authorA",
    description: "abcxyz",
    category: "ROMATIC",
    image: "https://clipart-library.com/images/6Tpo6G8TE.jpg",
  },
];

const uploadImage = async (uri: string) => {
  // It won't upload image if image is not change
  const blob: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const avatarName = uuid.v4() as string;
  const fileRef = ref(firebaseStorage, avatarName);
  await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  blob.close();

  const avatarUrl = await getDownloadURL(fileRef);
  return { avatarName, avatarUrl };
};

export const createBook = async (bookMockUp: IBook[]) => {
  const bookUpload = bookMockUp.map(async (book) => {
    const bookDocRef = doc(collection(firebaseDB, "books"));
    const { avatarUrl } = await uploadImage(book.image!);
    await setDoc(bookDocRef, {
      ...book,
      id: bookDocRef.id,
      views: 0,
      image: avatarUrl,
    });
  });
  await Promise.all(bookUpload);
};
