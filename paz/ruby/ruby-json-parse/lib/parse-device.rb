require 'json'

class ParseDevice
  def device_json
    file = File.read('./dat/device.json')
    hash = JSON.parse(file) rescue {}
    hash["result"].each do |result_hash|
      # Process data here
      # p result_hash["report_id"]
      p result_hash["report_type"]
      p result_hash["email"]
      p result_hash["asset_list"]
      p result_hash["frequency"]
      p result_hash["delivery_time"]
      p "------------------"
    end
  end
end