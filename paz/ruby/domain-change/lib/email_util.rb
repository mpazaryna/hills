require 'resolv'

class EmailUtil
          
  def return_domain(email)
    domain = email.match(/\@(.+)/)[1]    
  end

  def replace_domain(email)
    replace_domain_private(email)    
  end
      
  # http://www.buildingwebapps.com/post/79182-validating-email-addresses-with-ruby    
  def validate_email_domain(email)
    domain = email.match(/\@(.+)/)[1]
    Resolv::DNS.open do |dns|
      @mx = dns.getresources(domain, Resolv::DNS::Resource::IN::MX)
    end
    @mx.size > 0 ? true : false
  end    
     
  private
   
    def replace_domain_private(email)
      email.gsub!("sungard.com", "sungardas.com") 
    end      
        
end