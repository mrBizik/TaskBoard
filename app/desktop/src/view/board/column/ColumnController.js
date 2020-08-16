Ext.define('TaskBoard.view.board.column.ColumnController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.boardcolumncontroller',

    onSelectRecord: function(dataview, record) {
        const me = this;
        const view = me.getView();
        view.fireEvent('select', view, record);
    },
  });