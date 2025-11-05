import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function MessageSection() {
	useGSAP(() => {
		const firsMessage = SplitText.create(".msg-wrapper h1", { type: "words", linesClass: "paragraph-line" });
		gsap.to(firsMessage.words, {
			color: "#faeade",
			ease: "power1.in",
			stagger: 0.9,
			scrollTrigger: {
				trigger: ".message-content",
				start: "top 80%",
				end: "80% 80%",
				scrub: true,
				// markers: true,
			},
		});
	});

	return (
		<section  className="message-content">
			<div className="container mx-auto flex-center py-28 relative">
				<div className="">
					<div className="msg-wrapper">
						<h1 className="first-message">
							{" "}
							Foolish Minds is een rockband opgericht in 2021 door Matteo Giambarresi (drums) en Santo Trapani (bas en harsh vocals). De band werd
							later uitgebreid met Maarten Lauwereys (leadgitaar) en Sofie Vierendeels (zang en gitaar). Geïnspireerd door Japanse rock, punk, hard
							rock en heavy metal, creëert de band een krachtige mix van melodieuze en agressieve muziek. Hun muziek weerspiegelt hun passie voor
							diverse muziekstijlen.
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MessageSection;
