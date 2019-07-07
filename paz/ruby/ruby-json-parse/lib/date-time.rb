require 'date'

class DateTime
  def utc
    Time.now.utc.strftime("%H")  
  end
end