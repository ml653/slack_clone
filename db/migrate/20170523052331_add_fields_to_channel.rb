class AddFieldsToChannel < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :isDirectMessage, :boolean, null: false
  end
end
