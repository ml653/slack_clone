json.users do
  json.array! @users do |user|
    json.partial! 'api/users/user', user: user
  end
end
json.channels do
  json.array! @channels do |channel|
    json.partial! 'shared/channel', channel: channel
  end
end
