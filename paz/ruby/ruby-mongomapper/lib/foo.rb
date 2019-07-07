require 'mongo_mapper'

class Foo
  include MongoMapper::Document
  key :name, String
end