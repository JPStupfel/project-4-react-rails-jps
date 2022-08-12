class TaskUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  # methods :username

  # def username
  #       User.find self.user.username
  #   end
  # belongs_to :user, serializer: UserSerializer
end
