class AddNullToChannels < ActiveRecord::Migration[5.0]
  def change
    change_column :channels, :name, :string, null: true
    change_column :channels, :description, :string, null: true
  end
end
