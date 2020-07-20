class CreateKonsekis < ActiveRecord::Migration[5.2]
  def change
    create_table :konsekis do |t|
      t.integer :ama, null: false
      t.integer :str, null: false
      t.integer :dex, null: false
      t.integer :luk, null: false
      t.integer :int, null: false

      t.timestamps
    end
  end
end
