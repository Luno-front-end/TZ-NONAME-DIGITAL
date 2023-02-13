import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";

import { setUser } from "../../Redux/slices/user";

import { useNavigate } from "react-router-dom";

export const useAuthByGoogle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return { handleLoginGoogle };
};
