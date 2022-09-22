import React from "react";

function Footer() {
  return (
    <div className="w-full h-[40rem] bg-[#2c3440] flex flex-col">
      <div className="w-full  flex flex-col sm:flex-row justify-center sm:justify-between px-2 ">
        <div className="w-full h-full gap-1 sm:gap-5 sm:ml-12 mt-4 text-[14px] sm:text-xl  flex flex-row justify-center  items-center ">
          <a
            href="https://letterboxd.com/about/faq/"
            className="t font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            About
          </a>
          <a
            href="https://letterboxd.com/journal/"
            className=" font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            News
          </a>
          <a
            href="https://letterboxd.com/pro/"
            className=" font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            Pro
          </a>
          <a
            href="https://letterboxd.com/apps/"
            className=" font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            Apps
          </a>
          <a
            href="https://anchor.fm/letterboxd"
            className=" font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            Podcast
          </a>

          <a
            href="https://letterboxd.com/welcome/"
            className=" font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            Help
          </a>

          <a
            href="https://letterboxd.com/api-beta/"
            className=" font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            API
          </a>
          <a
            href="https://letterboxd.com/contact/"
            className=" font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            Contact
          </a>
        </div>
        <div className="w-full sm:w1/5 h-[6rem] sm:mr-12 sm:mt-8 flex justify-center sm:justify-end items-center gap-5  ">
          <a href="https://twitter.com/letterboxd">
            <svg className=" w-[20px] h-[16px] fill-[#556677] hover:fill-[#fff]">
              <path d="M17.96 4.51V4c.8-.56 1.49-1.28 2.04-2.1-.74.33-1.53.54-2.36.65.85-.5 1.5-1.3 1.8-2.24-.78.46-1.66.8-2.6.98a4.13 4.13 0 0 0-7.1 2.76c0 .31.04.62.1.92A11.72 11.72 0 0 1 1.38.74a3.99 3.99 0 0 0 1.28 5.4A4.2 4.2 0 0 1 .8 5.62v.06c0 1.95 1.42 3.59 3.29 3.96a4.06 4.06 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.8A8.32 8.32 0 0 1 0 14.2C1.8 15.33 3.97 16 6.28 16A11.5 11.5 0 0 0 17.96 4.51Z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/c/letterboxdhq">
            <svg className=" w-[24px] h-[16px] fill-[#556677] hover:fill-[#fff]">
              <path d="M11.74 0c.61 0 2.33.02 4.11.08l.54.02c1.7.06 3.35.18 4.1.38a2.87 2.87 0 0 1 2.03 2.02c.45 1.67.48 5.04.48 5.46v.08c0 .42-.03 3.8-.48 5.46a2.87 2.87 0 0 1-2.03 2.02c-.75.2-2.4.32-4.1.38l-.54.02c-1.78.07-3.5.08-4.11.08H11.26c-.62 0-2.33-.01-4.11-.08l-.54-.02c-1.7-.06-3.36-.18-4.1-.38A2.87 2.87 0 0 1 .48 13.5C.04 11.9 0 8.68 0 8.1v-.2c0-.58.04-3.79.48-5.4A2.87 2.87 0 0 1 2.5.48c.74-.2 2.4-.32 4.1-.38l.54-.02C8.93.02 10.65 0 11.26 0ZM9 4.57v6.86L15 8 9 4.57Z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/letterboxd/">
            <svg className=" w-[20px] h-[20px] fill-[#556677] hover:fill-[#fff]">
              <path d="M14.12.06c1.07.05 1.8.22 2.43.46.66.26 1.21.6 1.77 1.16.56.55.9 1.11 1.15 1.77.25.63.42 1.36.47 2.43.04.94.06 1.32.06 3.3v1.37c0 1.54 0 2.19-.03 2.77v.22l-.03.58a7.34 7.34 0 0 1-.47 2.43 4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.24-1.36.41-2.43.46l-.61.03h-.23c-.5.02-1.06.03-2.21.03H9.2c-2 0-2.37-.02-3.32-.06a7.34 7.34 0 0 1-2.43-.46 4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77 7.34 7.34 0 0 1-.46-2.43l-.03-.61v-.2A60.9 60.9 0 0 1 0 11.5V8.75C0 7.7.01 7.17.03 6.7v-.2l.03-.61C.1 4.8.28 4.08.52 3.45a4.9 4.9 0 0 1 1.16-1.77A4.9 4.9 0 0 1 3.45.52 7.34 7.34 0 0 1 5.88.06l.61-.03h.2C7.12 0 7.6 0 8.5 0h2.74c1.62 0 2 .02 2.88.06ZM11.02 2H8.97c-1.7 0-2.05.02-2.92.06a5.4 5.4 0 0 0-1.82.33c-.45.18-.78.39-1.12.73-.34.34-.55.67-.73 1.12-.13.35-.3.86-.33 1.82C2.02 6.93 2 7.29 2 8.98v2.04c0 1.7.02 2.05.06 2.92.04.95.2 1.47.33 1.81.18.46.39.78.73 1.13.34.34.67.55 1.12.73.35.13.86.29 1.82.33.83.04 1.2.05 2.7.06h2.47c1.51 0 1.87-.02 2.71-.06a5.4 5.4 0 0 0 1.81-.33c.46-.18.78-.4 1.12-.73.35-.35.56-.67.73-1.13.14-.34.3-.86.34-1.8a49 49 0 0 0 .06-2.72V8.77a49 49 0 0 0-.06-2.71 5.4 5.4 0 0 0-.34-1.82 3.02 3.02 0 0 0-.73-1.12 3.02 3.02 0 0 0-1.12-.73 5.4 5.4 0 0 0-1.81-.33c-.88-.04-1.23-.06-2.93-.06ZM10 4.86a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className=" mt-6 flex sm:justify-start sm:text-start justify-center text-center   sm:pl-[55px]  text-[#4d5b69]">
        <p>
          © Letterboxd Limited. Made by fans in Aotearoa. Film data from TMDb.
          Mobile site.
        </p>
      </div>
    </div>
  );
}

export default Footer;
