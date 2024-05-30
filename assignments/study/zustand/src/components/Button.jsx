import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

function Button() {
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  // const { logIn, logOut } = useLoginStore((state) => state) -> 버튼을 누를 때마다 이 컴포넌트도 리렌더링 된다 (불필요한 리렌더링)

  // const { logIn, logOut } = useLoginStore((state) => ({ logIn: state.logIn, logOut: state.logOut }))
  // -> 버튼을 누를 때마다 이 컴포넌트도 리렌더링 된다 (불필요한 리렌더링)

  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );
  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
}

export default Button;
