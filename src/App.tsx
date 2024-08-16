import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageDropdown from "./pages/HomePageDropdown";
import LandingPage from "./pages/LandingPage";
import ProductListGrid from "./pages/ProductListGrid";
import ContactUs from "./pages/ContactUs";
import Payment2 from "./pages/Payment2";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductListList from "./pages/ProductListList";
import Payment from "./pages/Payment";
import Payment1 from "./pages/Payment1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/product-listgrid":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/payment-5":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/product":
        title = "";
        metaDescription = "";
        break;
      case "/product-list-list":
        title = "";
        metaDescription = "";
        break;
      case "/payment-1":
        title = "";
        metaDescription = "";
        break;
      case "/payment-6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageDropdown />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/product-listgrid" element={<ProductListGrid />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/payment-5" element={<Payment2 />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-list-list" element={<ProductListList />} />
      <Route path="/payment-1" element={<Payment />} />
      <Route path="/payment-6" element={<Payment1 />} />
    </Routes>
  );
}
export default App;
