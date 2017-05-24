class AddUniquenessToChannelProps < ActiveRecord::Migration[5.0]
  def change
    remove_index :channels, :name
    add_index :channels, :name, unique: true
  end
end
