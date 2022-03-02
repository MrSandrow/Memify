import { signOut as signOutUser } from 'firebase/auth';

import { auth } from 'shared/utils/firebase';

const useSignOut = () => {
  const signOut = () => signOutUser(auth);

  return { signOut };
};

export default useSignOut;
