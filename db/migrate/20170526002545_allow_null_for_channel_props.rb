class AllowNullForChannelProps < ActiveRecord::Migration[5.0]
  def change
    change_column :channels, :name, :string
    change_column :channels, :description, :string
  end
end
