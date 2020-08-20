Ext.define('TaskBoard.view.board.column.ColumnController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.boardcolumncontroller',

    onSelectRecord: function(dataview, record) {
        const me = this;
        const view = me.getView();
        view.fireEvent('select', view, record);
    },

    onTaskDrop: function(dataview, data) {
        const store = dataview.getStore();
        const status = store.getStatus();
        data.records.forEach(record => record.set('status', status));
    },
  });