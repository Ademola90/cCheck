import HomeFourNav from "../../Components/home-four/home-four-nav";
import HomeFourImg from "../../Assets/HomeFourImg.png";
import HomeFourAvatar from "../../Assets/HomeFourAvatar.png";
import HomeFourRect from "../../Assets/HomeFourRect.png";
import HomeFourHarr from "../../Assets/HomeFourHarr.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import FrameOne from "../../Assets/FrameOne.png";
import FrameTwo from "../../Assets/FrameTwo.png";
import Vector4 from "../../Assets/Vector4.png";
import Arrows4 from "../../Assets/Arrows4.png";
import Card from "../../Components/home-four/Card";
import Icon1 from "../../Assets/Icon1.png";
import Icon2 from "../../Assets/Icon2.png";
import Icon33 from "../../Assets/icon33.png";
import Frame33 from "../../Assets/Frame33.png";
import Icon44 from "../../Assets/icon44.png";
import Frame44 from "../../Assets/Frame44.png";
import Icon55 from "../../Assets/icon55.png";
import Frame55 from "../../Assets/Frame55.png";
import Icon66 from "../../Assets/icon66.png";
import Icon77 from "../../Assets/icon77.png";
import Frame66 from "../../Assets/Frame66.png";
import Frame77 from "../../Assets/Frame77.png";
import TElipse from "../../Assets/TEllipse.png";
import TFrame from "../../Assets/TFrame.png";
import Netflix from "../../Assets/Netflix.png";
import Canva from "../../Assets/Canva.png";
import Adobe from "../../Assets/Adobe.png";
import Grammaly from "../../Assets/Grammaly.png";
import Airbnb from "../../Assets/Airbnb.png";
import Amazon from "../../Assets/Amazon.png";
import Facebook from "../../Assets/Facebook.png";
import Messanger from "../../Assets/Messenger.png";
import Linkedin from "../../Assets/Linkedin.png";
import Twitter from "../../Assets/Twitter.png";
import { Link } from "react-scroll";

