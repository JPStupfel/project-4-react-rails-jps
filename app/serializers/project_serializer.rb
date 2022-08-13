class ProjectSerializer < ActiveModel::Serializer
attributes :id, :name, :details, :duedate, :budget, :tasksRemaining

def tasksRemaining
  tasksToGo = self.object.tasks.where(is_complete: false).count
  {remaining:tasksToGo ,total: self.object.tasks.count}
end

 
end
