export const Track = ({ id, artist, title, album, getTrackId }) => {
    return (
        <div className="track">
            <li key={id} className="border-b-2 border-white flex justify-around ">
                <span>{artist}</span>
                <span>{title}</span>
                <span>{album}</span>
                <button onClick={() => getTrackId(id)} >+</button>
            </li>
        </div>
    )
}