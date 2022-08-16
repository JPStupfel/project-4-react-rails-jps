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

# each user should have 3 tasks in each project.

Project.all.each do |project|
    User.all.each do |user|
        (1..3).each do |e|
            Task.create(
                name: "task number #{e}",
                user_id: user.id,
                project_id: project.id,
                is_complete: false
            )
        end
    end
end

Project.all.each do |project|
    project.tasks.each do |task|

        Sequence.create(
                        parent_id: task.id,
                        child_id: task.id + 1
                    )
    end
end
