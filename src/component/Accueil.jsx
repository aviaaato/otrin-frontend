import React, { Component } from "react";
import 'leaflet';
import Resultat from "./Resultat";


const fetchGet = async (url) => {
  const requete = await fetch(url);
  return await requete.json();
};

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      search_value: "",
      categories: [],
      current_categorie: 0,
      prices_filtered: [],
    };
  }

  handleCategorie = (e) => {
    e.preventDefault();
    this.setState({ current_categorie: e.target.value });
    this.filter_product(e.target.value, this.state.search_value);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ search_value: e.target.value });
  };

  fetchCategorie = () => {
    const categories = fetchGet(
      "http://tbgracy.pythonanywhere.com/categories/"
    );
    categories.then((_categories) => {
      this.setState({ categories: _categories });
    });
  };

  fetchPrices = () => {
    const products = fetchGet("http://tbgracy.pythonanywhere.com/prices/");
    products.then((_prices) => {
      this.setState((state, props) =>({ prices: _prices, prices_filtered: _prices }));
    });
  };

  filter_product = (cat, search_val = null) => {
    let ps = [];

    cat !== "0"
      ? this.state.prices.forEach((p) => {
          if (p.product.category.id === parseInt(cat)) {
            ps.push(p);
          }
        })
      : (ps = this.state.prices);

    if (search_val !== null) {
      const res = ps.filter(p => p.product.name.toLowerCase().includes(search_val.toLowerCase()));
      ps = res;
    }

    this.setState({ prices_filtered: ps });
  };

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.search_value !== "") {
      this.filter_product(
        this.state.current_categorie,
        this.state.search_value
      );
    }
  };

  componentDidMount() {
    this.fetchCategorie();
    this.fetchPrices();
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
              <div className="col-lg-12">
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
              </div>
            </div>
          </div>
        </div>
        <Resultat prices_filtered={this.state.prices_filtered}/>
      </React.Fragment>
    );
  }
}
