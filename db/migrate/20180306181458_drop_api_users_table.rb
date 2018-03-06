class DropApiUsersTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :api_users
  end
end
