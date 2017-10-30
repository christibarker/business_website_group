require 'sinatra'

require 'pony'

get '/' do
	erb :home
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
	@email = params[:email]
	@message = params[:message]
	Pony.mail(to: @email, from: @from_email, subject: 'Contact Us', body: 'Hello there.')
	erb :thanks
end
	
