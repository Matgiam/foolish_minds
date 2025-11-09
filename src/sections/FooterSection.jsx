function FooterSection() {
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
					<form className=" flex flex-col gap-10">
						<h1 className="text-white">NAME</h1>
						<input type="text" placeholder="" className="footer-text" required />
						<h1 className="text-white">EMAIL</h1>
						<input type="email" placeholder="" className="footer-text" required />
						<h1 className="text-white">MESSAGE</h1>
						<textarea rows={5} className="footer-padding footer-textarea" required></textarea>
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
