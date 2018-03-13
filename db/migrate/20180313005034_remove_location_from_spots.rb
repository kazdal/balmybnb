class RemoveLocationFromSpots < ActiveRecord::Migration[5.1]
  def change
    remove_column :spots, :location
  end
end
