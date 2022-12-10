import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'pages/PageHome';
import Content from './PageContent';

import links from './links';

const Router = () => {
  return <Routes>
    <Route path={links.home} element={<Home />} />
    <Route path={links.content} element={<Content />} />
    <Route path='*' element={<Navigate replace to={links.home} />} />
  </Routes>
}

export default Router;