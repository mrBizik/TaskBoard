Ext.define('TaskBoard.view.board.task.TaskView', {
    extend: 'Ext.panel.Panel',
    xtype: 'taskview',
    requires: [
        'Ext.XTemplate',
    ],
    cls: 'taskview',
    config: {
        task: null,
    },
    tpl: new Ext.XTemplate(
        '<div class="task-wrap">',
            '<div class="task-base-info">',
                '<div class="task-id"><span class="info-label">{numberLabel}:</span> {task.id}</div>',
                '<div class="task-name">{task.name}</div>',
            '</div>',
            '<div class="task-more-info">',
                '<div class="task-status-priority-info">',
                    '<div class="task-status"><span class="info-label">{statusLabel}:</span> {task.status}</div>',
                    '<div class="task-priority"><span class="info-label">{priorityLabel}:</span> {task.priority}</div>',
                '</div>',
                '<div class="task-user-date-info">',
                    '<div class="task-date"><span class="info-label">{dateCreatedLabel}:</span> {[Ext.Date.format(values.task.date, "Y-m-d H:i")]}</div>',
                    '<div class="task-user-name"><span class="info-label">{ownerLabel}:</span> {task.firstName} {task.secondName}</div>',
                '</div>',
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