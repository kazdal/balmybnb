class CreateUsersAgain < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :image_url, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
  end
end
