import { Track } from "./Track";

export const DUMMY_TRACKS = [
    {
        id: 1,
        artist: 'Green Day',
        title: 'Saviors',
        album: 'Saviors'
    },
    {
        id: 2,
        artist: 'blink-182',
        title: 'One More Time',
        album: 'One More Time'
    },
    {
        id: 3,
        artist: 'Sum 41',
        title: 'Landmines',
        album: 'Heaven'
    },
]


export const Tracklist = ({ results, handleTrack }) => {
    return (
      <div className="">
        <ul className="mt-6 ">
          {results.map(({ title, artist, album, id }) => (
                <Track key={id} title={title} artist={artist} album={album} id={id} getTrackId={handleTrack}/>
          ))}
        </ul>
      </div>
    );
  }