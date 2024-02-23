import { useState } from "react"
import { SaveButton } from "./UI/SaveButton"

export const Playlist = ({addedSong, handleTrack}) => {
    const [playlistName, setPlaylistName] = useState('')
    const handleChange = (e)=>{
        setPlaylistName(e.target.value)
    }
    console.log(playlistName)
    return (
        <div>
            <div className="h-[600px] w-[400px] bg-purple-300 flex flex-col">
                <input type="text" name="playlist"  placeholder="Playlist" onChange={handleChange} />
                <div>
                    <ul>
                        {addedSong.map((result, id) => (
                            <li key={id}>{result.album}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center items-end p-4">
                    <SaveButton />
                </div>
            </div>
        </div>
    )
}