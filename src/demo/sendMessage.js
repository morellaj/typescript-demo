export const sendMessage = (method, contact) => {
  if(method === "email"){
    return `Email sent to ${contact.name} using email address ${contact.address}`
  }
  if(method === "phone") {
    return `Text message sent to ${contact.name} using phone number ${contact.number}`
  }
  return null;
}