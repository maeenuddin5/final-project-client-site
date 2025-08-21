import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import WishlistCard from "../Components/WishlistCard";
import { Helmet } from "react-helmet";
import SkeletonCard from "../skeleton/SkeletonCard";

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`, { withCredentials: true })
            .then(res => {
                // console.log(res.data);
                setWishlist(res.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, [user])

    return (
        <div className="min-h-[calc(100vh-325px)]">
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <h1 className="text-4xl text-center mt-8  font-serif font-bold"> Wishlist Blog</h1>
            <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 md:w-10/12 mx-auto">
                {isLoading && <SkeletonCard card={6}></SkeletonCard>}
                {
                    wishlist.map(wish => <WishlistCard
                        key={wish._id}
                        wish={wish}
                        wishlist={wishlist}
                        setWishlist={setWishlist}
                    ></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;