import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext()

const baseUrl = 'https://google-search-2.p.rapidapi.com'

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('guillaume djiodjio')

    // /videos, /search, /images
    const getResults = async (type) => { //type of result is either video, search, images
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        })
        console.log(response)
        const data = await response.json()
        console.log(data)

        setResults(data)
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider
            value={{
                getResults,
                results,
                searchTerm,
                setSearchTerm,
                isLoading
            }}
        >
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)