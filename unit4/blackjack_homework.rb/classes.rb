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
        puts value
    end
end







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