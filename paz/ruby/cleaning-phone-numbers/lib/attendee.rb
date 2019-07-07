require_relative 'phone_number'

class Attendee
  attr_accessor :first_name, :last_name, :phone_number

  def initialize(input = {})
    @first_name   = input[:first_name]
    @last_name    = input[:last_name]
    @phone_number = clean_phone_number(input[:phone_number])
  end
 
  def clean_phone_number(number)
    @pn = PhoneNumber.new
    new_number = @pn.get_clean_number(number)  
  end
      
end