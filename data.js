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

// Counter to make IDs 100% unique
let complaintCounter = 1;

function generateTrackingId() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  
  // Format: FTN-YYYYMMDD-XXXX (XXXX is unique number)
  const uniqueId = `FTN-${year}${month}${day}-${String(complaintCounter).padStart(4, '0')}`;
  
  complaintCounter++;   // Increase counter for next complaint
  return uniqueId;
}

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

// Make functions global
window.getComplaints = getComplaints;
window.addComplaint = addComplaint;
window.updateReply = updateReply;
window.generateTrackingId = generateTrackingId;
