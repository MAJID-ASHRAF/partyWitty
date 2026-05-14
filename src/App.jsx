import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Feed from './pages/Feed.jsx';
import Bookings from './pages/Bookings.jsx';
import Drinks from './pages/Drinks.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-bg-main text-text-dark font-inter md:flex-row">
        <Sidebar />
        <main className="flex w-full min-w-0 flex-1 justify-center px-4 py-6 md:px-8 lg:p-10">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/booking" element={<Bookings />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
