const { app, BrowserWindow, protocol } = require('electron')
const path = require('path');

let createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true
        }
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