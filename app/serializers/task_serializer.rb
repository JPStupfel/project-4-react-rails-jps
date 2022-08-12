class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :project_id

end
