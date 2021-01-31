const { app, BrowserWindow, protocol, Menu, MenuItem } = require('electron')
const path = require('path');

let createWindow = () => {
    const window = new BrowserWindow({
        width: 1000,
        height: 800,
        minHeight: 500,
        minWidth: 700,
        frame: false,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true
        }
    })
    
    window.webContents.on('context-menu', (event, params) => {
        const menu = new Menu.buildFromTemplate([{
            type: 'separator',
        },
        {
            label: 'Cut',
            role: 'cut',
        }, {
            label: 'Copy',
            role: 'copy',
        }, {
            label: 'Paste',
            role: 'paste',
        }, {
            type: 'separator',
        }, {
            label: 'Select all',
            role: 'selectall',
        }])
        
        

        for (const suggestion of params.dictionarySuggestions) {
          menu.append(new MenuItem({
            label: suggestion,
            click: () => window.webContents.replaceMisspelling(suggestion)
          }))
        }

        

      
        if (params.misspelledWord) {
          menu.append(
            new MenuItem({
              label: 'Add to Dictionary',
              click: () => window.webContents.session.addWordToSpellCheckerDictionary(params.misspelledWord)
            })
          )
        }
      
        menu.popup()
    })

    window.loadFile('frontend/index.html')
    window.setMenuBarVisibility(false)
}


app.whenReady().then(createWindow)


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})