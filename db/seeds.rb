# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'ragegage', password: 'password', email: 'user_1@gmail.com', 'img_url': '/images/profile_img_1.png')
User.create(username: 'steven', password: 'password', email: 'user_2@gmail.com', 'img_url': '/images/profile_img_1.png')
User.create(username: 'debsfong', password: 'password', email: 'user_3@gmail.com', 'img_url': '/images/profile_img_1.png')
User.create(username: 'kelly', password: 'password', email: 'user_4@gmail.com', 'img_url': '/images/profile_img_1.png')
User.create(username: 'swwang', password: 'password', email: 'user_5@gmail.com', 'img_url': '/images/profile_img_1.png')

Channel.create(
  name: 'General',
  description: 'This channel is for team-wide communication and announcements.  All team members are on this channel.',
  isDirectMessage: false,
  private: false,
  author_id: 1)

Channel.create(
  name: 'Random',
  description: 'Non-work banter and water cooler conversation.',
  isDirectMessage: false,
  private: false,
  author_id: 2)

Channel.create(name: 'Direct Message',
  description: 'Direct Message',
  isDirectMessage: true,
  private: true,
  author_id: 2)

Participation.create(channel_id: 1, user_id: 1)
Participation.create(channel_id: 1, user_id: 2)
Participation.create(channel_id: 1, user_id: 3)
Participation.create(channel_id: 1, user_id: 4)
Participation.create(channel_id: 1, user_id: 5)

Participation.create(channel_id: 2, user_id: 1)
Participation.create(channel_id: 2, user_id: 2)
Participation.create(channel_id: 2, user_id: 3)
Participation.create(channel_id: 2, user_id: 4)
Participation.create(channel_id: 2, user_id: 5)

Participation.create(channel_id: 3, user_id: 1)
Participation.create(channel_id: 3, user_id: 2)

Message.create(
  user_id: 1,
  channel_id: 1,
  text: 'How y\'all doing?'
)

Message.create(
  user_id: 1,
  channel_id: 1,
  text: 'Hope the bay area life is fun?'
)

Message.create(
  user_id: 2,
  channel_id: 1,
  text: 'Loving the bay area!'
)

Message.create(
  user_id: 2,
  channel_id: 1,
  text: 'Much better weather than socal.'
)

Message.create(
  user_id: 3,
  channel_id: 1,
  text: 'Yay!!'
)

Message.create(
  user_id: 3,
  channel_id: 2,
  text: 'Much randomness'
)

Message.create(
  user_id: 1,
  channel_id: 3,
  text: 'How is your project coming along Steven?'
)

Message.create(
  user_id: 2,
  channel_id: 3,
  text: 'Going well!! but..'
)

Message.create(
  user_id: 2,
  channel_id: 3,
  text: 'Seen better days.'
)
