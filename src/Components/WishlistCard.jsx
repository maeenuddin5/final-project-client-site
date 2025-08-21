import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const WishlistCard = ({ wish, wishlist, setWishlist }) => {

    const { _id, image, blogId, title, short_description, date, category } = wish;

    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`${import.meta.env.VITE_API_URL}/wishlist/${_id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    toast.success('successfully remove wishlist blog')
                    const remaining = wishlist.filter(wish => wish._id !== _id);
                    setWishlist(remaining);
                }
            })
    }


    return (
        <div className="flex relative">
            <div className="p-2 mx-auto group rounded transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline font-serif">
                <img role="presentation" className="object-cover w-full rounded h-60" src={image} />
                <div className="space-y-2 mt-4 mb-12">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <div className="flex justify-between items-center">
                        <p>Date : <span className="text-xs">{new Date(date).toLocaleDateString()}</span></p>
                        <p>Category : {category}</p>
                    </div>
                    <p title={short_description}>{short_description.slice(0, 150)}........</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-around pb-4 ">
                    <Link to={`/blog/${blogId}`}>
                        <button className="relative p-0.5 btn-sm inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative px-6 py-3 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">Read More</span>
                            </span>
                        </button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="relative p-0.5 btn-sm inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Remove Wishlist</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;