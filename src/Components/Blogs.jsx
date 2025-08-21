import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "./Blog";
import {motion} from 'framer-motion';
import { fadeIn } from "../varients";
import SkeletonCard from "../skeleton/SkeletonCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/blogs`)
            .then(response => {
                setBlogs(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div >
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            >
                <h1 className="text-3xl text-center font-bold font-serif mt-16">Recent Blogs </h1>
                <p className="md:w-1/2 text-center font-sans text-[18px] mt-3 mx-auto">The recent blogs section is a section on a website that displays a list of the most recently published blog posts. Each post may have a short description that appears below the title and provides a brief overview of the content of the post. </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mt-16 md:w-10/12 mx-auto">
            {isLoading && <SkeletonCard card={6}></SkeletonCard>}
                {
                    blogs.slice(0, 6).map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;