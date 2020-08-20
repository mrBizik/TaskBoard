Ext.define('TaskBoard.view.board.column.ColumnView', {
    extend: 'Ext.panel.Panel',
    xtype: 'boardcolumn',
    cls: 'board-columnview',
    controller: 'boardcolumncontroller',
    requires: [
        'Ext.XTemplate',
    ],
    config: {
        store: null,
    },

    initConfig: function(config) {
        const me = this;
        config = Ext.apply(config, {
            // TODO: не очень проверка, т.к. с config.store может быть конфиг стора
            title: config.store ? config.store.getStatus() : '',
            items: [
                me.createDataViewConfig(config.store, config.selectionModel),
            ],
        });
        me.callParent([config]);
    },

    updateStore: function(newStore, oldStore) {
        const me = this;
        me.getTaskView().setStore(newStore);
        me.setTitle(newStore.getStatus());
    },

    deselectAll: function() {
        const me = this;
        const taskView = me.getTaskView();
        taskView.getSelectionModel().deselectAll();
    },

    privates: {
        getTaskView: function() {
            return this.getReferences()['taskview'];
        },

        createDataViewConfig: function(store, selectionModel) {
            return {
                xtype: 'dataview',
                height: '100%',
                reference: 'taskview',
                plugins: ['boardcolumndragdrop'],
                itemTpl: new Ext.XTemplate(
                    '<div class="boardview-item-task-wrap task-priority-{priorityType}">',
                    '<div class="item-task-base-info">',
                    '<div class="item-task-id">{id}</div>',
                    '<div class="item-task-name">{name}</div>',
                    '</div>',
                    '</div>',
                ),
                selectedItemCls: 'task-selected',
                store: store,
                listeners: {
                    select: 'onSelectRecord',
                    taskdrop: 'onTaskDrop'
                },
            };
        },
    }
});
