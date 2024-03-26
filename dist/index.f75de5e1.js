AOS.init();
const eventDate = new Date("Feb 25, 2025 19:00:00");
const eventTimeStamp = eventDate.getTime();
const countHours = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();
    const distanceToEvent = eventTimeStamp - currentTimeStamp;
    const dayInMs = 86400000;
    const hourInMs = 3600000;
    const minuteInMs = 60000;
    const daysToEvent = Math.floor(distanceToEvent / dayInMs);
    const hoursToEvent = Math.floor(distanceToEvent % dayInMs / hourInMs);
    const minutesToEvent = Math.floor(distanceToEvent % hourInMs / minuteInMs);
    const secondsToEvent = Math.floor(distanceToEvent % minuteInMs / 1000);
    console.log(daysToEvent);
    console.log(hoursToEvent);
    console.log(minutesToEvent);
    console.log(secondsToEvent);
    document.getElementById("counter").innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;
    if (distanceToEvent < 0) {
        clearInterval(countHours);
        document.getElementById("counter").innerHTML = "Event Expired";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
