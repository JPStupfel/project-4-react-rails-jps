class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :project_id

  # def username
  #   self.user.name
  # end

# belongs_to :user, serializer: TaskUserSerializer
  # belongs_to :project
end
