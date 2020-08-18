import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import C3Chart from "react-c3js";
import "c3/c3.css";

const colors = {
  pattern: ["#4ac18e", "#b50707"],
};

const data = {
  type: "donut",
  columns: [
    ["Invoices", 28],
    ["Due Invoices", 17.5],
  ],

  onclick: function(d, i) {
    console.log("onclick", d, i);
  },
  onmouseover: function(d, i) {
    console.log("onmouseover", d, i);
  },
  onmouseout: function(d, i) {
    console.log("onmouseout", d, i);
  },
};

class DonutChart extends Component {
  render() {
    return (
      <AUX>
        <C3Chart data={data} color={colors} />
      </AUX>
    );
  }
}

export default DonutChart;
