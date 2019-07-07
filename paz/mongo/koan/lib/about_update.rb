require 'mongo'
require 'json'

class AboutUpdate

  def bulk_load(rows, collection)
    conn = Mongo::Connection.new
    db = conn['hills']
    coll = db[collection]
    coll.remove
    rows.times do |i|
      coll.insert({'_id' => "#{i+1}", 'data' => "test_#{i+2}" })
    end
    v = count_collection(collection)
  end

  def count_collection(collection)
    conn = Mongo::Connection.new
    db = conn['hills']
    c = db[collection]
    c.count
  end

  def iterate_collection(collection)
    conn = Mongo::Connection.new
    db = conn['hills']
    c = db[collection]
    c.find().each { |row| puts row.inspect }  
    v = count_collection(collection)
  end   

  def update_collection(collection)
    conn = Mongo::Connection.new
    db = conn['hills']
    c = db[collection]
    # c.update({:_id => 1}, {"$set" => {"name" => "MongoDB Ruby"}})
    v = count_collection(collection)
  end

end