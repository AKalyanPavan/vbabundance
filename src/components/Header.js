import logo from '../images/logo.png'
import phone from '../images/phone.svg'

export default function Header() {
	return(
		<div className="top-[0px] sticky z-[1] bg-[#ffffff] font-['Lexend_Deca']">
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-[10px] flex justify-between items-center">
				<img src={logo} className="w-[100px]" />
				<a href="tel:+91 9943018682">
					<div className="bg-[#360731] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer font-medium">
						<img src={phone} />
						<span className="text-[#ffffff] ml-[10px]">
							Call Us Now
						</span>
					</div>
				</a>
			</div>
		</div>
	)
}