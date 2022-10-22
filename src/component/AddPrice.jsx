import React, { Component } from "react";
import fetchGet from "../utils/utils";

export default class AddPrice extends Component {

  constructor(props){
    super(props);
    this.state = {
      categories: [],
      current_categorie: "0"
    }
  }

  fetchCategorie = () => {
    const categories = fetchGet(
      "https://tbgracy.pythonanywhere.com/categories/"
    );
    categories.then((_categories) => {
      this.setState({ categories: _categories });
    });
  };


  componentDidMount(){
    this.fetchCategorie();
  }

  handleCategoryChange = (e) => {
    e.preventDefault();
    this.setState({ current_categorie: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top-text header-text">
                  <h2>
                    Ajouter le meilleur prix du produit près de chez vous.
                  </h2>
                  <h6>
                    Votre participation nous aide à développer notre communauté.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <form id="contact" action="" method="get">
                        <div className="row">
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Nom du produit"
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <select
                                name="area"
                                className="form-select"
                                aria-label="Area"
                                id="chooseCategory"
                                value={this.state.current_categorie}
                                onChange={this.handleCategoryChange}
                              >
                                <option value="0">Tous les catégories</option>
                                {this.state.categories && this.state.categories.map((cat) => (
                                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                              </select>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Prix"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea
                                name="message"
                                type="text"
                                className="form-control"
                                id="message"
                                placeholder="Lieu de vente"
                                required=""
                              ></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                className="main-button "
                              >
                                <i className="fa fa-save"></i> Enregistrer
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
