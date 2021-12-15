import { useState, useEffect } from "react";
import { useLatestAPI } from "./useLatestAPI";
import { API_BASE_URL } from '../constants';

export function useSearch(term) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [results, setResults] = useState(() => ({
        data: {},
        isLoading: true
    }));
    
    useEffect(() => {
        if(!apiRef || isApiMetadataLoading) {
            return () => {};
        }

        const controller = new AbortController();

        async function getResults() {
            try {
                setResults({ data: {}, isLoading: true });

                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                      '[[at(document.type, "product")]]'
                    )}&q=${encodeURIComponent(
                        '[[fulltext(document, "' + term + '")]]'
                      )}&lang=en-us&pageSize=12`,
                    {
                      signal: controller.signal,
                    }
                );

                const data = await response.json();
                setResults({ data, isLoading: false });
            } catch (err) {
                setResults({data: {}, isLoading: false});
                console.error(err);
            }
        }

        getResults();

        return () => {
            controller.abort();
        }
    }, [apiRef, isApiMetadataLoading, term]);

    return results;
}