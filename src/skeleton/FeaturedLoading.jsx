import Skeleton from "react-loading-skeleton";


const FeaturedLoading = () => {
    return (
        <div className="animate-pulse">
            <div><Skeleton height={20} count={10}/></div>
        </div>
    );
};

export default FeaturedLoading;