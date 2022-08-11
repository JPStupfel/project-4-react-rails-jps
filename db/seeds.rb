# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do 
        User.create(
        username: Faker::Games::StreetFighter.character,
        bio: "Quote: #{Faker::Games::StreetFighter.quote}. Birthplace: #{Faker::Games::StreetFighter.stage}",
        image: Faker::Avatar.image,
        age: rand(100),
        password: 'fish')
    end


10.times do 
    Project.create(
        name: Faker::Games::Pokemon.move,
        details: Faker::Quotes::Shakespeare.hamlet_quote,
        duedate: Date.today+rand(10000),
        budget: rand(10000000))
end
