import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdArrowDownward } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./hero.css";

function CustomSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "10%",
	};

	const slides = [
		{
			image: "/assets/images/new-changes/home-hero-1.png",
			title: "Where Learning Meets Imagination & Innovation!",
			paragraph:
				"we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
			button: "Discover More",
		},
		{
			image: "/assets/images/new-changes/home-hero-3.png",
			title: "Where Learning Meets Imagination & Innovation!",
			paragraph:
				"we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
			button: "Discover More",
		},
		{
			image: "/assets/images/HomeBanner.png",
			title: "Where Learning Meets Imagination & Innovation!",
			paragraph:
				"we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
			button: "Discover More",
		},
	];

	return (
		<>
			{/* mobile screen */}
			<div className="w-full bg-black text-white pt-3 pb-[15px] block md:hidden">
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<div key={index} className="px-2 overflow-hidden">
							<div
								className="flex flex-col bg-cover bg-no-repeat bg-center rounded-lg  w-[70vw] md:w-[75vw] mx-auto py-2 px-4"
								style={{ backgroundImage: `url(${slide.image})` }}
							>
								<button className="py-[8px] px-[10px]  text-[#00A4FF] border border-white/[0.5] rounded-[10px] heroSecSubHead my-4 w-40">
									WELCOME TO EDUDEN
								</button>
								<h1 className="heroHead text-[#FFFFFF] w-56 mb-3">
									{slide.title}
								</h1>
								<p className="w-56 HomeBannerPara text-[#FFFFFF]">
									{slide.paragraph}
								</p>
								<button className="homeLargeAppoinMent my-4 px-[10px] py-[5px] w-28 flex items-center justify-between text-[#010101] bg-[#00A4FF] font-bold">
									{slide.button}
								</button>
							</div>
						</div>
					))}
				</Slider>
			</div>

			{/* large screen */}
			<div className="w-full bg-black text-white pt-14 pb-5 hidden md:block">
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<div key={index} className="px-5 overflow-hidden">
							<div
								className="flex flex-col justify-center items-start bg-gray-800 bg-cover bg-center rounded-lg w-[70vw] h-[70vh] md:w-[75vw] mx-auto px-10"
								style={{ backgroundImage: `url(${slide.image})` }}
							>
								<div className="flex justify-between items-center">
									<div>
										<button className="py-3 px-4 w-80 text-[#00A4FF] border border-white/[0.5] rounded-[10px] heroSecSubHead my-10 cursor-default">
											WELCOME TO EDUDEN
										</button>
										<h1 className="heroHead  text-[#FFFFFF] max-w-screen-lg pb-2">
											{slide.title}
										</h1>
										<p className="md:max-w-md lg:max-w-screen-sm HomeBannerPara text-[#FFFFFF]">
											{slide.paragraph}
										</p>
										<button className="homeLargeAppoinMent my-10 px-[16px] py-[5px] flex items-center justify-between text-[#010101] bg-[#00A4FF] font-bold">
											{slide.button}
										</button>
									</div>

									{/* rotated section start */}
									<div className=" bg-[#00A4FF] px-[30px] pt-[60px] pb-[20px]  max-w-[46px] flex flex-col items-center space-y-[14px] rounded-full">
										{/* Text */}
										<span className="transform rotate-90 heroSecSubHead text-[#010101] mb-[30px] whitespace-nowrap">
											follow now
										</span>

										{/* Arrow */}
										<span className="transform rotate-[-90] text-black">
											<MdArrowDownward className="" size={20} />
										</span>

										{/* Social Icons */}
										<div className="flex flex-col space-y-[10px] items-center">
											<div className="bg-black p-2 rounded-full text-white cursor-pointer">
												<FaFacebook size={20} />
											</div>
											<div className="bg-black p-2 rounded-full text-white cursor-pointer">
												<FaInstagram size={20} />
											</div>
											<div className="bg-black p-2 rounded-full text-white cursor-pointer">
												<LiaLinkedinIn size={20} />
											</div>
										</div>
									</div>
									{/* rotated section end */}
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
}

export default CustomSlider;
