Ext.define('TaskBoard.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  // layout: 'border',
  items: [
    // {
    //   xtype: 'headerview',
    //   reference: 'headerview',
    //   region: 'north',
    //   docked: 'top',
    //   weight: -2
    // },
    // {
    //   xtype: 'boardview',
    //   reference: 'boardview',
    //   region: 'center',
    //   width: '100%',
    //   weight: -1,
    //   listeners: {
    //     select: 'onTaskSelect',
    //   },
    // },
    // {
    //   xtype: 'footerview',
    //   reference: 'footerview',
    //   region: 'south',
    //   docked: 'bottom',
    //   weight: -2
    // },

    {
      xtype: 'panel',
      title: 'Plan',
      cls: 'boardview-task-group',
      region: 'center',
      weight: -1,
      items: [
          {
              xtype: 'dataview',
              height: '100%',
              itemTpl: new Ext.XTemplate(
                  '<div class="boardview-item-task-wrap">',
                  '<div class="item-task-base-info">',
                  '<div class="item-task-id">{id}</div>',
                  '<div class="item-task-name">{name}</div>',
                  '</div>',
                  '<div class="item-task-status-info">',
                  '<div class="item-task-user-name">Owner: {firstName} {secondName}</div>',
                  '<div class="item-task-priority">Priority: {priority}</div>',
                  '</div>',
                  '</div>',
              ),
              bind: {
                  store: '{planTasks}',
              }
          },
      ]
  },

  ]
});