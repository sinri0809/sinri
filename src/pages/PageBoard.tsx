import { Link, Outlet } from "react-router-dom";

const Board = () => {
  return <section className="board-container">
    <Link to="/board/1">1 board</Link>
    <Outlet />
  </section>
}

export default Board;