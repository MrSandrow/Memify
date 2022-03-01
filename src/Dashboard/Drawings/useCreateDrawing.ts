import { collection, serverTimestamp, addDoc } from 'firebase/firestore';

import { db } from 'shared/services/firebase';
import useCurrentUser from 'shared/hooks/useCurrentUser';

const useCreateDrawing = () => {
  const { currentUserId } = useCurrentUser();

  const createDrawing = () => addDoc(collection(db, 'drawings'), {
    authorId: currentUserId,
    createdAt: serverTimestamp(),
    isInCloudStorage: false,
    name: 'Untitled',
  });

  return { createDrawing };
};

export default useCreateDrawing;
