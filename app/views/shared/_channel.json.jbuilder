json.merge! channel.attributes
json.members do
  channel.members.each do |member|
    json.set! member.id do
      json.partial! 'shared/member.json.jbuilder', user: member
    end
  end
end
