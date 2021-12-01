import { useState } from "react"
import { useLatestAPI } from "./useLatestAPI"

export function useDetailedProduct() {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI()
    const [categories, setCategories] = useState(() => ({
        data: {},
        isLoading: true
    }))
}