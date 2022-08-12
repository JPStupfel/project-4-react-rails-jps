class ProjectShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :details, :duedate, :budget

  has_many :tasks, serializer: TaskUserSerializer
  
end
