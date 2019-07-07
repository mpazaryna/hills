class PhoneNumber
  attr_accessor :phone_number

  def initialize(input = {})
    @phone_number = get_clean_number(input[:phone_number])
  end      
      
  def get_clean_number(s)
    return clean_phone_number(s)     
  end
      
  private
  
  def clean_phone_number(number)
    if number
      number = number.scan(/[0-9]/).join
        if number.length == 11 && number.start_with?("1")
          number = number[1..-1]
        end
        if number.length != 10
          number = "0000000000"
        end
      return number
    end
  end   
        
end