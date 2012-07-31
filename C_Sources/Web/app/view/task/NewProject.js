Ext.define("Igor.view.task.NewProject", {
    extend: 'Ext.form.Panel',
    xtype: 'newProjectForm',
    id: 'newProjectForm',

    config: {
        title: 'New Project',
        layout: 'vbox',

        items: [
            {
                xtype: 'fieldset',
                title: 'New Project',
                instructions: 'Enter Required Information.',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Select Member',
                        name: 'members',
                        valueField: 'userid',
                        displayField: 'name',
                        store: {
                            data: [
                                { userid: '1', name: 'Hieu LE'},
                                { course: '2', name: 'Phuc NGUYEN'},
                                { userid: '3', name: 'Tu NGUYEN'}
                            ]
                        }
                    }
                ]
            },
            

            // Create a docked bottom toolbar which will contain buttons to trigger various functions in our formpanel.
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        text: 'Save',
                        ui: 'confirm',
                        scope: this,
                        handler: function() {
                            var form = this.form;

                            // Mask the form
                            form.setMasked({
                                xtype: 'loadmask',
                                message: 'Saving...'
                            });

                            // Put it inside a timeout so it feels like it is going to a server.
                            setTimeout(function() {
                                if (form.user) {
                                    // Call the updateRecord method of formpanel with the user record instance. This will update the user record
                                    // with the latest values.
                                    form.updateRecord(form.user, true);
                                }

                                // Unmask the formpanel
                                form.setMasked(false);
                            }, 1000);
                        }
                    },

                    { xtype: 'spacer' },

                    // Here we add a reset button which will reset all fields within the form panel back to their original value
                    {
                        text: 'Reset',

                        handler: function() {
                            // Call the form.reset method
                            Ext.getCmp('newProjectForm').reset();

                        }
                    }
                ]
            }
        ]
    }
});