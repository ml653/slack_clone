# Called from SessionController#Create, UserController#Create, ApplicationController
json.merge! user.attributes
json.channels do
  user.channels.each do |channel|
    json.set! channel.id do
      json.partial! 'shared/channel.json.jbuilder', channel: channel
    end
  end
end
