class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :project_id, :parent_id, :children_id
end
