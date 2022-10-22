import React, { Component } from "react";
import "leaflet";
import Resultat from "./Resultat";
import fetchGet from "../utils/utils";

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: "",
      categories: [],
      current_categorie: "0",
      products_list: [],
      products_filtered: []
    };
  }

  handleCategorie = (e) => {
    e.preventDefault();
    this.setState({ current_categorie: e.target.value });
    this.filter_products(e.target.value, this.state.search_value);
    document.querySelector("#norm").scrollIntoView();
  };


  handleChange = (e) => {
    e.preventDefault();
    this.setState({ search_value: e.target.value });
  };

  fetchCategorie = () => {
    const categories = fetchGet(
      "https://tbgracy.pythonanywhere.com/categories/"
    );
    categories.then((_categories) => {
      this.setState({ categories: _categories });
    });
  };

  fetchProducts = () => {
    const products = fetchGet("https://tbgracy.pythonanywhere.com/products/");
    products.then((_products) => {
      this.setState((state, props) => ({
        products_list: _products,
        products_filtered: _products
      }));
    });
  };


  filter_products = (cat, search_val) => {
    let ps = [];

    if(cat !== "0"){
      this.state.products_list.forEach((p) => {
          if (p.category.id === parseInt(cat)) {
            ps.push(p);
          }
        });
    }else{
      ps = this.state.products_list;
    }

    if (search_val !== null) {
      const res = ps.filter((p) =>
        p.name.toLowerCase().includes(search_val.toLowerCase())
      );
      ps = res;
    }

    this.setState({ products_filtered: ps });
  };

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.search_value) {
      this.filter_products(
        this.state.current_categorie,
        this.state.search_value
      );
    }
    document.querySelector("#norm").scrollIntoView();
  };

  componentDidMount() {
    this.fetchCategorie();
    this.fetchProducts();
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top-text header-text">
                  <h2>Trouvez le bon prix.</h2>
                  <h6>
                    Economiser, Comparer et Chercher le meilleur prix le plus
                    près de chez vous.
                  </h6>
                </div>
              </div>
              <div className="col-lg-12" id="search-bar">
                <form
                  id="search-form"
                  name="gs"
                  method="submit"
                  role="search"
                  action="#"
                >
                  <div className="row">
                    <div className="col-lg-3 align-self-center">
                      <fieldset>
                        <select
                          name="area"
                          className="form-select"
                          aria-label="Area"
                          id="chooseCategory"
                          defaultValue={this.state.current_categorie}
                          onChange={this.handleCategorie}
                        >
                          <option value="0">Tous les catégories</option>
                          {this.state.categories &&
                            this.state.categories.map((cat) => (
                              <option key={cat.id} value={cat.id}>
                                {cat.name}
                              </option>
                            ))}
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <fieldset>
                        <input
                          type="address"
                          name="address"
                          className="searchText"
                          placeholder="Que cherchez-vous?"
                          autoComplete="on"
                          value={this.state.search_value}
                          onChange={this.handleChange}
                          required
                        />
                      </fieldset>
                    </div>

                    <div className="col-lg-3">
                      <fieldset>
                        <button
                          className="main-button"
                          onClick={this.handleSearch}
                        >
                          Rechercher
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
                <div className="d-flex justify-content-center">
                  <div className="form-check mt-1 fs-6 text-light">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" id="check" htmlFor="flexCheckDefault">
                      Autoriser l'accées à votre emplacement
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="norm"></div>
        <Resultat products_list={this.state.products_filtered} />
      </React.Fragment>
    );
  }
}