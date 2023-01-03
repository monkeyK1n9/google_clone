import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'

import { useResultContext } from '../../contexts/ResultContextProvider';
import { Loading } from '../loading/Loading';

export const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation(); // gives the /images or /videos etc

    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/search') {
                getResults(`/search?query=${searchTerm}&num=40`)
            }
            else {
                getResults(`${location.pathname}?query=${searchTerm}&num=40`)
            }
        }
        // getResults('/search?query=guillaume DJIODJIO')
    }, [searchTerm, location.pathname])

    if (isLoading) {
        return <Loading />
    }
    console.log(location.pathname)

    if (searchTerm == '') {
        return (
            <div className="flex flex-wrap w-full h-full justify-center items-center">
                <h2 className="text-3xl m-40">Enter your search term</h2>
            </div>
        )
    }

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.items?.map(({link, title, snippet}, index) => {
                        return (
                            <div key={index} className="md:w-2/5 w-full" >
                                <a href={link} target="_blank" rel="noreferrer">
                                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                        {title}
                                    </p>
                                    <p className="text-sm">
                                        {link.length > 30 ? link.substring(0, 30) : link}
                                    </p>
                                    <p className="text-md dark:text-blue-200 text-black-500">
                                        {snippet}
                                    </p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            )

        case '/imagesearch':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.items?.map(({title, thumbnailImageUrl, contextLink}, index) => {
                        return (
                            <a className="sm:p-3 p-5" href={contextLink} key={index} target="_blank" rel="noreferrer">
                                <img src={thumbnailImageUrl} alt={title} loading="lazy" />
                                <p className="w-36 break-words text-sm mt-2">
                                    {title}
                                </p>
                            </a>
                        )
                    })}
                </div>
            )

        default:
            return 'ERROR!'
    }
}