class DropSequences < ActiveRecord::Migration[6.1]
  def change
    drop_table :sequences
  end
end
