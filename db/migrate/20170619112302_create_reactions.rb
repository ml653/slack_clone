class CreateReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :reactions do |t|
      t.integer :user_id, null: false
      t.integer :message_id, null: false
      t.string :emoji, null: false
      t.timestamps
    end

    add_index :reactions, :user_id
    add_index :reactions, :message_id
  end
end
