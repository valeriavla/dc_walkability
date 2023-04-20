var margin = {top: 0, right: 30, bottom: 50, left: 60},
width = 800 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;

var svg = d3.select("#walk")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
d3.json("https://raw.githubusercontent.com/anly503/spring2023-project-team-14/text_data/data/bigrams_walk.json?token=GHSAT0AAAAAACAHA2V5QFUGDS4L3BHIQQ7UZCASWGQ", function( data) {

var allNodes = data.nodes.map(function(d){return d.name})
var allGroups = data.nodes.map(function(d){return d.grp})
allGroups = [...new Set(allGroups)]

var color = d3.scaleOrdinal()
  .domain(allGroups)
  .range(d3.schemeSet3);

var size = d3.scaleLinear()
  .domain([2,2])
  .range([6,6]);

var x = d3.scalePoint()
  .range([0, width])
  .domain(allNodes)

var idToNode = {};
data.nodes.forEach(function (n) {
  idToNode[n.id] = n;
});

var links = svg
  .selectAll('mylinks')
  .data(data.links)
  .enter()
  .append('path')
  .attr('d', function (d) {
    start = x(idToNode[d.source].name)    // X position of start node on the X axis
    end = x(idToNode[d.target].name)      // X position of end node
    return ['M', start, height-30,    // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
      'A',                            // This means we're gonna build an elliptical arc
      (start - end)/2, ',',    // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
      (start - end)/2, 0, 0, ',',
      start < end ? 1 : 0, end, ',', height-30] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
      .join(' ');
  })
  .style("fill", "none")
  .attr("stroke", "grey")
  .style("stroke-width", 1)

var nodes = svg
  .selectAll("mynodes")
  .data(data.nodes.sort(function(a,b) { return +b.n - +a.n }))
  .enter()
  .append("circle")
    .attr("cx", function(d){ return(x(d.name))})
    .attr("cy", height-30)
    .attr("r", function(d){ return(size(d.n))})
    .style("fill", function(d){ return color(d.grp)})
    .attr("stroke", "white")

var labels = svg
  .selectAll("mylabels")
  .data(data.nodes)
  .enter()
  .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .text(function(d){ return(d.name)} )
    .style("text-anchor", "end")
    .attr("transform", function(d){ return( "translate(" + (x(d.name)) + "," + (height-15) + ")rotate(-90)")})
    .style("font-size", 14)

nodes
  .on('mouseover', function (d) {
    nodes
      .style('opacity', .2)
    d3.select(this)
      .style('opacity', 1)
    links
      .style('stroke', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? color(d.grp) : '#b8b8b8';})
      .style('stroke-opacity', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? 1 : .2;})
      .style('stroke-width', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? 4 : 1;})
    labels
      .style("font-size", function(label_d){ return label_d.name === d.name ? 16 : 8 } )
      .attr("y", function(label_d){ return label_d.name === d.name ? 10 : 0 } )

  })
  .on('mouseout', function (d) {
    nodes.style('opacity', .7)
    links
      .style('stroke', 'grey')
      .style('stroke-opacity', .4)
      .style('stroke-width', '1')
    labels
      .style("font-size", 14 )

  })
})