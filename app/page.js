
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import MediumCard from "@/components/common/MediumCard";
import RecentNews from "@/components/common/RecentNews";
import AllCategory from "@/components/common/AllCategory";


export default async function Home() {



  return (
    <>

      <Header />

      <RecentNews />
      <AllCategory />

      <Footer />



    </>
  );
}
