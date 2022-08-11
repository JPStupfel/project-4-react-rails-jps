class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :details, :duedate, :budget
end
