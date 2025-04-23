import phone from '../images/phone.svg';
import mail from '../images/mail.svg';

export default function Footer() {
	return(
		<div className="bg-[#360731] text-white text-center">
			<div className="py-[50px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Lexend_Deca']">
				<div className="text-[#E5C984] text-[24px]">
					Ready to Take Control of Your Financial Future?
				</div>
				<div className="mt-[50px] mb-[30px] text-[18px]">
					Your goals are unique — and so is our approach
					<br />
					Let’s work together to craft your personalized path to abundance.
				</div>
				<a href="tel:+91 9943018682">
					<div className="text-[#360731] bg-[#E5C984] w-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer font-medium mx-auto">
						<span>
							Book Your Free Consultation Today!
						</span>
					</div>
				</a>
				<div className="text-[18px] flex max-sm:flex-col gap-[20px] my-[50px] justify-center">
					<a href="tel:+91 9943018682">
						<div className="flex gap-[10px] justify-center">
							<img src={phone} />
							<span className="">+91 99430 18682</span>
						</div>
					</a>
					<a href="mailto:support@vbabundance.com">
						<div className="flex gap-[10px] justify-center">
							<img src={mail} />
							<span className="">support@vbabundance.com</span>
						</div>
					</a>
				</div>
				<div className="text-[#E5C984] text-[24px]">
					Your Trust - Our Priority.
				</div>
				<div className="my-[20px] text-[18px]">
					We adhere to the highest standards of confidentiality and ethics. Your financial journey is in safe hands.
				</div>
			</div>
		</div>
	)
}