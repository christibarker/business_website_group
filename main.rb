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
	@name = params[:name]
	@phone = params[:phone]
	@m_m_name = params[:m_m_name]
	@service = params[:service]
	@message = params[:message]
	@body = %(name: #{@name}, phone: #{@phone}, email: #{@from_email}, m_m_name: #{@m_m_name}, service: #{@service}, message: #{@message})
	Pony.mail(to: @to_email, from: @from_email, subject: 'Contact Us', body: @body)
	erb :thanks
end


	
