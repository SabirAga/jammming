import { Tracklist } from "./Tracklist"

export const SearchResults = ({ results, handleTrack }) => {
    return (
        <>
            <div className="h-[600px] w-[400px] bg-purple-300">
                <h1 className="font-bold text-xl">Results</h1>
                <Tracklist results={results}  handleTrack={handleTrack} />
            </div>

        </>
    )
}