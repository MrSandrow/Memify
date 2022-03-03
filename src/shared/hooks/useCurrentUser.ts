import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

import { auth } from 'shared/utils/firebase';

const storageKey = 'user';
const storedUser = JSON.parse(localStorage.getItem(storageKey) || 'null');

const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(storedUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authedUser) => {
      localStorage.setItem(storageKey, JSON.stringify(authedUser));
      setUser(authedUser);
    });

    return () => unsubscribe();
  }, []);

  return {
    currentUser: user,
    currentUserId: user?.uid,
  };
};

export default useCurrentUser;
