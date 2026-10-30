import React, { useState } from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1>Student Management System</h1>
    </header>
  );
}

function StudentProfile({ name, department, year, count, setCount }) {
  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div className="profile">
      <h2>Student Practice Tracker</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
      <p className="count">Practice Count: {count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          Complete Practice
        </button>

        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Student Management System</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="app">
      <Header />

      <main className="main">
        <button
          className="toggle"
          onClick={() => setShowProfile(!showProfile)}
        >
          {showProfile ? 'Hide Profile' : 'Show Profile'}
        </button>

        {showProfile && (
          <StudentProfile
            name="Anu"
            department="CSE"
            year="3rd Year"
            count={count}
            setCount={setCount}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;