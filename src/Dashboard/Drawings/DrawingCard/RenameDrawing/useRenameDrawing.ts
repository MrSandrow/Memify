import { updateDoc, doc } from 'firebase/firestore';

import { db } from 'shared/utils/firebase';

const useRenameDrawing = () => {
  const renameDrawing = (drawingId: string, newName: string) => {
    const drawingRef = doc(db, `drawings/${drawingId}`);

    return updateDoc(drawingRef, {
      name: newName,
    });
  };

  return { renameDrawing };
};

export default useRenameDrawing;
