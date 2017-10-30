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

get '/contact' do
	erb :contact
end

get '/POST' do
	erb :thanks
end
	
post '/POST' do
	p params
	@to_email = kaco7777@gmail.com
	@from_email = params[:email]
	@message = params[:message]
	Pony.mail(to: @to_email, from: @from_email, subject: 'Contact Us', body: 'Hello there.')
	erb :thanks
end
	




	
	

