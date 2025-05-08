'use client'
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import MediumCard from "@/components/common/MediumCard";
import { HOST } from "@/utils/static";
import { useEffect, useState } from "react";


export default async function Home() {
  const [state, setState] = useState()
  const handleCallApi = async () => {

    const travel = await axios.get(`${HOST}post/fetch-all-post-by-category/travel`);
    const travelresp = travel.data?.response || [];
    setState(travelresp)
  }


  useEffect(() => {
    handleCallApi()
  }, [])
  return (
    <>

      <Header />

      <section>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <img src="https://cdn.pixabay.com/photo/2018/02/25/21/34/temple-3181803_1280.jpg" className="w-100 mb-3 rounded" />
                <div className="content-layout" style={{ padding: "20px;", position: "absolute;", color: " #fff;", top: "20rem" }}>
                  <h4 className="fw-bold">Jallianwala Bagh Massacre Remembrance Day 2025</h4>
                  <p>Quotes, Images, Messages, Posters, Banners, Slogans</p>
                  <small>April 6, 2025 / Admin</small><br />
                  <small>Recent News</small>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 my-2">
                  <h5 className="border-start border-danger border-3 ps-2 mb-3 mx-2">Top Photos</h5>
                  <div className="card  text-white">
                    <img src="https://cdn.pixabay.com/photo/2017/07/19/03/55/wedding-photo-viet-2517843_1280.jpg" className="card-img" alt="..." />
                    <div className="card-img-overlay top-photos">

                      <span className="badge bg-danger mb-2">TOP PHOTOS</span>
                      <h6 className="card-title">Pragya Jaiswal in stylish pink outfit looked stunning</h6>
                      <p className="card-text"><small>April 6, 2025 / Ameli Xynch</small></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-2">
                  <h5 className="border-start border-danger border-3 ps-2 mb-3 mx-2">Hot Photos</h5>
                  <div className="card  text-white">
                    <img src="https://cdn.pixabay.com/photo/2020/03/21/08/25/art-4952998_1280.jpg" className="card-img" alt="..." />
                    <div className="card-img-overlay">
                      <span className="badge bg-danger mb-2">TOP PHOTOS</span>
                      <h6 className="card-title">Pragya Jaiswal in stylish pink outfit looked stunning</h6>
                      <p className="card-text"><small>April 6, 2025 / Ameli Xynch</small></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-2">
                  <div className="card  text-white">
                    <img src="https://cdn.pixabay.com/photo/2017/07/10/13/33/wedding-photo-2490163_1280.jpg" className="card-img" alt="..." />
                    <div className="card-img-overlay">
                      <span className="badge bg-danger mb-2">TOP PHOTOS</span>
                      <h6 className="card-title">Pragya Jaiswal in stylish pink outfit looked stunning</h6>
                      <p className="card-text"><small>April 6, 2025 / Ameli Xynch</small></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-2">
                  <div className="card  text-white">
                    <img src="https://cdn.pixabay.com/photo/2024/05/23/07/17/woman-8782450_1280.jpg" className="card-img" alt="..." />
                    <div className="card-img-overlay">
                      <span className="badge bg-danger mb-2">TOP PHOTOS</span>
                      <h6 className="card-title">Pragya Jaiswal in stylish pink outfit looked stunning</h6>
                      <p className="card-text"><small>April 6, 2025 / Ameli Xynch</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                {/* {state.map((item, index) => {

                  return (
                    <MediumCard categoryName={item.category} title={item.title} shortDescription={""} image={`${HOST}resources/post/${item.image}`} />

                  )
                })} */}

              </div>
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-2">
              <div className="category-title">Technology</div>
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2022/01/06/07/25/south-korea-6918828_1280.jpg" alt="Travel" />
                <div className="post-title">The Future of HR Tech </div>
                <div className="post-meta">March 5, 2025 / Admin </div>
                <div className="post-summary">What will HR look like in 2025? More agile than ever. Becoming a Certified...</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="category-title">Travel</div>
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2025/02/21/11/02/women-9421788_640.jpg" alt="Travel" />
                <div className="post-title">The Future of HR Tech </div>
                <div className="post-meta">March 5, 2025 / Admin </div>
                <div className="post-summary">What will HR look like in 2025? More agile than ever. Becoming a Certified...</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="category-title">Business</div>
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2024/12/19/17/48/mountain-9278324_640.jpg" alt="Travel" />
                <div className="post-title">The Future of HR Tech </div>
                <div className="post-meta">March 5, 2025 / Admin </div>
                <div className="post-summary">What will HR look like in 2025? More agile than ever. Becoming a Certified...</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="category-title">Health</div>
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2024/10/22/07/12/children-9138817_640.jpg" alt="Travel" />
                <div className="post-title">The Future of HR Tech </div>
                <div className="post-meta">March 5, 2025 / Admin </div>
                <div className="post-summary">What will HR look like in 2025? More agile than ever. Becoming a Certified...</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="category-title">Lifestyle</div>
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2024/05/28/12/28/ship-8793759_640.jpg" alt="Travel" />
                <div className="post-title">The Future of HR Tech </div>
                <div className="post-meta">March 5, 2025 / Admin </div>
                <div className="post-summary">What will HR look like in 2025? More agile than ever. Becoming a Certified...</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="category-title">Entertainment</div>
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2025/03/07/12/03/woman-9452965_640.jpg" alt="Travel" />
                <div className="post-title">The Future of HR Tech </div>
                <div className="post-meta">March 5, 2025 / Admin </div>
                <div className="post-summary">What will HR look like in 2025? More agile than ever. Becoming a Certified...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />



    </>
  );
}
