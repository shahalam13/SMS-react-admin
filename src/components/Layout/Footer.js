import React from "react";

const footer = (props) => (
  <footer className="footer">
    © {new Date().getFullYear() - 1} - {new Date().getFullYear()} Cockpit{" "}
    <span className="text-muted d-none d-sm-inline-block float-right">
      Crafted with <i className="mdi mdi-heart text-danger"></i> by Shah Alam
    </span>
  </footer>
);

export default footer;
