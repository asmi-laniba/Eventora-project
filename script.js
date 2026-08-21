// Public Student Events List
const events = [ 
  {id: 1, title: "CodeSprint 2026", cat: "Technical", date: "Aug 22, 2026", time: "10:00 AM", venue: "Innovation Lab", desc: "A fast-paced coding challenge with real-world problem solving.", reg: true}, 
  {id: 2, title: "Rhythm & Roots", cat: "Cultural", date: "Aug 25, 2026", time: "4:00 PM", venue: "Open Air Auditorium", desc: "Music, dance and performances celebrating campus talent.", reg: false}, 
  {id: 3, title: "UI/UX Design Workshop", cat: "Workshop", date: "Aug 28, 2026", time: "2:00 PM", venue: "Design Block · Room 204", desc: "Learn user research, wireframing and prototyping hands-on.", reg: true}, 
  {id: 4, title: "Inter-College Cricket", cat: "Sports", date: "Sep 02, 2026", time: "8:00 AM", venue: "College Ground", desc: "Compete with colleges across the district.", reg: false}, 
  {id: 5, title: "AI & Future Tech", cat: "Technical", date: "Sep 06, 2026", time: "11:00 AM", venue: "Seminar Hall", desc: "Explore emerging AI trends, careers and responsible innovation.", reg: false}, 
  {id: 6, title: "Photography Walk", cat: "Workshop", date: "Sep 10, 2026", time: "7:00 AM", venue: "Main Gate", desc: "A guided campus photography and storytelling walk.", reg: false} 
]; 

// Complete Organized Events List with Organizer Club Info
let organizerEvents = [
  {id: 1, title: "CodeSprint 2026", organizer: "Tech Club", cat: "Technical", date: "Aug 22, 2026", time: "10:00 AM", venue: "Innovation Lab", desc: "Fast-paced coding challenge.", status: "Completed", attended: 120, totalSeats: 120},
  {id: 2, title: "Rhythm & Roots", organizer: "Media & Cultural Club", cat: "Cultural", date: "Aug 25, 2026", time: "4:00 PM", venue: "Open Air Auditorium", desc: "Music & dance showcase.", status: "Completed", attended: 210, totalSeats: 250},
  {id: 3, title: "UI/UX Design Workshop", organizer: "Design Society", cat: "Workshop", date: "Aug 28, 2026", time: "2:00 PM", venue: "Design Block · Room 204", desc: "Hands-on prototyping.", status: "Approved", registered: 86, totalSeats: 120},
  {id: 4, title: "Inter-College Cricket", organizer: "Sports Council", cat: "Sports", date: "Sep 02, 2026", time: "8:00 AM", venue: "College Ground", desc: "District college tournament.", status: "Approved", registered: 110, totalSeats: 120},
  {id: 5, title: "AI & Future Tech", organizer: "Tech Club", cat: "Technical", date: "Sep 06, 2026", time: "11:00 AM", venue: "Seminar Hall", desc: "Exploring AI trends & ethics.", status: "Pending", registered: 0, totalSeats: 100},
  {id: 6, title: "Photography Walk", organizer: "Media Club", cat: "Workshop", date: "Sep 10, 2026", time: "7:00 AM", venue: "Main Gate", desc: "Campus photography guided tour.", status: "Pending", registered: 0, totalSeats: 50},
  {id: 7, title: "Web Dev Hackathon", organizer: "Coding Society", cat: "Technical", date: "Jul 15, 2026", time: "9:00 AM", venue: "IT Block Lab 3", desc: "24-hour web creation sprint.", status: "Completed", attended: 95, totalSeats: 100},
  {id: 8, title: "Cloud Computing Seminar", organizer: "Tech Club", cat: "Workshop", date: "Jul 02, 2026", time: "11:00 AM", venue: "Audi 2", desc: "AWS & Azure ecosystem insights.", status: "Completed", attended: 78, totalSeats: 80},
  {id: 9, title: "Poster Design Contest", organizer: "Art & Fine Arts Club", cat: "Cultural", date: "Jun 20, 2026", time: "2:00 PM", venue: "Art Studio", desc: "Creative graphic design battle.", status: "Completed", attended: 45, totalSeats: 50},
  {id: 10, title: "Cyber Security Summit", organizer: "CSE Department", cat: "Technical", date: "Jun 10, 2026", time: "10:00 AM", venue: "Main Seminar Hall", desc: "Ethical hacking and network defense.", status: "Completed", attended: 150, totalSeats: 150},
  {id: 11, title: "Robotics Expo 2026", organizer: "Robotics Club", cat: "Technical", date: "May 28, 2026", time: "9:30 AM", venue: "Mech Block Yard", desc: "Automated bots demonstration.", status: "Completed", attended: 130, totalSeats: 150},
  {id: 12, title: "Game Dev Masterclass", organizer: "Coding Society", cat: "Workshop", date: "May 12, 2026", time: "1:30 PM", venue: "Lab 102", desc: "Unity 3D game engines workshop.", status: "Completed", attended: 65, totalSeats: 70}
];

