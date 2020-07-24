interface EmailContact {
  name: string,
  address: string
}

interface PhoneContact {
  name: string,
  number: string
}

export function sendMessage(method: "email", contact: EmailContact): string | null;
export function sendMessage(method: "phone", contact: PhoneContact): string | null;

export function sendMessage (method: "email"| "phone", contact: (EmailContact | PhoneContact)): string | null {
  if(method === "email"){
    return `Email sent to ${contact.name} using email address ${(contact as EmailContact).address}`
  }
  if(method === "phone") {
    return `Text message sent to ${contact.name} using phone number ${(contact as PhoneContact).number}`
  }
  return null;
}