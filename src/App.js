import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
//import { FaRegStar } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favourites from "./components/Favourites";
//import { UserContex } from "./components/FavouriteContex";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  // const [changeColor, setChangeColor] = useState({});
  //
  // {1 : true, 2: false, 3: true}
  //
  const yellowStar = "⭐";
  const whiteStar = "☆";

  const onClickStar = (key, oldValue) => {
    setBeers((beers) => {
      beers[key].favorite = !oldValue;
      return [...beers];
    });
  };

  const beersPerPage = 6;
  const pageCount = 100;

  const changePage = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  //check if the serchTerm is empty or not
  //if it is empty there url should be just all the beers (url = https://api.punkapi.com/v2/beers)
  //if it is not empty it should return with the name (url = https://api.punkapi.com/v2/beers?beer_name=${searchTerm})

  useEffect(() => {
    let url;
    if (searchTerm === "") {
      url = `https://api.punkapi.com/v2/beers?per_page=${beersPerPage}&page=${pageNumber}`;
    } else {
      url = `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`;
    }
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        setBeers(response);
      });
  }, [searchTerm, pageNumber]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <SearchBar
              searchTerm={searchTerm}
              handleSearchInput={handleSearchInput}
            />

            <div className="card-container">
              {beers.map((item, key) => {
                return (
                  <div className="content-container" key={key}>
                    <div className="image-card">
                      {" "}
                      <img className="image" alt="#" src={item.image_url} />
                    </div>
                    <div className="body-card">
                      <h5 className="icon-card">
                        {item.name}{" "}
                        {/* <FaRegStar
                          className="icon"
                          onClick={() => {
                            onClickStar("#33cccc");
                          }}
                        /> */}
                        <div
                          className="icon"
                          onClick={() => {
                            onClickStar(key, item.favorite === true);
                          }}
                        >
                          {item.favorite ? yellowStar : whiteStar}
                        </div>
                      </h5>
                      <p className="paragraph">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Pagination pageCount={pageCount} changePage={changePage} />
          </Route>

          <Route exact path="/favourites">
            <Favourites onClick={onClick} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
