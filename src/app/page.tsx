import Image from "next/image";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main className="h-screen">
        <p>
          Hello
        </p>
      </main>
      <Footer/>
    </div>
  );
}
