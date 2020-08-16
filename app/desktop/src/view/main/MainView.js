Ext.define('TaskBoard.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  layout: 'border',
  items: [
    {
      xtype: 'headerview',
      reference: 'headerview',
      region: 'north',
      docked: 'top',
      weight: -2
    },
    {
      xtype: 'contentview',
      region: 'center',
      weight: -1,
      items: [
        {
          xtype: 'boardcolumn',
          bind: {
            store: '{planTasks}',
          },
          listeners: {
            select: 'onSelectTask',
          },
        },
      ],
    },
    {
      xtype: 'footerview',
      reference: 'footerview',
      region: 'south',
      docked: 'top',
      weight: -2
    },
  ],
});