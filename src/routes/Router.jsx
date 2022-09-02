import { Routes, Route } from "react-router-dom"

import PageHome from "pages/PageHome";

export const Router = () => {
  return <Routes>
    <Route path={"/"} element={<PageHome />}/>
  </Routes>
}