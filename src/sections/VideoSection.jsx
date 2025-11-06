import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function VideoSection() {
	const isMobile = useMediaQuery({
		query: "(max-width:768px)",
	});

	useGSAP(() => {
		if (!isMobile) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".vd-pin-section",
					start: "-15% top",
					end: "200%",
					scrub: 1.5,
					// markers: true,
					pin: true,
				},
			});
			const monkeyTl = gsap.timeline({
				scrollTrigger: {
					trigger: ".monkey img",
					start: "1% top",
					end: "60%",
					scrub: true,
					markers: true,
				},
			});

			monkeyTl.to(".monkey img", {
				opacity: 0,
				ease: "power1.inOut",
			});
			tl.to(".video-box", {
				clipPath: "circle(100% at 50% 50%)",
				ease: "power1.inOut",
			});
		}
	});
	return (
		<section className="vd-pin-section">
			<div style={{ clipPath: isMobile ? "circle(80% at 50% 50%)" : " circle(4.0% at 50% 50%)" }} className="size-full video-box">
				<video src="public/video/Video_Foolish_Minds.mov" muted loop autoPlay></video>

				<div className="monkey">
					<img src="public/logo/monkey brown.png" alt="" />
				</div>
			</div>
		</section>
	);
}
export default VideoSection;
