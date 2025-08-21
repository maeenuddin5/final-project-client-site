import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <div>
            <div className='h-48 animate-pulse'>
                <Skeleton height={200}/>
            </div>
            <div className=' animate-pulse'>
                <Skeleton count={5} />
            </div>
        </div>
    );
};

export default Loading;