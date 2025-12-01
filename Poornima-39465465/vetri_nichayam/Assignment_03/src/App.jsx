// src/App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"; // app styling

function StudentsSection() {
  const list = [
    { name: "Anil", dept: "ECE", year: 2 },
    { name: "Meera", dept: "CSE", year: 3 },
    { name: "Ramesh", dept: "IT", year: 1 },
  ];
  return (
    <section id="students" className="section">
      <div className="section-inner">
        <h2 className="section-title">Students</h2>
        <div className="card-row">
          {list.map((s, i) => (
            <div key={i} className="card">
              <div className="card-title">{s.name}</div>
              <div className="muted">{s.dept}</div>
              <div className="muted small">{s.year} year</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoginSection() {
  const [logged] = useState(false);
  return (
    <section id="login" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">Account</h2>
        <div className="wide-card">
          {logged ? (
            <div className="badge success">Signed in</div>
          ) : (
            <div className="badge">Please sign in</div>
          )}
          <p className="muted">
            Demo account state shown here. (Change in code to preview)
          </p>
        </div>
      </div>
    </section>
  );
}

function ProfilesSection() {
  const people = [
    { name: "Kavya", role: "Designer" },
    { name: "Arjun", role: "Developer" },
    { name: "Siva", role: "Project Lead" },
  ];
  return (
    <section id="profiles" className="section">
      <div className="section-inner">
        <h2 className="section-title">Team</h2>
        <div className="card-row">
          {people.map((p, i) => (
            <div key={i} className="profile-card">
              <div className="avatar">pic</div>
              <div className="card-title">{p.name}</div>
              <div className="muted">{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InputSection() {
  const [val, setVal] = useState("");
  return (
    <section id="input" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">Quick Note</h2>
        <div className="wide-card">
          <input
            className="input"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Type a quick note…"
          />
          <p className="muted">
            Preview: <strong>{val}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  const [res, setRes] = useState(null);
  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    setRes({ name: f.get("name"), email: f.get("email") });
  }
  return (
    <section id="form" className="section">
      <div className="section-inner">
        <h2 className="section-title">Contact</h2>
        <div className="grid-2">
          <form onSubmit={submit} className="card">
            <label>Name</label>
            <input name="name" className="input" />
            <label>Email</label>
            <input name="email" className="input" />
            <div style={{ marginTop: 8 }}>
              <button className="btn">Send</button>
            </div>
          </form>
          <div className="card">
            <h4>Submission</h4>
            {res ? (
              <pre className="mono">{JSON.stringify(res, null, 2)}</pre>
            ) : (
              <div className="muted">No submission yet.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const items = [
    { id: 1, name: "Mouse", price: 250 },
    { id: 2, name: "Keyboard", price: 650 },
    { id: 3, name: "Headset", price: 1200 },
  ];
  return (
    <section id="products" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">Products</h2>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>₹{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function AlertSection() {
  function show() {
    alert("Hello — from child!");
  }
  return (
    <section id="alert" className="section">
      <div className="section-inner">
        <h2 className="section-title">Interactive</h2>
        <div className="card-row">
          <div className="card">
            <button className="btn" onClick={show}>
              Show Alert
            </button>
          </div>
          <div className="card muted">
            Click the button to see a browser alert (demo).
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterSection() {
  const products = [
    { name: "Lamp", cat: "Home" },
    { name: "Tshirt", cat: "Clothes" },
    { name: "Sofa", cat: "Home" },
  ];
  const [cat, setCat] = useState("All");
  const shown =
    cat === "All" ? products : products.filter((p) => p.cat === cat);
  return (
    <section id="filter" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">Filter</h2>
        <div className="controls">
          <button className="chip" onClick={() => setCat("All")}>
            All
          </button>
          <button className="chip" onClick={() => setCat("Home")}>
            Home
          </button>
          <button className="chip" onClick={() => setCat("Clothes")}>
            Clothes
          </button>
        </div>
        <div className="card-row" style={{ marginTop: 12 }}>
          {shown.map((p, i) => (
            <div className="card" key={i}>
              {p.name} <div className="muted small">{p.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchSection() {
  const studs = ["Bala", "Divya", "Kumar", "Nisha"];
  const [q, setQ] = useState("");
  return (
    <section id="search" className="section">
      <div className="section-inner">
        <h2 className="section-title">Search</h2>
        <input
          className="input"
          placeholder="Search students..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div style={{ marginTop: 8 }}>
          {studs
            .filter((s) => s.toLowerCase().includes(q.toLowerCase()))
            .map((s, i) => (
              <div key={i} className="muted">
                {s}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function LocalDataSection() {
  const data = [
    { name: "Pen", price: 12 },
    { name: "Book", price: 60 },
    { name: "Mug", price: 120 },
  ];
  return (
    <section id="local" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">Local Items</h2>
        <div className="card-row">
          {data.map((d, i) => (
            <div key={i} className="card">
              {d.name} — ₹{d.price}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FetchSection() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let alive = true;
    fetch("https://dummyjson.com/products")
      .then((r) => r.json())
      .then((d) => {
        if (alive) setItems(d.products.slice(0, 3));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  return (
    <section id="fetch" className="section">
      <div className="section-inner">
        <h2 className="section-title">Latest Products</h2>
        <div className="card-row">
          {items.map((it) => (
            <div className="card" key={it.id}>
              {it.title} <div className="muted small">₹{it.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoadingSection() {
  const [s, setS] = useState({ loading: true, error: false, data: [] });
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((r) => r.json())
      .then((d) => setS({ loading: false, error: false, data: d.products }))
      .catch(() => setS({ loading: false, error: true, data: [] }));
  }, []);
  if (s.loading)
    return (
      <section className="section alt">
        <div className="section-inner">
          <h2 className="section-title">Loading</h2>
          <div className="muted">Please wait…</div>
        </div>
      </section>
    );
  if (s.error)
    return (
      <section className="section alt">
        <div className="section-inner">
          <h2 className="section-title">Error</h2>
          <div className="muted">Could not load</div>
        </div>
      </section>
    );
  return (
    <section id="loading" className="section">
      <div className="section-inner">
        <h2 className="section-title">Top Results</h2>
        {s.data.slice(0, 2).map((d) => (
          <div className="card" key={d.id}>
            {d.title}
          </div>
        ))}
      </div>
    </section>
  );
}

function AddSection() {
  const [msg, setMsg] = useState("");
  async function submit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    try {
      await axios.post("https://dummyjson.com/posts/add", {
        title: f.get("title"),
        body: f.get("body"),
      });
      setMsg("Post added");
    } catch {
      setMsg("Error");
    }
  }
  return (
    <section id="add" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">Add Post</h2>
        <form onSubmit={submit} className="card">
          <input name="title" className="input" placeholder="Title" />
          <input name="body" className="input" placeholder="Body" />
          <button className="btn">Send</button>
          <div className="muted" style={{ marginTop: 8 }}>
            {msg}
          </div>
        </form>
      </div>
    </section>
  );
}

function EditUserSection() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/1")
      .then((r) => setUser(r.data))
      .catch(() => {});
  }, []);
  function change(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function update() {
    axios
      .put("https://dummyjson.com/users/1", user)
      .then(() => alert("Updated"))
      .catch(() => alert("Err"));
  }
  return (
    <section id="edit-user" className="section">
      <div className="section-inner">
        <h2 className="section-title">Edit User</h2>
        <div className="grid-2">
          <div className="card">
            <label>First name</label>
            <input
              name="firstName"
              className="input"
              value={user.firstName || ""}
              onChange={change}
            />
            <label>Email</label>
            <input
              name="email"
              className="input"
              value={user.email || ""}
              onChange={change}
            />
            <div>
              <button className="btn" onClick={update}>
                Update
              </button>
            </div>
          </div>
          <div className="card">
            <h4>Current</h4>
            <pre className="mono">{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaginationSection() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((r) => r.json())
      .then((d) => setUsers(d.users))
      .catch(() => {});
  }, []);
  const shown = users.slice(page * 5, page * 5 + 5);
  return (
    <section id="users" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">Users</h2>
        <div className="card">
          {shown.map((u) => (
            <div key={u.id}>{u.firstName}</div>
          ))}
          <div style={{ marginTop: 8 }}>
            <button
              className="chip"
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
            >
              Prev
            </button>{" "}
            <button
              className="chip"
              disabled={(page + 1) * 5 >= users.length}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RouterDemoSection() {
  return (
    <section id="router" className="section">
      <div className="section-inner">
        <h2 className="section-title">Routing (Demo)</h2>
        <div className="card muted">
          This page is a single-page demo. Real navigation is configured at app
          level.
        </div>
      </div>
    </section>
  );
}

function NestedDemoSection() {
  return (
    <section id="nested" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">Nested Routes (Demo)</h2>
        <div className="card muted">
          Nested routing works in a full app context; shown here as UI only.
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Top navigation ---------------------- */
function TopNav() {
  const links = [
    { id: "students", label: "Students" },
    { id: "profiles", label: "Team" },
    { id: "products", label: "Products" },
    { id: "search", label: "Search" },
    { id: "users", label: "Users" },
    { id: "add", label: "Add Post" },
  ];
  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <div className="brand">MyAssignment</div>
        <nav className="navlinks">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="navlink">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ---------------------- Main App ---------------------- */
export default function App() {
  return (
    <div className="page">
      <TopNav />
      <main>
        <StudentsSection />
        <LoginSection />
        <ProfilesSection />
        <InputSection />
        <FormSection />
        <ProductsSection />
        <AlertSection />
        <FilterSection />
        <SearchSection />
        <LocalDataSection />
        <FetchSection />
        <LoadingSection />
        <AddSection />
        <EditUserSection />
        <PaginationSection />
        <RouterDemoSection />
        <NestedDemoSection />
      </main>

      <footer className="site-footer">
        <div className="container">Assignment 3 - done</div>
      </footer>
    </div>
  );
}
