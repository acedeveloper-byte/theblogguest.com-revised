
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import MediumCard from "@/components/common/MediumCard";
import { HOST } from "@/utils/static";
import RecentNews from "@/components/common/RecentNews";
import AllCategory from "@/components/common/AllCategory";


export default async function Home() {

  // const travel = await axios.get(`${HOST}post/fetch-all-post-by-category/travel`);
  // const travelresp = travel.data?.response || [];

  return (
    <>

      <Header />

      <RecentNews />
      {/* <AllCategory /> */}

      <Footer />



    </>
  );
}
