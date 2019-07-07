require 'rubygems'
require 'active_support/all'

class Timeframe
  def calculate_start_end(timeframe, end_time)
    e = end_time.strftime("%Y%m%d00:00").to_s
    case timeframe
      when '6hour'
      	s = 6.hours.ago.strftime("%Y%m%d00:00").to_s
        {:sd => s, :ed => e}
      when 'day'
        s = 24.hours.ago.strftime("%Y%m%d00:00").to_s
        {:sd => s, :ed => e}
      when 'week'
        s = 1.week.ago.strftime("%Y%m%d00:00").to_s
        {:sd => s, :ed => e}
      when 'month'
        s = 1.month.ago.strftime("%Y%m%d00:00").to_s
        {:sd => s, :ed => e}
      when '3months'
        s = 3.months.ago.strftime("%Y%m%d00:00").to_s
        {:sd => s, :ed => e}
      when '6months'
        s = 6.months.ago.strftime("%Y%m%d00:00").to_s
        {:sd => s, :ed => e}
      else
        s = 24.hours.ago.strftime("%Y%m%d00:00").to_s
        {:sd => s, :ed => e}
      end
  end
  def calculate_start(timeframe, end_date)
    e = end_date.strftime("%Y%m%d00:00").to_s
    case timeframe
      when '6hour'
      	s = 6.hours.ago.strftime("%Y%m%d00:00").to_s
      when 'day'
        s = 24.hours.ago.strftime("%Y%m%d00:00").to_s
      when 'week'
        s = 1.week.ago.strftime("%Y%m%d00:00").to_s
      when 'month'
        s = 1.month.ago.strftime("%Y%m%d00:00").to_s
      when '3months'
        s = 3.months.ago.strftime("%Y%m%d00:00").to_s
      when '6months'
        s = 6.months.ago.strftime("%Y%m%d00:00").to_s
      else
        s = 24.hours.ago.strftime("%Y%m%d00:00").to_s
      end
  end
end