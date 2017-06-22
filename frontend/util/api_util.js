// Authentication
export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
)

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)

// Messages
export const loadMessages = (channelId) => (
  $.ajax({
    method: 'GET',
    url: `/api/messages/${channelId}`
  })
)

export const sendMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { message }
  })
)

// Called by modals
export const loadDMChannelsAndUsers = (userId) => (
  $.ajax({
    url: `api/channels/loadDMChannelsAndUsers/${userId}`,
    method: 'GET'
  })
)
// Might not be needed
export const loadUsers = () => (
  $.ajax({ url: 'api/users', method: 'GET' })
)

// Channels
export const publicChannels = (userId) => (
  $.ajax({
    url: `api/channels/public_channels/${userId}`,
    method: 'GET'
  })
)

export const createChannel = (channel, members) => (
  $.ajax({
    method: 'POST',
    url: `/api/channels/`,
    data: { channel, members }
  })
)

export const subscribeToChannel = (participation) => (
  $.ajax({
    method: 'POST',
    url: `/api/participations/`,
    data: { participation }
  })
)

export const unsubscribeFromChannel = (participation) => (
  $.ajax({
    method: 'DELETE',
    url: '/api/participations/',
    data: { participation}
  })
)

export const createChannelTag = (channel_tag) => (
  $.ajax({
    method: 'POST',
    url: `/api/channel_tags/`,
    data: { channel_tag }
  })
)

export const deleteChannelTag = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/channel_tags/${id}`
  })
)
