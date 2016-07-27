angular.module('App', ['ngRoute'])

angular.module('App')
  .controller('Goals', Goals)
  .controller('ChartCtrl', ChartCtrl)
  .factory('StrFactory', StrFactory)
  //
  function ChartCtrl(StrFactory) {
    console.log('Chart Controller reporting for duty!')

    var ChartCtrl = this;
  }

// ===============================================================
// Strength Factory
// ===============================================================

ChartCtrl.$inject = ['StrFactory']

function StrFactory () {
  console.log('Strength Factory reporting for duty!')

  var str = this;

  // str.name = ''
  // str.goal = 0
  // str.current = 0
  // str.byWhen = 0;

  str.goalArray = [];

  function StrGoal (name, goal, current, byWhen) { //constructor
    this.name     = name;
    this.goal     = goal;
    this.current  = current;
    this.byWhen   = byWhen
  }

  str.addGoal = function(name, goal, current, byWhen) {
    console.log('Congratulations on submitting a goal!');

var newStrGoal = new StrGoal (name, goal, current, byWhen)
str.goalArray.push(newStrGoal)

console.log("new object array", str.goalArray)


  }
return str;
}

function ChartCtrl (StrFactory) {
  console.log('ChartCtrl ready!')


// =================================================================================
// Chart 1
// ==============================================================================

      var data = StrFactory.goalArray;

      var outerWidth = 500;
      var outerHeight = 250;
      var margin = { left: 200, top: 0, right: 0, bottom: 30 };
      var barPadding = 0.2;

      var xColumn = "current";
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

// ======================================================================
// Chart 2
// =======================================================================

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
}
//  ====================================================================
Goals.$inject = ['StrFactory']
    function Goals(StrFactory) {
      console.log('Goals Controller reporting for duty!')

      var Goals = this;

      Goals.addGoal = function(name, goal, current, byWhen) {
        StrFactory.addGoal(name, goal, current, byWhen)
        Goals.name=''  //clear the form value for the input
        Goals.goal=''
        Goals.current=''
        Goals.byWhen=''
      }


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
