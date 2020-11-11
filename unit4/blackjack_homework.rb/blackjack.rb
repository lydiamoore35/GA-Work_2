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
    attr_accessor :value
    def initialize
        @value = value
    end
end

class Deck
    def initialize 
        @faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']
        @cards = []

#### create deck of cards ####
@faces.each do |face|
    if face.class == Integer
        value = face
    elsif face == 'Ace'
        value = 11
    else
        value = 10
    end
end
@cards.shuffle!
end       