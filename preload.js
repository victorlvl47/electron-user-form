const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld(
    'comunicacion', 
    {
        registroValido: (datos) => ipcRenderer.send('registroValido', datos), 
        inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback), 
        validateEmail: (datos) => ipcRenderer.send('validateEmail', datos), 
        validEmail: (callback) => ipcRenderer.on('validEmail', callback)
    }
);