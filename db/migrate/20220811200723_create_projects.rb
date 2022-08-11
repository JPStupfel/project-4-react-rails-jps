class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :details
      t.date :duedate
      t.integer :budget

      t.timestamps
    end
  end
end
