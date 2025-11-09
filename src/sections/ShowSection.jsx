import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ShowCard from "../components/ShowCard";

function ShowSection() {
	useGSAP(() => {
		gsap.set(".show-section", {
			marginTop: "-140vh",
		});

		const wordsTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".show-section",
				start: "top bottom",
				end: "200% top",
				scrub: true,
				// markers: true,
			},
		});

		wordsTl
			.to(
				".show-section .first-word",
				{
					xPercent: 70,
				},
				"<"
			)
			.from(
				".show-section .second-word",
				{
					xPercent: 50,
				},
				"<"
			)
			.to(
				".show-section .third-word",
				{
					xPercent: 40,
				},
				"<"
			);

		const cardTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".show-section",
				start: "top top",
				end: "200% 40%",
				scrub: 1.2,
				// markers: true,
				pin: true,
			},
		});

		cardTl.to(
			".vd-card",
			{
				yPercent: (i) => -450 - i * 80,
				stagger: 0.05,
				ease: "power1.inOut",
			},
			"<"
		);
	});

	return (
		<section className="show-section">
			<h1 className="first-word">our</h1>
			<h1 className="second-word">previous</h1>
			<h1 className="third-word">shows</h1>
			<div className="flex flex-col gap-0">
				<ShowCard />
			</div>
		</section>
	);
}

export default ShowSection;
