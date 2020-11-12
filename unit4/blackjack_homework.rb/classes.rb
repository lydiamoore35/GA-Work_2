class Player 
    attr_accessor :name, :bankroll, :hand

    def initialize name, bankroll, hand 
        @name = name
        @bankroll = 100
        @hand = []
    end
end

class Card
    attr_accessor :value
    def initialize 
        @value = value
    end
    def value
    end
end

class Deck
    attr_accessor :cards, :faces
    def initialize 
        @faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']. each do |face|
            cards << Card.new(face)
        @cards = []
        cards.shuffle!
    end
    deck = Deck.new
    hand = deck.draw(2)
end
end






# # #------------------
# # # PLAYER class
# class PLAYER
#     attr_accessor :name, :hand, :bankroll
#     def initialize name, bankroll
#         @name = name
#         @hand = []
#         @bankroll= bankroll
#     end 
# end 
# #----------------
# DECK class: create a radom deck of 53 playing cards 
# class DECK
#     attr_accessor :cards
#     def initialize 
#         @cards = []
#         [:clubs, :diamonds, :spades, :hearts].each do |suit|
#             (2..10).each do |number|
#                 cards << CARD.new(suit, number)
#             end 
#             ["J", "Q", "K", "A"].each do |facecard|
#                 cards << CARD.new(suit, facecard)
#             end
#         end
#         # Shuffles elements in self in place.
#         cards.shuffle!
#     end
#     def deal
#         cards.pop(2)
#     end
# end
#---------------
# CARD class
# class CARD
#     attr_accessor :suit, :value
#     def initialize suit, value
#         @suit = suit
#         @value = value
#     end
#     def value
#     end 
# end
#     def damage
#         @health -= 5
#     end
#     def shoot (opp)
#         if @accuracy >= rand(10)
#             puts "#{@name} successfully shot #{opp.name}"
#             opp.damage
#         else
#             puts "#{@name} missed"
#         end 
#     end 
# end 