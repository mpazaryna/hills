require 'net/http'

# @author Matt Pazaryna 
class Api
  attr_accessor :url
  attr_accessor :uri
 
  # Initialize the class with the url and convert the url to a uri.
  #
  # @return [String] the object converted into the expected format.
  def initialize
    @url = "http://135.16.233.13:3070/users"
    @uri = URI.parse @url
  end
 
  # Create an user using a predefined XML template as a REST request.
  def create(name="Default Name", email="9999")
    xml_req =
    "<?xml version='1.0' encoding='UTF-8'?>
    <user>
      <name>#{name}</name>
      <email>#{email}</email>
    </user>"
 
    request = Net::HTTP::Post.new(@url)
    request.add_field "Content-Type", "application/xml"
    request.body = xml_req
 
    http = Net::HTTP.new(@uri.host, @uri.port)
    response = http.request(request)
 
    response.body    
  end
 
  # Read can get all employees with no arguments or
  # get one employee with one argument.  For example:
  # api = Api.new
  # api.read 2 => one employee
  # api.read   => all employees
  def read(id=nil)
    request = Net::HTTP.new(@uri.host, @uri.port)
 
    if id.nil?
      response = request.get("#{@uri.path}.xml")      
    else
      response = request.get("#{@uri.path}/#{id}.xml")    
    end
 
    response.body
  end
 
  # Update an employee using a predefined XML template as a REST request.
  def update(id, name="Updated Name", email="test@gmail.com")
    xml_req =
    "<?xml version='1.0' encoding='UTF-8'?>
    <user>
      <id type='integer'>#{id}</id>
      <name>#{name}</name>
      <email>#{email}</email>      
    </employee>"
 
    request = Net::HTTP::Put.new("#{@url}/#{id}.xml")
    request.add_field "Content-Type", "application/xml"
    request.body = xml_req
 
    http = Net::HTTP.new(@uri.host, @uri.port)
    response = http.request(request)
 
    # no response body will be returned
    case response
    when Net::HTTPSuccess
      return "#{response.code} OK"
    else
      return "#{response.code} ERROR"
    end
  end
 
  def delete(id)
    request = Net::HTTP::Delete.new("#{@url}/#{id}.xml")
    http = Net::HTTP.new(@uri.host, @uri.port)
    response = http.request(request)
    
    # no response body will be returned
    case response
    when Net::HTTPSuccess
      return "#{response.code} OK"
    else
      return "#{response.code} ERROR"
    end
  end
 
end
