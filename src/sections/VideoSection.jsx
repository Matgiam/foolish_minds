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
				<div className="abs-center md:scale-100 scale-200"></div>
			</div>
		</section>
	);
}
export default VideoSection;