const HomeFour = () => {
  const backgroundColors = [
    "#FEEFEA",
    "#FFFBEF",
    "#EFF6FE",
    "#FEEFEA",
    "#FAEFFE",
    "#EFFEF0",
  ];

  const cardData = [
    {
      image: Icon1,
      title: "Data Service",
      text: "HonorWorld is a reliable and affordable platform for purchasing affordable data bundles and airtime top-ups for any Nigerian network. We offer competitive pricing for data plans from Airtel, MTN, 9mobile, and Glo.",
      imagee: Icon2,
      titlee: "secImg",
    },
    {
      image: Icon33,
      title: "Data Service",
      text: "HonorWorld offers convenient and rapid airtime top-up services at competitive rates. Our low charges and quick recharge services make it easy for customers to top up their airtime.",
      imagee: Frame33,
      titlee: "secImg",
    },
    {
      image: Icon44,
      title: "TV Subscription",
      text: "At Cebizpay, we offer discounted rates for renewing your DSTV, GOTV, and Startimes subscriptions, allowing you to save money on your cable service. Our convenient access to subscription renewal saves you time and effort in obtaining your cable service.",
      imagee: Frame44,
      titlee: "secImg",
    },
    {
      image: Icon55,
      title: "Cable Subscription",
      text: "At HonorWorld, we offer discounted rates for renewing your DSTV, GOTV, and Startimes subscriptions, allowing you to save money on your cable service. Our convenient access to subscription renewal saves you time and effort in obtaining your cable service.",
      imagee: Frame55,
      titlee: "secImg",
    },
    {
      image: Icon66,
      title: "Electricity Payment",
      text: "Do you want to stay on top of your finances, then make you can make use of  our pocket-friendly electricity payment feature. It saves more time and money with our streamlined payment tools.",
      imagee: Frame66,
      titlee: "secImg",
    },
    {
      image: Icon77,
      title: "Education E-payment",
      text: "Cebizpay is your go-to source for various examination scratch cards, including those for Waec, Neco, and Nabteb. We take pride in providing top-quality service and aim to make our website your go-to destination after your first experience with us. ",
      imagee: Frame77,
      titlee: "secImg",
    },
  ];
  return (
    <section>
      <main className="h-screen grid items-center justify-center">
        <HomeFourNav />
        <div className=" bg-white w-full lg:py-0 md:py-10 py-10 md:mt-16 mt-24 md:pl-20 ml-7 ">
          <div className=" lg:flex md:grid justify-start items-center sm:grid">
            <div className=" lg:w-1/2 md:w1/2">
              <img className=" w-44 h-10 mb-3" src={HomeFourAvatar} alt="" />
              <h6 className=" font-bold md:text-7xl text-4xl">Transforming </h6>
              <div className="flex items-center md:my-4">
                <span className=" font-bold md:text-7xl text-4xl ">
                  Finance
                </span>
                <img
                  className=" md:w-40 w-28 h-6 md:mt-16 mt-0 md:mx-5 md:h-9"
                  src={HomeFourRect}
                  alt=""
                />
              </div>

              <div className="flex">
                <span className="font-bold md:text-7xl text-4xl">with </span>
                <span className="typewriter-container tittle mt-1 ml-2">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      // delay: 40,
                      strings: [
                        `<span class="md:text-6xl text-3xl text-primaryCol font-bold ">WebName</span>`,
                      ],
                    }}
                  />
                </span>
              </div>

              <p className="my-3">
                In a few clicks, buy data to keep surfing the internet. You can
                buy whatever size of data plan for whichever network you desire.
                Get Started!
              </p>
              <div className="flex items-center">
                <button className="text-white bg-black rounded-3xl hover:bg-primaryCol hover:opacity-50 hover:ease-in duration-300 w-28 h-12">
                  Login
                </button>
                <img
                  className="w-6 h-6 hover:w-7 hover:h-7 ease-in duration-300 mx-2"
                  src={HomeFourHarr}
                  alt=""
                />
              </div>
            </div>

            {/* image */}
            <div className=" relative z-10  w-full">
              <motion.img
                className=" h-3/6 w-11/12 ml-11  "
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                src={HomeFourImg}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* section 2 */}

        <div name="Products" className=" md:px-20 px-7 md:py-20 ">
          <div className="md:flex md:gap-24">
            {/* image grid */}
            <div className="md:grid flex md:gap-y-2 w-full md:w-1/2 md:gap-x-0 gap-x-12 ">
              <img className="md:w-full w-2/5" src={FrameOne} alt="" />
              <img className="md:w-full w-1/2" src={FrameTwo} alt="" />
            </div>
            {/* content grid */}
            <div className="md:w-1/2 w-full grid md:my-0 my-10">
              <p className="text-xl md:text-4xl lg:text-4xl font-bold">
                Take Control Of{" "}
                <span className="text-xl md:text-4xl lg:text-4xl font-bold text-primaryCol">
                  Everything
                </span>{" "}
                In Your Hand
              </p>
              <p className="md:py-0">
                Take control of your financial future with our easy-to-use
                budgeting and friendly tools. Enjoy peace of mind with our 24/7
                customer support and expert guidance.
              </p>

              <div>
                <div className="flex">
                  <div className=" w-1/4 items-center justify-center">
                    <img
                      className=" w-24 h-24 items-center"
                      src={Vector4}
                      alt=""
                    />
                  </div>

                  <div className=" w-9/12">
                    <p className=" md:text-2xl font-bold">Secure Transaction</p>
                    <p>
                      We take the security of your account seriously, we are
                      committed to preventing data loss or leak.
                    </p>
                  </div>
                </div>

                <div className="flex my-2 md:my-0">
                  <div className=" w-1/4 items-center justify-center">
                    <img
                      className=" w-24 h-24 items-center"
                      src={Vector4}
                      alt=""
                    />
                  </div>

                  <div className=" w-9/12">
                    <p className=" md:text-2xl font-bold">
                      24/Customer Support
                    </p>
                    <p>
                      Cebizpay has a team of well-trained customer support
                      agents available 24/7 to assist you with any issues you
                      may have. We offer multiple channels of communication to
                      ensure that you can easily reach us and receive prompt
                      assistance.
                    </p>
                  </div>
                </div>

                <div className="flex ">
                  <div className=" w-1/4 items-center justify-center">
                    <img
                      className=" w-24 h-24 items-center"
                      src={Vector4}
                      alt=""
                    />
                  </div>

                  <div className=" w-9/12">
                    <p className=" md:text-2xl font-bold">
                      Safe and Convenient
                    </p>
                    <p>
                      Periodically, Cebizpay offers the best discounts and
                      special deals on all of our services, including data,
                      airtime, and cable subscriptions. Stay tuned for updates
                      on our special offers and take advantage of the
                      opportunity to save on these services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}

        <div name="About Us" className=" md:px-20 px-7">
          <div className="flex gap-14 mt-7">
            <div className=" w-2/5">
              <p className=" md:text-4xl text-xl font-bold mb-7">
                Awesome{" "}
                <span className="md:text-4xl text-xl font-bold text-primaryCol">
                  Services
                </span>
              </p>
              <p className="grid">
                Yes, we got you covered, With Cebizpay Enjoy a easy and fast
                data delivery with Optimal security and also enjoy the best
                offers and discount sales on all our products periodically.
              </p>
            </div>

            <div className=" w-3/5 grid">
              <p>
                Empower Your Financial Journey with the Ultimate Solution for
                Convenience and experience the ease and security of managing
                your finances with our innovative and comprehensive solution.
              </p>
              <div className="">
                <img
                  className="w-14 h-6 hover:h-7 hover:w-16"
                  src={Arrows4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* section 4 */}

        <div className="md:my-16 md:px-20 px-7">
          <div className="card-list grid lg:grid-cols-2 gap-4">
            {cardData.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                text={card.text}
                imagee={card.imagee}
                titlee={card.titlee}
                backgroundColor={
                  backgroundColors[index % backgroundColors.length]
                }
                className="transition ease-in duration-300 hover:bg-orange-200"
              />
            ))}
          </div>
        </div>

        {/* section 5 */}

        <div className=" md:px-24 my-20 px-7">
          <div className=" ">
            <div className="text-center">
              <p>Testimonials</p>
              <p className="font-bold md:text-4xl lg:text-4xl text-2xl my-3">
                Hear{" "}
                <span className=" md:text-4xl lg:text-4xl text-2xl text-primaryCol">
                  Our Customers
                </span>{" "}
                Speakes
              </p>
            </div>

            <div className="md:flex grid items-center justify-center">
              <div className="relative md:left-5 z-10 rounded-t-2xl  md:rounded-l-2xl top-3 md:top-0 md:w-2/4 h-80">
                <img
                  className="object-cover object-top h-full rounded-t-2xl md:rounded-l-2xl"
                  src={TFrame}
                  alt=""
                />
              </div>
              <div className="grid bg-TFramcol md:relative md:right-5 bottom-3 md:bottom-0  p-14 md:w-2/4 h-80 rounded-2xl  ">
                <p>
                  Ever since i started business with Cebizpay it has been all
                  smiles...they have the best customer service team
                  ever...prompt and fast response to issues. Cebizpay thanks for
                  always being true.
                </p>
                <div>
                  <div className=" flex">
                    <div className="h-10 w-10">
                      <img
                        className="w-full object-cover"
                        src={TElipse}
                        alt=""
                      />
                    </div>
                    <div className="grid ml-2">
                      <span className="font-bold">Ada Felix</span>
                      <span>Fintech, CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 6 */}

        <div className=" md:px-28 px-7 my-20 md:my-10">
          <p className=" text-center">
            Trusted by <span className=" text-bnbcol">4000+</span> companies
          </p>
          <div className="flex items-center justify-center md:gap-16 space-x-2 md:mt-10 mt-10 animate-bounce">
            <div className="grid md:flex md:gap-14 grid-cols-3 gap-10">
              <img
                className=" w-[64px] h-[24px] md:w-[128px] md:h-[48px]"
                src={Netflix}
                alt=""
              />
              <img
                className=" w-[64px] h-[24px] md:w-[128px] md:h-[48px]"
                src={Canva}
                alt=""
              />
              <img
                className=" w-[64px] h-[24px] md:w-[128px] md:h-[48px]"
                src={Adobe}
                alt=""
              />
              <img
                className=" w-[64px] h-[24px] md:w-[128px] md:h-[48px]"
                src={Grammaly}
                alt=""
              />
              <img
                className=" w-[64px] h-[24px] md:w-[128px] md:h-[48px]"
                src={Airbnb}
                alt=""
              />
              <img
                className=" w-[64px] h-[24px] md:w-[128px] md:h-[48px]"
                src={Amazon}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* section 7 */}

        <div className="md:px-28 px-7 md:my-24 md:mb-0 mb-24 ">
          <div className="  items-center justify-center grid">
            <div className=" grid bg-black rounded-3xl p-20">
              <p className=" text-center md:text-3xl lg:text-3xl text-white font-bold">
                Embracing A Brighter Financial Life With
                <p className="text-center md:text-3xl lg:text-3xl font-bold">
                  BusName{" "}
                  <span className=" text-center md:text-3xl lg:text-3xl font-bold text-startTodayCol">
                    Start Today!
                  </span>
                </p>
              </p>

              <div className=" items-center justify-center grid">
                <button className=" transition-transform hover:scale-110 duration-300 ease-in bg-white hover:bg-orange-300 text-black w-28 h-10 rounded-3xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div name="Contact Us" className=" mt-20 md:px-28 px-7 bg-footercol">
          <div className="lg:flex md:grid grid p-20 md:gap-y-12 lg:gap-y-0 gap-y-12 gap-x-10">
            <div className=" lg:w-1/3 lg:grid md:grid grid">
              <p className=" md:text-3xl lg:text-3xl text-xl font-bold text-primaryCol">
                DataBusiness
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                cupiditate!
              </p>
              <div className="lg:flex md:flex flex gap-3">
                <a href="#">
                  <img
                    className=" cursor-pointer w-4 h-4"
                    src={Linkedin}
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className=" cursor-pointer w-4 h-4"
                    src={Messanger}
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className=" cursor-pointer w-4 h-4"
                    src={Twitter}
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className=" cursor-pointer w-4 h-4"
                    src={Facebook}
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className=" lg:w-1/5 lg:grid md:grid grid">
              <p className=" md:text-3xl lg:text-3xl font-bold">Company</p>

              <Link
                to="Products"
                duration={500}
                className=" cursor-pointer no-underline text-black"
              >
                Product
              </Link>
              <Link
                to="Contact Us"
                duration={500}
                className=" cursor-pointer no-underline text-black"
              >
                Contact Us
              </Link>

              <p className=" cursor-pointer">Pricing</p>
            </div>

            <div className=" lg:w-2/6 grid">
              <p className="md:text-3xl lg:text-3xl font-bold">
                Terms of Service
              </p>
              <p className=" cursor-pointer">Policy</p>
              <p className=" cursor-pointer">Term and Conditions</p>
              <p className=" cursor-pointer">Term of Agreements</p>
              <p className=" cursor-pointer">Privacy Policy</p>
            </div>

            <div className=" lg:w-2/6 lg:grid md:grid grid">
              <p className=" md:text-3xl lg:text-3xl font-bold">
                Join our Newsletter
              </p>
              <input placeholder="Your email adderss" type="text" />
              <p>* will send you weekly update for your better</p>
              <p className=" cursor-pointer">finance management</p>
            </div>
          </div>
          <hr className=" text-3xl" />
          <div className=" text-center py-2">
            Copyright @ WebsiteName 2023. All Rights Reserved
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomeFour;
