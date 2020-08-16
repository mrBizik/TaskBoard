Ext.define('TaskBoard.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  onSelectTask: function(view, record) {
    console.log(record);
  },
});