
const Banner = () => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl font-semibold text-center text-white lg:text-4xl font-serif'>
                        Empowering Tech Enthusiasts Dive into Web Wonders
                    </h1>
                    <br />
                    <p className=" mx-auto p-4 md:p-0  md:max-w-2xl text-base leading-6 text-center text-gray-50">Embark on a journey through the ever-evolving landscape of technology, creativity, and innovation. Join us as we delve into captivating stories, insightful tutorials, and cutting-edge trends shaping the digital world. Let's navigate the future together, one pixel at a time</p>
                </div>
            </div>
        </div>
    )
};

export default Banner;