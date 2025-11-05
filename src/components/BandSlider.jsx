import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { bandlist } from "../constants";

function BandSlider() {
	const sliderRef = useRef();
	const isTablet = useMediaQuery({
		query: "(max-width: 1024px)",
	});
	useGSAP(() => {
		const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
		// console.log(scrollAmount);

		if (!isTablet) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".band-section",
					start: "2% top",
					end: `+=${scrollAmount + 1500}px`,
					scrub: true,
					pin: true,
					//pin: pins the horizontal scrolling
					// markers: true,
				},
			});
			tl.to(".band-section", {
				x: `-=${scrollAmount + 1500} px`,
				ease: "power1.inOut",
			});
		}

		const titleTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".band-section",
				start: "top top",
				end: "80% 60%",
				scrub: true,
                // markers: true
			},
		});
		titleTl
			.to(".first-text-split", {
				xPercent: -35,
				ease: "power1.inOut",
			})
			.to(
				".band-text-scroll",
				{
					xPercent: -22,
					ease: "power1.inOut",
				},
				"<" //play overlapping animation, not stutter
			)
			.to(
				".second-text-split",
				{
					xPercent: -10,
					ease: "power1.inOut",
				},
				"<"
			);
	});
	return (
		<div ref={sliderRef} className="slider-wrapper">
			<div className="band">
				{bandlist.map((band) => {
					return (
						<div key={band.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${band.rotation} `}>
							<img src={`/bandmembers/${band.name}.jpeg`} alt="" className="absolute bottom-0 rounded-4xl" />
							<h1>{band.bandName}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default BandSlider;
