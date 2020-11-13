require "./classes.rb"

Human = Player.new "name", 100, []
Computer = Player.new "Computer", 100000, []

def make_deck
    @faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace'].each do |face|
        cards << Card.new(face)
    @cards = []
    cards.shuffle!
    human = human.hand
    hand = deck.pop(2)
    end
end

puts "what is your name?"
name = gets.chomp
puts "Do you want to play blackjack? [y]es or [n]o"
input = gets.chomp
if input == "no"
    puts "Good Bye"
end
if input == "yes"
    puts "Let's begin!"
end

make_deck()

# while true do
#     puts "Your bankroll amount: #{Human.bankroll}" && "Computer's bankroll amount: #{Computer.bankroll}" > 0
#     puts "Your cards are: "
#     puts hand
#     value = hand.map(&:value).get_sum
#     puts "Your hand's value is #{value}"
#     if value > 21
#         puts "You lose, sorry!"
#         break
#     end
#     puts "[h]it or [s]tay?"
    
# end

# puts human.name
# puts human.bankroll
# puts computer


# while true do
#     puts "Humans's bankroll amount: #{human.bankroll} - #{Player.name}'s Life: #{Player.health}"
#     puts "Cleetus's Acc: #{Cleetus.accuracy} - #{Player.name}'s Acc: #{Player.accuracy}"
#     puts "do you want to [s]hoot or [r]un?"
#     input = gets.chomp
#     if input == "s"
#         Player.shoot(Cleetus)
#         Cleetus.shoot(Player)
#     end
#     if input == "r"
#         if rand(100) > 60 
#             puts "You have escaped to fight another day"
#             break
#         else 
#             puts "You fail to escape"
#         end
#     end
#     if Player.health <= 0
#         puts "#{Player.name} has been fatally wounded, you lose"
#         break
#     end
#     if Cleetus.health <= 0
#         puts "Cleetus has been fatally wounded, you win!"
#         break
#     end 
