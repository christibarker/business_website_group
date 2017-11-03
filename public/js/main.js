

 	if (Cookies.get('cartCount') === undefined) {
		Cookies.set('cartCount', 0);
	} //if

	class Cart {
	constructor(){
		this.cart = Cookies.get('cartCount');
		this.service_one = 0;
		this.service_two = 0 ;
		this.service_three = 0;
		this.service_four = 0;
		this.services = [
			{name: 'penguin_purchase', quantity_added: 0, cost_per: 2.45},
			{name: 'penguin_purchase', quantity_added: 0, cost_per: 2.45},
			{name: 'penguin_purchase', quantity_added: 0, cost_per: 2.45},
			{name: 'penguin_purchase', quantity_added: 0, cost_per: 2.45}
		];
		this.serviceArray = ['services_1', 'services_2', 'services_3', 'services_4']
		}

		addMoney(service, cost){
			$(`'#${this.serviceArray[service]}_cost'`).val






			this.cart =
		}//addMoney

		subMoney(){
			this.cart =
		}//subMoney

		updateTotals(){

			$('#estimate').text('$' + );
		}//updateTotals

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