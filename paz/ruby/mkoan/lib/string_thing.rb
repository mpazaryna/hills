# example of iterating through an array and returning a string
class StringThing
  def build_string(arr)
    i = 0
    s = ''
    arr.each do |x|
      i += 1
      if i <= (arr.length - 1) then
        s << "{name=>'asset_guid', op=>'in', value =>" + "'" + x + "'},"
      else
        s << "{name=>'asset_guid', op=>'in', value =>" + "'" + x + "'}"
      end
    end
    return s
  end
end