const Paginator = ({totalPages, currentPage}) => {
    console.log(totalPages)
    const paginatorLinks = []
    
    for(let i = 1; i <= totalPages; i++) {
        const isActive = (i === currentPage) ? "active" : ""
        paginatorLinks.push(<li className={"page-number " + isActive} key={"page-" + i}><a href="/#">{i}</a></li>)
    }

    return (
        <div className="pagination wz-right">
            <ul className="pagination-2">
                <li className="page-number prev"><a href="/#">&laquo;</a></li>
                {paginatorLinks}
                <li className="page-number next"><a href="/#">&raquo;</a></li>
            </ul>
        </div>
    )
}

export default Paginator;