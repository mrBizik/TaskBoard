/**
 * Стор фильтрующий тикеты по статусу
 */
Ext.define('TaskBoard.store.StatusTaskStore', {
    extend: 'Ext.data.ChainedStore',
    alias: 'store.statustaskstore',
    model: 'TestTask.model.Task',
    config: {
        status: null,
    },
    sorters: [
        {
            property: 'firstName',
            direction: 'ASC'
        },
        {
            sorterFn: function(record1, record2) {
                const priority1 = record1.get('priorityOrder');
                const priority2 = record2.get('priorityOrder');
                return priority1 > priority2 ? 1 : (priority1 === priority2) ? 0 : -1;
            },
            direction: 'ASC'
        }
    ],

    initConfig: function(config) {
        const me = this;
        const updatedConfig = Ext.apply(
            config,
            {
                filters: [
                    me.createDefaultStatusFilterConfig(config.status),
                ],
            }
        );
        return me.callParent([updatedConfig]);
    },

    updateStatus: function(newStatus, oldStatus) {
        const me = this;
        me.removeFilter('defaultStatusFilter');
        const filterConfig = me.createDefaultStatusFilterConfig(newStatus);
        me.addFilter(filterConfig);
        me.fireEvent('statuschange', me, newStatus, oldStatus);
    },

    privates: {
        createDefaultStatusFilterConfig: function(status) {
            if (Ext.isEmpty(status)) {
                Ext.log({
                    msg: 'Status must be defined',
                    level: 'error',
                });
            }

            return {
                name: 'defaultStatusFilter',
                property: 'status',
                value: status,
            };
        }
    }
});
