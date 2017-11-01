var modal = document.getElementById('modal');
var span = document.getElementById('close');
var button = document.getElementById('submit_ppp');

span.onclick = function() {
    modal.style.display = 'none';
};

button.onclick = function() {
	modal.style.display = 'none';
};

function myFunction() {
    var modal = document.getElementById('modal');
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
};

setTimeout(function(){ modal.style.display = 'block'; }, 3000);