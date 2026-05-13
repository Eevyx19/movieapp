import { Link } from "react-router";

const PopularPerson = ({ popular }) => {
    console.log(popular)
    return (
        <section className="container-people w-full min-h-screen bg-gray-600">
            <div className="pt-20 md:pt-30 px-4 md:px-14">
                <h1 className="text-white font-bold text-base sm:text-2xl md:text-3xl sm:mb-4 md:mb-10">Popular People</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
                    {popular?.map((item, index) => (
                        <Link 
                        to={`/Person/Details/${item.id}`}
                        key={index} className="h-auto">
                            <img src={`${import.meta.env.VITE_API_IMAGE_POSTER}/${item?.profile_path}`} alt={item?.name} className="rounded"/>
                            <div className="mt-2 text-center w-full">
                                <h2 className="text-white text-xs sm:text-sm font-semibold truncate">
                                    {item?.name}
                                </h2>
                                <p className="text-gray-400 text-xs text-center whitespace-normal wrap-break-word leading-tight">
                                    {item?.known_for_department}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default PopularPerson;