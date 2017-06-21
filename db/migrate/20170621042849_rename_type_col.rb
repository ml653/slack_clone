class RenameTypeCol < ActiveRecord::Migration[5.0]
  def change
    rename_colum :channel_tags, :type, :info
  end
end
