import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({card}) => {
    return (
        Array(card).fill(0).map((item, i) => (
            <div key={i} className="animate-pulse border p-2 rounded">
            <div>
                <Skeleton  height={240}/>
            </div>
            <div className="my-2">
                <Skeleton count={7}/>
            </div>
        </div>
        ) )
       
    );
};

export default SkeletonCard;