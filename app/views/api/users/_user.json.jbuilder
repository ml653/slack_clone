json.id user.id
json.username user.username
json.email user.email
json.session_token user.session_token
json.img_url asset_path(user.img_url)

# json.channels do
#   json.array! user.channels
#     .select("channels.*, count(users.id) as user_count")
#     .joins(:users)
#     .where(direct_message: false)
#     .group("channels.id") do |channel|
#       json.id channel.id
#       json.name channel.name
#       json.purpose channel.purpose
#       json.members do
#         json.count channel.user_count
#       end
#   end
# end
#
# json.direct_messages do
#   json.array! user.direct_messages do |dm|
#       json.id dm.id
#       json.name dm.name
#       json.direct_message dm.direct_message
#       json.members do
#         json.array! dm.users do |user|
#           json.id user.id
#           json.username user.username
#         end
#       end
#   end
# end
