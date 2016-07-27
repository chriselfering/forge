angular.module('App', ['ngRoute'])

angular.module('App')
  .controller('Goals', Goals)
  .controller('ChartCtrl', ChartCtrl)

    function ChartCtrl() {
      console.log('Chart Controller reporting for duty!')

      var ChartCtrl = this;

      /*// =====================================================================================
      // Chart 1
      // =====================================================================================*/

      var data = [
      { name        : "Squats",
        population  : "158"},
      { name        : "Deadlifts",
        population  : "245"},
      { name        : "Bench Press",
        population  : "185"},
      { name        : "Overhead Press",
        population  : "134"}
      ]

      var outerWidth = 500;
      var outerHeight = 250;
      var margin = { left: 200, top: 0, right: 0, bottom: 30 };
      var barPadding = 0.2;

      var xColumn = "population";
      var yColumn = "name";

      var innerWidth  = outerWidth  - margin.left - margin.right;
      var innerHeight = outerHeight - margin.top  - margin.bottom;

      var svg = d3.select(".chart1").append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight);
      var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      var xAxisG = g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + innerHeight + ")");
      var yAxisG = g.append("g")
        .attr("class", "y axis");

      var xScale = d3.scale.linear().range(      [0, innerWidth]);
      var yScale = d3.scale.ordinal().rangeBands([0, innerHeight], barPadding);

      var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
        .ticks(5)                   // Use approximately 5 ticks marks.
        .tickFormat(d3.format("s")) // Use intelligent abbreviations, e.g. 5M for 5 Million
        .outerTickSize(0);          // Turn off the marks at the end of the axis.
      var yAxis = d3.svg.axis().scale(yScale).orient("left")
        .outerTickSize(0);          // Turn off the marks at the end of the axis.

      function render(data){

        xScale.domain([0, d3.max(data, function (d){ return d[xColumn]; })]);
        yScale.domain(       data.map( function (d){ return d[yColumn]; }));

        xAxisG.call(xAxis);
        yAxisG.call(yAxis);

        var bars = g.selectAll("rect").data(data);
        bars.enter().append("rect")
          .attr("height", yScale.rangeBand());
        bars
          .attr("x", 0)
          .attr("y",     function (d){ return yScale(d[yColumn]); })
          .attr("width", function (d){ return xScale(d[xColumn]); });
        bars.exit().remove();
      }

      function type(d){
        d.population = +d.population;
        return d;
      }

      render(data)

      // ====================================================================

      // =====================================================================================
     // Chart 2
     // =====================================================================================*/

     var data = [
     { name        : "Rainy Day Fund",
       amount  : "158"},
     { name        : "Retirement",
       amount  : "245"},
     { name        : "Car",
       amount  : "185"},
     { name        : "House",
       amount  : "134"}
     ]

     var outerWidth = 500;
     var outerHeight = 250;
     var margin = { left: 200, top: 0, right: 0, bottom: 30 };
     var barPadding = 0.2;

     var xColumn = "amount";
     var yColumn = "name";

     var innerWidth  = outerWidth  - margin.left - margin.right;
     var innerHeight = outerHeight - margin.top  - margin.bottom;

     var svg = d3.select(".chart2").append("svg")
       .attr("width",  outerWidth)
       .attr("height", outerHeight);
     var g = svg.append("g")
       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
     var xAxisG = g.append("g")
       .attr("class", "x axis")
       .attr("transform", "translate(0," + innerHeight + ")");
     var yAxisG = g.append("g")
       .attr("class", "y axis");

     var xScale = d3.scale.linear().range(      [0, innerWidth]);
     var yScale = d3.scale.ordinal().rangeBands([0, innerHeight], barPadding);

     var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
       .ticks(5)                   // Use approximately 5 ticks marks.
       .tickFormat(d3.format("s")) // Use intelligent abbreviations, e.g. 5M for 5 Million
       .outerTickSize(0);          // Turn off the marks at the end of the axis.
     var yAxis = d3.svg.axis().scale(yScale).orient("left")
       .outerTickSize(0);          // Turn off the marks at the end of the axis.

     function render(data){

       xScale.domain([0, d3.max(data, function (d){ return d[xColumn]; })]);
       yScale.domain(       data.map( function (d){ return d[yColumn]; }));

       xAxisG.call(xAxis);
       yAxisG.call(yAxis);

       var bars = g.selectAll("rect").data(data);
       bars.enter().append("rect")
         .attr("height", yScale.rangeBand());
       bars
         .attr("x", 0)
         .attr("y",     function (d){ return yScale(d[yColumn]); })
         .attr("width", function (d){ return xScale(d[xColumn]); });
       bars.exit().remove();
     }

     function type(d){
       d.population = +d.population;
       return d;
     }

     render(data)

     // ====================================================================


      // =====================================================================================
      // BAR CHART PRACTICE
      // =====================================================================================

      // var data = [4, 8, 15, 16, 23, 42];
      //
      // var x = d3.scale.linear()
      //     .domain([0, d3.max(data)])
      //     .range([0, 420]);
      //
      // d3.select(".chart")
      //   .selectAll("div")
      //     .data(data)
      //   .enter().append("div")
      //     .style("width", function(d) { return x(d) + "px"; })
      //     .text(function(d) { return d; })
      //     .text("Squats", "Deadlifts", "Bench");

      /*// =====================================================================================
      // D3 Chart
      // =====================================================================================*/
      // var data = {
      //   y: [1, 4, 6, 8, 10, 15],
      //   y0: [2, 5, 7, 9, 11, 16]
      // }
      //
      //
      // var n = 4, // number of layers
      //     m = 58, // number of samples per layer
      //     stack = d3.layout.stack(),
      //     layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); })),
      //     yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
      //     yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });
      //
      // var margin = {top: 40, right: 10, bottom: 20, left: 10},
      //     width = 960 - margin.left - margin.right,
      //     height = 500 - margin.top - margin.bottom;
      //
      // var x = d3.scale.ordinal()
      //     .domain(d3.range(m))
      //     .rangeRoundBands([0, width], .08);
      //
      // var y = d3.scale.linear()
      //     .domain([0, yStackMax])
      //     .range([height, 0]);
      //
      // var color = d3.scale.linear()
      //     .domain([0, n - 1])
      //     .range(["#aad", "#556"]);
      //
      // var xAxis = d3.svg.axis()
      //     .scale(x)
      //     .tickSize(0)
      //     .tickPadding(6)
      //     .orient("bottom");
      //
      // var svg = d3.select(".chart1").append("svg")
      //     .attr("width", width + margin.left + margin.right)
      //     .attr("height", height + margin.top + margin.bottom)
      //   .append("g")
      //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      //
      // var layer = svg.selectAll(".layer")
      //     .data(layers)
      //   .enter().append("g")
      //     .attr("class", "layer")
      //     .style("fill", function(d, i) { return color(i); });
      //
      // var rect = layer.selectAll("rect")
      //     .data(function(d) { return d; })
      //   .enter().append("rect")
      //     .attr("x", function(d) { return x(d.x); })
      //     .attr("y", height)
      //     .attr("width", x.rangeBand())
      //     .attr("height", 0);
      //
      // rect.transition()
      //     .delay(function(d, i) { return i * 10; })
      //     .attr("y", function(d) { return y(d.y0 + d.y); })
      //     .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });
      //
      // svg.append("g")
      //     .attr("class", "x axis")
      //     .attr("transform", "translate(0," + height + ")")
      //     .call(xAxis);
      //
      // d3.selectAll("input").on("change", change);
      //
      // var timeout = setTimeout(function() {
      //   d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
      // }, 2000);
      //
      // function change() {
      //   clearTimeout(timeout);
      //   if (this.value === "grouped") transitionGrouped();
      //   else transitionStacked();
      // }
      //
      // function transitionGrouped() {
      //   y.domain([0, yGroupMax]);
      //
      //   rect.transition()
      //       .duration(500)
      //       .delay(function(d, i) { return i * 10; })
      //       .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
      //       .attr("width", x.rangeBand() / n)
      //     .transition()
      //       .attr("y", function(d) { return y(d.y); })
      //       .attr("height", function(d) { return height - y(d.y); });
      // }
      //
      // function transitionStacked() {
      //   y.domain([0, yStackMax]);
      //
      //   rect.transition()
      //       .duration(500)
      //       .delay(function(d, i) { return i * 10; })
      //       .attr("y", function(d) { return y(d.y0 + d.y); })
      //       .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
      //     .transition()
      //       .attr("x", function(d) { return x(d.x); })
      //       .attr("width", x.rangeBand());
      // }
      //
      // // Inspired by Lee Byron's test data generator.
      // function bumpLayer(n, o) {
      //
      //   function bump(a) {
      //     var x = 1 / (.1 + Math.random()),
      //         y = 2 * Math.random() - .5,
      //         z = 10 / (.1 + Math.random());
      //     for (var i = 0; i < n; i++) {
      //       var w = (i / n - y) * z;
      //       a[i] += x * Math.exp(-w * w);
      //     }
      //   }
      //
      //   var a = [], i;
      //   for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
      //   for (i = 0; i < 5; ++i) bump(a);
      //   return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
      // }
      // =====================================================================================*/
      // D3 Chart
      // =====================================================================================*/

    }


    function Goals() {
      console.log('Goals Controller reporting for duty!')

      var Goals = this;

      Goals.accent= {}

      Goals.setAccent = function () {
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

        // this.navbar = function () {
        //   if (screen.width < 778) {
        //     'background-color': '#1f0971'
        //   }
        // }
        //change background-color to blue when screen collapses??????
    };



// ng route =========================================================================

angular.module('App').config(function ($routeProvider) {

  $routeProvider.when('/', {
    templateUrl : '/views/home.html'
  });

  $routeProvider.when('/home', {
    templateUrl : '/views/home.html'
  });

  $routeProvider.when('/dashboard', {
    templateUrl : '/views/dashboard.html',
  });
  $routeProvider.when('/habits', {
    templateUrl : '/views/habits.html'
  });
  $routeProvider.when('/lists', {
    templateUrl: '/views/lists.html'
  });

  //default route
  $routeProvider
    .otherwise({
      redirectTo : '/home'
    });
});

// angular.module('App')
//   .controller('NavCtrl', [
//   '$scope', '$location', NavCtrl])
//   function NavCtrl ( $scope, $location) {
//     var nc = this
//
//     $scope.$on('$routeChangeSuccess', function () {
//       nc.locationPath = $location.path();
//       console.log('locationPath: ' + nc.locationPath );
//     });
//   }

/*// =====================================================================================
// D3 Chart
// =====================================================================================*/
// ==================================================== git: alsdean/smart-compost
//
//
