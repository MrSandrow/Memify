import { updateDoc, doc } from 'firebase/firestore';
import { uploadBytes, ref } from 'firebase/storage';

import { db, storage } from 'shared/utils/firebase';
import useCurrentUser from 'shared/hooks/useCurrentUser';

const useSaveDrawing = () => {
  const { currentUserId } = useCurrentUser();

  const saveDrawing = async (drawingId: string | undefined, blob: Blob) => {
    const drawingDocumentRef = doc(db, `drawings/${drawingId}`);
    const drawingStorageRef = ref(storage, `drawings/${drawingId}`);

    await uploadBytes(drawingStorageRef, blob, { customMetadata: { authorId: currentUserId || 'undefined' } });
    return updateDoc(drawingDocumentRef, { isInCloudStorage: true });
  };

  return { saveDrawing };
};

export default useSaveDrawing;
