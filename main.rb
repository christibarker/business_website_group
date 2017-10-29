require 'sinatra'

get '/' do
	erb :home
end

get '/gallery' do
	erb :gallery
end

get '/contact_us' do
	erb :contact_us
end

get '/thanks' do
	erb :thanks
end
	
post '/thanks' do
	p params
	@email = params[:email]
	@message = params[:message]
	erb :thanks
end
	
