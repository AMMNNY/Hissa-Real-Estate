import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './pages/investor/Loginn';
import SignUp from './pages/investor/SignUp';
import BrowseProperties from './pages/investor/BrowseProperties';
import PropertyDetails from './pages/investor/PropertyDetails';
import BuyShares from './pages/investor/BuyShares';
import InvestorPortfolio from './pages/investor/InvestorPortfolio';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route index element={<BrowseProperties />} />
        <Route path="/properties" element={<BrowseProperties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/properties/:id/buy" element={<BuyShares />} />
        <Route path="/portfolio" element={<InvestorPortfolio />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}

export default App;
