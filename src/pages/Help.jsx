const Help = () => {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 700, margin: '0 auto', textAlign: 'center', background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(44,62,80,0.06)' }}>
      <h2>Help & Concepts</h2>
      <p>Here you'll find explanations of React and Redux concepts used in this app.</p>
      <ul style={{ textAlign: 'left', margin: '2rem auto', maxWidth: 500 }}>
        <li><b>React Components</b>: Building UI in reusable pieces.</li>
        <li><b>React Router</b>: Navigation between pages.</li>
        <li><b>Redux Toolkit</b>: State management for features like cart and UI.</li>
        <li><b>Redux Slices</b>: Modular state logic for each feature.</li>
        <li><b>Responsive Design</b>: Mobile-friendly layouts.</li>
        <li><b>Tooltips</b>: UI hints for better UX.</li>
      </ul>
    </div>
  );
};

export default Help;
