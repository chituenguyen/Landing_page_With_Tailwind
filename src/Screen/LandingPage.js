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
              className=" invisible fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-70 
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
              <button className="b-custom1">Playstore</button>
              <button className="b-custom2">Appstore</button>
            </div>
          </div>
        </div>
      </section>
      {/* ==========App image========== */}
      <section className="relative">
        {/* ===Image===*/}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/4">
          <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-img.png"
          className="max-w-none w-screen pl-20 md:w-auto md:max-w-none"></img>
        </div>
      </section>
      {/* =========App steps=========== */}
      <section className="pt-96 mt-28">
        {/* Container */}
        <div className="container mx-auto px-4">
          <hr className="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5"></hr>
          {/* Title */}
          <h2 className="text-center text-4xl font-semibold py-10">How the app works</h2>
          {/* step1 */}
          <div className="flex flex-col justify-evenly items-center md:flex-row">
            <div className="text-center mb-10">
              <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-1.png"></img>
            </div>
            {/* text*/}
            <div className="text-center mx-auto">
              <span className="text-2xl text-red-500 font-semibold ">Create an account</span>
              <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Create/Login to an existing account to get started</h2>
              <p className="text-3xl text-gray-500 max-w-md leading-relaxed">An account is created with your email and desired password</p>
            </div>
          </div>
          <hr className="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5"></hr>
          {/* step2 */}
          <div className="flex flex-col justify-evenly items-center md:flex-row">
            <div className="text-center mx-auto">
              <span className="text-2xl text-red-500 font-semibold ">Explore while shopping</span>
              <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Shop for your favorites meal as a dey hot</h2>
              <p className="text-3xl text-gray-500 max-w-md leading-relaxed">Shop for your favorites meals or drinks and enjoy while doing it</p>
            </div>
            <div className="text-center mb-10">
              <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-2.png"></img>
            </div>
          </div>
          {/* step3 */}
          <hr className="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5"></hr>
          <div className="flex flex-col justify-evenly items-center md:flex-row">
            <div className="text-center mb-10">
              <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-3.png"></img>
            </div>
            <div className="text-center mx-auto">
              <span className="text-2xl text-red-500 font-semibold ">Checkout</span>
              <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">When you done check out and get it delivered</h2>
              <p className="text-3xl text-gray-500 max-w-md leading-relaxed">When you done check out and get it delivered with ease</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========Download============ */}
      <section className="flex flex-col justify-center items-center w-full h-custom" style={{
        backgroundColor: '#252B42',
      }}> 
          <div className="text-center">
            <h1 className=" text-4xl
              mb-5
              font-bold
              max-w-2xl
              md:leading-relaxed md:text-5xl
              text-white"> Dowload the app now</h1>
            <p className="text-2xl max-w-1">
              Available on your favorite store. Start your premium experience
              now
            </p>
            <div className="mt-10">
              <button className="b-custom1">Buy now</button>
              <button className="b-custom2">Try for free</button>
            </div>
          </div>
      </section>

      {/* =========Footer============= */}
      <footer>
      {/* <!-- container --> */}
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col justify-between items-center py-5 md:flex-row"
        >
          {/* <!-- logo --> */}
          <div class="w-32 md:w-full">
            <img src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/logo.png" alt="website logo" />
          </div>
          {/* <!-- contact --> */}
          <div
            class="
              flex
              items-center
              mt-5
              text-gray-500
              w-full
              justify-center
              md:justify-end
            "
          >
            {/* <!-- phone --> */}
            <a href="tel:901234567" class="flex mx-4">
              {/* <!-- icon --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              {/* <!-- number --> */}
              <p>90-123-4567</p>
            </a>
            {/* <!-- email --> */}
            <a href="mailto:info@me.com" class="flex mx-4">
              {/* <!-- icon --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              {/* <!-- address --> */}
              <p>info@me.com</p>
            </a>
          </div>
         </div>
        {/* <!-- copy --> */} 
        <div class="text-center my-4">
          <p class="text-gray-500">Copy &copy; 2021 Bella Onojie</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default LandingPage;
