require 'sinatra'

get '/' do
	erb :home
end

get '/contact_us' do
	erb :contact_us
end
	
post '/thanks' do
	p params
	@email = params[:email]
	@message = params[:message]
	erb :thanks
end
	