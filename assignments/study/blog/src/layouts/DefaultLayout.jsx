import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <Outlet />
      <Link to="/">홈 페이지</Link>
      <br />
      <Link to="/posts">포스트 목록 페이지</Link>
      <br />
      <Link to="/posts/123">포스트 상세 페이지</Link>
    </div>
  );
}

export default DefaultLayout;
