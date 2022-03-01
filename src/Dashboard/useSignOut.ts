import { signOut as signOutUser } from 'firebase/auth';

import { auth } from 'shared/services/firebase';

const useSignOut = () => {
  const signOut = () => signOutUser(auth);

  return { signOut };
};

export default useSignOut;
