import React from "react";
import Layout from "../Layout";
import "../App.css";

///import images
import main from "../images/main.jpeg";
import assembly from "../images/assembly.jpg";
import custom from "../images/custom.jpeg";
import delivery from "../images/delivery.jpg";
import item1 from "../images/item1.webp";
import item2 from "../images/item2.webp";
import item3 from "../images/item3.webp";

export default function Home() {
  return (
    <Layout>
      <section className="mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h1>Furniture For You</h1>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Molestias, asperiores blanditiis. Dignissimos voluptates,
                veritatis
                <br />
                Consectetur fuga deserunt vitae hic rem quam dicta qui aperiam
                provident.
              </p>
              <div className="mt-3">
                <button className="btn btn-info rounded-4 me-4">
                  Order Now
                </button>
                <button className="btn btn-secondary rounded-4">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-sm-6">
              <img src={main} alt="main" className="w-100 mt-4 rounded-4" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="w-auto">
            <div className="border-bottom border-2 border-info text-center">
              <h2>Awesome Furniture For Your Home</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
          <div className="col-sm-6">
            <h3>We Make Sure Your Furniture Arrive on Time</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              est! Maxime assumenda fuga magni quibusdam, reiciendis adipisci
              dolore eum exercitationem impedit blanditiis nobis saepe nihil
              asperiores, voluptates sed necessitatibus beatae.
            </p>
            <button className="btn btn-info rounded-4">Read More</button>
          </div>
          <div className="col-sm-6">
            <div className="ps-sm-5">
              <img src={delivery} alt="Delivery" className="w-100  rounded-4" />
            </div>
          </div>
        </div>
        <div className="row align-items-sm-center flex-column flex-sm-row my-5">
          <div className="col-sm-6">
            <div className="pe-sm-5">
              <img src={assembly} alt="Quality" className="w-100 rounded-4" />
            </div>
          </div>
          <div className="col-sm-6">
            <h3>High Quality Wood Material</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              est! Maxime assumenda fuga magni quibusdam, reiciendis adipisci
              dolore eum exercitationem impedit blanditiis nobis saepe nihil
              asperiores, voluptates sed necessitatibus beatae.
            </p>
            <button className="btn btn-info rounded-4">Read More</button>
          </div>
        </div>
        <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
          <div className="col-sm-6">
            <h3>Customize Your Own Furniture</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              est! Maxime assumenda fuga magni quibusdam, reiciendis adipisci
              dolore eum exercitationem impedit blanditiis nobis saepe nihil
              asperiores, voluptates sed necessitatibus beatae.
            </p>
            <button className="btn btn-info rounded-4">Read More</button>
          </div>
          <div className="col-sm-6 ">
            <div className="ps-sm-5">
              <img src={custom} alt="Custom" className="w-100 rounded-4" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="w-auto">
            <div className="border-bottom border-2 border-info text-center">
              <h2>Our Signature Product</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center flex-sm-row flex-column">
          <div className="col-sm-3 align-items-center d-flex flex-column">
            <div className="rounded-4 bg-info d-flex justify-content-center align-items-center py-4">
              <img src={item1} alt="item-1" className="w-75 rounded-4" />
            </div>
            <h6 className="mt-2">Lexon Dining Table</h6>
            <p className="mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              voluptate.
            </p>
          </div>
          <div className="col-sm-3 d-flex align-items-center d-flex flex-column">
            <div className="rounded-4 bg-info d-flex justify-content-center align-items-center py-4">
              <img src={item2} alt="item-2" className="w-75 rounded-4" />
            </div>
            <h6 className="mt-2">Maine Office Table</h6>
            <p className="mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              voluptate.
            </p>
          </div>
          <div className="col-sm-3 align-items-center d-flex flex-column">
            <div className="rounded-4 bg-info d-flex justify-content-center align-items-center py-4">
              <img src={item3} alt="item-3" className="w-75 rounded-4" />
            </div>
            <h6 className="mt-2">Nordia Arlington Sofa</h6>
            <p className="mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              voluptate.
            </p>
          </div>
        </div>
      </section>
      <section id="subscribe">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="row div-subs rounded-4 py-3 px-sm-5 align-items-center flex-column flex-sm-row">
            <div className="col-6 text-white align-items-center mb-2">
              <h5>Subscribe to our Promo</h5>
              <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
            <div className="col-sm-6 align-items-center">
              <div className="input-group align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input your Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Discover Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
