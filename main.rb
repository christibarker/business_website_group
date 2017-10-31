require 'sinatra'

require 'pony'

get '/' do
	erb :home
end

get '/about' do
	erb	:about
end

get '/gallery' do
	erb :gallery
end

get '/services' do
	erb :services
end

get '/contact' do
	erb :contact
end

get '/thanks' do
	erb :thanks
end
	
post '/thanks' do
	p params
	@to_email = 'kaco7777@gmail.com'
	@from_email = params[:email]
	@message = params[:message]
	Pony.mail(to: @to_email, from: @from_email, subject: 'Contact Us', body: 'Hello there.')
	erb :thanks
end

get '/shopping_cart' do
	erb :shopping_cart
end
	
