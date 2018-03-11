class AddAttachmentImageToSpotImages < ActiveRecord::Migration[5.1]
  def self.up
    change_table :spot_images do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :spot_images, :image
  end
end
