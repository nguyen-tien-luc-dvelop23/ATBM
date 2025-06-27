const { app, BrowserWindow } = require('electron');
function create(){ 
  const w=new BrowserWindow({width:800,height:600,webPreferences:{nodeIntegration:true}});
  w.loadFile('index.html');
}
app.whenReady().then(create);
