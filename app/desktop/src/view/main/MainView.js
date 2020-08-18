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
      reference: 'contentview',
      region: 'center',
      weight: -1,
      items: [
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            align: 'stretch',
          },
          defaults: {
            flex: 1,
            margin: 5,
            scrollable: 'y',
            height: 600,
          },
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
            {
              xtype: 'boardcolumn',
              bind: {
                store: '{inProgressTasks}',
              },
              listeners: {
                select: 'onSelectTask',
              },
            },
            {
              xtype: 'boardcolumn',
              bind: {
                store: '{testingTasks}',
              },
              listeners: {
                select: 'onSelectTask',
              },
            },
            {
              xtype: 'boardcolumn',
              bind: {
                store: '{doneTasks}',
              },
              listeners: {
                select: 'onSelectTask',
              },
            },
          ],
        },
        {
          xtype: 'tiketview',
          bind: {
            tiket: '{selectedTask}',
          },
        }
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