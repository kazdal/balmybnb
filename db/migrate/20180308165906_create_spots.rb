class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :price, null: false
      t.string :location, null: false

      t.timestamps
    end
  end
end
