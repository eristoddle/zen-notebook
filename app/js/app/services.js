//TODO: Modularize how markup is built
//Configuration will load new menu items from plugins
//handle clicks
zenNotebook.factory('menuFactory', ['$rootScope', 'fileDialog', 'notebookFactory', function ($rootScope, fileDialog, notebookFactory) {
    return {
        message: null,
        menus: {
            foot: {
                about: {
                    heading: 'About Zen Notebook',
                    body: '<p>Zen Notebook is a minimalist notebook inspired by <a rel="external" href="http://github.com/tholman/zenpen">Zenpen</a> and ' +
                        '<a href="http://rednotebook.sourceforge.net" target="_blank">RedNotebook</a></p>' +
                        '<p>Created by <a href="http://stephanmiller.com" target="_blank">Stephan Miller</a></p>' +
                        '<p><a href="http://zen-notebook.com">Home Page</a></p>'
                },
                settings: {
                    heading: 'Configuration',
                    body: '//TODO: Configuration Options'
                },
                notebook: {
                    heading: 'Notebooks',
                    buttons: [
                        {title: 'Open Notebook', class: 'open', sub: 'nw', action: 'open'},
                        {title: 'Save Notebook', class: 'save', sub: 'nw', action: 'save'},
                        {title: 'Import Red Notebook', class: 'import', sub: 'nw', action: 'import'}
                    ]
                }
            },
            nav: [
                {title: 'Theme', action: 'theme', class: 'icon-yingyang', sub: 'global'},
                {title: 'Calendar', action: 'calendar', class: 'icon-calendar', sub: 'left'},
                {title: 'Notebook', action: 'notebook', class: 'icon-repo', sub: 'foot'},
                {title: 'Settings', action: 'settings', class: 'icon-gear', sub: 'foot'},
                {title: 'About', action: 'about', class: 'icon-info', sub: 'foot'},
                {title: 'Minimize', action: 'minimize', class: 'icon-resize2', sub: 'nw'},
                {title: 'Maximize', action: 'maximize', class: 'icon-resize', sub: 'nw'},
                {title: 'Close', action: 'close', class: 'icon-switch', sub: 'nw'}
            ]
        },
        publishClick: function (message) {
            this.message = message;
            if (message.sub == 'left') {
                $rootScope.$broadcast('toggleLeft');
            }
            if (message.sub == 'foot') {
                $rootScope.$broadcast('toggleFoot');
            }
            if (message.sub == 'nw') {
                if (message.action == 'open') {
                    fileDialog.openFile(
                        function (filename) {
                            notebookFactory.loadNotebook(filename);
                        },
                        false,
                        '.json'
                    );
                }
                if (message.action == 'save') {
                    fileDialog.saveAs(
                        function (filename) {
                            notebookFactory.saveNotebook(filename);
                        },
                        'notebook.json',
                        '.json'
                    );
                }
                if (message.action == 'import') {
                    fileDialog.openDir(function (dir) {
                        notebookFactory.importRedNotebook(dir);
                    });
                }
                if (message.action == 'maximize') {
                    win.toggleFullscreen();
                }
                if (message.action == 'minimize') {
                    win.minimize();
                }
                if (message.action == 'close') {
                    notebookFactory.autoSaveNotebook();
                    win.close();
                }
                if (message.action == 'count') {
                    return notebookFactory.countWords(notebookFactory.getActiveContent())
                }
            }
            if (message.sub == 'global') {
                $rootScope.$broadcast('global');
            }
        },
        subscribeClick: function () {
            var message = this.message;
            this.message = null;
            return message;
        }
    };
}]);