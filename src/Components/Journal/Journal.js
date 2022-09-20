import React from "react";
import { useSelector } from "react-redux";
function Journal() {
  const data = useSelector((state) => state.mert.data);
  console.log(data);
  return (
    <div className=" w-full h-full flex flex-col ">
      <div className="w-full  h-[102px] sm:h-[92px] bg-[#14181c]"></div>
      <div className="w-full h-[82px] bg-[#445566] flex items-end">
        <p className="  pl-16 text-2xl text-[#94a5b6] hover:text-[#ffff] w-full border-b-2 border-[#5b6c7d] hover:border-[#42668a] font-bold">
          J O U R N A L
        </p>
      </div>
      <div className="w-full relative h-[32rem] bg-[#445566] flex flex-col-2 justify-center items-center">
        <div className="w-1/2  h-[22rem flex  justify-center items-center] ">
          <a href="https://letterboxd.com/journal/dont-stop-me-noh-masaaki-yuasa-inu-oh/">
            <img
              className=" border-2 border-[#1b2228] hover:border-[#ffff] object-cover"
              src={require("../../images/journal1.jpg")}
            />
          </a>
        </div>
        <div className="w-1/2  h-[22rem] flex flex-col px-[100px] items-center justify-center">
          <a href="https://letterboxd.com/journal/dont-stop-me-noh-masaaki-yuasa-inu-oh/">
            <p className="text-2xl text-[#94a5b6] pb-6 hover:text-[#ffff] font-bold">
              Interview
            </p>
          </a>
          <a href="https://letterboxd.com/journal/dont-stop-me-noh-masaaki-yuasa-inu-oh/">
            <p className="text-4xl text-[#ffff] pb-2 hover:underline  font-bold">
              Don’t Stop Me Noh.
            </p>
          </a>
          <p className="text-3xl text-[#b6c8da]  font-serif ">
            Inu-Oh director Masaaki Yuasa on medieval gender ﬂuidity, animating
            music and movement, and the timeless rock act of playing a biwa
            behind your head.
          </p>
          <p className=" text-[#94a5b6] pt-8 hover:text-[#ffff] font-bold">
            KAMBOLE CAMPBELL
          </p>
        </div>
      </div>
      <div className="w-full h-full pb-10  flex   bg-[#ffff]">
        <a
          href="https://letterboxd.com/journal/messy-play-halina-reijn-bodies-bodies-bodies/"
          className=" flex items-center justify-center flex-col w-1/3 mx-6 h-full"
        >
          <div className="w-full   flex  items-center justify-center flex-col pt-8">
            <img
              className=" border-2 border-[#1b2228]   hover:border-[#ffff] object-cover"
              src={require("../../images/journal2.jpg")}
            />
            <div className="flex flex-row gap-8 mt-5">
              <p className="text-[#88a0ba] hover:underline text-lg mb-3 font-bold ">
                Interview
              </p>
              <p className="text-[#88a0ba] hover:underline text-lg  ">
                19 AUG 2022
              </p>
            </div>
            <p className="text-[#aba7af] w-3/4 text-2xl  justify-center items-center text-center ">
              Messy Play. Bodies Bodies Bodies director Halina Reijn on
              choreographing her cast, the animal dynamics of group behavior and
              the joys of women’s wrongs.
            </p>
          </div>
          <p className="text-[#88a0ba] hover:underline mt-4 text-lg mb-3 font-bold ">
            ANNIE LYONS
          </p>
        </a>
        <a
          href="https://letterboxd.com/journal/showing-the-business-how-hollywood-sees-porn/"
          className=" flex items-center justify-center flex-col w-1/3 mx-6 h-full"
        >
          <div className="w-full   flex  items-center justify-center flex-col pt-8">
            <img
              className=" border-2 border-[#1b2228]   hover:border-[#ffff] object-cover"
              src={require("../../images/journal3.png")}
            />
            <div className="flex flex-row gap-8 mt-5">
              <p className="text-[#88a0ba] hover:underline text-lg mb-3 font-bold ">
                Big Picture
              </p>
              <p className="text-[#88a0ba] hover:underline text-lg  ">
                17 AUG 2022
              </p>
            </div>
            <p className="text-[#aba7af] w-full text-2xl  justify-center items-center text-center ">
              Showing the Business. On the ﬁrst anniversary of adult ﬁlms on
              Letterboxd, Charles Bramesco looks at the variable results when
              Hollywood turns its lens on the other LA ﬁlm industry.
            </p>
          </div>
          <p className="text-[#88a0ba] hover:underline mt-4 text-lg mb-3 font-bold ">
            CHARLES BRAMESCO
          </p>
        </a>
        <a
          href="https://letterboxd.com/journal/love-letters-wes-studi-dale-dickey-a-love-song/"
          className=" flex items-center justify-center flex-col w-1/3 mx-6 h-full"
        >
          <div className="w-full   flex  items-center justify-center flex-col pt-8">
            <img
              className=" border-2 border-[#1b2228]   hover:border-[#ffff] object-cover"
              src={require("../../images/journal4.jpg")}
            />
            <div className="flex flex-row gap-8 mt-5">
              <p className="text-[#88a0ba] hover:underline text-lg mb-3 font-bold ">
                Interview
              </p>
              <p className="text-[#88a0ba] hover:underline text-lg  ">
                16 AUG 2022
              </p>
            </div>
            <p className="text-[#aba7af] w-full text-2xl  justify-center items-center text-center ">
              Love Letters. A Love Song stars Dale Dickey and Wes Studi speak
              with Indigenous Editor Leo Koziol about letters, songs and the
              bonds built into Max Walker-Silverman’s autumn romance.
            </p>
          </div>
          <p className="text-[#88a0ba] hover:underline mt-4 text-lg mb-3 font-bold ">
            LEO KOZIOL
          </p>
        </a>
      </div>
    </div>
  );
}

export default Journal;
