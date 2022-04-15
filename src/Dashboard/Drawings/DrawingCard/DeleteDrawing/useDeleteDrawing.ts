import { ref, deleteObject, getDownloadURL } from 'firebase/storage';
import { doc, deleteDoc } from 'firebase/firestore';

import { db, storage } from 'shared/utils/firebase';

const useDeleteDrawing = () => {
  const deleteDrawing = async (drawingId: string) => {
    const drawingStorageRef = ref(storage, `drawings/${drawingId}`);
    const drawingDocumentRef = doc(db, `drawings/${drawingId}`);

    const isDrawingInCloudStorage = await getDownloadURL(drawingStorageRef)
      .then(() => true)
      .catch(() => false);

    if (isDrawingInCloudStorage) {
      await deleteObject(drawingStorageRef);
      return deleteDoc(drawingDocumentRef);
    }

    return deleteDoc(drawingDocumentRef);
  };

  return { deleteDrawing };
};

export default useDeleteDrawing;
