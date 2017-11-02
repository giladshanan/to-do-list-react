const Now = () => {

  var currentDate = new Date();
  var dateTime = (currentDate.getMonth()+1)  + "/"
              + currentDate.getDate() + "/"
              + currentDate.getFullYear() + " @ "
              + currentDate.getHours() + ":"
              + currentDate.getMinutes() + ":"
              + currentDate.getSeconds();
  return dateTime
}

export default Now;