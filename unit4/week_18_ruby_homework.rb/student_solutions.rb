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


def color_array
    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    puts colors.sample()
end
color_array()

def color_array
    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    puts colors.reverse()
end
color_array()

def color_array
    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    colors.each_with_index { |x| puts x.upcase}
end
color_array()
