const {app,BrowserWindow} = require('electron');
createwindow = () => {
    const newapp = new BrowserWindow({
        width: 1200,
        height: 800,
        fullscreenable: false,
        resizable: false,
        webPreferences: {nodeIntegration: true},
    });
    newapp.loadFile('index.html');
}
app.whenReady().then(createwindow);

/*
const {app,BrowserWindow} = require('electron');
createwindow = () => {
    const newapp = new BrowserWindow({
        width: 1200,
        height: 800,
        fullscreenable: false,
        resizable: false,
        webPreferences: {nodeIntegration: true},
    });
    newapp.loadFile('index.html');
}
app.whenReady().then(createwindow);
const {app,BrowserWindow} = require('electron');
createwindow = () => {
    const newapp = new BrowserWindow({
        width: 1200,
        height: 800,
        fullscreenable: false,
        resizable: false,
        webPreferences: {nodeIntegration: true},
    });
    newapp.loadFile('index.html');
}
app.whenReady().then(createwindow);
*/
