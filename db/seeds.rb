u1 = User.create(username: 'gage', password: 'password', email: 'gage@gmail.com')
u2 = User.create(username: 'steven', password: 'password', email: 'steven@gmail.com')
u3 = User.create(username: 'debsfong', password: 'password', email: 'debsfong@gmail.com')
u4 = User.create(username: 'kelly', password: 'password', email: 'kelly@gmail.com')
u5 = User.create(username: 'swwang', password: 'password', email: 'swwang@gmail.com')
u6 = User.create(username: 'munyo', password: 'password', email: 'munyo@gmail.com')
u7 = User.create(username: 'authur', password: 'password', email: 'author@gmail.com')
u8 = User.create(username: 'guard_1', password: 'password', email: 'guard_1@gmail.com')
u9 = User.create(username: 'guard_2', password: 'password', email: 'guard_2@gmail.com')

# Channels
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

Channel.create(
  name: 'Monty Python',
  description: 'European or African Sparrow?',
  isDirectMessage: false,
  private: false,
  author_id: 3)

Channel.create(
  name: 'UX Discussions',
  description: 'Channel for design ideas and discussions.',
  isDirectMessage: false,
  private: false,
  author_id: 4)

Channel.create(
  name: 'Pick Up Leagues',
  description: 'Channel for anyone interested in playing recreational leagues on weekends.',
  isDirectMessage: false,
  private: false,
  author_id: 3)

u1.set_channel_subscriptions
u2.set_channel_subscriptions
u3.set_channel_subscriptions
u4.set_channel_subscriptions
u5.set_channel_subscriptions
u6.set_channel_subscriptions
u7.set_channel_subscriptions
u8.set_channel_subscriptions
u9.set_channel_subscriptions

# General
Message.create(user_id: 1, channel_id: 1, text: 'How y\'all doing?')
Message.create(user_id: 1, channel_id: 1, text: 'Hope the bay area life is fun?')
Message.create(user_id: 2, channel_id: 1, text: 'Loving the bay area!')
Message.create(user_id: 2, channel_id: 1, text: 'Much better weather than socal.')
Message.create(user_id: 3, channel_id: 1, text: 'Yay!!')

# Random
Message.create(user_id: 1, channel_id: 2, text: "(Do!) doe, a deer, a female deer")
Message.create(user_id: 2, channel_id: 2, text: "(Re!) ray, a drop of golden sun")
Message.create(user_id: 3, channel_id: 2, text: "(Mi!) me, a name I call myself")
Message.create(user_id: 1, channel_id: 2, text: "(Fa!) far, a long, long way to run")
Message.create(user_id: 1, channel_id: 2, text: "(So!) sew, a needle pulling thread")
Message.create(user_id: 3, channel_id: 2, text: "(La!) la, a note to follow so")
Message.create(user_id: 2, channel_id: 2, text: "(Ti!) tea, a drink with jam and bread")
Message.create(user_id: 1, channel_id: 2, text: "That will bring us back to do oh oh oh")
Message.create(user_id: 3, channel_id: 2, text: "Do! (a deer, a female deer)")
Message.create(user_id: 4, channel_id: 2, text: "Re! (a drop of golden sun)")
Message.create(user_id: 2, channel_id: 2, text: "Mi! (a name I call myself)")
Message.create(user_id: 2, channel_id: 2, text: "Fa! (a long, long way to run)")
Message.create(user_id: 2, channel_id: 2, text: "So! (a needle pulling thread)")
Message.create(user_id: 1, channel_id: 2, text: "La! (a note to follow so)")
Message.create(user_id: 4, channel_id: 2, text: "Ti!(a drink with jam and bread)")
Message.create(user_id: 4, channel_id: 2, text: "That will bring us back to do")
Message.create(user_id: 3, channel_id: 2, text: "A deer, a female deer")
Message.create(user_id: 2, channel_id: 2, text: "Ray, a drop of golden sun")
Message.create(user_id: 2, channel_id: 2, text: "Me, a name I call myself")
Message.create(user_id: 1, channel_id: 2, text: "Far, a long, long way to run")
Message.create(user_id: 1, channel_id: 2, text: "Sew, a needle pulling thread")
Message.create(user_id: 4, channel_id: 2, text: "La, a note to follow so")
Message.create(user_id: 4, channel_id: 2, text: "Tea, a drink with jam and bread")
Message.create(user_id: 4, channel_id: 2, text: "That will bring us back to do")
Message.create(user_id: 1, channel_id: 2, text: "Do, re, mi, fa, so, la, ti, do!")
Message.create(user_id: 1, channel_id: 2, text: "Do, ti, la, so, fa, mi, re, do!")
Message.create(user_id: 1, channel_id: 2, text: "Do, re, mi, fa, so, la, ti, do!")
Message.create(user_id: 1, channel_id: 2, text: "So, do!")