// Unified System Users Data (Students, Organizers & Admins)
let systemUsers = [
  {id: 1, name: "Sahaya Asmi", role: "Student", dept: "CSE", status: "Active"},
  {id: 2, name: "Arun Kumar", role: "Organizer", dept: "Tech Club", status: "Active"},
  {id: 3, name: "Riya Thomas", role: "Organizer", dept: "Media Club", status: "Pending"},
  {id: 4, name: "John Peter", role: "Student", dept: "ECE", status: "Active"},
  {id: 5, name: "Anitha M", role: "Student", dept: "IT", status: "Active"},
  {id: 6, name: "Priya Admin", role: "Admin", dept: "District Admin", status: "Active"}
];

// Sample Registered Students Data per Event
let eventRegistrationsData = {
  3: [
    {id: 1, name: "Sahaya Asmi", dept: "CSE", status: "Confirmed"},
    {id: 2, name: "Riya Thomas", dept: "ECE", status: "Confirmed"},
    {id: 3, name: "John Peter", dept: "CSE", status: "Pending"},
    {id: 4, name: "Anitha M", dept: "IT", status: "Pending"}
  ]
};

const $ = s => document.querySelector(s); 
let role = "Student"; 

const roleScreens = {
  Student: ["home", "explore", "registrations", "notifications", "feedback"],
  Organizer: ["orgDashboard", "create", "manage", "attendance", "announcements", "analytics"],
  Admin: ["adminEvents", "approvals", "users", "monitor", "reports"]
}; 

function applyRole() { 
  $("#roleBadge").textContent = role; 
  $(".search").classList.toggle("hidden", role !== "Student");

  $("#studentNav").classList.toggle("hidden", role !== "Student"); 
  $("#studentLabel").classList.toggle("hidden", role !== "Student"); 
  $("#organizerNav").classList.toggle("hidden", role !== "Organizer"); 
  $("#organizerLabel").classList.toggle("hidden", role !== "Organizer"); 
  $("#adminNav").classList.toggle("hidden", role !== "Admin"); 
  $("#adminLabel").classList.toggle("hidden", role !== "Admin"); 
  $("#roleFoot").textContent = role + " workspace — role-restricted access"; 
} 

function go(screen) { 
  if (!roleScreens[role].includes(screen)) {
    toast("Access denied for this role 🔒");
    return;
  } 
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === screen)); 
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('active', b.dataset.screen === screen)); 
} 

document.querySelectorAll('.nav button').forEach(b => b.onclick = () => go(b.dataset.screen)); 
document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go)); 

function card(e) { 
  return `<article class="event"><div class="event-top"><div class="icon">✦</div><span class="tag">${e.cat}</span></div><h3>${e.title}</h3><p>${e.desc}</p><div class="meta"><span>◷ ${e.date}</span><span>⌖ ${e.venue}</span></div><div class="actions"><button class="btn light" onclick="openEvent(${e.id})">Details</button><button class="btn ${e.reg ? 'success' : 'primary'}" onclick="registerEvent(${e.id})">${e.reg ? '✓ Registered' : 'Register'}</button></div></article>`; 
} 

function renderHome() { $("#homeEvents").innerHTML = events.slice(0, 3).map(card).join(""); } 
function renderExplore(list = events) { $("#exploreEvents").innerHTML = list.map(card).join(""); } 

function renderMine() { 
  const m = events.filter(e => e.reg); 
  $("#myList").innerHTML = m.map(e => `<div style="padding:12px 0;border-bottom:1px solid var(--warm-sand-border);display:flex;justify-content:space-between;gap:8px"><div><b style="font-size:11px">${e.title}</b><div class="sub">${e.date} · ${e.time}</div></div><button class="btn light" onclick="openPass(${e.id})">Event pass</button></div>`).join(""); 
} 

