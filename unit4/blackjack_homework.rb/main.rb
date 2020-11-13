# require "./classes.rb"

# Human = Player.new "name", 100, []
# Computer = Player.new "Computer", 100000, []

# def make_deck
#     deck = []
#     @faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace'].each do |face|
#         cards << Card.new(face)
#     @cards = []
#     cards.shuffle!
#     human = human.hand
#     hand = deck.pop(2)
#     end
# end

# puts "what is your name?"
# name = gets.chomp
# puts "Do you want to play blackjack? [y]es or [n]o"
# input = gets.chomp
# if input == "no"
#     puts "Good Bye"
# end
# if input == "yes"
#     puts "Let's begin!"
# end

# make_deck()

# def generate_deck
#     deck = []
# for j in 1..4
#   for i in 1..13
#     card_value = i
#     if ( i == 1)
#       # the ace card
#       card_value = 11
#     elsif ( i > 10 )
#       # jack, queen, king
#       card_value = 10
#     else
#       # card values are equal to their value when not ace, jack, king, queen
#       card_value = i
#     end
#     deck.push(Card.new(card_value))
#   end
# end
# deck.shuffle!
# end

