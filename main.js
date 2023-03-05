const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const validator = require('validator');

let ventana;

// Create window
function createWindow() {
    ventana = new BrowserWindow({
        width: 640, 
        height: 360, 
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });

    ventana.loadFile('index.html');
}



let ventana2;
// Create window
function createWindow2() {
    ventana2 = new BrowserWindow({
        width: 640, 
        height: 360, 
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });

    ventana2.loadFile('segundo.html');
}

ipcMain.on('registroValido', function(event, args) {
    var user = args[0];
    var password = args[1];
    var email = args[2];
    var isValidEmail = validator.isEmail(email);
    var isValidUsername = user.length > 6;

    if (isValidEmail && isValidUsername) {
        createWindow2();
        ventana2.webContents.on('did-finish-load', function() {
            ventana2.webContents.send('inicioCorrecto', 'Bienvenido ' + user);
        });
    }

    if (!isValidEmail) {
        ventana.webContents.send("invalidEmail", " ");
    }

    if (!isValidUsername) {
        ventana.webContents.send("invalidUsername", " ");
    }
});

app.whenReady().then(createWindow);