class UserTasksSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image, :age, :projects

  def projects
    self.object.projects.uniq {|p| p.id}
  end

  has_many :tasks
end
