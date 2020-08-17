Ext.define('TaskBoard.view.board.column.plugin.DragDrop', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.boardcolumndragdrop',
    requires: [
        'Ext.dd.DragZone',
        'Ext.dd.DropZone'
    ],

    init: function(dataview, config) {
        const me = this;
        me.dataview = dataview;
        me.itemSelector = me.dataview.itemSelector;
        dataview.on('render', me.onRender, me);
    },

    privates: {
        onRender: function() {
            const me = this;
            const dragConfig = {
                dvDraggable: me,
                dataview: me.dataview,
                getDragData: me.getDragData,
            };
            const dropConfig = {
                getTargetFromEvent: (e) => me.getTargetFromDropEvent(e, me.dataview),
                onNodeDrop: (target, dd, e, data) => me.onNodeDrop(data) || true,
            };

            me.dragZone = Ext.create('Ext.dd.DragZone', me.dataview.getEl(), dragConfig);
            me.dropZone = Ext.create('Ext.dd.DropZone', me.dataview.getEl(), dropConfig);
        },

        getTargetFromDropEvent: function(e, dataview) {
            return e.getTarget(`#${dataview.getId()}`);
        },

        getDragData: function(e) {
            const dataview = this.dataview;
            const selModel = dataview.getSelectionModel();
            const target = e.getTarget(this.dvDraggable.itemSelector);
            if (target) {
                e.preventDefault();
                if (!dataview.isSelected(target)) {
                    selModel.select(dataview.getRecord(target));
                }

                const selected = dataview.getSelectedNodes();
                return {
                    copy: true,
                    nodes: selected,
                    records: selModel.getSelection(),
                    item: true,
                    single: true,
                    ddel: target,
                };
            }

            return false;
        },

        onNodeDrop: function(data) {
            this.dataview.fireEvent('tiketdrop', this.dataview, data);
        },
    }
});