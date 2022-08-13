class UserTasksSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image, :age

  has_many :tasks
  has_many :projects
end
