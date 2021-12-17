import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Paginator = ({totalPages, currentPage}) => {
    const paginatorLinks = []
    
    for(let i = 1; i <= totalPages; i++) {
        const isActive = (i === currentPage) ? "active" : ""
        paginatorLinks.push(<li className={"page-number " + isActive} key={"page-" + i}><Link to={"/products/" + i}>{i}</Link></li>)
    }

    return (
        <div className="pagination wz-right">
            <ul className="pagination-2">
                <li className="page-number prev"><a href="/products/1">&laquo;</a></li>
                {paginatorLinks}
                <li className="page-number next"><a href={"/products/" + totalPages}>&raquo;</a></li>
            </ul>
        </div>
    )
}

export default Paginator;