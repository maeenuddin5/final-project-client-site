import { toast } from "react-toastify";

const NewsLetter = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log("Email submitted:", email);
        toast.success('Thank you for subscribing to our newsletter ')
        form.reset();

    };

    return (
        <div className='bg-[#f8ebec] py-10 mt-8'>
            <div className='mx-auto text-center space-y-3'>
                <h2 className='text-2xl md:text-2xl font-serif text-center font-semibold'>SIGN-UP TO OUR NEWSLETTER</h2>
                <p className='text-lg font-serif text-center'>Your semi-regular email of the latest blogs, insights, and platform tips.</p>
                <div>
                    <div className="flex items-center justify-center mx-auto pb-6 md:py-0 md:w-1/2">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row bg-white dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input className="px-6 py-2 text-gray-700  bg-white outline-none  focus:placeholder-transparent dark:focus:placeholder-transparent" type="email" name="email" placeholder="Enter your email" required aria-label="Enter your email" />

                                <button className="relative p-0.5  inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                    <span className="relative px-6 py-3 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                                        <span className="relative text-white">Submit</span>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;