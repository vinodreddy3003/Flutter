function setReminder() {
    var day = document.getElementById("day").value;
    var time = document.getElementById("time").value;
    var activity = document.getElementById("activity").value;

    var selectedDate = new Date();
    selectedDate.setDate(selectedDate.getDate() + (day - selectedDate.getDay() + 7) % 7);
    selectedDate.setHours(time.split(":")[0]);
    selectedDate.setMinutes(time.split(":")[1]);

    var currentTime = new Date();
    var timeDifference = selectedDate.getTime() - currentTime.getTime();

    if (timeDifference < 0) {
        selectedDate.setDate(selectedDate.getDate() + 7);
        timeDifference = selectedDate.getTime() - currentTime.getTime();
    }

    setTimeout(function() {
        alert("It's time for " + activity);
    }, timeDifference);
}