// Render All Approved & Completed Events in Admin Events Screen
function renderAdminEvents() {
  const container = $("#adminEventsGrid");
  if (!container) return;

  const publishedEvents = organizerEvents.filter(e => e.status === "Approved" || e.status === "Completed");

  container.innerHTML = publishedEvents.map(item => {
    let statusClass = item.status === "Completed" ? "completed" : "ok";
    let statusText = item.status === "Completed" ? "Completed" : "Approved / Live";
    let statsDetail = item.status === "Completed" 
      ? `Attended: ${item.attended} / ${item.totalSeats}` 
      : `Registered: ${item.registered || 0} / ${item.totalSeats}`;

    return `
      <article class="event">
        <div class="event-top">
          <div class="icon">✦</div>
          <span class="status ${statusClass}">${statusText}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="meta">
          <span>📅 ${item.date}</span>
          <span>📍 ${item.venue}</span>
        </div>
        <div style="margin-top:12px;padding-top:8px;border-top:1px dashed var(--warm-sand-border);display:flex;justify-content:space-between;font-size:10px;font-weight:bold;color:var(--muted-brown)">
          <span>👤 Organizer: <b>${item.organizer}</b></span>
          <span>📊 ${statsDetail}</span>
        </div>
      </article>
    `;
  }).join("");
}

// Render 12 Organized Events as Cards in Organizer Dashboard
function renderOrgEvents() {
  const container = $("#orgEventGrid");
  if (!container) return;

  $("#orgTotalCount").textContent = organizerEvents.length;
  $("#orgEventBadgeCount").textContent = organizerEvents.length;

  container.innerHTML = organizerEvents.map(item => {
    let statusClass = "pending";
    let statusText = "Pending Approval";
    let detailText = "Awaiting Admin Review";

    if (item.status === "Completed") {
      statusClass = "completed";
      statusText = "Completed";
      detailText = `Attended: ${item.attended} / ${item.totalSeats} students`;
    } else if (item.status === "Approved") {
      statusClass = "ok";
      statusText = "Approved / Live";
      detailText = `Registered: ${item.registered} / ${item.totalSeats} seats`;
    } else if (item.status === "Rejected") {
      statusClass = "reject";
      statusText = "Rejected";
      detailText = "Not published";
    }

    return `
      <article class="event">
        <div class="event-top">
          <div class="icon">✦</div>
          <span class="status ${statusClass}">${statusText}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="meta">
          <span>📅 ${item.date}</span>
          <span>📍 ${item.venue}</span>
        </div>
        <div style="margin-top:12px;padding-top:8px;border-top:1px dashed var(--warm-sand-border);font-size:10px;font-weight:bold;color:var(--muted-brown)">
          📊 ${detailText}
        </div>
      </article>
    `;
  }).join("");
}

// Render System Users Table for Admin
function renderUsersTable() {
  const tbody = $("#userListTable");
  if (!tbody) return;

  tbody.innerHTML = systemUsers.map(u => `
    <tr>
      <td><b>${u.name}</b></td>
      <td><span class="tag">${u.role}</span></td>
      <td>${u.dept}</td>
      <td><span class="status ${u.status === 'Active' ? 'ok' : 'pending'}">${u.status}</span></td>
      <td>
        ${u.status === 'Pending' ? `<button class="btn success" onclick="activateUser(${u.id})">Approve</button>` : u.role !== 'Admin' ? `<button class="btn light" onclick="toggleUserStatus(${u.id})">Toggle Status</button>` : '—'}
      </td>
    </tr>
  `).join("");
}

function activateUser(id) {
  const user = systemUsers.find(x => x.id === id);
  if (user) {
    user.status = "Active";
    renderUsersTable();
    toast("User account activated! ✅");
  }
}

function toggleUserStatus(id) {
  const user = systemUsers.find(x => x.id === id);
  if (user && user.role !== "Admin") {
    user.status = user.status === "Active" ? "Pending" : "Active";
    renderUsersTable();
    toast("User status updated!");
  }
}

// Dynamic Manage Registrations Logic
let selectedManageEventId = 3;

