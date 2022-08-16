class TaskUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :is_complete

end
