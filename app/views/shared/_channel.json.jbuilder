json.merge! channel.attributes
json.author do
  json.partial! 'shared/member.json.jbuilder', user: channel.author
end
json.members do
  channel.members.each do |member|
    json.set! member.id do
      json.partial! 'shared/member.json.jbuilder', user: member
    end
  end
end
