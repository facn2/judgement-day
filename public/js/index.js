var winnerButton = document.querySelector('#button__mentors2')

	winnerButton.addEventListener('click', function(event) {

	var winnerName = event.target.innerText
	var winnerId = winnerButton.dataset.key 

	var loserButton = document.querySelector('#button__mentors1')
	var loserName = loserButton.innerText
	var loserId = loserButton.dataset.key

	var question = document.querySelector('#question')
	var category = question.dataset.key

	var url = `/results?winnerName=${winnerName}&winnerId=${winnerId}&loserId=${loserId}&loserName=${loserName}&category=${category}`
	window.location = url

})

var winnerButton = document.querySelector('#button__mentors1')

	winnerButton.addEventListener('click', function(event) {

	var winnerName = event.target.innerText
	var winnerId = winnerButton.dataset.key

	var loserButton = document.querySelector('#button__mentors2')
	var loserName = loserButton.innerText
	var loserId = loserButton.dataset.key

	var question = document.querySelector('#question')
	var category = question.dataset.key

	var url = `/results?winnerName=${winnerName}&winnerId=${winnerId}&loserId=${loserId}&loserName=${loserName}&category=${category}`
	window.location = url
});