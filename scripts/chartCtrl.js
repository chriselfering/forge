angular.module('App')
    .controller('ChartCtrl', ChartCtrl)

ChartCtrl.$inject = ['StrFactory', 'SpdFactory', 'FinFactory']    

function ChartCtrl(StrFactory, SpdFactory, FinFactory) {
    console.log('ChartCtrl/Factories reporting for duty!')

    var ChartCtrl = this;
    // =================================================================================
    // Chart 1
    // ==============================================================================

    var data = StrFactory.goalArray;

    var outerWidth = 500;
    var outerHeight = 250;
    var margin = {
        left: 200,
        top: 0,
        right: 50,
        bottom: 30
    };
    var barPadding = 0.2;

    var xColumn = "current";
    var yColumn = "name";

    var innerWidth = outerWidth - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top - margin.bottom;

    var svg = d3.select(".strChart").append("svg")
        .attr("width", outerWidth)
        .attr("height", outerHeight);
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var xAxisG = g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + innerHeight + ")");
    var yAxisG = g.append("g")
        .attr("class", "y axis");

    var xScale = d3.scale.linear().range([0, innerWidth]);
    var yScale = d3.scale.ordinal().rangeBands([0, innerHeight], barPadding);

    var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
        .ticks(5) // Use approximately 5 ticks marks.
        .tickFormat(d3.format("s")) // Use intelligent abbreviations, e.g. 5M for 5 Million
        .outerTickSize(0); // Turn off the marks at the end of the axis.
    var yAxis = d3.svg.axis().scale(yScale).orient("left")
        .outerTickSize(0); // Turn off the marks at the end of the axis.

    function render(data) {

        xScale.domain([0, d3.max(data, function(d) {
            return d[xColumn];
        })]);
        yScale.domain(data.map(function(d) {
            return d[yColumn];
        }));

        xAxisG.call(xAxis);
        yAxisG.call(yAxis);

        var bars = g.selectAll("rect").data(data);
        bars.enter().append("rect")
            .attr("height", yScale.rangeBand());
        bars
            .attr("x", 0)
            .attr("y", function(d) {
                return yScale(d[yColumn]);
            })
            .attr("width", function(d) {
                return xScale(d[xColumn]);
            })
            .append("rect")
                .attr("height", yScale.rangeBand())
                .attr("width", function(d) {
                    return xScale(100);
                })
        bars.exit().remove();
    }

    function type(d) {
        d.population = +d.population;
        return d;
    }

    render(data);
    // ==============================================================================
    // Speed Chart
    // ==============================================================================
    var data = SpdFactory.goalArray;

    var outerWidth = 500;
    var outerHeight = 250;
    var margin = {
        left: 200,
        top: 0,
        right: 50,
        bottom: 30
    };
    var barPadding = 0.2;

    var xColumn = "current";
    var yColumn = "name";

    var innerWidth = outerWidth - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top - margin.bottom;

    var svg = d3.select(".spdChart").append("svg")
        .attr("width", outerWidth)
        .attr("height", outerHeight);
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var xAxisG = g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + innerHeight + ")");
    var yAxisG = g.append("g")
        .attr("class", "y axis");

    var xScale = d3.scale.linear().range([0, innerWidth]);
    var yScale = d3.scale.ordinal().rangeBands([0, innerHeight], barPadding);

    var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
        .ticks(5) // Use approximately 5 ticks marks.
        .tickFormat(d3.format("s")) // Use intelligent abbreviations, e.g. 5M for 5 Million
        .outerTickSize(0); // Turn off the marks at the end of the axis.
    var yAxis = d3.svg.axis().scale(yScale).orient("left")
        .outerTickSize(0); // Turn off the marks at the end of the axis.

    function render(data) {

        xScale.domain([0, d3.max(data, function(d) {
            return d[xColumn];
        })]);
        yScale.domain(data.map(function(d) {
            return d[yColumn];
        }));

        xAxisG.call(xAxis);
        yAxisG.call(yAxis);

        var bars = g.selectAll("rect").data(data);
        bars.enter().append("rect")
            .attr("height", yScale.rangeBand());
        bars
            .attr("x", 0)
            .attr("y", function(d) {
                return yScale(d[yColumn]);
            })
            .attr("width", function(d) {
                return xScale(d[xColumn]);
            })
            .append("rect")
                .attr("height", yScale.rangeBand())
                .attr("width", function(d) {
                    return xScale(100);
                })
        bars.exit().remove();
    }

    function type(d) {
        d.population = +d.population;
        return d;
    }

    render(data);

    // =======================================================================
    // Finance Chart
    // =======================================================================
    var data = FinFactory.goalArray;

    var outerWidth = 500;
    var outerHeight = 250;
    var margin = {
        left: 200,
        top: 0,
        right: 50,
        bottom: 30
    };
    var barPadding = 0.2;

    var xColumn = "current";
    var yColumn = "name";

    var innerWidth = outerWidth - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top - margin.bottom;

    var svg = d3.select(".finChart").append("svg")
        .attr("width", outerWidth)
        .attr("height", outerHeight);
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var xAxisG = g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + innerHeight + ")");
    var yAxisG = g.append("g")
        .attr("class", "y axis");

    var xScale = d3.scale.linear().range([0, innerWidth]);
    var yScale = d3.scale.ordinal().rangeBands([0, innerHeight], barPadding);

    var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
        .ticks(5) // Use approximately 5 ticks marks.
        .tickFormat(d3.format("s")) // Use intelligent abbreviations, e.g. 5M for 5 Million
        .outerTickSize(0); // Turn off the marks at the end of the axis.
    var yAxis = d3.svg.axis().scale(yScale).orient("left")
        .outerTickSize(0); // Turn off the marks at the end of the axis.

    function render(data) {

        xScale.domain([0, d3.max(data, function(d) {
            return d[xColumn];
        })]);
        yScale.domain(data.map(function(d) {
            return d[yColumn];
        }));

        xAxisG.call(xAxis);
        yAxisG.call(yAxis);

        var bars = g.selectAll("rect").data(data);
        bars.enter().append("rect")
            .attr("height", yScale.rangeBand());
        bars
            .attr("x", 0)
            .attr("y", function(d) {
                return yScale(d[yColumn]);
            })
            .attr("width", function(d) {
                return xScale(d[xColumn]);
            })
            .append("rect")
                .attr("height", yScale.rangeBand())
                .attr("width", function(d) {
                    return xScale(100);
                })
        bars.exit().remove();
    }

    function type(d) {
        d.population = +d.population;
        return d;
    }

    render(data);

} //This closes the Chart Controller
