import { select } from "d3";

var legendSvg = select("#color-legend");

const legendValues = [
  { value: "> 300,000", color: "#ae1614" },
  { value: "> 200,000", color: "#c93734" },
  { value: "> 100,000", color: "#c4483a" },
  { value: "> 75,000", color: "#cf685d" },
  { value: "> 50,000", color: "#bd9861" },
  { value: "> 25,000", color: "#febe72" },
  { value: "> 10,000", color: "#f6d9b0" },
  { value: "> 5000", color: "#a6b9d3" },
  // {value: "< 5000", color: "#c9cfd7"}
];

const rowHeight = 30;

legendValues.map((legendValue, index) => {
  const yCoord = (index + 1) * rowHeight;
  legendSvg
    .append("circle")
    .attr("cx", 30)
    .attr("cy", yCoord)
    .attr("r", 8)
    .text(legendValue.value)
    .style("fill", legendValue.color);
});

legendValues.map((legendValue, index) => {
  const yCoord = (index + 1) * rowHeight;
  legendSvg
    .append("text")
    .attr("x", 60)
    .attr("y", yCoord + 1)
    .text(legendValue.value)
    .attr("alignment-baseline", "middle")
    .style("font-size", "16px")
    .style("font-family", "Helvetica")
});
