import { updateDoc, doc } from 'firebase/firestore';
import { uploadBytes, ref } from 'firebase/storage';

import { db, storage } from 'shared/services/firebase';

const useSaveDrawing = () => {
  const saveDrawing = async (drawingId: string | undefined, blob: Blob) => {
    const drawingDocumentRef = doc(db, `drawings/${drawingId}`);
    const drawingStorageRef = ref(storage, `drawings/${drawingId}`);

    await uploadBytes(drawingStorageRef, blob);
    return updateDoc(drawingDocumentRef, { isInCloudStorage: true });
  };

  return { saveDrawing };
};

export default useSaveDrawing;
