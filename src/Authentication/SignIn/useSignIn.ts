import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'shared/utils/firebase';

const useSignIn = () => {
  const signIn = (email: string, password: string) => (
    signInWithEmailAndPassword(auth, email, password)
  );

  return { signIn };
};

export default useSignIn;
