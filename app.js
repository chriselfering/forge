angular.module('App', ['ngRoute'])

angular.module('App')
    .controller('Goals', Goals)
    .controller('ChartCtrl', ChartCtrl)
    .factory('StrFactory', StrFactory)
    .factory('SpdFactory', SpdFactory)
    .factory('FinFactory', FinFactory)
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/views/home.html'
        });

        $routeProvider.when('/home', {
            templateUrl: '/views/home.html'
        });

        $routeProvider.when('/dashboard', {
            templateUrl: '/views/dashboard.html',
        });
        $routeProvider.when('/habits', {
            templateUrl: '/views/habits.html'
        });
        $routeProvider.when('/lists', {
            templateUrl: '/views/lists.html'
        });

        //default route
        $routeProvider.otherwise({ redirectTo: '/home' });
    });


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
    // =================================================================================
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

    // ===============================================================
    // Strength Factory
    // ===============================================================

    function StrFactory() {
        console.log('Strength Factory reporting for duty!')

        var str = this;

        str.goalArray = [];

        function StrGoal(name, goal, current, byWhen) { //constructor
            this.name = name;
            this.goal = goal;
            this.current = current;
            this.byWhen = byWhen
        }

        str.addStrGoal = function(name, goal, current, byWhen) {
            console.log('Congratulations on submitting a goal!');

            var newStrGoal = new StrGoal(name, goal, current, byWhen)
            str.goalArray.push(newStrGoal)

            console.log("new STRENGTH object array", str.goalArray)
        }
        return str;
    }
    // ================================================================
    // Speed Factory
    // ================================================================

    function SpdFactory() {
        console.log('Speed Factory reporting for duty!')

        var spd = this;

        spd.goalArray = [];

        function SpdGoal(name, goal, current, byWhen) { //constructor
            this.name = name;
            this.goal = goal;
            this.current = current;
            this.byWhen = byWhen
        }

        spd.addSpdGoal = function(name, goal, current, byWhen) {
            console.log('Congratulations on submitting a SPEED goal!');

            var newSpdGoal = new SpdGoal(name, goal, current, byWhen)
            spd.goalArray.push(newSpdGoal)

            console.log("new SPEED object array", spd.goalArray)
        }
        return spd;
    }
    // ================================================================
    // Finance Factory
    // ================================================================

    function FinFactory() {
        console.log('Finance Factory reporting for duty!')

        var fin = this;

        fin.goalArray = [];

        function FinGoal(name, goal, current, byWhen) { //constructor
            this.name = name;
            this.goal = goal;
            this.current = current;
            this.byWhen = byWhen
        }

        fin.addFinGoal = function(name, goal, current, byWhen) {
            console.log('Congratulations on submitting a goal!');

            var newFinGoal = new FinGoal(name, goal, current, byWhen)
            fin.goalArray.push(newFinGoal)

            console.log("new object array", fin.goalArray)
        }
        return fin;
    }


// ========================================================================
// All 3 Factories injected to Goals Controller
// ========================================================================
Goals.$inject = ['StrFactory', 'SpdFactory', 'FinFactory']

function Goals(StrFactory, SpdFactory, FinFactory) {
    console.log('GoalsCtrl / Factories reporting for duty!')

    var Goals = this;

    Goals.addStrGoal = function(name, goal, current, byWhen) {
        StrFactory.addStrGoal(name, goal, current, byWhen)
        Goals.name = '' //clear the form value for the input
        Goals.goal = ''
        Goals.current = ''
        Goals.byWhen = ''
    }

    Goals.addSpdGoal = function(name, goal, current, byWhen) {
        SpdFactory.addSpdGoal(name, goal, current, byWhen)
        Goals.name = '' //clear the form value for the input
        Goals.goal = ''
        Goals.current = ''
        Goals.byWhen = ''
    }

    Goals.addFinGoal = function(name, goal, current, byWhen) {
        FinFactory.addFinGoal(name, goal, current, byWhen)
        Goals.name = '' //clear the form value for the input
        Goals.goal = ''
        Goals.current = ''
        Goals.byWhen = ''
    }

    // ===============================================================
    // Goals Controller styling
    // ===============================================================
    Goals.accent = {}

    Goals.setAccent = function() {
        Goals.accent = {
            'border-radius': '20px',
            'position': 'relative',
            'transition-property': 'background-color, color',
            'transition-duration': '1s',
            'transition-timing-function': 'ease-out',
            'background-color': '#1f0971',
            'padding-bottom': '7px'
        }
    };
};

// =======================================================================
// Finance Chart
// =======================================================================
//
// var data = [{
//     month: 'Jan',
//     A: 20,
//     B: 5
// }, {
//     month: 'Feb',
//     A: 30,
//     B: 10
// }];
//
// var xData = ["A", "B"];
//
// var margin = {
//         top: 20,
//         right: 50,
//         bottom: 30,
//         left: 50
//     },
//     width = 400 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;
//
// var x = d3.scale.ordinal()
//     .rangeRoundBands([0, width], .35);
//
// var y = d3.scale.linear()
//     .rangeRound([height, 0]);
//
// var color = d3.scale.category20();
//
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");
//
// var xyAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left");
//
// var svg = d3.select(".finChart").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
// var dataIntermediate = xData.map(function(c) {
//     return data.map(function(d) {
//         return {
//             x: d.month,
//             y: d[c]
//         };
//     });
// });
//
// var dataStackLayout = d3.layout.stack()(dataIntermediate);
//
// x.domain(dataStackLayout[0].map(function(d) {
//     return d.x;
// }));
//
// y.domain([0,
//         d3.max(dataStackLayout[dataStackLayout.length - 1],
//             function(d) {
//                 return d.y0 + d.y;
//             })
//     ])
//     .nice();
//
// var layer = svg.selectAll(".stack")
//     .data(dataStackLayout)
//     .enter().append("g")
//     .attr("class", "stack")
//     .style("fill", function(d, i) {
//         return color(i);
//     });
//
// layer.selectAll("rect")
//     .data(function(d) {
//         return d;
//     })
//     .enter().append("rect")
//     .attr("x", function(d) {
//         return x(d.x);
//     })
//     .attr("y", function(d) {
//         return y(d.y + d.y0);
//     })
//     .attr("height", function(d) {
//         return y(d.y0) - y(d.y + d.y0);
//     })
//     .attr("width", x.rangeBand());
//
// svg.append("g")
//     .attr("class", "axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);
