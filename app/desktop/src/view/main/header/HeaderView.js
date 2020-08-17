Ext.define('TaskBoard.view.main.header.HeaderView', {
  extend: 'Ext.toolbar.Toolbar',
  height: 50,
  xtype: 'headerview',
  cls: 'headerview',
  defaults: {
    ui: 'toolbutton-toolbar',
    handler: 'onToolButtonClicked'
  },
  items: [],
});
