class CreateChannelTags < ActiveRecord::Migration[5.0]
  def change
    create_table :channel_tags do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.string :type, null: false
      t.timestamps
    end
  end
end
