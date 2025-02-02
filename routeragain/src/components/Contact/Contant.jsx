import { MapPin, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
              <p className="text-lg mb-8">Fill in the form to start a conversation</p>

              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 mr-4" />
                <div className="text-sm">
                  Acme Inc, 123 Maple Street,
                  <br />
                  Anytown, PA 17101
                </div>
              </div>

              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 mr-4" />
                <div className="text-sm">+1 (555) 123-4567</div>
              </div>

              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 mr-4" />
                <div className="text-sm">contact@acme.org</div>
              </div>
            </div>

            <form className="p-8 bg-white">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input type="text" name="name" id="name" placeholder="John Doe" required />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" name="email" id="email" placeholder="john@example.com" required />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input type="tel" name="phone" id="phone" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea name="message" id="message" placeholder="Your message here..." rows={4} required />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


