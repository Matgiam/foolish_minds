import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Navbar from "../components/Navbar";

function HeroSection() {
	useGSAP(() => {
		const titleSplit = SplitText.create(".general-title", { type: "chars" });
		gsap.from(titleSplit.chars, {
			yPercent: 50,
			opacity: 0,
			ease: "power1.inOut",
			stagger: 0.02,
		});
		gsap.from("p", {
			yPercent: 30,
			opacity: 0,
			delay: 0.3,
			ease: "power1.inOut",
		});
		const heroTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-container",
				start: "top top",
				end: "bottom top",
				scrub: true,
				// markers: true,
			},
		});
		heroTl.to(".hero-container", {
			rotate: 7,
			scale: 0.85,
			y: 300,
			ease: "power1.inOut",
		});
	});

	return (
		<section className="bg-main-bg" id="hero">
			<div className="hero-container">
				<img src="/images/homescreen.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-100" />
				<div className="hero-content text-white">
					<h1 className="general-title ">foolish minds</h1>
					<p>Rock band since 2021</p>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
