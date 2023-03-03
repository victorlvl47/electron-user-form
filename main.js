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
    console.log(args);
    createWindow2();
    ventana2.webContents.on('did-finish-load', function() {
        ventana2.webContents.send('inicioCorrecto', 'Bienvenido');
    });
    // ventana.webContents.send('inicioCorrecto', 'Bienvenido');
});

ipcMain.on("validateEmail", function(event, args) {
    
    if (validator.isEmail('foo@bar.com')) {
        console.log("good email");
    } else {
        console.log("bad email");
    }
});

app.whenReady().then(createWindow);