json.array! @channels do |channel|
  json.partial! 'shared/channel', channel: channel
end
