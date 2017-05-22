json.id message.id
json.text message.text
json.user do
  json.id message.user.id
  json.username message.user.username
  json.img_url asset_path(message.user.img_url)
end
json.created_at message.created_at
