import { useDispatch, useSelector } from "react-redux";
import { LOG_IN, LOG_OUT } from "../redux/reducers/auth.reducer";


function AuthButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickButton = () => {
    const action = { type: isLoggedIn ? LOG_OUT : LOG_IN };
    dispatch(action);
  };
  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleClickButton}>로그아웃하기</button>
      ) : (
        <button onClick={handleClickButton}>로그인하기</button>
      )}
    </>
  );
}

export default AuthButton;
