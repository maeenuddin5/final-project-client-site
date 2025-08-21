import { Helmet } from "react-helmet";
import AuthorBio from "../Components/AuthorBio";
import Banner from "../Components/Banner";
import Blogs from "../Components/Blogs";
import Faq from "../Components/Faq";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Web Wonders | Home</title>
            </Helmet>
            <Banner></Banner>
            <Blogs></Blogs>
            <AuthorBio></AuthorBio>
            <Faq></Faq>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;