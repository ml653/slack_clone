json.merge! channel.attributes
json.members do
  puts "\n\n\n\n\n\n hi"
  channel.members.each do |member|
    puts "\n\n\n\n\n\n"
    p member
    json.set! member.id do
      json.partial! 'shared/member.json.jbuilder', user: member
    end
  end
end
