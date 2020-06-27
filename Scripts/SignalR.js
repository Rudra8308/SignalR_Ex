$.connection.hub.start()
    .done(function () { console.log("It Worked!") })
    .fail(function () { alert("Error!!!") });


alert("Alert! from SignalR.js")