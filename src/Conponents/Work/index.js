import React, { Component } from "react";
import "./style.scss";
import stalker from "../../images/stalker-rat.png"
import latifa from "../../images/latifa.png"
import luner from "../../images/lunar.png"
import calculator from "../../images/calculator.png"
class Work extends Component {
  render() {
    return (
      <div className="container">
        <h2>my work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          iusto mollitia neque voluptatum! Corrupti accusamus dolore error fugit
          quod recusandae quisquam, sint consequatur earum, adipisci aut debitis
          repellat molestias hic?
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={stalker} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Stalker Rat <span className="date">(Apr 2021 – May 2021)</span>
                </h5>
                <p className="card-text">This is an incognito messages website inspired by sarahah which have the same functionality with some improvements and edits.characterized by responsive design & modern.</p>
                <a
                  href="https://stalker-rat.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  viwe site
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={latifa} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Latifa al-kuariy <span className="date">(Dec 2021 – Jan 2022)</span>
                </h5>
                <p className="card-text">A website for a Qatari restaurant called "Latifa Al Kuwari" that displays the restaurant's meals and can be ordered through it, and it features a responsive design with all devices.</p>
                <a
                  href="https://www.latifa-alkuwari.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  viwe site
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={luner} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Lunar <span className="date">(Jun 2021 – Jun 2021)</span>
                </h5>
                <p className="card-text">A site to display modern robots with responsive design.</p>
                <a
                  href="https://mahmoud-abu-attiya.github.io/mimocodes/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  viwe site
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={calculator} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Calculator App <span className="date">(May 2021 – May 2021)</span>
                </h5>
                <p className="card-text">Simple calculator app with 3 themes and responsive design.</p>
                <a
                  href="https://mahmoud-abu-attiya.github.io/calculator-app-main/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  viwe site
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Work;
