class Player 
    attr_accessor :name, :bankroll, :hand

    def initialize name, bankroll, hand 
        @name = name
        @bankroll = 100
        @hand = []
    end
end

human = Player.new "Human", 100, []
computer = Player.new "Computer", 100000, []

puts human.name
puts human.bankroll
puts computer

class Card
    attr_accessor :value, suit
    def initialize
        @value = value
        @suit = suit
    end
end

class Deck
    def initialize 
        @faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']
        @suits = ['clubs', 'spades', 'hearts', 'diamonds']
        @cards = []