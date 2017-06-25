json.array! @channels do |channel|
  json.partial! 'shared/channel', channel: channel, user_id: @user_id
end
