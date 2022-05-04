import React, { useState } from "react";

function LandingPage() {
  // const [hidden,setHidden] =useState([0])
  return (
    <>
      {/* ===========header============== */}
      <header>
        {/* ===========container=========== */}
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-5">
            {/* logo */}
            <div className="w-32 md:w-full z-20">
              <img
                src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/logo.png"
                alt="Logo"
              ></img>
            </div>
            {/* links */}
            <ul
              className=" fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-70 
            md:bg-transparent
            md:h-auto
            md:static
            md:flex-row
            md:justify-between
            md:visible"
            >
              <li className="m-12 md:m-0">
                <a href="#" className="c-link">
                  Home
                </a>
              </li>
              <li className="m-12 md:m-0">
                <a href="#" className="c-link">
                  Product
                </a>
              </li>
              <li className="m-12 md:m-0">
                <a href="#" className="c-link">
                  FAQ
                </a>
              </li>
              <li className="m-12 md:m-0">
                <a href="#" className="c-link">
                  Contact
                </a>
              </li>
            </ul>
            {/* menu button */}
            <div className="md:invisible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </nav>
        </div>
      </header>

      {/* ===========Bannner============= */}
      <section>
        <div
          className="w-full bg-no-repeat bg-cover relative h-custom"
          style={{
            backgroundImage: `url("https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/banner.png")`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
            {/* Tag */}
            <p className="text-xl mb-5">Food app</p>
            {/* Title */}
            <h1 className="text-4xl mb-5 font-bold md:leading-relaxed md:text-5xl">
              Why stay hungry when you can order from Bella Onoje
            </h1>
            {/* Description */}
            <p className="text-xl mb-5 font-light-300">
              Download the bella onoje's food app now
            </p>
            {/* Button */}
            <div className="flex justify-center">
              <button className="b-custom">Playstore</button>
              <button className="b-custom">Appstore</button>
            </div>
          </div>
        </div>
      </section>
      {/* ==========App image========== */}
      <section>
        <div>
          <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-img.png"></img>
        </div>
      </section>
      {/* =========App steps=========== */}
      <section>
        {/* Container */}
        <div>
          <hr></hr>
          {/* Title */}
          <h2>How the app works</h2>
          {/* step1 */}
          <div>
            <div>
              <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-1.png"></img>
            </div>
            <div>
              <span>Create an account</span>
              <h2>Create/Login to an existing account to get started</h2>
              <p>An account is created with your email and desired password</p>
            </div>
          </div>
          {/* step2 */}
          <div>
            <div>
              <span>Create an account</span>
              <h2>Create/Login to an existing account to get started</h2>
              <p>An account is created with your email and desired password</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-2.png"></img>
            </div>
          </div>
          {/* step3 */}
          <div>
            <div>
              <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-3.png"></img>
            </div>
            <div>
              <span>Create an account</span>
              <h2>Create/Login to an existing account to get started</h2>
              <p>An account is created with your email and desired password</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========Download============ */}
      <section>
        <div>
          <div>
            <h1> Dowload the app now</h1>
            <p>
              Available on your favorite store. Start your premium experience
              now
            </p>
            <div>
              <button>Playstore</button>
              <button>Appstore</button>
            </div>
          </div>
        </div>
      </section>

      {/* =========Footer============= */}
      <section>
        <div>
          <div>
            <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/logo.png"></img>
          </div>
          <div>
            <a href="tel:90871587"></a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p>90-123-567</p>
            <a href="maito:info@gmail.com"></a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p>info@gmail.com</p>
          </div>
          <div>
            <p>Copy &copy;2021 Bella onoje</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
