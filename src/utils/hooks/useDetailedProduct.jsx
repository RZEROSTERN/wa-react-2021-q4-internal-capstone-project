import { useState, useEffect } from "react"
import { useLatestAPI } from "./useLatestAPI"
import { API_BASE_URL } from "../constants"

export function useDetailedProduct(productID) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI()
    const [detailedProduct, setDetailedProduct] = useState(() => ({
        data: {},
        isLoading: true
    }))

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading || productID === null) {
            return () => {};
        }

        const controller = new AbortController()

        async function getDetailedProduct() {
            try {
                setDetailedProduct({ data: {}, isLoading: true })

                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        '[[at(document.id, "' + productID + '")]]'
                    )}&lang=en-us&pageSize=1`, {
                        signal: controller.signal,
                    }
                );

                const data = await response.json()
                setDetailedProduct( {data, isLoading: false} )
            } catch(err) {
                setDetailedProduct({data: {}, isLoading: false})
                console.error(err)
            }
        }

        getDetailedProduct()

        return () => {
            controller.abort()
        }
    }, [apiRef, isApiMetadataLoading, productID])

    return detailedProduct
}