# json.id user.id
# json.username user.username
# json.email user.email
# json.session_token user.session_token
# json.img_url asset_path(user.img_url)

json.merge! user.attributes

json.channels do
  json.array! user.channels do |channel|
    # json.partial! '/api/channels/channel/', formats: [:json]
    json.merge! channel.attributes
    json.members do
      json.array! channel.members do |member|
        json.id member.id
        json.username member.username
        json.email member.email
      end
    end
  end
end
