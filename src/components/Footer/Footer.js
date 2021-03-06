import React from "react";
const footer = (props) => (
  <footer class="footer">
    © {new Date().getFullYear() - 1} - {new Date().getFullYear()} Cockpit{" "}
    <span class="text-muted d-none d-sm-inline-block float-right">
      Crafted with <i class="mdi mdi-heart text-danger"></i> by Shah Alam
    </span>
  </footer>
);

export default footer;
