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

json.channel_tags({})
# Set channel tags for user options
json.channel_tags do
  channel.tags_by_user(current_user.id).each do |channel_tag|
    json.set! channel_tag.info, channel_tag.id
  end
end
