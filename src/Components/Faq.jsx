import Lottie from "lottie-react";
import FaqAnimation from "../../public/Faq.json";
import { motion } from 'framer-motion';
import { fadeIn } from "../varients";

const Faq = () => {
    return (
        <section className="  w-11/12 md:w-10/12 mx-auto">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center font-serif mt-10">Frequently Asked Questions</h2>
                    <p className='md:w-[60%] text-center mx-auto mt-3 mb-10 text-lg'>Explore our FAQ section for answers to commonly asked questions about our blog content, website features, and more. Find quick solutions and helpful insights to enhance your browsing experience and make the most out of our platform.</p>
                </motion.div>
                <div className="md:flex justify-center items-center gap-10">
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="md:w-1/2">
                        <Lottie animationData={FaqAnimation} />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="space-y-4 md:w-[60%]">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">How do I submit a guest post to your blog ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">We welcome guest contributions! To submit a guest post, please visit our "Write for Us" page and follow the submission guidelines outlined there. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">Can I republish your blog content on my website ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">We appreciate your interest! However, republishing our content requires prior permission. Please reach out to us via email with details about your request, and we'll be happy to discuss further.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">Are your blog articles available for syndication?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Yes, we offer syndication opportunities for our blog content. If you're interested in syndicating our articles, please contact us to discuss licensing options and terms. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">How can I stay updated on new blog posts?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">You can stay informed about our latest blog posts by subscribing to our newsletter. Simply enter your email address in the subscription form at the bottom of any page on our website.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">Do you accept sponsored content or advertising partnerships?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">We carefully consider sponsored content and advertising partnerships that align with the interests of our audience. For inquiries regarding sponsored posts or advertising opportunities, please contact our partnerships team for more information.</p>
                        </details>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Faq;