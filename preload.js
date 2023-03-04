const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld(
    'comunicacion', 
    {
        registroValido: (datos) => ipcRenderer.send('registroValido', datos), 
        inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback),
    }
);