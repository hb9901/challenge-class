import { useAuth } from "../contexts/auth.context";


function Button() {
  const { logIn, logOut } = useAuth();

  console.log("Button") // button은 왜 리렌더링 될 까? -> context의 한계
  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
}

export default Button;
