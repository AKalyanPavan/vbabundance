export default function FormSubmit() {

	let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let phoneregex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

	function onInputClicked(inputId, errorMessageId) {
	    let inputDiv = document.getElementById(inputId);
	    let inputLabel = inputDiv.getElementsByTagName("label")[0];
	    let inputText = inputDiv.getElementsByTagName("input")[0];
	    let errorMessage = document.getElementById(errorMessageId);

	    inputLabel.style.animationName = "decreaseFontsize";
	    inputLabel.style.animationDuration = "0.2s";

	    if(!errorMessage.classList.contains("invisible")) {
            errorMessage.classList.add("invisible");
        }

	    setTimeout(function() {
	        inputLabel.classList.remove("text-[#677788]");
	        inputLabel.classList.add("text-[12px]");
	        inputLabel.classList.add("mb-[50px]");
	        inputLabel.classList.add("text-[#37405E]");
	    }, 100);

	    inputText.focus();
	}

	function onSelectClicked(errorMessageId) {

		let errorMessage = document.getElementById(errorMessageId);

		if(!errorMessage.classList.contains("invisible")) {
            errorMessage.classList.add("invisible");
        }
	}

	function onInputFocusOut(inputId) {
	    let inputDiv = document.getElementById(inputId);
	    let inputLabel = inputDiv.getElementsByTagName("label")[0];
	    let inputText = inputDiv.getElementsByTagName("input")[0];

	    if (!inputText.value.trim()) {
	      
	        inputLabel.style.animationName = "increaseFontsize";
	        inputLabel.style.animationDuration = "0.2s";

	        setTimeout(function() {
	            inputLabel.classList.add("text-[#677788]");
	            inputLabel.classList.remove("text-[12px]");
	            inputLabel.classList.remove("mb-[50px]");
	            inputLabel.classList.remove("text-[#37405E]");
	        }, 100);
	    }
	}

	function validateInput() {
	    let errorName = document.getElementById("errorName");
	    let errorEmail = document.getElementById("errorEmail");
	    let errorPhonenumber = document.getElementById("errorPhonenumber");

	    let fname = document.getElementById("fname");
	    let femail = document.getElementById("femail");
	    let fphonenumber = document.getElementById("fphonenumber");

	    let isError = false;

	    if (!fname.value.trim()) {
	        errorName.classList.remove("invisible");
	        isError = true;
	    }

	    if (!emailregex.test(femail.value)) {
	        errorEmail.classList.remove("invisible");
	        isError = true;
	    }

	    if (!phoneregex.test(fphonenumber.value)) {
	        errorPhonenumber.classList.remove("invisible");
	        isError = true;
	    }

	    if (!isError) {
	    	sendEmail(
	    		fname.value,
	    		femail.value,
	    		fphonenumber.value,
	    	);

	    	// Making input values empty
	        fname.value = "";
	        femail.value = "";
	        fphonenumber.value = "";

	        onInputFocusOut("fullName");
	        onInputFocusOut("email");
	        onInputFocusOut("phoneNumber");
	    }   
	}

	function sendEmail(name, email, phonenumber) {

		const zapikey = process.env.REACT_APP_ZAPIKEY;

		const paramsObject = {
			full_name: name,
			email: email,
			mobile: phonenumber,
		}

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: JSON.stringify(paramsObject),
			redirect: "follow",
		};

		// Construct the full URL
		const url = `https://seobot.centilio.com/vgdsendemail`;

		fetch(url, requestOptions)
			.then((response) => {
				if (response.ok) {
					console.log("✅ Success");
					return response.text();
				} else {
					console.error("❌ Failed with status:", response.status);
					throw new Error("Request failed");
				}
			})
			.then((result) => {

		        // Opening thank-you modal
		        openThankYouModal();

				console.log("Result:", result);
			})
			.catch((error) => {
				console.error("❌ Error occurred:", error.message);
				alert(`Network error or unexpected issue occurred. Please try again. \n ${error.message}`);
			});
	}

	function closeThankYouModal() {
	    let thankYouModal = document.getElementById("thankYouModal");
	    let modalOverlay = document.getElementById("modalOverlay");
	    if(!thankYouModal.classList.contains("hidden")){
	        thankYouModal.classList.add("hidden");
	        modalOverlay.classList.add("hidden");
	    }
	}

	function openThankYouModal() {
	    let thankYouModal = document.getElementById("thankYouModal");
	    let modalOverlay = document.getElementById("modalOverlay");
	    if (thankYouModal.classList.contains("hidden")) {
	        thankYouModal.classList.remove("hidden");
	        modalOverlay.classList.remove("hidden");
	    }
	}

	return(
		<div className="bg-[#f6ecff] pb-[100px] font-['Lexend_Deca'] sm:px-[50px] px-[20px]">
			<div className="text-center text-[#360731] sm:text-[48px] text-[36px] pb-[30px] pt-[50px]">VB Abundance</div>
			<div className="bg-white max-w-[600px] mx-auto sm:px-[50px] px-[20px] border-solid border-[1.5px] border-[#360731] pt-[50px] rounded-[20px] shadow-[1px_1px_50px_50px_rgba(0,0,0,0.05)]">
				<div className="text-center text-[24px] text-[#360731]">We are Happy to help</div>
				<div className="pt-[50px] py-[30px] flex flex-col gap-[20px]">
					<div className="">
					    <div id="fullName" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("fullName", "errorName")}>
					        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Full name</label>
					        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("fullName")} placeholder="" type="text" id="fname" name="fname" />
					    </div>
					    <div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorName">Full name Cannot be Empty</div>
					</div>
					<div className="">
					    <div id="email" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("email", "errorEmail")}>
					        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Email</label>
					        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("email")} placeholder="" type="text" id="femail" name="femail" />
					    </div>
					    <div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorEmail">Please provide a valid email</div>
					</div>
					<div className="">
					    <div id="phoneNumber" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("phoneNumber", "errorPhonenumber")}>
					        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Phone Number</label>
					        <input className="outline-none mx-[10px] w-[100%]" onBlur={() => onInputFocusOut("phoneNumber")} placeholder="" type="text" id="fphonenumber" name="fphonenumber" />
					    </div>
					    <div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPhonenumber">Please provide valid phone number</div>
					</div>
					<div id="bookVisitNowButton" className="book-visit-button w-fit text-center bg-[#360731] py-[10px] px-[30px] rounded-[5px] cursor-pointer mx-auto" onClick={() => validateInput()}>
						<span className="text-[#ffffff] tracking-tight">
							Submit
						</span>
					</div>
				</div>
				<div id="modalOverlay" className="w-[100%] bg-[#000000ab] fixed top-[0px] left-[0px] h-[100%] z-[5] hidden">
					<div id="thankYouModal" className="w-[100%] h-[100%] bg-[#7f808080] fixed z-[6] text-center hidden">
					    <div style={{
					        transform: "translate(-50%, -50%)"
					    }}
					        className="text-[#37405E] fixed bg-[#c2d9ff] top-[50%] left-[50%] py-[30px] px-[10px] sm:w-[400px] w-[90%] rounded-[10px] z-[5] leading-[35px] border-solid border-[2px] border-[#37405e]">
					        <div className="bg-[#37405E] w-max px-[15px] py-[18px] rounded-[50%] mx-auto">
					            <svg width="30" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					                <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
					            </svg>
					        </div>
					        <div className="text-[30px] font-semibold my-[20px]">Thank You!</div>
					        <div>We'll reach You Out Soon!</div>
					        <div className="bg-[#dc3737] text-[#FFFFFF] cursor-pointer rounded-[5px] my-[20px] w-max mx-auto px-[20px] font-medium" onClick={() => closeThankYouModal()}>Close</div>
					    </div>
					</div>
				</div>
			</div>
		</div>
	)
}