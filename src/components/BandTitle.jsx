import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function BandTitle() {
	useGSAP(() => {
		const firstTextSplit = SplitText.create(".first-text-split h1", { type: "chars" });
		const secondTextSplit = SplitText.create(".second-text-split h1", { type: "chars" });
		gsap.from(firstTextSplit.chars, {
			y: 200,
			stagger: 0.02,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".band-section",
				start: "top 15%",
				// end: "40% 40%",
				// scrub: true,
				// markers: true
			},
		});
		gsap.from(secondTextSplit.chars, {
			y: 200,
			stagger: 0.02,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".band-section",
				start: "top 5%",
			
				// scrub: true,
				// markers: true
			},
		});

		gsap.to(".band-text-scroll", {
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
			ease: "circ.inOut",
			scrollTrigger: {
				trigger: ".band-section",
				start: "top 8%",
			},
		});
	});
	return (
		<div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
			<div className="overflow-hidden 2xl:px-0 py-3 first-text-split ">
				<h1> Meet our</h1>
			</div>
			<div style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} className="band-text-scroll">
				<div className="bg-light-brown pb-5 2xl:pt-0 pt-3 2xl:px-10 px-3">
					<h2 className="text-dark-brown">Freaking</h2>
				</div>
			</div>
			<div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
				<h1>Cool members</h1>
			</div>
		</div>
	);
}
export default BandTitle;
