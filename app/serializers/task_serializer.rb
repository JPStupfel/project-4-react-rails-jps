class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :project_id

  # belongs_to :user
  # belongs_to :project
end
