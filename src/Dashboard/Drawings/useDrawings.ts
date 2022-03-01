import { useState, useEffect } from 'react';
import {
  query,
  collection,
  where,
  onSnapshot,
  orderBy,
  DocumentData,
} from 'firebase/firestore';

import { db } from 'shared/services/firebase';
import useCurrentUser from 'shared/hooks/useCurrentUser';

const useDrawings = () => {
  const { currentUserId } = useCurrentUser();

  const [{ drawings, isLoading, isError }, setResponse] = useState({
    drawings: null as DocumentData[] | null,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    if (!currentUserId) return undefined;

    const request = query(
      collection(db, 'drawings'),
      where('authorId', '==', currentUserId),
      orderBy('createdAt', 'desc'),
    );

    const unsubscribe = onSnapshot(request, (snapshot) => {
      const drawingsArray = snapshot.docs.map((document) => ({
        ...document.data(),
        id: document.id,
      }));

      setResponse((prevState) => ({
        ...prevState,
        isLoading: false,
        drawings: drawingsArray.length ? drawingsArray : null,
      }));
    }, () => {
      setResponse((prevState) => ({
        ...prevState,
        isLoading: false,
        isError: true,
      }));
    });

    return () => unsubscribe();
  }, [currentUserId]);

  return { drawings, isLoading, isError };
};

export default useDrawings;
