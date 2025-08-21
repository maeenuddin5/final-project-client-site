import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Registration = () => {
    const { createUser, logoutUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name, email, password, photo);


        // Password verification
        if (password.length < 6) {
            return toast.error('Password use must be 6 character')
        }

        if (/^(?=.*[A-Z])/gm.test(password) === false) {
            return toast.error("Uppercase letter is required")
        }

        if (/^(?=.*[a-z])(?=.*[!@#$%^&*()\-_=+{};:'",.<>?\\|[\]`~])/gm.test(password) === false) {
            return toast.error("Special character are required");
        }

        if (/[0-9]/gm.test(password) === false) {
            return toast.error("numeric character are required");
        }



        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(res => {
                        console.log(res);
                        toast.success("Account create successfully")
                        logoutUser()
                            .then(result => console.log(result))
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err);
                toast.error(("Please enter a valid email "))
            })
        event.target.reset()
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-68px)] font-serif'>
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div className='flex w-full border max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>

                    <p className='mt-3 text-2xl font-bold text-center  '>
                        Get Your Free Account Now.
                    </p>
                    <form
                        onSubmit={handleRegister}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-lg font-medium  '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                name='name'
                                required
                                placeholder="Enter your name"
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-lg font-medium  '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                autoComplete='photo'
                                name='photo'
                                required
                                placeholder="Enter your photo URL"
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-lg font-medium  '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                required
                                placeholder="Enter your email address"
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-lg font-medium  '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                required
                                placeholder='Enter your password'
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs uppercase text-blue-700 hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?t=st=1715267397~exp=1715270997~hmac=56415ca70aa110117fded7327e4ccdb8f4e69a75481686d97ad5a4223eb9dcf5&w=740')`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Registration