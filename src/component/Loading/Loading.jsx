const Loading = () => {
    return (
        <div className="loading flex justify-center items-center h-screen w-screen gap-1 bg-black">
            <div className="dot h-3 w-3 rounded-full bg-gray-700"></div>
            <div className="dot h-3 w-3 rounded-full bg-gray-700 "></div>
            <div className="dot h-3 w-3 rounded-full bg-gray-700"></div>
        </div>
    )
}
export default Loading;