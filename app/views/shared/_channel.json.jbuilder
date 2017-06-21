# Called from User#show, _message
json.merge! channel.attributes
json.author do
  json.partial! 'shared/member.json.jbuilder', user: channel.author
end

# Sets members
json.members do
  channel.members.each do |member|
    json.set! member.id do
      json.partial! 'shared/member.json.jbuilder', user: member
    end
  end
end

# Set channel tags for user options
json.channel_tags do
  channel.channel_tags.each do |channel_tag|
    json.set! channel_tag.info, true
  end
end
