var winnerButton = document.querySelector('#button__mentors2')

//need to addEventListener the second button
	winnerButton.addEventListener('click', function(event) {

	var winnerButton = document.querySelector('#button__mentors2')
	var winnerName = event.target.innerText
	var winnerId = winnerButton.dataset.key //

	var loserButton = document.querySelector('#button__mentors1')
	var loserName = loserButton.innerText
	var loserId = loserButton.dataset.key

	var question = document.querySelector('#question')
	var category = question.dataset.key

	var xhr = new XMLHttpRequest();
	var url = `/results?winnerName=${winnerName}&winnerId=${winnerId}&loserId=${loserId}&loserName=${loserName}&category=${category}`

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText)
		}

	}

  xhr.open('GET', url); //open GET request
  xhr.send(); // send request
});

var winnerButton = document.querySelector('#button__mentors1')

	winnerButton.addEventListener('click', function(event) {

	var winnerName = event.target.innerText
	var winnerId = winnerButton.dataset.key //

	var loserButton = document.querySelector('#button__mentors2')
	var loserName = loserButton.innerText
	var loserId = loserButton.dataset.key

	var question = document.querySelector('#question')
	var category = question.dataset.key

	var xhr = new XMLHttpRequest();
	var url = `/results?winnerName=${winnerName}&winnerId=${winnerId}&loserId=${loserId}&loserName=${loserName}&category=${category}`

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText)
		}

	}

  xhr.open('GET', url); //open GET request
  xhr.send(); // send request
});

