import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';

const Layout = lazy(() => import('./pages/Layout'));
const CocktailList = lazy(() => import('./pages/CocktailList'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/margarita" replace />} />
        <Route path="/margarita" element={<CocktailList code="margarita" />} />
        <Route path="/mojito" element={<CocktailList code="mojito" />} />
        <Route path="/a1" element={<CocktailList code="a1" />} />
        <Route path="/kir" element={<CocktailList code="kir" />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
