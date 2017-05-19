json.merge! channel.attributes
json.members do
  json.array! channel.members do |member|
    json.partial! 'shared/member.json.jbuilder', user: member
  end
end