function renderManageRegistrations() {
  const selectDropdown = $("#manageEventSelect");
  const studentTable = $("#manageStudentTable");
  const eventHeader = $("#manageEventTitle");
  const regCountText = $("#manageRegCount");
  const progressBar = $("#manageProgressBar");

  if (!selectDropdown || !studentTable) return;

  const activeEvents = organizerEvents.filter(e => e.status === "Approved" || e.status === "Completed");
  selectDropdown.innerHTML = activeEvents.map(e => `<option value="${e.id}" ${e.id == selectedManageEventId ? 'selected' : ''}>${e.title}</option>`).join("");

  const currentEvent = organizerEvents.find(e => e.id == selectedManageEventId) || activeEvents[0];
  if (!currentEvent) return;

  selectedManageEventId = currentEvent.id;
  eventHeader.textContent = currentEvent.title;

  if (!eventRegistrationsData[selectedManageEventId]) {
    eventRegistrationsData[selectedManageEventId] = [
      {id: 101, name: "John Peter", dept: "CSE", status: "Pending"},
      {id: 102, name: "Anitha M", dept: "IT", status: "Pending"}
    ];
  }
  
  const students = eventRegistrationsData[selectedManageEventId];
  const count = students.filter(s => s.status === "Confirmed").length || currentEvent.registered || currentEvent.attended || 0;
  const percentage = Math.round((count / currentEvent.totalSeats) * 100);

  regCountText.textContent = `${count} / ${currentEvent.totalSeats} confirmed`;
  progressBar.style.width = `${percentage}%`;

  studentTable.innerHTML = students.map(s => `
    <tr>
      <td><b>${s.name}</b></td>
      <td>${s.dept}</td>
      <td><span class="status ${s.status === 'Confirmed' ? 'ok' : 'pending'}">${s.status}</span></td>
      <td>
        ${s.status === 'Pending' ? `<button class="btn success" onclick="confirmStudentReg(${selectedManageEventId}, ${s.id})">Approve</button>` : '—'}
      </td>
    </tr>
  `).join("");
}

function confirmStudentReg(eventId, studentId) {
  if (!eventRegistrationsData[eventId]) {
    eventRegistrationsData[eventId] = [
      {id: 101, name: "John Peter", dept: "CSE", status: "Pending"},
      {id: 102, name: "Anitha M", dept: "IT", status: "Pending"}
    ];
  }

  const st = eventRegistrationsData[eventId].find(x => x.id === studentId);
  if (st) {
    st.status = "Confirmed";
    renderManageRegistrations();
    toast("Student registration confirmed! ✅");
  }
}

// Render Pending Approvals for Admin Screen
function renderApprovals() {
  const tbody = $("#approvalList");
  if (!tbody) return;
  const pendingItems = organizerEvents.filter(x => x.status === "Pending" || x.status === "Rejected" || x.status === "Approved");
  tbody.innerHTML = pendingItems.map(item => `
    <tr>
      <td><b>${item.title}</b><br><small style="color:var(--muted-brown)">${item.cat} · ${item.venue}</small></td>
      <td>${item.organizer}</td>
      <td>
        <span class="status ${item.status === 'Approved' ? 'ok' : item.status === 'Rejected' ? 'reject' : 'pending'}">
          ${item.status}
        </span>
      </td>
      <td>
        ${item.status === 'Pending' ? `
          <button class="btn success" onclick="approveEvent(${item.id})">Approve</button>
          <button class="btn danger" onclick="rejectEvent(${item.id})">Reject</button>
        ` : '—'}
      </td>
    </tr>
  `).join("");
}

