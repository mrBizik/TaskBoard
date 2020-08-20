Ext.define('TaskBoard.view.board.task.TaskView', {
    extend: 'Ext.panel.Panel',
    xtype: 'taskview',
    requires: [
        'Ext.XTemplate',
    ],
    cls: 'taskview',
    // title: 'Info',
    config: {
        task: null,
    },
    tpl: new Ext.XTemplate(
        '<div class="task-wrap">',
        '<div class="task-base-info">',
        '<div class="task-id">{numberLabel}: {task.id}</div>',
        '<div class="task-name">{task.name}</div>',
        '<div class="task-status">{statusLabel}: {task.status}</div>',
        '<div class="task-date">{dateCreatedLabel}: {task.dateString}</div>',
        '</div>',
        '<div class="task-status-info">',
        '<div class="task-user-name">{ownerLabel}: {task.firstName} {task.secondName}</div>',
        '<div class="task-priority">{priorityLabel}: {task.priority}</div>',
        '</div>',
        '</div>',
    ),
    updateTask: function(newtask, oldtask) {
        this.setData({
            task: newtask.getData(),
            numberLabel: this.numberLabel,
            statusLabel: this.statusLabel,
            dateCreatedLabel: this.dateCreatedLabel,
            ownerLabel: this.ownerLabel,
            priorityLabel: this.priorityLabel,
        });
    }
});