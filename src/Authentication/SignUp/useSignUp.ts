import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'shared/utils/firebase';

const useSignUp = () => {
  const signUp = (email: string, password: string) => (
    createUserWithEmailAndPassword(auth, email, password)
  );

  return { signUp };
};

export default useSignUp;
