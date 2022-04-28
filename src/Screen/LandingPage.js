import React from "react";

function LandingPage() {
  return (
    <>
      {/* ===========header============== */}
      <header>
        {/* ===========container=========== */}
        <div>
          <nav>
            {/* logo */}
            <div>
              <img
                src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/logo.png"
                alt="Logo"
              ></img>
            </div>
            {/* links */}
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            {/* menu button */}
            <div>
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
          style={{
            backgroundImage: `url("https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/banner.png")`,
          }}
        >
          <div>
            {/* Tag */}
            <p>Food app</p>
            {/* Title */}
            <h1>Why stay hungry when you can order from Bella Onoje</h1>
            {/* Description */}
            <p>Download the bella onoje's food app now</p>
            {/* Button */}
            <button>Playstore</button>
            <button>Appstore</button>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
