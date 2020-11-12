puts "what is your name?"
name = gets.chomp

puts "Do you want to play blackjack?"

class Player 
    attr_accessor :name, :bankroll, :hand

    def initialize name, bankroll, hand 
        @name = name
        @bankroll = 100
        @hand = []
    end
    # def get_sum num1, num2
end

# puts human.name
# puts human.bankroll
# puts computer
Human = Player.new name, 100, []
Computer = Player.new "Computer", 100000, []

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
    deck = Deck.new
    hand = deck.draw(2)
    loop do
        puts "Your cards are: "
        puts hand
        value = hand.map(&:value).get_sum
        puts "Your hand's value is #{value}"
        if value > 21
            puts "You lose, sorry!"
            break
        end
        puts "[h]it or [s]tay?"
        
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