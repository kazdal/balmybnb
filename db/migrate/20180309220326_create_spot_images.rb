class CreateSpotImages < ActiveRecord::Migration[5.1]
  def change
    create_table :spot_images do |t|
      t.string :image_url, null: false
      t.integer :spot_id, null: false

      t.timestamps
    end
  end
end
