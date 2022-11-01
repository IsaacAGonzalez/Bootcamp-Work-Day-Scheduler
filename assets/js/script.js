const DateTime = luxon.DateTime; // Luxon library for date time tools
const container = $('.container'); // HTML container where our list will go
const dayElement = $('#currentDay'); //Current Day HTML Element

// Setting the Current Date at the top of the page and refreshing every minute
setInterval(
  dayElement.text(
    DateTime.now().toLocaleString(DateTime.DATE_HUGE)
  ),
  60000
);

let time = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
let timeFormatted = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);

[currentHour, currentMinute] = time.split(':');

let hours = [...Array(24).keys()]; // 24hr array

function createTable() {
  for (let i = 0; i < hours.length; i++) {
    let row = $('<div>');
    row.attr('hour', i);
    row.addClass('time-block row');

    let hourSection = $('<div>');
    hourSection.addClass('col-1 hour');
    hourSection.text(DateTime.now().set({hour: i, minute: 0}).toLocaleString(DateTime.TIME_SIMPLE));
    
    let descriptionSection = $('<input>');
    descriptionSection.addClass('col-10 description');

    let saveSection = $('<div>');
    saveSection.addClass('col-1 saveBtn');

    let saveIcon = $('<i>')
    saveIcon.addClass('fas fa-save');

    if (i < currentHour) {
      descriptionSection.addClass('past')
    } else if (i == currentHour) {
      descriptionSection.addClass('present')
    } else {
      descriptionSection.addClass('future')
    }

    saveSection.append(saveIcon);
    row.append(hourSection);
    row.append(descriptionSection);
    row.append(saveSection);
    container.append(row);
  }


}

createTable();

save = container.children('.saveBtn');
console.log(save);