class User < ApplicationRecord
    # has_many :tasks
    # has_many :projects, through: :tasks

    # validate each of the following attributes

    attributes = [:name, :image, :bio]
     attributes.each do |e|
        validates e, presence: true
     end

     validates :age, numericality: { greater_than_or_equal_to: 0 }

end