// Organizer Event Creation Handler
// Organizer Event Creation Handler (Connected to Backend API)
// Organizer Event Creation Handler (Connected to Backend API + Live UI Update)
$("#createForm").onsubmit = async function(e) {
  e.preventDefault(); 
  
  const eventData = {
    id: Date.now(),
    title: e.target.title.value,
    organizer: "Event Organizer",
    cat: e.target.cat.value,
    date: e.target.date.value,
    time: e.target.time.value,
    venue: e.target.venue.value,
    desc: e.target.desc.value,
    status: "Pending",
    registered: 0,
    totalSeats: e.target.capacity.value || 100
  };

  try {
    const response = await fetch('http://localhost:5000/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    
    const data = await response.json();
    
    // 1. Frontend-la irukkura Local Array-la add panrom
    organizerEvents.unshift(eventData);

    // 2. Organizer Dashboard UI-a Refresh panrom (12 events 13-a maarum)
    renderOrgEvents();

    // 3. Admin Approval List-a Refresh panrom (Admin page-kku approval varum)
    renderApprovals();

    toast(data.message);
    e.target.reset();
    go("orgDashboard");
  } catch (err) {
    toast("Backend Server கூட connect ஆகல ❌");
  }
};
function approveEvent(id) {
  const item = organizerEvents.find(x => x.id === id);
  if (item) {
    item.status = "Approved";
    item.registered = 0;
    
    events.unshift({
      id: item.id,
      title: item.title,
      cat: item.cat,
      date: item.date || "Upcoming",
      time: item.time || "10:00 AM",
      venue: item.venue,
      desc: item.desc,
      reg: false
    });

    renderHome();
    renderExplore();
    renderApprovals();
    renderOrgEvents();
    renderAdminEvents();
    renderManageRegistrations();
    toast("Event approved and published! ✅");
  }
}

function rejectEvent(id) {
  const item = organizerEvents.find(x => x.id === id);
  if (item) {
    item.status = "Rejected";
    renderApprovals();
    renderOrgEvents();
    toast("Event rejected ❌");
  }
}

function openEvent(id) { 
  const e = events.find(x => x.id === id); 
  if (!e) return;
  $("#modalContent").innerHTML = `<span class="eyebrow">${e.cat.toUpperCase()}</span><h2 style="margin-top:6px">${e.title}</h2><div class="sub">${e.desc}</div><div class="detail"><div>DATE<b>${e.date}</b></div><div>TIME<b>${e.time}</b></div><div>VENUE<b>${e.venue}</b></div><div>STATUS<b>${e.reg ? 'Registered' : 'Open'}</b></div></div><button class="btn ${e.reg ? 'success' : 'primary'}" onclick="registerEvent(${id});closeModal()">${e.reg ? '✓ Confirmed' : 'Register now →'}</button>`; 
  $("#modal").classList.add("show"); 
} 

function openPass(id) {
  $("#modalContent").innerHTML = `<span class="eyebrow">DIGITAL EVENT PASS</span><h2 style="margin-top:7px">Entry Pass</h2><div class="sub">Sahaya Asmi · CSE · EH-2026-0184</div><div class="qr"></div><button class="btn dark" onclick="toast('Pass saved')">Save pass</button>`;
  $("#modal").classList.add("show");
} 

function closeModal() { $("#modal").classList.remove("show"); } 

function registerEvent(id) {
  const found = events.find(e => e.id === id);
  if (found) {
    found.reg = true;
    renderHome();
    renderExplore();
    renderMine();
    toast("Registration confirmed 🎉");
  }
} 

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._t);
  window._t = setTimeout(() => t.classList.remove("show"), 2400);
} 

$("#filters").onclick = e => {
  const b = e.target.closest(".filter");
  if (!b) return;
  document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  renderExplore(b.dataset.filter === "All" ? events : events.filter(x => x.cat === b.dataset.filter));
};

$("#search").oninput = e => {
  const q = e.target.value.toLowerCase();
  go("explore");
  renderExplore(events.filter(x => (x.title + " " + x.cat + " " + x.venue).toLowerCase().includes(q)));
};

$("#logout").onclick = () => {
  $("#login").classList.remove("hidden");
  $("#app").classList.add("hidden");
  $("#appTop").classList.add("hidden");
}; 

let signup = false; 

function updateLoginMode() { 
  $("#nameWrap").classList.toggle("hidden", !signup); 
  $("#loginTitle").textContent = signup ? "Create your account" : "Welcome back"; 
  $("#loginBtn").textContent = signup ? "Create account →" : "Sign in →"; 
  $("#signInTab").classList.toggle("active", !signup);
  $("#signUpTab").classList.toggle("active", signup); 
  $("#switch").innerHTML = signup ? 'Already have an account? <button type="button" id="switchBtn">Sign in</button>' : 'New here? <button type="button" id="switchBtn">Create an account</button>'; 
  $("#switchBtn").onclick = () => { signup = !signup; updateLoginMode(); }; 
} 

$("#signUpTab").onclick = () => { signup = true; updateLoginMode(); }; 
$("#signInTab").onclick = () => { signup = false; updateLoginMode(); }; 

$("#loginBtn").onclick = () => { 
  role = $("#roleSelect").value;
  applyRole();
  $("#login").classList.add("hidden");
  $("#app").classList.remove("hidden");
  $("#appTop").classList.remove("hidden");
  go(role === "Student" ? "home" : role === "Organizer" ? "orgDashboard" : "adminEvents");
  toast((signup ? "Account created" : "Signed in") + " successfully • " + role); 
}; 

document.addEventListener("change", function(e) {
  if (e.target && e.target.id === "manageEventSelect") {
    selectedManageEventId = e.target.value;
    renderManageRegistrations();
  }
});

applyRole();
renderHome();
renderExplore();
renderMine();
renderOrgEvents();
renderAdminEvents();
renderUsersTable();
renderApprovals();
renderManageRegistrations();