require 'sinatra'

get '/' do
	erb :home
end

get '/about' do
	erb	:about
end

get '/gallery'
	erb :gallery
end

get '/contact' do
	erb :contact
end
	
	