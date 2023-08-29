import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <main className="mt-20">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default AppLayout;
