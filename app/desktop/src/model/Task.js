Ext.define('TaskBoard.model.Task', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'TaskBoard.model',
    },
    fields: [
        {
            name: 'id',
            type: 'string',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'firstName',
            type: 'string',
        },
        {
            name: 'secondName',
            type: 'string',
        },
        {
            name: 'status',
            type: 'string',
        },
        {
            name: 'priority',
            type: 'string',
        },
        {
            name: 'date',
            type: 'date',
        },
        {
            name: 'priorityOrder',
            depends: 'priority',
            calculate: function(data) {
                const priorityOrder = ['MUST', 'SHOULD', 'COULD'];
                return priorityOrder.indexOf(data.priority);
            }
        },
        {
            name: 'dateString',
            depends: 'date',
            calculate: function(data) {
                return Ext.Date.format(data.date, 'Y-m-d H:i');
            }
        },
    ],
    validators: {
        id: 'presence',
        name: 'presence',
        status: [
            'presence',
            {
                type: 'inclusion',
                list: ['PLAN', 'IN PROGRESS', 'TESTING', 'DONE'],
            },
        ],
        priority: {
            type: 'inclusion',
            list: ['MUST', 'SHOULD', 'COULD'],
        },
    },
});