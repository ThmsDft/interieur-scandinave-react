import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import ScrollToTop from "./components/ScrollToTop";
import Admin from "./pages/Admin";
import { AuthorizedUser } from './middleware/auth'

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalogue",
        element: <Products />,
      },
      {
        path: "/produit/:id",
        element: <SingleProduct />,
      },
      {
        path: "/mon-histoire",
        element: <About />,
      },
      {
        path: "/contact",
        element: <AuthorizedUser><Contact /></AuthorizedUser>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
