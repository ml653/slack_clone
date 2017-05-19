json.merge! user.attributes
json.channels do
  json.array! user.channels do |channel|
    json.partial! 'shared/channel.json.jbuilder', channel: channel
  end
end
