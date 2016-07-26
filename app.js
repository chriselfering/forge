angular.module('App', []);

angular.module('App')
  .controller('Goals', Goals)
    function Goals() {
      console.log('Goals Controller reporting for duty!')

      var Goals = this;

      this.accent= {}

      this.setAccent = function () {
        this.accent = {
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
