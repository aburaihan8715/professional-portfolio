import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header></Header>
      <main className="mt-20">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
