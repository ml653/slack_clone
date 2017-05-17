class CreateParticipations < ActiveRecord::Migration[5.0]
  def change
    create_table :participations do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false

      t.timestamps
    end

    add_index :participations, :user_id
    add_index :participations, :channel_id
  end
end
