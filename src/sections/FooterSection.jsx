import { useRef } from "react";
import emailjs from "@emailjs/browser";
function FooterSection() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_j3sbexk", "template_9t82q8s", form.current, "qFOlVk_wG5pnyDf0m").then(
			() => {
				alert("Email sent successfully!");
				form.current.reset();
			},
			(error) => {
				alert("Failed to send email: " + error.text);
			}
		);
	};
	return (
		<section className="footer-section">
			<img src="/images/Footer.png" alt="Footer background" className="absolute top-0 left-0 w-screen h-screen object-cover" />

			<div
				className="contact-content absolute top-0 right-0 h-full flex items-center justify-center"
				style={{
					width: "45vw",
					backgroundColor: "#222123",
				}}
			>
				<div>
					<h1 className="footer-title mb-15">Contact</h1>
					<form ref={form} onSubmit={sendEmail} className=" flex flex-col gap-10">
						<h1 className="text-white">NAME</h1>
						<input type="text" placeholder="" className="footer-text" required name="name" />
						<h1 className="text-white">EMAIL</h1>
						<input type="email" placeholder="" className="footer-text" required />
						<h1 className="text-white">MESSAGE</h1>
						<textarea rows={5} className="footer-padding footer-textarea" name="message" required></textarea>
						<button type="submit" className="footer-button">
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default FooterSection;
