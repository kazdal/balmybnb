class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :user_id, null: false
      t.integer :spot_id, null: false

      t.timestamps
    end
  end
end
