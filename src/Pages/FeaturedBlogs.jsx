import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import FeaturedLoading from "../skeleton/FeaturedLoading";
import { Helmet } from "react-helmet";

const FeaturedBlogs = () => {
    const [blog, setBlogs] = useState([]);
    // console.log(blog.long_description.length);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/blogs`)
            .then(response => {
                // setBlogs(response.data)
                const sortByDescription = response.data.sort((a, b) => {
                    return b.long_description.split(" ").length - a.long_description.split(" ").length;
                })
                setBlogs(sortByDescription.slice(0, 10));
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const data = useMemo(() => blog, [blog])
    const columns = [
        {
            header: 'S. No',
            accessorKey: '',
            cell: (info) => <span>{info.row.index + 1}</span>
        },
        {
            header: 'Photo',
            accessorKey: 'userPhoto',
            cell: (info) => (
                <img src={info.getValue()} alt="User" className="size-12 rounded-full object-cover object-center border-2 border-white shadow-xl" />
            )
        },
        {
            header: 'Blog Owner',
            accessorKey: 'blogOwner'
        },
        {
            header: 'Blog Title',
            accessorKey: 'title'
        },
    ]

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    return (
        <div>
            <Helmet>
                <title>Featured Blogs</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center font-serif mt-10">Featured Blogs</h2>
            <p className="w-11/12 lg:w-[60%] mx-auto text-center mt-2 font-serif">Discover the cream of the crop with our Featured Blogs section. We've curated the top 10 posts based on the richness of their content, offering you a quick glimpse into the most compelling narratives. Dive into captivating stories, each accompanied by essential details like blog title, author's name, and profile picture, providing a snapshot of the diverse voices and perspectives within our community.</p>
            <div className="md:w-[75%] mx-auto my-10">
                <table className="table border font-serif scroll-mr-20 ">
                    <thead className="bg-[#F4F3F0] text-black text-lg">
                        {table.getHeaderGroups().map((headerGroup, i) =>
                        (<tr key={i}>
                            {headerGroup.headers.map((header, i) =>
                            (<th key={i}>
                                {flexRender(
                                    header.column.columnDef.header, header.getContext()
                                )}
                            </th>))}
                        </tr>))}
                    </thead>
                    <tbody className="text-lg">
                        {isLoading && <FeaturedLoading></FeaturedLoading>}
                        {table.getRowModel().rows.map((row, i) => (
                            <tr key={i}>
                                {row.getVisibleCells().map((cell, i) => (
                                    <td key={i}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeaturedBlogs;