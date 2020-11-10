# def hello(x)
#     puts "Hello #{x} world!"
#     my_var = "Hello World"
#     puts my_var.upcase
# end
# hello("big bad")


###### Nums Array and Enumerables ######


# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.uniq
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.push(5)
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.pop
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.shift
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.unshift(5)
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.length
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.include?(8)
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.find_all{ |x| x > 10 }
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.all?{ |x| x > 0 }
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.any?{ |x| x % 8 == 0 && x != 0}
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.count{ |x| x > 4 }
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.each_with_index { |num , idx| puts "#{num} * #{idx} = #{num * idx}"}
# end
# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.find{ |x| x / 7 == 0 && x / 5 == 0 && x > 0 }
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.find_index{ |x| x % 7 == 0 && x % 5 == 0 && x > 0 }
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.first(3)
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.last(5)
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.group_by{ |x| x % 3 }
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.minmax()
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.reject { |x| x % 3 }
# end

# array()

# def array
#     nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
#     puts nums.select { |x| x % 5 == 0 }
# end

# array()


###### Color Array ######


# def color_array
#     colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
#     puts colors.sample()
# end
# color_array()

# def color_array
#     colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
#     puts colors.reverse()
# end
# color_array()

# def color_array
#     colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
#     colors.each_with_index { |x| puts x.upcase}
# end
# color_array()


###### Methods ######

# find_area = Proc.new do |height, width|
#     puts height * width
# end
# find_area.call(4,2)

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
# def multiply_each_by_five arr
#     arr.each{|x| p x * 5}
# end
# multiply_each_by_five(nums)


###### Methods with a Hash ######


# book = {
#   title: 'The Great Gatsby',
#   author: 'F Scott Fitzgerald',
#   year: 1925,
#   price: 10
# }

# lamp = {
#   type: 'reading',
#   brand: 'Ikea',
#   price: 25
# }

# table = {
#   type: 'bed side',
#   brand: 'Crate & Barrel',
#   color: 'birch',
#   price: 50
# }

# def print_price (params) 
#     puts params[:price]
# end
# print_price(table)

# def print_item_sums (params, params2)
#     puts params[:price] + params2[:price]
# end
# print_item_sums(table,lamp)


###### Solving problems with Ruby ######
### Euler Problem ###

# def sum_of_multiples(num)
#    while num < 1001 && (num % 3 == 0 || num % 5 == 0) 
#     puts .sum(num)
#    end
# end
# sum_of_multiples()

### Primes ###

## next 2 methods are not working and would love help to understand why, but i do have one that i finally got working just below it ##

# def check_prime (num)
#     n = 2
#     while n < num 
#         false if num % n == 0
#         n += 1
#     end
#     true
# end 
# puts check_prime(50)

# def check_prime (num)
#     (2..num - 1).each {|x| false if (num % x) == 0}
#     true 
# end
# check_prime(12)

## working code! Part I and Part II ##

def prime? (n)
    (2..n-1).none? {|number| n % number == 0}
end
    def get_prime? (limit)
        (1..limit).each {|num| puts prime? num}
    end
    puts prime?(5)
    puts prime?(6)

    get_prime?(100)


