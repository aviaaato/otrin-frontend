import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Paginator from "./Paginator";

const calculate_total_page = (total_items, items_per_page) => {
    var total;
    if (total_items % items_per_page === 0) {
        total = total_items / items_per_page;
    } else {
        total = Math.floor(total_items / items_per_page) + 1;
    }
    return total;
}

const Products = ({ products }) => {

    //const [paginationConfig, setPaginationConfig] = useState({});
    //const [current_page, setCurrentPage] = useState({});

    /*useEffect(() => {
        let number_of_page = calculate_total_page(products.length, 5);
        setPaginationConfig({
            totalPages: number_of_page,
            currentPage: current_page,
            showMax: 2,
            size: "sm",
            threeDots: true,
            prevNext: true,
            onClick: function (page) {
                setCurrentPage(page);
                //getUsers(page);
            }
        });
    }, [products])*/

  return (
    <React.Fragment>
      <ul className="list-group">
        {products && products.length > 0 ? products.map((p, index) => (
          <li className="list-group-item d-flex justify-content-evenly mb-2 shadow" key={index}>
            <div>
              <div className="left-image">
                <Link href="#">
                  <img src={p.product.image} alt="" />
                </Link>
              </div>
            </div>
            <div>
              <h5>{p.product.name}</h5>
              <h5>{p.product.category.name}</h5>
              <h5>{p.store.name} {p.store.adresse}</h5>
              <h5>{p.value} Ar</h5>
            </div>
          </li>
        )) : <h3>Pas de produits trouvés!</h3>}
      </ul>
    </React.Fragment>
  );
};

export default Products;
