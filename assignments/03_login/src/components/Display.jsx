import { useSelector } from "react-redux";

function Header() {
  const isLoggendIn = useSelector((state) => state.auth.isLoggedIn); // isLogggedIn이 변경 될 때만 리렌더링 되게 정확한 속성 호출
  const status = isLoggendIn? "로그인" : "로그아웃";

  return (
    <>
      {status}
      <div style={{ borderBottom: "1px solid Black" }}>
        현재 로그인이 OO 상태입니다.
      </div>
    </>
  );
}

export default Header