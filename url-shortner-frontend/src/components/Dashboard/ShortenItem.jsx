import React, { useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaHourglass } from "react-icons/fa";
import { MdAnalytics, MdOutlineAdsClick } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
import { LiaCheckSolid } from "react-icons/lia";
import { IoCopy } from "react-icons/io5";
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../contextApi/ContextApi';
import { Hourglass } from 'react-loader-spinner';
import Graph from './Graph';

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
    const { token } = useStoreContext();
    const navigate = useNavigate();
    const [isCopied, setIsCopied] = useState(false);
    const [analyticToggle, setAnalyticsToggle] = useState(false);
    const [loader, setLoader] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState("");
    const [analyticsData, setAnalyticsData] = useState([]);

    const subDomain = import.meta.env.VITE_REACT_SUBDOMAIN.replace(
        /^https?:\/\//,
        ""
    );

    const analyticsHandler = (shortUrl) => {
        if (!analyticToggle) {
            setSelectedUrl(shortUrl);
        }
        setAnalyticsToggle(!analyticToggle);
    }


    const fetchMyShortUrl = async () => {
        setLoader(true);
        try {
            const { data } = await api.get(`/api/urls/analytics/${selectedUrl}?startDate=2025-01-01T00:00:00&endDate=2025-12-31T23:59:59`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            });
            setAnalyticsData(data);
            setSelectedUrl("");
            console.log(data);
        } catch (error) {
            navigate("/error");
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        if (selectedUrl) {
            fetchMyShortUrl();
        }
    }, [selectedUrl]);

    return (
        <div className={`bg-slate-100 shadow-lg border border-dotted border-slate-500 px-6 sm:py-1 py-2`}>
            <div className={`flex sm:flex-row flex-col sm:justify-between w-full sm:gap-0 gap-5 py-5`}>
                <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden">
                    <div className="text-slate-900 pb-1 sm:pb-0 flex items-center gap-2">
                        <a href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
                            target="_blank"
                            className="text-[17px] font-montserrat font-[600] text-linkColor">
                            {subDomain + "/" + `${shortUrl}`}
                        </a>
                        <FaExternalLinkAlt className="text-linkColor" />
                    </div>
                    <div className="flex items-center gap-1 ">
                        <h3 className="text-slate-700 font-[400] text-[17px]">
                            {originalUrl}
                        </h3>
                    </div>
                    <div className="flex items-center gap-8 pt-6 ">
                        <div className="flex gap-1 items-center font-semibold text-green-800">
                            <span>
                                <MdOutlineAdsClick className="text-[22px] me-1" />
                            </span>
                            <span className="text-[16px]">{clickCount}</span>
                            <span className="text-[15px]">
                                {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 font-semibold text-lg text-slate-800">
                            <span>
                                <FaRegCalendarAlt />
                            </span>
                            <span className="text-[17px]">
                                {dayjs(createdDate).format("MMM DD, YYYY")}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-1 justify-end items-center gap-4"
                >
                    <div
                        className="flex items-center gap-2 px-4 py-2 bg-[#3B82F6] text-white rounded-md shadow-lg cursor-pointer transition duration-200"
                        onClick={() => {
                            navigator.clipboard.writeText(`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`);
                            setIsCopied(true);
                        }}
                    >
                        <span className="text-sm font-semibold">
                            {isCopied ? "Copied" : "Copy"}
                        </span>
                        {isCopied ? (
                            <LiaCheckSolid className="text-lg" />
                        ) : (
                            <IoCopy className="text-lg" />
                        )}
                    </div>
                    <div
                        onClick={() => analyticsHandler(shortUrl)}
                        className="flex items-center gap-2 px-4 py-2 bg-[#E11D48] text-white rounded-md shadow-lg cursor-pointer transition duration-200"
                    >
                        <span className="text-sm font-semibold">Analytics</span>
                        <MdAnalytics className="text-lg" />
                    </div>

                </div>

            </div>
            <React.Fragment>
                <div
                    className={`${analyticToggle ? 'flex' : 'hidden'
                        } max-h-96 sm:mt-0 mt-5 min-h-96 relative border-t-2 w-[100%] overflow-hidden`}
                >
                    {loader ? (

                        <div className="min-h-[calc(450px-140px)] flex justify-center items-center w-full">
                            <div className="flex flex-col items-center gap-1">
                                <Hourglass
                                    visible={true}
                                    height="50"
                                    width="50"
                                    ariaLabel="hourglass-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    colors={['#306cce', '#72a1ed']}
                                />
                                <p className='text-slate-700'>Please Wait...</p>
                            </div>
                        </div>

                    ) : (
                        <>{analyticsData.length === 0 && (
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white text-center px-4">
                                <h1 className="text-slate-800 font-serif text-xl sm:text-2xl font-bold mb-2">
                                    No Data For This Time Period
                                </h1>
                                <h3 className="text-slate-600 text-sm sm:text-lg max-w-md">
                                    Share your short link to view where your engagements are coming from
                                </h3>
                            </div>

                        )}
                        <Graph graphData = {analyticsData} />
                        </>
                    )}
                </div>
            </React.Fragment>


        </div>
    )

}

export default ShortenItem