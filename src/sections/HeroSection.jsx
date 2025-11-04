import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
	useGSAP(() => {
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
		<section className="bg-main-bg">
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
