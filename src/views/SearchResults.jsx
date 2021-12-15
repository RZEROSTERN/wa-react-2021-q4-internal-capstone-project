import { useSearch } from "../utils/hooks/useSearch"
import { useParams } from 'react-router-dom';
import SearchResultProductsListContainer from "../components/SearchResultProductsListContainer.jsx";
import Paginator from "../components/Paginator";


const SearchResults = () => {
    const {searchTerm} = useParams()
    const {data, isLoading} = useSearch(searchTerm)
    const paginator = (!isLoading) ? <Paginator totalPages={data.total_pages} currentPage={data.page} /> : <span/>;
    console.log(data, isLoading)

    return (!isLoading && data.total_results_size > 0) ? (
        <div className="wz-container">
            <h1>Search results for {searchTerm}</h1>
            {paginator}
            <SearchResultProductsListContainer data={data}/>
            {paginator}
        </div>
    ) : (
        <div className="wz-container">
            <h1>No se han encontrado resultados.</h1>
        </div>
    )
}

export default SearchResults