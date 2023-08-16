import HomeThreeNav from "../../Components/home-three/home-three-nav";

import homeThreeHeaderBg from "../../Assets/home-three-header-bg.png";
// import HomeThreeServiceCard from "../../Components/home-three/service-card";
import AppLogo from "../../Components/app-logo";
import { useNavigate } from "react-router-dom";
import { details } from "../../Components/Footer";

const HomeThree = () => {
	let navigate = useNavigate();

	return (
		<div
			className="home-three"
			style={{
				overflowX: "hidden",
			}}>
			<header style={{ background: `url(${homeThreeHeaderBg})` }}>
				<HomeThreeNav />
				<div className="container mx-auto tw-py-10">
					<div className="tw-grid md:tw-grid-cols-2 tw-gap-8">
						<div className="text-light tw-self-center">
							<p className="tw-text-4xl md:tw-text-6xl tw-font-bold tw-leading-snug">
								Welcome to <br /> {process.env.REACT_APP_AGENT_NAME}
							</p>
							<p className="tw-mt-8">
								A technology platform that offers you best quality and
								affordable telecom services right from the comfort of your home
								or office.{" "}
							</p>
							<div className="py-2">
								<button
									className="tw-bg-white tw-px-12 tw-h-12 tw-rounded tw-rounded-full tw-text-[#0C111F] tw-font-medium"
									onClick={() => navigate("/login")}>
									Get Started
								</button>
							</div>
						</div>
						<div data-aos="zoom-in-up">
							<img src={require("../../Assets/home-three-hero.png")} alt="" />
						</div>
					</div>
					<div className="tw-flex tw-justify-center">
						<img
							src={require("../../Assets/home-three-cta.png")}
							alt=""
							className="tw-h-20"
						/>
					</div>
				</div>
			</header>
			<section id="services" className="tw-py-10 tw-bg-[#ECEBF9]">
				<div className="container mx-auto">
					<p
						data-aos="fade-up"
						data-aos-duration="3000"
						className="tw-text-2xl tw-font-light text-[#0C111F] mb-1">
						Services
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="3000"
						className="tw-text-4xl tw-font-bold text-[#0C111F]">
						Our featured Services
					</p>
					{/* <div className="tw-grid md:tw-grid-cols-3 tw-mt-12 tw-gap-8">
						<HomeThreeServiceCard icon="home-three-serv1.png" />
						<HomeThreeServiceCard icon="home-three-serv2.png" />
						<HomeThreeServiceCard icon="home-three-serv1.png" />
					</div> */}
					<div className="tw-grid md:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-10 tw-mt-10">
						<Card
							img="ico-1.png"
							title="Data Services"
							text="Enjoy internet browsing always with our attractive data rates. Start your data reselling business with us today and enjoy profitable discounts for all networks."
						/>
						<Card
							img="ico-2.png"
							title="Airtime Services"
							text={`Making an online recharge has become very easy, fast and safe on ${process.env.REACT_APP_AGENT_NAME}... We offer instant recharge of Airtime with discounts for all networks.`}
						/>
						<Card
							img="ico-3.png"
							title="Electricity"
							text="We offer fast recharge of prepared meter with instant token delivery. E.g PHEDC, EKEDC IKEDC, AEDC e.t.c."
						/>
						<Card
							img="ico-4.png"
							title="Education"
							text="Generate WAEC and NECO Result Checker PINs and Tokens at unbeatable prices"
						/>
						<Card
							img="ico-5.png"
							title="Tv Subscription"
							text="Instantly activate cable TV subscriptions such as DStv, GOtv and Startimes with favourable discounts."
						/>
						<Card
							img="ico-6.png"
							title="Recharge Card Printing"
							text="Print recharge cards of all networks in your desired business name"
						/>
						<Card
							img="ico-6.png"
							title="Airtime 2 Cash"
							text="Convert excess MTN, GLO, AIRTEL and 9MOBILE Airtime to Cash at Superb rates."
						/>
					</div>
				</div>
			</section>
			<section id="about-us">
				<div className="container mx-auto tw-py-10">
					<div className="tw-grid md:tw-grid-cols-2 tw-gap-8">
						<div className="tw-self-center">
							<p
								data-aos="fade-up"
								data-aos-duration="3000"
								className="tw-text-2xl tw-font-light text-[#0C111F] mb-1">
								Benefits
							</p>
							<p
								data-aos="fade-up"
								data-aos-duration="3000"
								className="tw-text-4xl tw-font-bold text-[#0C111F]">
								Our Featured <br /> Services
							</p>
							<p
								data-aos="fade-up"
								data-aos-duration="3000"
								className="tw-mt-8">
								Join our network of outstanding entrepreneurs partnering with{" "}
								{process.env.REACT_APP_AGENT_NAME}. Bring our 'easy-payments'
								experience closer to your home or office and earn a commission
								for every transaction you perform for yourself or customers.
							</p>
							<div
								data-aos="fade-up"
								data-aos-duration="3000"
								className="tw-flex tw-gap-8 mt-4">
								<div className="tw-border tw-border-[#102F81] tw-border-2 tw-w-24 tw-h-24 tw-flex tw-items-center tw-justify-center tw-flex-col">
									<p className="tw-font-black tw-text-xl mb-1">500+</p>
									<p>Customers</p>
								</div>
								<div className="tw-border tw-border-[#102F81] tw-bg-[#102F81] tw-border-2 tw-w-24 tw-h-24 tw-flex tw-items-center tw-justify-center tw-flex-col text-white">
									<p className="tw-font-black tw-text-xl mb-1">500+</p>
									<p>Customers</p>
								</div>
								<div className="tw-border tw-border-[#102F81] tw-border-2 tw-w-24 tw-h-24 tw-flex tw-items-center tw-justify-center tw-flex-col">
									<p className="tw-font-black tw-text-xl mb-1">500+</p>
									<p>Customers</p>
								</div>
							</div>
						</div>
						<div data-aos="zoom-in-up">
							<img
								src={require("../../Assets/hime-three-benefit.png")}
								alt=""
								className="tw-h-[300px] md:tw-h-[500px] mx-auto"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="tw-bg-gradient-to-r tw-from-[#050436] tw-to-[#0D03C3] tw-py-10">
				<div className="container">
					<div className="tw-grid md:tw-grid-cols-2 tw-gap-8">
						<div
							data-aos="fade-right"
							data-aos-duration="2000"
							className="text-light tw-self-center">
							<p
								data-aos="fade-up"
								data-aos-duration="3000"
								className="tw-text-2xl tw-font-bold tw-mb-8">
								How to get started
							</p>
							<div
								data-aos="fade-up"
								data-aos-duration="3000"
								className="tw-flex tw-gap-4 tw-items-center">
								<div className="tw-font-black tw-text-2xl tw-text-[#0D03C3] tw-bg-white tw-h-16 tw-w-16 tw-rounded-full tw-flex tw-items-center tw-justify-center">
									1
								</div>
								<div>
									<p className="tw-font-bold tw-text-lg mb-1">Create Account</p>
									{/* <p className="tw-font-lignt tw-text-xs mb-0">
										Lorem ipsum dolor sit amet consectetur. <br /> Sodales nibh
										praesent.
									</p> */}
								</div>
							</div>
							<div
								data-aos="fade-up"
								data-aos-duration="3000"
								className="tw-flex tw-gap-4 tw-items-center tw-mt-8">
								<div className="tw-font-black tw-text-2xl tw-text-[#0D03C3] tw-bg-white tw-h-16 tw-w-16 tw-rounded-full tw-flex tw-items-center tw-justify-center">
									2
								</div>
								<div>
									<p className="tw-font-bold tw-text-lg mb-1">Install App</p>
									{/* <p className="tw-font-lignt tw-text-xs mb-0">
										Lorem ipsum dolor sit amet consectetur. <br /> Sodales nibh
										praesent.
									</p> */}
								</div>
							</div>
						</div>
						<div data-aos="zoom-in-up">
							<img
								src={require("../../Assets/get-started.png")}
								alt=""
								className="md:tw-h-[300px]"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="tw-py-10 tw-bg-[#ECEBF9] text-center">
				<div className="container">
					<p
						data-aos="fade-up"
						data-aos-duration="3000"
						className="tw-text-4xl tw-font-bold text-[#0C111F] m-0">
						Subscribe to Our Newsletter
					</p>
					<p data-aos="fade-up" data-aos-duration="3000" className="tw-mt-8">
						small heading
					</p>
					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						className="tw-flex tw-bg-white tw-p-1 tw-rounded-md tw-max-w-sm mx-auto">
						<input
							type="text"
							className="tw-bg-transparent tw-h-12 tw-px-4 tw-w-full"
						/>
						<button className="tw-h-12 tw-w-40 tw-rounded-md tw-bg-[#0C03B6] text-light">
							Join Now
						</button>
					</div>
				</div>
			</section> */}
			<section className="tw-py-10">
				<div
					data-aos="fade-up"
					data-aos-duration="3000"
					className="container tw-flex tw-items-center tw-gap-8">
					<div className="tw-w-1/5">
						<img src={require("../../Assets/home-three-customer.png")} alt="" />
					</div>
					<div>
						<div>
							<p className="tw-text-4xl tw-font-bold text-[#0C111F] m-0">
								Testimonials
							</p>
						</div>
						<div className="tw-max-w-lg tw-border-l-4 tw-p-4 tw-relative tw-border-[#040D24] bg-light shadow tw-mt-8">
							<p className="tw-font-bold tw-text-md tw-capitalize m-0">
								Joy Doe
							</p>
							<p className="tw-text-xs tw-text-[#102F81]"></p>
							<p className="tw-text-md tw-text-[#102F81]">
								I enjoy excellent customer service and affordable telecom
								services with swift delivery daily while using this platform. If
								you ever think of making more profits in your data reselling
								business, think of {process.env.REACT_APP_AGENT_NAME}
							</p>
							<div className="tw-absolute tw-h-32 tw-w-32 -tw-bottom-6 -tw-right-6 tw-bg-[#102F81] -tw-z-[1]"></div>
						</div>
					</div>
				</div>
			</section>
			<footer
				style={{ background: `url(${homeThreeHeaderBg})` }}
				className="tw-pt-32 tw-pb-8 tw-px-4">
				<div className="container">
					<div className="tw-grid md:tw-grid-cols-8 tw-gap-12">
						<div className="tw-col-span-4 tw-text-white">
							<AppLogo height="50px" />
							<p className="tw-max-w-lg tw-mb-4 tw-text-sm mt-4">
								{/* Own a VTU website like ours and carry out your business swiftly, */}
								You can start reselling by having access to all our services
								such as: DATA BUNDLES, AIRTIME VTU, BULK SMS, AIRTIME TO CASH,
								CABLE TV SUBSCRIPTIONS, ELECTRICITY BILLS PAYMENT, DATA CARDS,
								RECHARGE CARDS PRINTING etc at affordable prices.
							</p>
							{/* <div>socials</div> */}
						</div>
						<div className="d-none d-md-flex">
							<ul className="tw-text-white">
								<li className="tw-font-medium tw-text-xl tw-mb-6">About</li>
								<li className="tw-text-xs tw-font-normal tw-mb-2">Services</li>
								<li className="tw-text-xs tw-font-normal tw-mb-2">
									Contact Us
								</li>
							</ul>
						</div>
						<div className="d-none d-md-flex">
							<ul className="tw-text-white">
								<li className="tw-font-medium tw-text-xl tw-mb-6">Support</li>
								<li className="tw-text-xs tw-font-normal tw-mb-2">FAQs</li>
								<li className="tw-text-xs tw-font-normal tw-mb-2">Blog</li>
							</ul>
						</div>
						<div className="tw-col-span-2">
							<ul className="tw-text-white">
								<li className="tw-font-medium tw-text-xl tw-mb-6">About</li>
								<li className="tw-text-xs tw-font-normal tw-mb-2">Services</li>
								<li className="tw-text-xs tw-font-normal tw-mb-2">
									Contact Us
								</li>
								<li className="tw-text-xs tw-font-normal tw-mb-2">
									<ul className="list-group border-0 px-0 mx-0">
										{details.map((item, index) =>
											item?.text ? (
												<li
													key={index}
													className="list-group-item border-0 bg-transparent text-white d-flex align-items-center py-0">
													{item.icon}
													<p className="ms-3 w-100">
														{item?.type === "tel" ? (
															<>
																<a
																	className="text-white text-decoration-none fontReduce"
																	href={
																		!item?.text ? "#" : `tel:${item?.text}`
																	}>
																	{item?.text ? item?.text : ""}
																</a>
															</>
														) : item?.type === "mail" ? (
															<>
																<a
																	className="text-white text-decoration-none fontReduce"
																	href={
																		!item?.text ? "#" : `mailto:${item?.text}`
																	}>
																	{item?.text}
																</a>
															</>
														) : item?.type === "address" ? (
															<>
																<a
																	className="text-white text-decoration-none fontReduce w-100"
																	target={"_blank"}
																	rel="noreferrer"
																	href={
																		!item?.text
																			? "#"
																			: `https://www.google.com/maps/place/?q=place_id=${
																					details?.[details?.length - 1]?.text
																			  }`
																	}>
																	{item?.text}
																</a>
															</>
														) : (
															<></>
														)}
													</p>
												</li>
											) : (
												""
											)
										)}
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<p className="tw-text-white tw-text-center tw-text-xs tw-mt-8">
							Copyright @ {process.env.REACT_APP_AGENT_NAME} 2023. All Rights
							Reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default HomeThree;

const Card = ({ img, title, text }) => {
	return (
		<div
			data-aos="zoom-in-up"
			data-aos-duration="2000"
			className="tw-text-center tw-bg-white tw-rounded-lg tw-p-8 tw-shadow-md">
			<img
				src={require(`../../Assets/${img}`)}
				className="tw-mx-auto tw-h-10"
				alt=""
			/>
			<p className="tw-font-bold tw-mt-8">{title}</p>
			<p className="tw-font-light tw-mt-4">{text}</p>
		</div>
	);
};