# Monty Python
Message.create(user_id: 8, channel_id: 3, text: "Halt! Who goes there? ")
Message.create(user_id: 7, channel_id: 3, text: "It is I, Arthur, son of Uther Pendragon, from the castle of Camelot. King of the Britons, defeator of the Saxons, sovereign of all England!")
Message.create(user_id: 8, channel_id: 3, text: "Pull the other one!")
Message.create(user_id: 7, channel_id: 3, text: "I am. And this my trusty servant Patsy. We have ridden the length and breadth of the land in search of knights who will join me in my court of Camelot. I must speak with your lord and master.")
Message.create(user_id: 8, channel_id: 3, text: "What, ridden on a horse?")
Message.create(user_id: 7, channel_id: 3, text: "Yes!")
Message.create(user_id: 8, channel_id: 3, text: "You're using coconuts!")
Message.create(user_id: 7, channel_id: 3, text: "What?")
Message.create(user_id: 8, channel_id: 3, text: "You've got two empty halves of coconut and your bangin' 'em together.")
Message.create(user_id: 7, channel_id: 3, text: "So? We have ridden since the snows of winter covered this land, through the kingdom of Mercea, through--")
Message.create(user_id: 8, channel_id: 3, text: "Where'd you get the coconut?")
Message.create(user_id: 7, channel_id: 3, text: "We found them.")
Message.create(user_id: 8, channel_id: 3, text: "Found them? In Mercea? The coconut's tropical!")
Message.create(user_id: 7, channel_id: 3, text: "What do you mean?")
Message.create(user_id: 8, channel_id: 3, text: "Well, this is a temperate zone.")
Message.create(user_id: 7, channel_id: 3, text: "The swallow may fly south with the sun or the house martin or the plumber may seek warmer climes in winter yet these are not strangers to our land.")
Message.create(user_id: 8, channel_id: 3, text: "Are you suggesting coconuts migrate?")
Message.create(user_id: 7, channel_id: 3, text: "Not at all, they could be carried.")
Message.create(user_id: 8, channel_id: 3, text: "What -- a swallow carrying a coconut?")
Message.create(user_id: 7, channel_id: 3, text: "It could grip it by the husk!")
Message.create(user_id: 8, channel_id: 3, text: "It's not a question of where he grips it! It's a simple question of weight ratios! A five ounce bird could not carry a 1 pound coconut.")
Message.create(user_id: 7, channel_id: 3, text: "Well, it doesn't matter. Will you go and tell your master that Arthur from the Court of Camelot is here.")
Message.create(user_id: 8, channel_id: 3, text: "Listen, in order to maintain air-speed velocity, a swallow needs to beat its wings 43 times every second, right?")
Message.create(user_id: 7, channel_id: 3, text: "Please!")
Message.create(user_id: 8, channel_id: 3, text: "Am I right?")
Message.create(user_id: 7, channel_id: 3, text: "I'm not interested!")
Message.create(user_id: 9, channel_id: 3, text: "It could be carried by an African swallow!")
Message.create(user_id: 8, channel_id: 3, text: "Oh, yeah, an African swallow maybe, but not a European swallow, that's my point.")
Message.create(user_id: 9, channel_id: 3, text: "Oh, yeah, I agree with that...")
Message.create(user_id: 7, channel_id: 3, text: "Will you ask your master if he wants to join my court at Camelot?!")
Message.create(user_id: 8, channel_id: 3, text: "But then of course African swallows are not migratory.")
Message.create(user_id: 9, channel_id: 3, text: "Oh, yeah...")
Message.create(user_id: 8, channel_id: 3, text: "So they couldn't bring a coconut back anyway... [clop clop]")
Message.create(user_id: 9, channel_id: 3, text: "Wait a minute -- supposing two swallows carried it together?")
Message.create(user_id: 8, channel_id: 3, text: "No, they'd have to have it on a line.")
Message.create(user_id: 9, channel_id: 3, text: "Well, simple! They'd just use a standard creeper!")
Message.create(user_id: 8, channel_id: 3, text: "What, held under the dorsal guiding feathers?")
Message.create(user_id: 9, channel_id: 3, text: "Well, why not?")

# UX Design
Message.create(user_id: 4, channel_id: 4, text: "Did you guys enjoy the UX talk we had today?")
Message.create(user_id: 5, channel_id: 4, text: "Absolutely! I hope we have more of those coming up.  It really taught me a lot about how to approach design.")
Message.create(user_id: 5, channel_id: 4, text: "Great choice of speaker Munyo!")
Message.create(user_id: 6, channel_id: 4, text: "Thanks Sam!")

# Pick Up Leagues
Message.create(user_id: 1, channel_id: 4, text: "If anyone is interested, I'm hoping to start a rec league for footie and ultimate.")
Message.create(user_id: 2, channel_id: 4, text: "Oooh, that sounds fun.")
Message.create(user_id: 3, channel_id: 4, text: "Actually, cricket is the ultimate sport.")
Message.create(user_id: 4, channel_id: 4, text: "Yesss, that sounds great also.  But who says footie?")
