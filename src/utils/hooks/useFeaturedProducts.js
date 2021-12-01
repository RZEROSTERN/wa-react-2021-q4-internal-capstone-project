import { useState, useEffect } from "react";

export function useFeaturedProducts() {    
    const [featuredProducts, setFeaturedProducts] = useState(() => ({
        data: {},
        isLoading: true
    }));

    useEffect(() => {
        async function getFeaturedProducts() {
            try {
                setFeaturedBanners({ data: {}, isLoading: true });
            } catch (err) {
                setFeaturedProducts({data: {}, isLoading: false});
            }
        }

        getFeaturedProducts();
    });

    return featuredProducts;
}