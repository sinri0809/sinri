import React, { useRef, useState, useTransition } from "react";
import { Link, Outlet } from "react-router-dom";

const Board = () => {
  const [isPending, startTransition] = useTransition();

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const onChagenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => setInputValue(e.target.value))
  };

  return <section className="board-container">
    <input
      ref={inputRef}
      value={inputValue}
      onChange={onChagenInput}
      type="text"
      placeholder="search"
      required={true}
      // readOnly={false}
      className="input"
    />
    {isPending && "Loading"}
    <Link to="/board/1">1 board</Link>
    <Outlet />
  </section>
}

export default Board;