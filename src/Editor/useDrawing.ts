import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getBlob } from 'firebase/storage';

import { db, storage } from 'shared/utils/firebase';

const useDrawing = (drawingId: string | undefined) => {
  const drawingDocumentRef = doc(db, `drawings/${drawingId}`);
  const drawingStorageRef = ref(storage, `drawings/${drawingId}`);

  const [{ drawing, isLoading, isError }, setResponse] = useState({
    drawing: null as Blob | null,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    fetchDrawing();

    async function fetchDrawing() {
      const drawingFromFirestore = await getDoc(drawingDocumentRef).catch(() => null);
      const isDrawingInFirestore = drawingFromFirestore?.exists();
      if (!drawingFromFirestore || !isDrawingInFirestore) {
        setResponse({
          drawing: null,
          isLoading: false,
          isError: true,
        });

        return;
      }

      const isDrawingInCloudStorage = drawingFromFirestore?.data()?.['isInCloudStorage'];
      if (!isDrawingInCloudStorage) {
        setResponse({
          drawing: null,
          isLoading: false,
          isError: false,
        });

        return;
      }

      const drawingFromCloudStorage = await getBlob(drawingStorageRef).catch(() => null);
      if (!drawingFromCloudStorage) {
        setResponse({
          drawing: null,
          isLoading: false,
          isError: true,
        });

        return;
      }

      setResponse({
        drawing: drawingFromCloudStorage,
        isLoading: false,
        isError: false,
      });
    }
  }, []);

  return { drawing, isLoading, isError };
};

export default useDrawing;
