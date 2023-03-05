const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld(
    'comunicacion', 
    {
        registroValido: (datos) => ipcRenderer.send('registroValido', datos), 
        inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback),
        invalidEmail: (callback) => ipcRenderer.on('invalidEmail', callback), 
        invalidUsername: (callback) => ipcRenderer.on('invalidUsername', callback), 
        invalidPass: (callback) => ipcRenderer.on("invalidPass", callback), 
        invalidDOB: (callback) => ipcRenderer.on("invalidDOB", callback)
    }
);