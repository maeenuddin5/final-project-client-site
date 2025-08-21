import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddBlog = () => {
    const [startDate, setStartDate] = useState(new Date())
    const {user} = useContext(AuthContext);


    const handleAddTourist = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.value;
        const date = startDate;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const email = user.email
        const blogOwner = user.displayName;
        const userPhoto = user.photoURL;
        const newBlog = { title, category, image, date, short_description, long_description, email, blogOwner, userPhoto };
        console.log(newBlog);

        axios.post(`${import.meta.env.VITE_API_URL}/blogs`, newBlog)
        .then(response => {
            console.log(response.data);
            if(response.data.insertedId){
                toast.success("Successfully added blog")
            }
        })

        
        form.reset();
    }

    return (
        <div className="bg-[#F4F3F0] p-10 lg:px-24 w-11/12 lg:w-10/12 mx-auto shadow-xl my-6 rounded-md font-serif">
            <Helmet>
                <title>Add Blog</title>
            </Helmet>
            <h2 className="text-3xl text-center font-bold font-serif text-[#F95A65] mb-6">Add Blogs
            </h2>
            <form onSubmit={handleAddTourist}>
                <div className="md:flex gap-6  ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-lg label-text font-bold">Blog Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Enter blog title" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="text-lg label-text">Blog Category</span>
                        </label>
                        <select name="category" className="select select-bordered w-full text-lg">
                            <option disabled selected>Select Category</option>
                            <option>Technology</option>
                            <option>Web Development</option>
                            <option>Programming</option>
                            <option>Photography</option>
                            <option>UX Design</option>
                            <option>Career Change</option>
                            <option>Digital Marketing</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-lg label-text font-bold">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Enter image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                        <label className="label">
                            <span className="text-lg label-text font-bold">Date</span>
                        </label>
                        <ReactDatePicker
                            className='border p-2 rounded-md w-full input input-bordered'
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg label-text font-bold">Short Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="short_description" id="" cols="30" rows="3" placeholder="Enter short description"></textarea>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg label-text font-bold">Long Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="long_description" id="" cols="30" rows="5" placeholder="Enter short description"></textarea>
                    </div>
                </div>
                {/* End of Labels */}
                <input type="submit" value="Add Blog" className="btn w-full bg-[#F95A65] hover:bg-[#f24652] text-white font-bold mt-6" />
            </form>
        </div>
    );
};

export default AddBlog;