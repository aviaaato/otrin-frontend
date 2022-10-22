import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Paginator from "./Paginator";
import $ from 'jquery';

import fetchGet from "../utils/utils";

const calculate_total_page = (total_items, items_per_page) => {
    var total;
    if (total_items % items_per_page === 0) {
        total = total_items / items_per_page;
    } else {
        total = Math.floor(total_items / items_per_page) + 1;
    }
    return total;
}

const Products = ({ products_list, prices_filtered, setPricesFiltered }) => {

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
        let number_of_page = calculate_total_page(products_list.length, items_per_page);
        setTotalPage(number_of_page);
        paginateProduct(items_per_page, products_list, current_page)
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
              paginateProduct(items_per_page, products_list, page);
            }
        });
    }, [current_page, products_list]);

    const filterPrices = (id) => {
      const product_prices = fetchGet("https://tbgracy.pythonanywhere.com/products/"+id.toString()+"/prices/");
      product_prices.then((prices) => {
        setPricesFiltered(prices);
      })
    }

  return (
    <React.Fragment>
      <ul className="list-group pe-3 ps-3">
        {paginatedProduct && paginatedProduct.length > 0 ? paginatedProduct.map((p, index) => (
          <Link to={p.id.toString()} className="list-group-item rounded-3 pt-0 pb-0 pe-3 d-flex justify-content-start mb-2 shadow list-group-item-action" 
            key={index}
            onClick={(e) => {
              e.preventDefault();
              filterPrices(p.id);
            }}
            >
            <div>
              <div className="left-image">
                  <img src={p.image} alt="" />
              </div>
            </div>
            <div className="ms-3">
              <p className="fs-6">{p.name}<br/>
                {p.category.name}<br/>
              </p>
            </div>
          </Link>
        )) : <h3>Pas de produits trouvés!</h3>}
      </ul>
      <div className="d-flex justify-content-center">
        <Paginator total_page={total_page} paginationConfig={paginationConfig}/>
      </div>
    </React.Fragment>
  );
};

export default Products;
