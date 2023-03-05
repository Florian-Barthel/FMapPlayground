import * as d3 from 'd3';
import {graphviz} from "d3-graphviz";
import {getGraph} from './graph_string.js';

let graphDecription = getGraph();
var startNode;

var selectedEdge = d3.select(null);
var selectedEdgeFill;
var selectedEdgeStroke;

var selectedNode = d3.select(null);
var selectedNodeStroke;
var selectedNodeFill;

var selectedCluster = d3.select(null);
var selectedClusterStroke;
var selectedClusterFill;

var nodeIndex;
var edgeIndex;

var margin = 30; // to avoid scrollbars
var width = window.innerWidth - margin;
var height = window.innerHeight - margin;

const graph = d3.select("#graph").graphviz()
graph.height(height).width(width).renderDot(graphDecription, startApp);

function startApp() {
    var nodes = d3.selectAll(".node");
    var edges = d3.selectAll(".edge");
    var clusters = d3.selectAll(".cluster");

    // click and mousedown on nodes
    nodes.on("click", function (event) {
        event.preventDefault();
        console.log('node click or mousedown');
        if (event.which == 1) {
            unSelectEdge();
            selectNode(d3.select(this));
        }
    });

    clusters.on("click", function (event) {
        event.preventDefault();
        console.log('cluster click or mousedown');
        console.log(this.querySelectorAll('title')[0].innerHTML);
        if (event.which == 1) {
            selectCluster(d3.select(this));
        }
    });
}

function selectEdge(edge) {
    unSelectEdge();
    selectedEdge = edge;
    selectedEdgeFill = selectedEdge.selectAll('polygon').attr("fill");
    selectedEdgeStroke = selectedEdge.selectAll('polygon').attr("stroke");
    selectedEdge.selectAll('path, polygon').attr("stroke", "yellow");
    selectedEdge.selectAll('polygon').attr("fill", "red");
}

function unSelectEdge() {
    selectedEdge.selectAll('path, polygon').attr("stroke", selectedEdgeStroke);
    selectedEdge.selectAll('polygon').attr("fill", selectedEdgeFill);
    selectedEdge = d3.select(null);
}


function selectNode(node) {
    unSelectNode();
    selectedNode = node;
    selectedNodeFill = selectedNode.selectAll('polygon, ellipse').attr("fill");
    selectedNodeStroke = selectedNode.selectAll('polygon, ellipse').attr("stroke");
    selectedNode.selectAll('polygon, ellipse').attr("fill", "yellow");
}

function unSelectNode() {
    selectedNode.selectAll('polygon, ellipse').attr("stroke", selectedNodeStroke);
    selectedNode.selectAll('polygon, ellipse').attr("fill", selectedNodeFill);
    selectedNode = d3.select(null);
}

function selectCluster(cluster) {
    unSelectCluster();
    selectedCluster = cluster;
    selectedClusterFill = selectedCluster.selectAll('path').attr("fill");
    selectedClusterStroke = selectedCluster.selectAll('path').attr("stroke");
    selectedCluster.selectAll('path').attr("fill", "yellow");
}

function unSelectCluster() {
    selectedCluster.selectAll('path').attr("stroke", selectedClusterStroke);
    selectedCluster.selectAll('path').attr("fill", selectedClusterFill);
    selectedCluster = d3.select(null);
}
