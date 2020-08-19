Ext.define('TaskBoard.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  onSelectTask: function(view, record) {
    const me = this;
    me.getView().getBoard().items.items.forEach((column) => {
      if (view !== column) {
        column.deselectAll();
      }
    });
    me.getViewModel().set('selectedTask', record);
  },
});