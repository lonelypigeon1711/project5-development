
// TODO: create a component that displays a single bakery item
export function Time(
    {
        data,
        id,
        onAddToWatch,
        onRemoveToWatch, 
        onUpdateTime
    }) {

    const onAddToWatchClick = () => {
        const item = {
            id: id,
            time: data.time,
            name: data.name
        }

        return onAddToWatch(item), onUpdateTime(item)
    }
    const onRemoveToWatchClick = () => {
        const item = {
            id: id,
            time: data.time,
            name: data.name
        }

        return onRemoveToWatch(item), onUpdateTime(item)
    }

    return (
        <div className="movies">
            <div className="movie_body">
                <h2>{data.name}</h2>
                <img className="movie_img" src={data.image} id={id}>
                </img>
                <p className="description">{data.description}</p>
                <div className="total_time">
                    <p>{data.time} minutes</p>
                    <button onClick={onAddToWatchClick}>Add To Watch</button>
                    <button onClick={onRemoveToWatchClick}>Remove from To Watch</button>
                </div>
            </div>
        </div>
    );
}