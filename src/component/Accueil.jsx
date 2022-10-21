import React, { Component } from "react";
import 'leaflet';
import Resultat from "./Resultat";
//import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const fetchGet = async (url) => {
  const requete = await fetch(url);
  return await requete.json();
};

/*const MyMap = () => {
  return (
    <React.Fragment>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </React.Fragment>
  );
};

const Products = ({ products }) => {
  return (
    <div>
      {products.map((p, index) => (
        <div key={index}>
          <div>
            <img
              src={p.image}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          {p.name}
          <br />
          {p.category}
          <br />
          {p.moderator}
          <br />
        </div>
      ))}
    </div>
  );
};*/

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      search_value: "",
      categories: [],
      current_categorie: 0,
      products_filtered: [],
    };
  }

  handleCategorie = (e) => {
    e.preventDefault();
    this.setState({ current_categorie: e.target.value });
    this.filter_product(e.target.value);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ search_value: e.target.value });
    if (e.target.value !== "") {
      e.target.style.border = "1px solid black";
    }
  };

  fetchCategorie = () => {
    const categories = fetchGet(
      "http://tbgracy.pythonanywhere.com/categories/"
    );
    categories.then((_categories) => {
      this.setState({ categories: _categories });
    });
  };

  fetchProduct = () => {
    const products = fetchGet("http://tbgracy.pythonanywhere.com/products/");
    products.then((_products) => {
      this.setState({ products: _products });
    });
  };

  filter_product = (cat, search_val = null) => {
    let ps = [];

    cat !== "0"
      ? this.state.products.forEach((p) => {
          if (p.category === parseInt(cat)) {
            ps.push(p);
          }
        })
      : (ps = this.state.products);

    if (search_val !== null) {
      const res = ps.filter((p) => p.includes(search_val));
      console.log(res);
    }
    this.setState({ products_filtered: ps });
  };
  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.search_value !== "") {
      this.filter_product(
        this.state.current_categorie,
        this.state.search_value
      );
    } else {
      const txtfield = document.querySelector("#recherche");
      txtfield.style.border = "1px solid red";
    }
  };

  componentDidMount() {
    this.fetchCategorie();
    this.fetchProduct();
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
        <Resultat />
      </React.Fragment>
    );
  }
}
