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
            // TODO: не очень првоерка, т.к. с config.store может быть конфиг стора
            title: config.store ? config.store.getStatus() : '',
            items: [
                me.createDataViewConfig(config.store),
            ],
        });
        me.callParent([config]);
    },

    updateStore: function(newStore, oldStore) {
        const me = this;
        me.getTiketView().setStore(newStore);
        me.setTitle(newStore.getStatus());
    },

    privates: {
        getTiketView: function() {
            return this.getReferences()['tiketview'];
        },

        createDataViewConfig: function(store) {
            return {
                xtype: 'dataview',
                height: '100%',
                reference: 'tiketview',
                plugins: ['boardcolumndragdrop'],
                itemTpl: new Ext.XTemplate(
                    '<div class="boardview-item-task-wrap">',
                    '<div class="item-task-base-info">',
                    '<div class="item-task-id">{id}</div>',
                    '<div class="item-task-name">{name}</div>',
                    '</div>',
                    '</div>',
                ),
                store: store,
                listeners: {
                    select: 'onSelectRecord',
                    tiketdrop: 'onTiketDrop'
                },
            };
        },
    }
});
