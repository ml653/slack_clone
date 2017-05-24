class AddAuthorToChannel < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :author_id, :integer, null: false
  end
end
