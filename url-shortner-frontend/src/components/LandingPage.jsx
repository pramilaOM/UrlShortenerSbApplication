import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useStoreContext} from '../contextApi/ContextApi'

let desc =
    "Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface ensures quick setup."
const LandingPage = () => {
    const navigate = useNavigate();

    const { token } = useStoreContext();
    console.log("TOKEN FROM LANDING PAGE: "+token)
    const dashBoardNavigationHandler = () => {

    }
    return (
        <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4 pt-16">
            <div className="flex flex-row flex-wrap justify-between items-start gap-8 lg:gap-10 pt-16 lg:py-5">

                <div className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-bold font-roboto text-slate-800 md:text-5xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-[70%] w-full">
                        Linklytics Simplifies URL Shortening For Efficient Sharing
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-slate-600 text-sm my-5 lg:w-[70%] leading-relaxed">

                        Linklytics streamlines the process of URL shortening, making sharing links effortless and efficient. With its user-friendly interface, Linklytics allows you to
                        generate concise, easy-to-share URLs in seconds. Simplify your sharing experience with Linklytics today.
                    </motion.p>
                    <div className="flex items-center gap-4">
                        <motion.button
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            onClick={dashBoardNavigationHandler}
                            className="w-40 text-white font-medium rounded-md py-2 bg-gradient-to-r from-blue-500 to-purple-600">
                            Manage Links
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            onClick={dashBoardNavigationHandler}
                            className="border border-purple-600 w-40 text-purple-600 font-medium rounded-md py-2">
                            Create Short Link
                        </motion.button>
                    </div>

                </div>
                <div className="flex-1 flex justify-center w-full">
                    <motion.img
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="sm:w-[480px] w-[400px] object-cover rounded-md"
                        src="/images/twlh_juhl_230630.png"
                        alt=""
                    />
                </div>

            </div>
            <div className="sm:pt-12 pt-7">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto">
                    Trusted by individuals and teams at the world's best companies
                </motion.p>
            </div>

            <div className="pt-4 pb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card
                    title="Simple URL Shortening"
                    desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface ensures quick setup."
                />
                <Card
                    title="Powerful Analytics"
                    desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geography, and more."
                />
                <Card
                    title="Enhanced Security"
                    desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption."
                />
                <Card
                    title="Fast and Reliable"
                    desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure."
                />
            </div>

        </div>

    )
}

export default LandingPage
//rafce