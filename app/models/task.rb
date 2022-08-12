class Task < ApplicationRecord
    belongs_to :project
    belongs_to :user

    
    has_many :child_sequences, :class_name => 'Sequence', :foreign_key => 'parent_id'
    has_many :parent_sequences, :class_name => 'Sequence', :foreign_key => 'child_id'

    def user
        User.find self.user_id
    end

    def project
        Project.find self.project_id
    end

    def children
        array_of_sequences = self.child_sequences
        array_of_child_tasks = []
        array_of_sequences.each do |e|
           child_task = Task.find_by id: e.child_id
           array_of_child_tasks.push child_task
        end
        array_of_child_tasks
    end

    def parents
        array_of_sequences = self.parent_sequences
        array_of_parent_tasks = []
        array_of_sequences.each do |e|
           parent_task = Task.find_by id: e.parent_id
           array_of_parent_tasks.push parent_task
        end
        array_of_parent_tasks
    end

end
