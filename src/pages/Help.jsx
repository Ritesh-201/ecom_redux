import styles from './Help.module.css';

const Help = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Help & Concepts</h2>
      <p className={styles.subHeading}>Here you'll find explanations of key technologies and concepts used in this application.</p>

      <h3 className={styles.sectionTitle}>Core Concepts</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}><b>React Components</b>: The building blocks of our user interface, allowing us to create reusable and modular UI elements.</li>
        <li className={styles.listItem}><b>React Router</b>: Used for declarative routing, enabling navigation between different pages and views within the single-page application.</li>
        <li className={styles.listItem}><b>Redux Toolkit</b>: The official, opinionated, batteries-included toolset for efficient Redux development. It simplifies state management by providing utilities to reduce boilerplate code.</li>
        <li className={styles.listItem}><b>Redux Slices</b>: A feature of Redux Toolkit that combines a reducer, its corresponding actions, and initial state into a single file, making Redux code more organized and easier to manage.</li>
        <li className={styles.listItem}><b>Order Management</b>: Functionality to handle the placement of new orders and display a history of past orders for the logged-in user.</li>
        <li className={styles.listItem}><b>Notifications</b>: A real-time system providing user feedback for actions like adding items to the cart or placing an order.</li>
        <li className={styles.listItem}><b>Responsive Design</b>: The application's layout and elements adapt to various screen sizes, ensuring a consistent and accessible experience across mobile, tablet, and desktop devices.</li>
        <li className={styles.listItem}><b>Lazy Loading Images</b>: Images in the store are loaded only when they are about to enter the viewport, improving initial page load performance.</li>
        <li className={styles.listItem}><b>Product Pagination</b>: Products in the store are fetched in chunks, allowing for efficient loading and display of a large number of products with a "Load More" option.</li>
      </ul>

      <h3 className={styles.sectionTitle}>Redux Specifics</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}><b><code className={styles.code}>useSelector</code> Hook</b>: A React Redux hook that allows your React components to subscribe to the Redux store and extract specific pieces of state. When the selected state changes, the component re-renders. This ensures components only re-render when the data they care about changes, optimizing performance.</li>
        <li className={styles.listItem}><b>Multi-Tenant Login</b>: In this application, "multi-tenant" refers to how user-specific data (like cart and order history) is managed. Each logged-in user (identified by their email as <code className={styles.code}>tenantId</code>) has their own isolated cart and order history within the Redux store. This design allows multiple users to use the application, and their data remains separate and secure.</li>
        <li className={styles.listItem}><b>Local Storage Usage</b>: The application uses <code className={styles.code}>redux-persist</code> to save the Redux store's state to the browser's local storage. This means that even if you close and reopen your browser, your login status, cart items, and order history will be preserved, providing a persistent user experience.</li>
        <li className={styles.listItem}><b>Protected Routes</b>: Certain routes in the application (e.g., Store, Cart, Order History) are protected, meaning they can only be accessed by authenticated users. This is enforced by the <code className={styles.code}>ProtectedRoute</code> component, which checks the authentication status from the Redux store. If a user is not authenticated, they are redirected to the login page.</li>
        <li className={styles.listItem}><b>Login Credentials</b>: In this application, login is simulated. When a user enters an email and password on the login page, the email is dispatched to the Redux store and used as the <code className={styles.code}>tenantId</code> to manage user-specific data. No actual authentication against a backend server occurs, and passwords are not stored or validated.</li>
      </ul>

      <h3 className={styles.sectionTitle}>Redux Data Flow (Flowchart Description)</h3>
      <p className={styles.flowchartDescription}>The data flow in this Redux application follows a strict unidirectional pattern:</p>
      <ol className={styles.flowchartList}>
        <li className={styles.flowchartListItem}><b>User Interaction</b>: A user interacts with the UI (e.g., clicks "Add to Cart", logs in).</li>
        <li className={styles.flowchartListItem}><b>Dispatch Action</b>: The UI component dispatches an "action" (a plain JavaScript object describing what happened, e.g., <code className={styles.code}>{' { type: \'cart/addItem\', payload: { itemId: 123 } } '}</code>).</li>
        <li className={styles.flowchartListItem}><b>Middleware (Optional)</b>: If an asynchronous operation is needed (like fetching products from an API), a "thunk" (a special type of action) is dispatched. This thunk is handled by Redux Thunk middleware, which performs the async logic and then dispatches regular actions (e.g., <code className={styles.code}>products/fetchProducts/pending</code>, <code className={styles.code}>products/fetchProducts/fulfilled</code>, <code className={styles.code}>products/fetchProducts/rejected</code>) based on the async operation's outcome.</li>
        <li className={styles.flowchartListItem}><b>Root Reducer</b>: The dispatched action reaches the "root reducer," which is a combination of all individual "slice reducers."</li>
        <li className={styles.flowchartListItem}><b>Slice Reducers</b>: Each slice reducer (e.g., <code className={styles.code}>cartSlice</code>, <code className={styles.code}>authSlice</code>, <code className={styles.code}>productsSlice</code>) listens for specific actions. If an action is relevant to its state, the reducer creates a *new* state object based on the action's payload. Reducers are pure functions; they never modify the original state directly.</li>
        <li className={styles.flowchartListItem}><b>Store Update</b>: The root reducer combines the new states from all slice reducers to create the "next state" of the entire application. The Redux store then updates its internal state with this new state.</li>
        <li className={styles.flowchartListItem}><b>UI Re-render</b>: Components that are "connected" to the Redux store using <code className={styles.code}>useSelector</code> detect that the part of the state they are interested in has changed. React then efficiently re-renders only those components that need to be updated, reflecting the new application state to the user.</li>
      </ol>
    </div>
  );
};

export default Help;
