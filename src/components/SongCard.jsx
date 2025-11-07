import { songlist } from "../constants";
import SongCardItem from "./SongCardItem";

function SongCard() {
	return (
		<div className="song-cards-container flex items-end justify-center gap-16 pb-10">
			{songlist.map((song, index) => (
				<SongCardItem key={index} image={song.image} title={song.title} artist={song.artist} audioSrc={song.audioSrc} />
			))}
		</div>
	);
}

export default SongCard;
