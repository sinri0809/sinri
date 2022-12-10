import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'pages/PageHome';

const Router = () => {
  return <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='*' element={<Navigate replace to={"/home"} />} />
  </Routes>
}

export default Router;