# 🎓 Eventora — College Event Management System

**Eventora** is a role-based Full-Stack Web Application designed to streamline event discovery, registration, organizer management, and administrative approvals for college campuses.

---

## ✨ Key Features

### 👨‍🎓 Student Workspace
* **Discover Events:** Browse upcoming technical, cultural, workshop, and sports events with live category filtering and real-time search.

* **Instant Registration:** One-click registration for events with dynamic seat tracking.

* **Digital Event Pass:** Automatically generated entry pass with student QR code.

* **Personalized Dashboard:** Track registered events, view certificates, and submit feedback.

### 🏛️ Event Organizer Workspace
* **Event Creation:** Submit detailed event proposals (title, venue, time, capacity, description) for Admin approval.

* **Dynamic Registrations Management:** Select active events to view real-time capacity progress, inspect registered students, and approve pending entries.

* **Attendance & QR Verification:** Monitor checked-in status and venue attendance metrics.

* **Announcements & Analytics:** Broadcast live updates to participants and view category-wise engagement charts.

### 🛡️ Admin Workspace
* **Central Event Master View:** Monitor all active, live, and completed events with organizer ownership and attendance stats.

* **Approval Workflow:** Review pending event submissions with one-click **Approve** or **Reject** actions.

* **Unified User Management:** Manage system access and toggle account statuses for Students, Organizers, and Admins from a single interface.

* **System Reports & Analytics:** High-level metrics tracking overall campus participation trends and department engagement.

---

## 🛠️ Tech Stack

## 🛠️ Tech Stack & Architecture

* **Framework:** Vanilla JavaScript (ES6+)

* **Styling:** Custom CSS3 (Flexbox, CSS Grid, Custom Design Variables)

* **Charts:** Chart.js / Dynamic CSS Progress Charts

* **UI Components:** Custom Responsive Modals, Dynamic Toast Notifications, Role-based Views

* **Forms:** HTML5 Native Forms with Asynchronous `fetch()` Submit Handlers

* **State Management:** In-Memory Application State with `localStorage` Persistence

* **Icons:** FontAwesome Icons

* **Backend Runtime:** Node.js

* **Server Framework:** Express.js

* **Database:** MongoDB with Mongoose ODM

---

## 🚀 Getting Started

Follow these steps to set up and run Eventora locally:

* **Prerequisites**
Node.js (v16.0 or higher) installed on your system.

1. **Clone or Download Project**
Open your project directory in terminal:

```bash
cd eventora-project
```

2. **Install Dependencies**
Run the following command to install Express and CORS:

```bash
npm install
```
(If starting fresh, run npm init -y followed by npm install express cors)

3. **Start the Backend Server**

```bash
node server.js
```
You should see:

```bash
Backend Server running on http://localhost:5000 🚀
```

4. **Launch the Application**

* Open index.html directly in your web browser, OR
* Use VS Code's Live Server extension to launch the app.

## 🔒 Role Switcher (Demo Setup)

For testing purposes, you can switch roles directly from the Login Modal:

* **Student**: Student role access with home feed & registrations.

* **Event Organizer**: Organizer role access with event creation & registration manager.

* **Admin**: Admin role access with event approvals & system reports.