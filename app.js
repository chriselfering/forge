


angular.module('App', []);

angular.module('App')
  .controller('MainCtlr', mainCtlr)
    function mainCtlr() {
      console.log('Main Controller reporting for duty!')
    };

angular.module('App')
  .controller('StrCtrl', strCtrl)
    function strCtrl() {
      console.log('Strength Controller reporting for duty!')
    }

angular.module('App')
  .controller('SpdCtrl', spdCtrl)
    function spdCtrl() {
      console.log('Speed Controller reporting for duty!')
    }

angular.module('App')
  .controller('FinCtrl', finCtrl)
    function finCtrl() {
      console.log('Financial Controller reporting for duty!')
    }


    // bootstrap datepicker
    // $('.datepicker').datepicker();
