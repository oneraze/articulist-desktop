const { BrowserWindow } = require('electron').remote

$(document).ready(function() {
    var wind = BrowserWindow.getFocusedWindow();
    if (wind.isMaximized()) {
        $("#titlebar-button-restore").html('<i class="bi bi-fullscreen-exit"></i>')
    } else {
        $("#titlebar-button-restore").html('<i class="bi bi-fullscreen"></i>')
    }

    $("#titlebar-button-minimize").on("click", function (e) {
        var window = BrowserWindow.getFocusedWindow();
        window.minimize();
    }); 

    $("#titlebar-button-restore").on("click", function (e) {
        var window = BrowserWindow.getFocusedWindow();
        if (window.isMaximized()) {
            $("#titlebar-button-restore").html('<i class="bi bi-fullscreen"></i>')
            window.restore()
        } else {
            $("#titlebar-button-restore").html('<i class="bi bi-fullscreen-exit"></i>')
            window.maximize();
        }
    }); 

    $("#titlebar-button-close").on("click", function (e) {
        var window = BrowserWindow.getFocusedWindow();
        window.close();
    }); 
})