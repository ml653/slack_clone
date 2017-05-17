class CreateChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.boolean :private, null: false
      t.timestamps
    end

    add_index :channels, :name
    add_index :channels, :description
  end
end
