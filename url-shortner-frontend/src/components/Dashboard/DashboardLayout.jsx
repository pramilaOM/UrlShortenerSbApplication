import React, { useState } from 'react';
import { dummyData } from '../../dummyData/data';
import Graph from './Graph';
import { useStoreContext } from '../../contextApi/ContextApi';
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery';
import ShortendPopUp from './ShortendPopUp';
import ShortenUrlList from './ShortenUrlList';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

const DashboardLayout = () => {
    // Show only the last 30 records
    //const refetch = false;
    const { token } = useStoreContext();
    const [shortenPopUp, setShortenPopUp] = useState(false);
    const navigate = useNavigate();
    // console.log(useFetchTotalClicks(
    //     token, onError
    // ));

    const { isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError)

    const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(token, onError)

    function onError() {
        navigate("/error");
    }
    const recentData = dummyData.slice(-30);

    return (
        <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
            {loader ? (
                <Loader />
            ) : (
                <div className="lg:w-[90%] w-full mx-auto py-16">
                    <div className="h-96 relative ">

                        {totalClicks.length === 0 && (
                            <div className="absolute flex flex-col justify-center sm:items-center items-start  bg-opacity-70 z-10">
                                <h1 className="text-slate-800 font-serif pl-150 sm:text-2xl text-[18px] font-bold mt-30">
                                    No Data For This Time Period
                                </h1>
                                <h3 className="sm:w-96 w-[90%] sm:ml-0  pl-120 text-center sm:text-lg text-sm mt-08">
                                    Share your short link to view where your engagements are coming from
                                </h3>
                            </div>

                        )}
                        <Graph graphData={totalClicks} />

                    </div>
                    <div className='py-5 sm:text-end'>
                        <button className='bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-md text-white'
                            onClick={() => setShortenPopUp(true)}>
                            Create a New Short URL
                        </button>

                    </div>

                    <div>
                        {!isLoading && myShortenUrls.length === 0 ? (
                            <div className="flex justify-center pt-16">
                                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg ">
                                    <h1 className="text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                                        You haven't created any short link yet
                                    </h1>
                                    <FaLink className="text-blue-500 sm:text-xl text-sm" />
                                </div>
                            </div>
                        ) : (
                            <ShortenUrlList data={myShortenUrls} />
                        )}
                    </div>
                </div>
            )}
            <ShortendPopUp
                refetch={refetch}
                open={shortenPopUp}
                setOpen={setShortenPopUp}
            />
        </div>
    );
};

export default DashboardLayout;
