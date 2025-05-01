import firstSection from '../images/first-section.svg';
import productsImage from '../images/products.png';
import check from '../images/check.svg';
import quotes from '../images/quotes.png';
import star from '../images/star.svg';
import cfp from '../images/cfp.jpeg';

import Header from './Header.js';
import Footer from './Footer.js';

import { numbers, whyChooseVBAbundance, services, planningSteps, products, reviews } from './Variables.js';

export default function Homepage() {
	return(
		<>
			<Header />
			<div className="font-['Lexend_Deca']">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-[#360731] my-[50px]">
						<div className="flex justify-between items-center gap-[50px]">
							<div className="max-w-[650px]">
								<div className="text-[40px] sm:text-[48px]">VB Abundance</div>
								<div className="text-[30px] text-[#af7bdb]">Simplifying Your Wealth Journey</div>
								<div className="my-[30px]">
									Welcome to VB Abundance, where your financial goals become actionable strategies. We specialize in tailored wealth management solutions for individuals and families — helping you achieve a future of financial security and prosperity.
								</div>
								<div>Your journey to financial freedom starts here.</div>
								<a href="/formsubmit">
									<div className="w-fit text-center bg-[#360731] py-[10px] px-[20px] rounded-[5px] cursor-pointer mt-[20px]">
										<span className="text-[#ffffff] font-medium">
											Book an Appointment
										</span>
									</div>
								</a>
								<img src={cfp} className="w-[150px] mt-[50px]" />
								<ul className="list-disc text-[blue] underline gap-[10px] flex flex-col list-inside mt-[30px]">
									<a target="_blank" href="https://drive.google.com/file/d/1yFISxM1OoEZmuf0EyOC01u1kKxARTANj/view?usp=share_link">
										<li>27 Money Myths</li>
									</a>
									<a target="_blank" href="https://drive.google.com/file/d/1A7GL9F74-XYaTvuqt62mFBNFrXO__z0r/view?usp=share_link">
										<li>10 SMart Financial Moves every Professional should make before 40.</li>
									</a>
									<a target="_blank" href="https://drive.google.com/file/d/1FoTWGEbRgIAxR7tPrZjwjFfl_ckyE_iS/view?usp=share_link">
										<li>Financial planning Report</li>
									</a>
								</ul>
							</div>
							<img src={firstSection} className="max-lg:hidden" />
						</div>
						<div className="flex max-sm:flex-col justify-between my-[50px] max-sm:gap-[30px] lg:px-[50px]">
							{numbers.map((number, index) => (
								<div className="w-[300px] mx-auto">
									<div className="text-[40px] sm:text-[48px] text-center">{number.count}</div>
									<div className="text-center">{number.name}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#fee9b2]">
				<div className="text-[#360731] py-[50px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-[32px] text-center font-medium">
						Why Choose VB Abundance?
					</div>
					<div className="mx-auto w-fit mt-[30px] grid md:grid-cols-2 grid-cols-1 gap-[30px] max-w-[800px]">
						{whyChooseVBAbundance.map((item, index) => (
							<div className="border-[1.2px] border-solid border-[#360731] p-[20px] rounded-[10px]">
								<div className="text-[#af7bdb] text-[18px] font-medium text-center">{item.title}</div>
								<div className="text-[#360731] mt-[20px]">{item.description}</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="text-[#360731] py-[50px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<div className="text-[32px] text-center font-medium">
					Our Services
				</div>
				<div className="text-[20px] text-center font-medium text-[#af7bdb] mt-[10px]">
					Every service is designed to move you closer to financial abundance
				</div>
				<div className="mx-auto w-fit mt-[50px] grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
					{services.map((item, index) => (
						<div className="bg-[#fee9b2] p-[20px] rounded-[10px]">
							<img src={item.imageSource} className="mx-auto" />
							<div className="text-center my-[20px] text-[18px] font-medium">{item.title}</div>
							<div className="">{item.description}</div>
						</div>
					))}
				</div>
			</div>
			<div className="font-medium pb-[50px] py-[50px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<div className="text-[32px] text-center">
					Financial Planning Process
				</div>
				<div className="flex flex-col gap-[50px] py-[50px] w-fit mx-auto">
					{planningSteps.map((item, index) => (
						<div className="flex items-start">
							<img src={item.imageUrl} className="w-[50px] h-[50px]" />
							<div className="ml-[20px]">
								<div className="text-[18px] text-[#af7bdb]">{item.title}</div>
								<div>{item.subtitle}</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="bg-[#fee9b2]">
				<div className="text-[#360731] py-[50px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-[32px] text-center font-medium">
						Our Products
					</div>
					<div className="text-[20px] text-center font-medium text-[#af7bdb] mt-[10px]">
						Comprehensive solutions for wealth building and protection
					</div>
					<div className="flex items-center mt-[50px]">
						<div className="w-fit mt-[30px] flex flex-col gap-[20px] max-w-[800px] text-[18px]">
							{products.map((item, index) => (
								<div className="flex items-start gap-[10px]">
									<img src={check} className="mt-[4px]" />
									<div>
										<span className="font-medium">{item.title}: </span>
										<span>{item.description}</span>
									</div>
								</div>
							))}
						</div>
						<img src={productsImage} className="w-[500px] max-lg:hidden" />
					</div>
				</div>
			</div>
			<div className="text-[#360731] py-[100px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<div className="text-[32px] text-center font-medium">
					Hear From Our Satisfied Clients
				</div>
				<div className="grid lg:grid-cols-4 grid-cols-2 gap-[30px] mt-[50px]">
					{reviews.map((review, index) => (
						<div className={`${review.customStyle} border-solid border-[1.5px] border-[#360731] p-[30px] rounded-[15px]`}>
							<div className="flex items-top justify-between">
								<div className="font-medium text-[20px]">{review.name}</div>
								<img src={quotes} className="w-[40px]" />
							</div>
							<div className="my-[20px]">{review.review}</div>
							<div className="flex">
								<img src={star} />
								<img src={star} />
								<img src={star} />
								<img src={star} />
								<img src={star} />
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	)
}