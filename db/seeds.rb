# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'user_1', password: 'password', email: 'user_1@gmail.com', 'img_url': '/assets/profile_img_1.png')
User.create(username: 'user_2', password: 'password', email: 'user_2@gmail.com', 'img_url': '/assets/profile_img_1.png')
User.create(username: 'user_3', password: 'password', email: 'user_3@gmail.com', 'img_url': '/assets/profile_img_1.png')
User.create(username: 'user_4', password: 'password', email: 'user_4@gmail.com', 'img_url': '/assets/profile_img_1.png')
User.create(username: 'user_5', password: 'password', email: 'user_5@gmail.com', 'img_url': '/assets/profile_img_1.png')

Channel.create(name: 'General',
  description: 'This channel is for team-wide communication and announcements.  All team members are on this channel.',
  private: false)

Channel.create(name: 'Random',
  description: 'Non-work banter and water cooler conversation.',
  private: false)

Channel.create(name: 'DM',
  description: 'DM',
  private: true)

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
