import { useState } from "react";
import { Playlist } from "./components/Playlist";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { DUMMY_TRACKS, Tracklist } from "./components/Tracklist";
import './index.css'


export default function App() {

  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    const valueInLowerCase = value.toLowerCase();
    if (!valueInLowerCase) {
      setResults([]);
    } else {
      setResults(DUMMY_TRACKS.filter(
        item => item.title.toLowerCase().includes(valueInLowerCase)
          || item.artist.toLowerCase().includes(valueInLowerCase)
          || item.album.toLowerCase().includes(valueInLowerCase)
      ))
    }
  }

  const [addedSong, setAddedSong] = useState([])

  const handleAddSong = (results) => {
    setAddedSong((prevSongs) => [...prevSongs, ...results]);
  };


  // handleTrack (id)

  const handleTrack = (id) => {
    let song = results.find(track => track.id === id)
    // remove song from results
    // add song to addedSong
    if (addedSong.some(added => added.id === id)) {
      return;
    } else {
      setAddedSong((prev) => ([...prev, song]))
    }

  }

  return (
    <div className="bg-purple-400 h-screen">
      <h1 className="bg-purple-950 mx-auto text-center py-4 text-white text-base">Jammming</h1>
      <div className="text-center mt-6">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="flex justify-around">
        <SearchResults results={results} handleTrack={handleTrack}/>
        <Playlist addedSong={addedSong} />
      </div>
    </div>
  )
}