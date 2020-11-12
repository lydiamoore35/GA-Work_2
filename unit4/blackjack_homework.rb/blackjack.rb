puts "what is your name?"

name = gets.chomp

Human = Player.new name, 100, []
Computer = Player.new "Computer", 100000, []

class Player 
    attr_accessor :name, :bankroll, :hand

    def initialize name, bankroll, hand 
        @name = name
        @bankroll = 100
        @hand = []
    end
end

# puts human.name
# puts human.bankroll
# puts computer

class Card
    attr_accessor :value
    def initialize 
        @value = value
    end
end

class Deck
    attr_accessor :cards, :faces
    def initialize 
        @faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']
        @cards = []
    end
end
### create deck of cards ####
    #     @faces.each do |face|
    #         if face.class == Integer
    #             value = face
    #         elsif face == 'Ace'
    #             value = 11
    #         else
    #             value = 10
    #         end
    #         @faces.each do |face|
    #             @cards << Card.new(face, value)
    #         end
    #     end
    #     @cards.shuffle!
    # end     