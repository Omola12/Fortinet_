// data.js
let complaints = [
  // Example data
  {
    id: "FTN-20260523001",
    date: "2026-05-23",
    customerName: "John Doe",
    email: "john@example.com",
    phone: "08012345678",
    service: "Product Purchase",
    complaint: "The item I received is damaged.",
    status: "Pending",
    reply: ""
  }
];

export function getComplaints() {
  return complaints;
}

export function addComplaint(newComplaint) {
  complaints.push(newComplaint);
  return newComplaint;
}

export function updateReply(id, replyText) {
  const complaint = complaints.find(c => c.id === id);
  if (complaint) {
    complaint.reply = replyText;
    complaint.status = "Resolved";
  }
}
