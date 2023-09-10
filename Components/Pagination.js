import React from "react";

//Footer ko pagination consider krain gay
export default function Pagination() {

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end mt-3">
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}