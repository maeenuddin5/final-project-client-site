import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Comment from "../Components/Comment";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
    const blog = useLoaderData();
    const { user } = useContext(AuthContext)
    const [comment, setComment] = useState([]);
    const { _id, image, title,
        short_description, long_description, date, category, email } = blog
    // console.log(blog);
    const isAuthor = user?.email === email;

    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const commentUser = user.displayName;
        const commentUserPhoto = user.photoURL
        const comment = form.comment.value;
        const blogId = _id
        const newComment = { comment, commentUser, commentUserPhoto, blogId }
        // console.log(newComment);
        axios.post(`${import.meta.env.VITE_API_URL}/comment`, newComment)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
        form.reset();
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/comment/${_id}`)
            .then(res => {
                // console.log(res.data);
                setComment(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [_id, comment])
    // console.log(comment);

    return (
        <div className="border my-6 rounded-md w-11/12 lg:w-[60%] p-4 font-serif  mx-auto space-y-12">
            <Helmet>
                <title>Blog Details</title>
            </Helmet>
            <div>
                <img className="w-full object-cover object-center md:h-[500px] rounded-lg" src={image} alt="" />
            </div>
            <article className="space-y-6 ">
                <div className="">
                    <h1 className="text-2xl font-bold md:tracking-tight md:text-4xl">{title}</h1>
                    <div className="flex mt-4 flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <div className="flex items-center">
                            <p>Posted Date : <span>{new Date(date).toLocaleDateString()}</span></p>
                        </div>
                        <p>Category : {category}</p>
                    </div>
                </div>
                <div>
                    <p>{short_description}</p>
                </div>
            </article>
            <div>
                <div>
                    <p className="text-lg text-justify">{long_description}</p>
                </div>
            </div>
            <div>
                {isAuthor && (
                     <Link to={`/update-blog/${_id}`}>
                     <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                         <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                         <span className="relative px-6 py-3 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                             <span className="relative text-white">Update Blog</span>
                         </span>
                     </button>
                 </Link>
                )}
            </div>
            {/* comments section  */}
            <div>
                <form onSubmit={handleComment}>
                    <label className="label">
                        <span className="text-red-600 label-text font-bold">Please login before comment</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-1/2 border-2"
                        placeholder={isAuthor ? "You cannot comment on your own blog" : "Add a comment"}
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="3"
                        required
                        disabled={isAuthor}
                    ></textarea>
                    <br />
                    <button disabled={isAuthor} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-3 py-2 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Comment</span>
                        </span>
                    </button>
                </form>
                <div className="mt-10 space-y-6">
                    <h3 className="text-2xl font-bold">{comment.length} Comments</h3>
                    <hr />
                    {
                        comment.map(com => <Comment key={com._id} com={com}></Comment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;