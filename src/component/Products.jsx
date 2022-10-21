import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Paginator from "./Paginator";
import $ from 'jquery';

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

    const items_per_page = 4;

    const [paginationConfig, setPaginationConfig] = useState({});
    const [paginatedProduct, setPaginatedProduct] = useState([]);
    const [current_page, setCurrentPage] = useState(1);
    const [total_page, setTotalPage] = useState(1);

    const paginateProduct = (items_per_page, products, page) => {
      let first_index = (items_per_page*page) - items_per_page;
      let last_index = items_per_page*page;
      let paginated_product = products.slice(first_index, last_index);
      setPaginatedProduct(paginated_product);
    }

    useEffect(() => {
        $('.page-link').attr('href', '#result');
        let number_of_page = calculate_total_page(products.length, items_per_page);
        setTotalPage(number_of_page);
        paginateProduct(items_per_page, products, current_page)
        setPaginationConfig({
            totalPages: number_of_page,
            currentPage: current_page,
            showMax: 1,
            size: "sm",
            threeDots: true,
            prevNext: true,
            onClick: function (page) {
              $('.page-link').attr('href', '#result');
              setCurrentPage(page);
              paginateProduct(items_per_page, products, page);
            }
        });
    }, [current_page, products]);

  return (
    <React.Fragment>
      <ul className="list-group pe-3 ps-3">
        {paginatedProduct && paginatedProduct.length > 0 ? paginatedProduct.map((p, index) => (
          <li className="list-group-item rounded-3 pt-0 pb-0 pe-3 d-flex justify-content-start mb-2 shadow" key={index}>
            <div>
              <div className="left-image">
                <Link href="#">
                  <img src={p.product.image} alt="" />
                </Link>
              </div>
            </div>
            <div className="ms-3">
              <p className="fs-6">{p.product.name}<br/>
              {p.product.category.name}<br/>
              {p.store.name} {p.store.adresse}<br/>
              {p.value} Ar</p>
            </div>
          </li>
        )) : <h3>Pas de produits trouvés!</h3>}
      </ul>
      <div className="d-flex justify-content-center">
        <Paginator total_page={total_page} paginationConfig={paginationConfig}/>
      </div>
    </React.Fragment>
  );
};

export default Products;
