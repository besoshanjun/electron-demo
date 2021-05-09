const {app, BrowserWindow, Notification} = require('electron')


// app.on('ready', () => {
//   win = new BrowserWindow()
//   win.loadURL('https://www.baidu.com')
// })

function createWindow () {
  const win = new BrowserWindow()

  win.loadFile('index.html')
}


function showNotification (){
  const notification = {
    title: 'Basic Notification',
    body: 'Notification from the Main process'
  }
  new Notification(notification).show()
}


app.whenReady().then(createWindow).then(showNotification)