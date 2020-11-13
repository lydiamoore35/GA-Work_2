#### CLASSES ####

class Player 
    attr_accessor :name, :bankroll, :hand

    def initialize name, bankroll, hand 
        @name = name
        @bankroll = 100
        @hand = []
    end
    def hand_sum
        @hand[0].value + @hand[1].value
    end
end

class Card
    attr_accessor :value
    def initialize value 
        @value = value
    end
end

Human = Player.new "name", 100, []
Computer = Player.new "Computer", 100000, []

#### CREATING THE DECK TO PLAY ####

def make_deck 
    deck = []
    for j in 1..4
        for i in 1..13
          card_value = i
          if ( i == 1 )
            # accommodating for the ace card
            card_value = 11
          elsif ( i > 10 )
            # remaining cards: jack, queen, king
            card_value = 10
          else
            # card values are equal to their value when not ace, jack, king, queen
            card_value = i
          deck.push(Card.new(card_value))
        end
    end
    end
    deck.shuffle!
end

#### GAME LOGIC ####

puts "what is your name?"
name = gets.chomp
puts "Do you want to play blackjack? [y]es or [n]o"
input = gets.chomp
if input == "no"
    puts "Good Bye"
    # break
end
if input == "yes"
    puts "Let's begin!"
end

play_deck = make_deck
make_deck()
Human.hand = make_deck.pop(2)
Computer.hand = make_deck.pop(2)
puts "You have #{Human.hand_sum}"
puts "Your opponent has #{Computer.hand_sum}"

if Human.hand_sum > Computer.hand_sum
    puts "You WIN with #{Human.hand_sum}!"
elsif
    puts "The computer won with #{Computer.hand_sum}. Lame!"
end



###### OLD CODE ######

# # puts human.name
# # puts human.bankroll
# # puts computer

# class Card
#     attr_accessor :value
#     def initialize 
#         @value = value
#     end
# end

# class Deck
#     attr_accessor :cards, :faces
#     def initialize 
#         @faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']
#         @cards = []
#     end
#     deck = Deck.new
#     hand = deck.draw(2)
#     loop do
#         puts "Your cards are: "
#         puts hand
#         value = hand.map(&:value).get_sum
#         puts "Your hand's value is #{value}"
#         if value > 21
#             puts "You lose, sorry!"
#             break
#         end
#         puts "[h]it or [s]tay?"
        
#     end
# end





    