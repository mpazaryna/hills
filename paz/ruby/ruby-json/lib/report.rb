require 'json'
require 'securerandom'

class Report
  attr_accessor :user_guid, :company_guid, :report_name, :app_id, :routing_key, :report_guid, :destination, :device, :start_date, :end_date
  
  def initialize(input = {})
    @user_guid = input[:user_guid]
    @company_guid = input[:company_guid]
    @report_name = input[:report_name]
    @app_id = input[:app_id] || "viewpoint"
    @routing_key = input[:routing_key] || "report.job.create.cust2"
    @report_guid = SecureRandom.uuid     
    @destination = input[:destination] 
    @device = input[:device]     
    @start_date = input[:start_date]     
    @end_date = input[:end_date]         
  end    
          
  def device_json
    # hash to hold options
    h = { :type => @report_name, :device => @device, :start => @start_date, :end => @end_date, :destination => @destination}
    a = JSON.generate(h)    
  end
  
  def company_json
    # hash to hold options
    h = { :type => @report_name, :company_guid => @company_guid, :start => @start_date, :end => @end_date, :destination => @destination}
    a = JSON.generate(h)    
  end
        
end