
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { AlertCircle, Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Clock, User } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// Import EmailJS with named imports as per latest docs
import emailjs from '@emailjs/browser';

const Contact = () => {
  // State to track if EmailJS is properly configured
  const [emailjsConfigured, setEmailjsConfigured] = useState(false);
  
  // Initialize EmailJS when component mounts
  useEffect(() => {
    try {
      emailjs.init({
        publicKey: "NYcy5gfadmYexyXIQ",
      });
      console.log("EmailJS initialized successfully");
      
      // Check if the service exists by making a test call
      // We'll set this to true for now and let the actual send determine if it works
      setEmailjsConfigured(true);
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
      setEmailjsConfigured(false);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      // For the form fields that have different names than our state
      if (name === 'from_name') return { ...prev, name: value };
      if (name === 'reply_to') return { ...prev, email: value };
      return { ...prev, [name]: value };
    });
  };

  // Function to create a mailto link as a fallback
  const getMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || "Contact Form Message");
    const body = encodeURIComponent(`Name: ${formData.name}\n\nMessage: ${formData.message}\n\n\nSent from website contact form`);
    return `mailto:ankit_kumar.ug@nsu.ac.in?subject=${subject}&body=${body}`;
  };
  
  // Direct email function using EmailJS with objects
  const sendDirectEmail = () => {
    // Try a completely simplified approach with the minimum required parameters
    const templateParams = {
      // Include every possible parameter name that might be in the template
      from_name: formData.name,
      name: formData.name,
      reply_to: formData.email,
      email: formData.email,
      from_email: formData.email,
      to_email: "ankit_kumar.ug@nsu.ac.in",
      to_name: "Ankit Kumar",
      subject: formData.subject,
      message: formData.message,
      content: formData.message,
      user_email: "ak5569387@gmail.com"
    };
    
    console.log("Sending email with params:", templateParams);
    
    // Using the configured service ID from EmailJS dashboard
    const serviceId = 'service_utjm6sh';
    console.log('Using service ID:', serviceId);
    
    return emailjs.send(
      serviceId,
      'template_3vzf54m',
      templateParams
    );
  };

  // Handle fallback email using mailto link
  const handleFallbackEmail = () => {
    window.location.href = getMailtoLink();
    toast.success("Opening your email client...");
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields");
      return;
    }
    
    // Check if EmailJS is properly configured with a service
    if (!emailjsConfigured) {
      // If not configured, use the fallback method
      handleFallbackEmail();
      return;
    }
    
    setIsSubmitting(true);
    console.log("Form submission started");
    
    // Show a loading message to the user
    toast.loading("Sending message...");
    
    // Try the direct email method
    try {
      sendDirectEmail()
        .then((response) => {
          console.log('SUCCESS!', response);
          toast.dismiss();
          toast.success("Message sent successfully! I'll get back to you soon.");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          // Success means EmailJS is working
          setEmailjsConfigured(true);
        })
        .catch((err) => {
          console.error('EmailJS error details:', err);
          toast.dismiss();
          
          // Service ID not found error - disable EmailJS and use fallback
          if (err.text && err.text.includes('service ID not found')) {
            setEmailjsConfigured(false);
            toast.error('Email service not properly configured. Falling back to direct email.');
            handleFallbackEmail();
          } else {
            // Other errors
            toast.error(`Failed to send message: ${err.text || err.message || 'Unknown error'}`);
          }
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error('Exception in submission process:', error);
      toast.dismiss();
      toast.error(`Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsSubmitting(false);
      // Try fallback on exception
      handleFallbackEmail();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        
        {/* Hero Section */}
        <div className="relative mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/30 dark:border-gray-700/30 shadow-2xl text-center group hover:shadow-3xl transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white group-hover:animate-bounce" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              Let's Connect
            </h1>
            <div className="relative">
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you. 
                Let's create something amazing together.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent dark:via-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Send className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  Send Me a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and I'll get back to you within 24-48 hours.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      <User className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      Full Name *
                    </label>
                    <Input
                      name="from_name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 focus:shadow-lg transition-all duration-200 hover:shadow-md"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      Email Address *
                    </label>
                    <Input
                      name="reply_to"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 focus:shadow-lg transition-all duration-200 hover:shadow-md"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 focus:shadow-lg transition-all duration-200 hover:shadow-md"
                  />
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 focus:shadow-lg transition-all duration-200 resize-none hover:shadow-md"
                  />
                  <input type="hidden" name="to_email" value="ankit_kumar.ug@nsu.ac.in" />
                  <input type="hidden" name="to_name" value="Ankit Kumar" />
                  <input type="hidden" name="user_email" value="ak5569387@gmail.com" />
                </div>
                
                <div className="relative group">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group-hover:shadow-2xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </div>
                    )}
                  </Button>
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
                
                {!emailjsConfigured && (
                  <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/20">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <AlertTitle className="text-orange-800 dark:text-orange-300">Email Service Configuration</AlertTitle>
                    <AlertDescription className="text-orange-700 dark:text-orange-400">
                      EmailJS service needs configuration. Messages will open your email client as fallback.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/40 dark:to-purple-950/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-6 text-blue-800 dark:text-blue-300 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group/item hover:bg-white/50 dark:hover:bg-gray-800/50 p-3 rounded-xl transition-all duration-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200">Email</div>
                    <a 
                      href="mailto:ankit_kumar.ag22@nsut.ac.in" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm break-all hover:underline"
                    >
                      ankit_kumar.ag22@nsut.ac.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group/item hover:bg-white/50 dark:hover:bg-gray-800/50 p-3 rounded-xl transition-all duration-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200 group-hover/item:text-green-600 dark:group-hover/item:text-green-400 transition-colors duration-200">Phone</div>
                    <a 
                      href="tel:+917217734805" 
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors text-sm hover:underline"
                    >
                      +91 7217734805
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group/item hover:bg-white/50 dark:hover:bg-gray-800/50 p-3 rounded-xl transition-all duration-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-200">Location</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">New Delhi, India - 110044</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-950/40 dark:to-pink-950/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-6 text-purple-800 dark:text-purple-300 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Github className="h-4 w-4 text-white" />
                </div>
                Let's Connect
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/Ankitkumar72177" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                >
                  <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover/link:rotate-6 transition-transform duration-300 shadow-md">
                    <Github className="h-4 w-4 text-white dark:text-gray-900" />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/link:text-gray-900 dark:group-hover/link:text-white transition-colors">
                    GitHub
                  </span>
                  <div className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity duration-200">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover/link:rotate-6 transition-transform duration-300 shadow-md">
                    <Linkedin className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/link:text-gray-900 dark:group-hover/link:text-white transition-colors">
                    LinkedIn
                  </span>
                  <div className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity duration-200">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-br from-green-50/80 to-teal-50/80 dark:from-green-950/40 dark:to-teal-950/40 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-300 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl group-hover:bg-white/70 dark:group-hover:bg-gray-800/70 transition-all duration-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-md"></div>
                  <span className="text-green-700 dark:text-green-300 font-medium">Available for freelance</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl group-hover:bg-white/70 dark:group-hover:bg-gray-800/70 transition-all duration-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-md"></div>
                  <span className="text-green-700 dark:text-green-300 font-medium">Open to collaborations</span>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-green-100/50 to-teal-100/50 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl border border-green-200/30 dark:border-green-800/30">
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                    💬 I typically respond within 24-48 hours. Let's discuss your project and bring your ideas to life!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
