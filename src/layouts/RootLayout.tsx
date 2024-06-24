import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="relative">
      <div className="h-screen w-full fixed dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] -z-10">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
      </div>
      <header>
        <Navbar />
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
