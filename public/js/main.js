
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

};



let cart = new Cart();

	// ********add service and price to page******

	$('#services_1').on('click', function(){
			
			});

	$('#services_2').on('click', function(){
			
			});

	$('#services_3').on('click', function(){
				$('#shopping_three').text('hi 3');
				$('#cost').text('$' + 900);
			});

	$('#services_4').on('click', function(){
				$('#shopping_four').text('hi 4');
				$('#cost').text('$' + 300,000,000);
			});

	// ******subtract service and price to page**********
	$('.r_services_1').on('click', function(){
				$('#shopping').text('hi');
				$('#cost').text('');
			});

	$('.r_services_2').on('click', function(){
				$('#shopping_two').text('hi 2');
				$('#cost').text('');
			});

	$('.r_services_3').on('click', function(){
				$('#shopping_three').text('hi 3');
				$('#cost').text('');
			});

	$('.r_services_4').on('click', function(){
				$('#shopping_four').text('hi 4');
				$('#cost').text('');
			});



	var cost = Cost.new()


});