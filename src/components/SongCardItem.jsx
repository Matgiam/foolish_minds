import { useRef } from "react";

function SongCardItem(props) {
	const audioRef = useRef(null);

	const handlePlay = () => {
		const allAudios = document.querySelectorAll("audio");
		allAudios.forEach((audio) => {
			if (audio !== audioRef.current) {
				audio.pause();
				audio.currentTime = 0;
			}
		});

		if (audioRef.current.paused) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	};

	return (
		<div className="song-card">
			<div className="cube" style={{ width: 420, height: 420 }}>
				<img src={props.image} alt={`${props.title} cover`} />
			</div>

			<div className="song-content">
				<div className="flex justify-between items-center">
					<div className="flex-col text-dark-brown">
						<h2 className="second-title">{props.title}</h2>
						<p>{props.artist}</p>
					</div>
					<img src="/images/play-icon.png" className="md:w-14 h-16 pt-3 cursor-pointer" alt="Play" onClick={handlePlay} />
				</div>
			</div>
			<audio ref={audioRef} src={props.audioSrc} />
		</div>
	);
}

export default SongCardItem;
