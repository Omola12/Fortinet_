// data.js
let complaints = [
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

function getComplaints() {
  return complaints;
}

function addComplaint(newComplaint) {
  complaints.push(newComplaint);
  return newComplaint;
}

function updateReply(id, replyText) {
  const complaint = complaints.find(c => c.id === id);
  if (complaint) {
    complaint.reply = replyText;
    complaint.status = "Resolved";
  }
}

// Make functions globally available
window.getComplaints = getComplaints;
window.addComplaint = addComplaint;
window.updateReply = updateReply;
