import React from "react";

export default function Website() {
  <body>
    <h1>Art & Tech</h1>
    <nav className="navbar navbar-expand-lg bg-body fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          HJ Park
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/art-tech.html">
                Art & Tech
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dev.html">
                Dev
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </body>;
}
