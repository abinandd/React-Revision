### 1. What is React?
React is an open-source JavaScript library for building user interfaces (UIs), particularly single-page applications where data changes over time. It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies. React allows developers to create large web applications that can change data without reloading the page. Its core philosophy revolves around declarative views, making the code more predictable and easier to debug.

### 2. What is useMemo?
useMemo is a React Hook that memoizes the result of a function call. It's used for performance optimization. It only recomputes the memoized value when one of its dependencies has changed. This can prevent expensive calculations from being performed on every render if the inputs to those calculations haven't changed.

Syntax:
```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
The first argument is a function that computes the value.

The second argument is an array of dependencies. If any dependency changes between renders, the function will re-run. If the array is empty, the function will only run once.

### 3. What are the features of React?

Component-Based Architecture: React encourages building UIs from small, isolated, and reusable pieces called components.

Declarative UI: You describe what you want the UI to look like, and React efficiently updates the DOM to match that description.

Virtual DOM: React uses a virtual representation of the DOM to optimize updates, leading to faster rendering.

One-way Data Binding (Unidirectional Data Flow): Data flows in a single direction, making it easier to understand and debug.

JSX: A syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript.

Performance: Optimized rendering through Virtual DOM and various hooks like useMemo and useCallback.

Simplicity: Relatively easy to learn and use, especially for those familiar with JavaScript.

Flexibility: Can be used with other libraries or frameworks.

Strong Community Support: A large and active community provides extensive resources and support.

### 4. What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React to describe what the UI should look like. It allows you to write HTML-like code directly within your JavaScript files. This combines the templating capabilities of HTML with the power of JavaScript, making it more intuitive to create React elements.

Example:
```
const element = <h1>Hello, JSX!</h1>;
```
Behind the scenes, Babel (a JavaScript compiler) transforms JSX into regular JavaScript calls to React.createElement().

### 5. What is DOM?
DOM stands for Document Object Model. It's a programming interface for web documents. It represents the page structure as a tree of objects, where each object corresponds to a part of the document (like an element, attribute, or text). Web browsers use the DOM to render web pages. JavaScript can interact with the DOM to dynamically change the content, structure, and style of a web page.

### 6. What is Virtual DOM?
The Virtual DOM is a lightweight, in-memory representation of the actual DOM. React creates a Virtual DOM tree that mirrors the structure of the real DOM. When the state of a component changes, React first updates its Virtual DOM. Then, it compares the new Virtual DOM with the previous one to identify the minimal set of changes needed to update the real DOM. This process, called "reconciliation," significantly optimizes performance because direct manipulation of the real DOM is expensive. Instead of re-rendering the entire DOM, React only updates the specific parts that have changed.

### 7. What is component life cycle of React class component?
The lifecycle of a React class component refers to the different phases it goes through from its creation to its destruction. These phases are marked by various lifecycle methods that you can override to execute code at specific points.

Phases:

#### Mounting: When an instance of a component is being created and inserted into the DOM.

constructor()

render()

componentDidMount()

#### Updating: When a component is being re-rendered as a result of changes to props or state.

static getDerivedStateFromProps()

shouldComponentUpdate()

render()

getSnapshotBeforeUpdate()

componentDidUpdate()

#### Unmounting: When a component is being removed from the DOM.

componentWillUnmount()

Error Handling (Since React 16):

static getDerivedStateFromError()

componentDidCatch()

### 8. What are fragments in React?
React Fragments allow you to group a list of children without adding extra nodes to the DOM. Before Fragments, if you wanted to return multiple elements from a component's render method, you had to wrap them in a single parent element (like a div). This could sometimes lead to unnecessary div elements in the DOM, potentially affecting layout and performance.

Syntax:
```
import React, { Fragment } from 'react';

function MyComponent() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <p>World</p>
    </Fragment>
  );
}

// Shorthand syntax
function AnotherComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}
```

### 9. What are props in React?
Props (short for "properties") are a mechanism for passing data from a parent component to a child component in React. They are read-only, meaning a child component should never modify the props it receives directly. This ensures a unidirectional data flow, making the application's data predictable.

Example:
```
// Parent Component
function Parent() {
  const name = "Alice";
  return <Child greeting="Hello" userName={name} />;
}

// Child Component
function Child(props) {
  return (
    <p>{props.greeting}, {props.userName}!</p>
  );
}
```

### 10. What are synthetic events in React?
A Synthetic Event in React is like a universal translator for mouse clicks, keyboard presses, and form submissions — it makes sure your event code works the same in all browsers.

Benefits: 
- Browsers (like **Chrome**, **Firefox**, **Safari**) handle events such as `click` or `submit` **differently**.
- React uses a **Synthetic Event** as a kind of **event planner**.
- It **wraps** the browser’s original (native) event.
- It ensures the event behaves **the same way** in all browsers.
- This provides a **consistent and reliable** experience when handling events in React apps.


### 11. What are the difference between package.json and package-lock.json?

## ✅ package.json
- Defines project metadata, dependencies, and scripts.
- Contains:
  - Project name, version, description
  - Author, license
  - `dependencies` and `devDependencies`
  - `scripts` for automation (like build, test)
- Uses **semantic versioning**:
  - Examples: `^1.0.0`, `~1.0.0`
  - Allows for minor/patch updates during install
- Often manually edited by developers.
- Less deterministic:
  - `npm install` might result in slightly different versions on different machines or times.
- Should always be committed to version control (e.g., Git).

---

## 🔒 package-lock.json

- Records the **exact versions** of all installed packages and their nested (transitive) dependencies.
- Contains:
  - Full dependency tree
  - Exact versions (e.g., `1.2.3`)
  - Download URLs
  - Integrity hashes for verification
- Automatically generated and updated by `npm` or `yarn`.
- **Not intended** for manual editing.
- Highly deterministic:
  - Ensures consistent `node_modules` folder across environments.
- Should always be committed to version control to ensure consistent builds.


### 12. What are the differences between client-side and server-side rendering?

## ⚡ Client-Side Rendering (CSR)
- The browser builds the UI using JavaScript after downloading the page.
- Slower first load, fast afterward.
- Good for dynamic, interactive apps.
- Example: React without SSR.

## 🌐 Server-Side Rendering (SSR)
- The server builds and sends a fully rendered HTML page.
- Faster first load, better for SEO.
- Good for blogs, landing pages.
- Example: Next.js, Nuxt.js.

### 13. What is state in ReactJS?

- **State** in React is an **object** that holds **data or information** related to a component.
- It can **change over time** — for example, based on **user actions**, **API responses**, or **events**.
- When the state of a component changes, **React re-renders** that component (and its children if necessary) to reflect the updated data.
- State is **local** to the component it's defined in and is mostly used to manage **dynamic content**.

---

## 🏛️ Class Component – State Example

```jsx
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <p>Count: {this.state.count}</p>
    );
  }
}
``` 
### What are Props in React?

- **Props** (short for **"properties"**) are used to **pass data from a parent component to a child component**.
- Props are **read-only** — a child **cannot modify** the props it receives.
- This enforces **unidirectional data flow** in React, where data moves from **parent ➡️ child**.
- Props help make components **reusable and dynamic** by allowing external data input.

---

## 📦 Example

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Abhinand" />
```

## 15. 🔁 Differences Between State and Props in React

| **Feature**       | **State**                                                                 | **Props**                                                                 |
|-------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Mutability**     | Mutable; can be changed by the component itself.                         | Immutable; read-only, cannot be changed by the child component.          |
| **Ownership**      | Owned by the component where it's defined.                               | Owned by the parent component and passed down to children.               |
| **Usage**          | Used for data that changes within the component over time (e.g., user input, fetched data). | Used for passing data and configuration from parent to child.           |
| **Initial Value**  | Set within the component's constructor (class) or `useState` hook (functional). | Passed by the parent component.                                          |
| **Scope**          | Local to the component.                                                   | Passed down through the component tree.                                  |
| **Modification**   | Modified using `setState()` (class) or the state updater function (functional). | Changed by the parent component re-rendering with new prop values.       |


## 16. 🔄 What is Props Drilling?

**Props drilling** (also called **prop tunneling**) occurs when **data (props) are passed through multiple intermediate components** just to reach a deeply nested child component.

Even though the **middle components don’t need the data**, they must **receive and forward** it, which can clutter the code and make it harder to maintain.

---

### 📉 Why it's a problem:
- **Poor readability**: Too many components passing the same prop.
- **Hard to refactor**: Changes in prop structure affect all intermediate components.
- **Unnecessary coupling**: Intermediate components depend on something they don’t use.

---

### 🧭 Real-World Example:

```jsx
function App() {
  const user = { name: "Abhinand", age: 22 };
  return <ParentComponent user={user} />;
}

function ParentComponent({ user }) {
  return <MidComponent user={user} />;
}

function MidComponent({ user }) {
  return <ChildComponent user={user} />;
}

function ChildComponent({ user }) {
  return <p>Hello, {user.name}!</p>;
}
```

## 17. 🔻 Disadvantages of Props Drilling & How to Avoid It

### 🚫 Disadvantages of Props Drilling

- **Code Readability and Maintainability**:  
  It's harder to understand where data originates and where it's used, especially in large trees.

- **Refactoring Challenges**:  
  Renaming or restructuring a prop requires changes in multiple components—even ones that don’t use it directly.

- **Increased Complexity**:  
  The component hierarchy becomes tightly coupled, making components less reusable.

- **Minor Performance Issues**:  
  Frequent re-renders in intermediate components can slightly impact performance, especially in deeply nested trees.

---

### ✅ How to Avoid Props Drilling

Here are common patterns and tools to reduce or eliminate prop drilling:

#### 1. **Context API**
- Allows global sharing of data without manual prop passing at every level.
- Ideal for theme, user auth, language, or settings.

```jsx
const UserContext = React.createContext();

function App() {
  const user = { name: "Abhinand" };
  return (
    <UserContext.Provider value={user}>
      <NestedComponent />
    </UserContext.Provider>
  );
}

function NestedComponent() {
  const user = React.useContext(UserContext);
  return <p>Hello, {user.name}</p>;
}
```

## 18. 🧼 What are Pure Components in React?

### 📌 Definition:
A **Pure Component** in React is a class component that extends `React.PureComponent` instead of `React.Component`.

It automatically implements `shouldComponentUpdate()` with a **shallow comparison** of props and state.  
This helps avoid unnecessary re-renders, boosting performance in certain cases.

---

### ⚙️ How It Works:

- Performs a **shallow comparison** of current vs. next props and state.
- If **no difference** is found → `shouldComponentUpdate()` returns `false` → no re-render.
- If **any shallow difference** is found → returns `true` → component re-renders.

---

### 📈 When to Use PureComponent:

- The component’s output depends **only on props and state**.
- Props and state are **immutable** or not deeply nested.
- Avoid using it when you're mutating arrays/objects directly.

---

### ⚠️ Caveats:

- **Shallow Comparison Only**:
  - Doesn't detect changes **within** objects or arrays.
  - Example: Modifying an object directly won't trigger a re-render.
  
  ```js
  this.state.user.name = "New Name"; // ⚠️ Won't be detected

19. What are Ref's in React?
Refs ("references") in React provide a way to access DOM nodes or React elements created in the render method. They are a way to "escape" the typical declarative data flow and interact directly with the underlying DOM element or component instance.

When to use Refs:

Managing focus, text selection, or media playback.

Triggering imperative animations.

Integrating with third-party DOM libraries.

Ways to create Refs:

React.createRef() (for class components):

JavaScript

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus(); // Access the DOM node
  }

  render() {
    return <input type="text" ref={this.myRef} />;
  }
}
useRef() (for functional components):

JavaScript

import React, { useRef, useEffect } from 'react';

function MyFunctionalComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
}

20. What is meant by forwardRef?
React.forwardRef is a React higher-order component (HOC) that lets you "forward" a ref from a parent component down to a child component, specifically to a DOM element or a class component instance that it renders. This is useful when a parent needs to imperatively interact with a DOM element that's rendered by one of its children.

Normally, if you pass a ref prop to a custom component, you'll get a ref to the component instance itself, not the DOM element inside it. forwardRef solves this.

Example:

JavaScript

import React, { useRef, useEffect, forwardRef } from 'react';

// Child component that forwards the ref to its input
const MyInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

// Parent component that uses the forwarded ref
function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>Click the button to focus the input:</p>
      <MyInput ref={inputRef} placeholder="Type something..." />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

21. What are Error Boundaries?
Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application. They were introduced in React 16.

Key characteristics:

They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

They don't catch errors inside event handlers, asynchronous code (e.g., setTimeout, requestAnimationFrame), or server-side rendering.

You implement them as a class component with at least one of these lifecycle methods: static getDerivedStateFromError() or componentDidCatch().

Example:

JavaScript

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Usage:
<ErrorBoundary>
  <MyProblematicComponent />
</ErrorBoundary>

22. What are Higher-Order Components (HOCs) in React?
A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. A HOC is a function that takes a component as an argument and returns a new component with enhanced functionality. They are a pattern derived from the concept of higher-order functions in JavaScript.

Structure:

JavaScript

const withSomeFeature = (WrappedComponent) => {
  return class extends React.Component {
    // ... add some logic, state, props
    render() {
      return <WrappedComponent {...this.props} someExtraProp={someValue} />;
    }
  };
};

// Usage:
const EnhancedComponent = withSomeFeature(MyOriginalComponent);
Common Use Cases:

Code Reusability: Share common logic, state, or presentation concerns across multiple components.

Prop Manipulation: Add, remove, or modify props passed to the wrapped component.

State Abstraction: Abstract stateful logic away from presentational components.

Conditional Rendering: Control when a component renders based on certain conditions.

Access Control/Authentication: Wrap components to check user permissions.

While HOCs are still valid, functional components and Hooks have become the preferred way to achieve similar logic reuse in modern React, often leading to cleaner code.

23. What are the differences between controlled and uncontrolled components?

The distinction between controlled and uncontrolled components primarily applies to HTML form elements (like input, textarea, select) in React. It dictates how their values are managed.

Feature	Controlled Components	Uncontrolled Components
Value Management	Form element's value is controlled by React state.	Form element's value is managed by the DOM itself.
Source of Truth	React state is the single source of truth.	The DOM is the single source of truth.
Value Update	onChange event handler updates React state, which then re-renders the component with the new value.	ref is used to get the current value from the DOM when needed (e.g., on form submission).
Predictability	Highly predictable behavior, easy to validate and manipulate programmatically.	Less predictable, as React doesn't directly manage the value.
Validation	Easier to implement real-time validation, as the value is always in state.	Validation often happens on form submission.
Default Value	Use value prop (for continuous control).	Use defaultValue prop (for initial value only).
Use Cases	Most common and recommended for almost all form elements where you need immediate control over the input.	Useful for simple forms, file inputs, or when integrating with non-React code.
Example (Input)	<input type="text" value={this.state.name} onChange={this.handleChange} />	<input type="text" ref={this.inputRef} />

Export to Sheets
24. What is useCallback?
useCallback is a React Hook that memoizes a function. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is particularly useful when passing callbacks to optimized child components that rely on referential equality to prevent unnecessary re-renders (e.g., components wrapped in React.memo).

Syntax:

JavaScript

const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b], // dependencies
);
The first argument is the function you want to memoize.

The second argument is an array of dependencies. The function will only be re-created if any of these dependencies change.

Purpose: Prevents unnecessary re-creation of functions on every render, which in turn can prevent child components from re-rendering if they receive the function as a prop and are memoized.

25. What are the differences between useMemo and useCallback?
Feature	useMemo	useCallback
What it memoizes	A value (the result of a function call).	A function (the function itself).
Return Value	The memoized value.	The memoized function.
Purpose	Prevents expensive calculations from re-running unnecessarily.	Prevents unnecessary re-creation of functions, helping with referential equality for child components.
Use Case	When you have a computationally expensive function and want to cache its result.	When passing a callback function to a child component (especially React.memo'ized ones) to prevent unnecessary re-renders of the child.

Export to Sheets
In essence:

useMemo is for values.

useCallback is for functions.

26. What are keys in React?
Keys are special string attributes that you need to include when creating lists of elements in React. They help React identify which items have changed, are added, or are removed. Keys should be unique among siblings in the list.

Why are keys important?

Efficient Updates: React uses keys to efficiently update the UI when the order or content of a list changes. Without keys, React might re-render or reorder elements inefficiently, leading to performance issues and potential bugs (e.g., incorrect state or unintended side effects).

Stable Identity: Keys provide a stable identity to each component or DOM element in the list. This helps React know which specific item corresponds to which piece of data.

Example:

JavaScript

function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li> // 'item.id' should be unique
      ))}
    </ul>
  );
}
Important considerations:

Unique within siblings: Keys only need to be unique among their immediate siblings, not globally unique.

Stable keys: Do not use array indexes as keys if the order of items can change, or if items can be added/removed from the middle of the list. This can lead to performance problems and bugs. Use a stable, unique ID from your data if available.

27. What is Lazy loading in React?
Lazy loading (or code splitting) in React is a technique that allows you to load parts of your application's code only when they are actually needed, rather than loading everything upfront. This helps reduce the initial bundle size, leading to faster loading times and improved performance, especially for large applications.

React provides React.lazy() and Suspense for implementing lazy loading at the component level.

How it works:

React.lazy(): A function that takes a function as an argument. This function should return a Promise that resolves to a module containing a React component.

Suspense: A component that wraps your lazy-loaded components. It allows you to specify a fallback UI (like a loading spinner) that will be displayed while the lazy-loaded component is being loaded.

Example:

JavaScript

import React, { Suspense, lazy } from 'react';

// Lazy load the About component
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

function App() {
  return (
    <div>
      <nav>
        {/* Navigation */}
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render components based on route or state */}
        <Home />
        <About />
      </Suspense>
    </div>
  );
}
28. What is Suspense in React?
Suspense is a React component that lets you "wait" for some code to load and declaratively specify a loading indicator (fallback UI) while that code is being loaded. It works in conjunction with React.lazy() for code splitting, and is also designed to work with other asynchronous operations (like data fetching) in the future.

When a component wrapped in Suspense is trying to render something that isn't ready (e.g., a lazy-loaded component that hasn't finished loading its code), the Suspense boundary will display its fallback prop instead of the component that's still loading. Once the component is ready, it will render as normal.

Example:

JavaScript

import React, { Suspense, lazy } from 'react';

const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading My Component...</div>}>
        <MyLazyComponent />
      </Suspense>
    </div>
  );
}
29. What are custom hooks?
Custom Hooks are JavaScript functions whose names start with "use" and that can call other Hooks (like useState, useEffect, useContext, etc.). They are a mechanism for extracting and reusing stateful logic and side effects from functional components. They allow you to share reusable logic without resorting to render props or Higher-Order Components.

Benefits:

Reusability: Share complex logic across multiple components.

Cleaner Components: Keep components focused on rendering by abstracting away logic.

Improved Readability: Logic related to a specific feature can be co-located.

Testability: Custom hooks are often easier to test in isolation.

Example:

JavaScript

import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return width;
}

// Using the custom hook in a component
function MyComponent() {
  const windowWidth = useWindowWidth();
  return <p>Window width: {windowWidth}px</p>;
}
30. What is useReducer hook?
useReducer is a React Hook that provides an alternative to useState for managing more complex state logic in functional components. It's often preferred when state transitions are more intricate, involve multiple sub-values, or when the next state depends on the previous one. It's conceptually similar to Redux.

Syntax:

JavaScript

const [state, dispatch] = useReducer(reducer, initialState, init);
reducer: A function that takes the current state and an action and returns the newState.

initialState: The initial state value.

init (optional): An initializer function for lazy initial state.

How it works:

You define a reducer function that describes how the state changes in response to different actions.

You call dispatch with an action object to trigger a state update.

The reducer function is executed with the current state and the action, returning the new state.

React re-renders the component with the new state.

Example:

JavaScript

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
31. What are Portals in React?
React Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Normally, a component's render method returns React elements that are rendered as children of the component's parent DOM node. However, with Portals, you can break out of this hierarchy.

When to use Portals:

Portals are useful for situations where a component's visual output needs to be physically placed in a different part of the DOM tree for styling or accessibility reasons, even though it's logically part of a component. Common use cases include:

Modals/Dialogs: To ensure modals are rendered directly under body to avoid z-index issues, overflow hiding, or other styling conflicts with parent components.

Tooltips/Popovers: To position them correctly relative to the viewport.

Loading Spinners: That overlay the entire page.

Syntax:

JavaScript

ReactDOM.createPortal(child, container);
child: Any renderable React child (element, string, fragment, etc.).

container: A DOM element that exists outside the parent component's DOM hierarchy.

Example:

JavaScript

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root'); // Assuming a div with id 'modal-root' exists in your index.html

function Modal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return ReactDOM.createPortal(children, elRef.current);
}

function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <Modal>
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid black',
            zIndex: 1000
          }}>
            <h2>This is a Modal!</h2>
            <p>I'm rendered outside the app's div.</p>
            <button onClick={() => setShowModal(false)}>Close Modal</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
32. What is context in React?
React Context provides a way to pass data through the component tree without having to pass props down manually at every level (solving prop drilling). It's designed to share "global" data (like the current authenticated user, theme, or preferred language) that can be considered "global" for a tree of React components.

When to use Context:

When data needs to be accessed by many components at different nesting levels.

For themes, user authentication status, language settings, etc.

Core concepts:

React.createContext(): Creates a Context object. It returns an object with a Provider and a Consumer component.

Provider Component: Renders the context provider. It accepts a value prop that will be passed down to all consumers of this context.

Consumer Component (Older): A component that subscribes to context changes. (Largely replaced by useContext hook).

useContext() Hook (Modern): The recommended way to consume context in functional components. It takes a Context object (the value returned from React.createContext) and returns the current context value for that context.

33. Practical question: Give an example of context API usage?
Let's create a simple theme toggler using Context API.

1. Create a Context:

src/ThemeContext.js

JavaScript

import React from 'react';

// Create a Context object with a default value
const ThemeContext = React.createContext('light');

export default ThemeContext;
2. Create a Provider Component:

src/ThemeProvider.js

JavaScript

import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
3. Create a Consumer Component (using useContext):

src/ThemeToggler.js

JavaScript

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
}

export default ThemeToggler;
4. Create a Themed Component:

src/ThemedContent.js

JavaScript

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedContent() {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#333' : '#eee',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <div style={style}>
      <h2>Current Theme: {theme}</h2>
      <p>This content's style changes based on the theme.</p>
    </div>
  );
}

export default ThemedContent;
5. Integrate into your App:

src/App.js

JavaScript

import React from 'react';
import ThemeProvider from './ThemeProvider';
import ThemeToggler from './ThemeToggler';
import ThemedContent from './ThemedContent';

function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Context API Theme Example</h1>
        <ThemeToggler />
        <br />
        <ThemedContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
This example demonstrates how ThemeProvider makes the theme and toggleTheme function available to ThemeToggler and ThemedContent without explicitly passing them as props.

34. What is the purpose of callback function as an argument of setState()?
In React class components, setState() is asynchronous. This means that React may batch multiple setState() calls into a single update for performance. Because of this, if you try to read the state immediately after calling setState(), you might not get the updated value.

The callback function as an argument to setState() allows you to execute code after the state update has been applied and the component has potentially re-rendered.

Syntax:

JavaScript

this.setState(updater, callback);
updater: An object or a function that returns the new state.

callback: A function that will be executed after setState has completed and the component has re-rendered.

Purpose:

To perform side effects or operations that depend on the updated state.

To ensure you're working with the latest state value, especially when the next operation relies on it.

Example:

JavaScript

class MyComponent extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      // This callback runs *after* count has been updated and re-rendered
      console.log('Count after update:', this.state.count);
      // You could also do other operations here, like fetching data based on new state
    });
    console.log('Count immediately after setState:', this.state.count); // Might log the old count
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
For functional components using useState, useEffect is typically used for side effects that depend on state changes.

35. Practical question: create a custom hook for increment/decrement counter?
JavaScript

import { useState, useCallback } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // Memoize increment and decrement functions to prevent unnecessary re-renders
  // if they are passed down to child components
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this function is created once

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []); // Empty dependency array means this function is created once

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]); // Reset depends on initialValue, so recreate if initialValue changes

  return { count, increment, decrement, reset };
}

export default useCounter;

// --- How to use it in a component ---

// import React from 'react';
// import useCounter from './useCounter'; // Assuming the hook is in useCounter.js

// function CounterComponent() {
//   const { count, increment, decrement, reset } = useCounter(10); // Start from 10

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default CounterComponent;
36. Which lifecycle hooks in class component are replaced with useEffect in functional components?
The useEffect Hook in functional components can be seen as a replacement for several lifecycle methods found in class components:

componentDidMount: Achieved by useEffect with an empty dependency array ([]). The effect runs once after the initial render.

JavaScript

useEffect(() => {
  console.log('Component mounted!');
  // Fetch data, set up subscriptions, etc.
}, []);
componentDidUpdate: Achieved by useEffect with a dependency array containing the values you want to watch for changes. The effect runs after every render where the dependencies have changed.

JavaScript

useEffect(() => {
  console.log('Count or name changed:', count, name);
}, [count, name]); // Runs when count or name changes
componentWillUnmount: Achieved by returning a cleanup function from useEffect. This cleanup function runs when the component unmounts, or before the effect runs again if the dependencies change.

JavaScript

useEffect(() => {
  const subscription = subscribeToSomeService();
  return () => {
    console.log('Component unmounted or effect re-ran. Cleaning up...');
    unsubscribeFromSomeService(subscription);
  };
}, []);
shouldComponentUpdate (partially): While useEffect itself doesn't directly replicate shouldComponentUpdate, its functionality (preventing re-renders based on prop/state changes) is achieved in functional components using React.memo (for components) and useMemo/useCallback (for values/functions within components).

useEffect effectively consolidates the concerns of mounting, updating, and unmounting into a single API.

37. What is Strict Mode in React?
React.StrictMode is a tool for highlighting potential problems in an application. Like Fragment, Strict Mode doesn't render any visible UI. It activates additional checks and warnings for its descendants.

Purpose:

Identify unsafe lifecycle methods: Helps you find deprecated lifecycle methods in class components that can cause issues with asynchronous rendering.

Warn about legacy string ref API usage: Promotes the use of callback refs or createRef/useRef.

Detect unexpected side effects: Helps identify side effects that occur during rendering that shouldn't.

Warn about deprecated findDOMNode usage: Encourages using refs directly.

Detect legacy context API usage: Encourages the new Context API.

Warn about mutation outside of setState: (Still under development/experimental for some warnings).

How to use it:

Wrap your application or a part of your application with <React.StrictMode>:

JavaScript

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
Important: Strict Mode checks are development-only; they do not impact the production build or performance.

38. What are the different ways to pass data from child component to parent component in React?
Since data flows unidirectionally (parent to child) in React via props, to pass data from a child component to its parent, you typically rely on callbacks. The parent passes a function (a callback) down to the child as a prop. The child then calls this function, passing the data as arguments, effectively sending the data back up to the parent.

Here are the primary ways:

Using Callback Functions (most common and recommended):

The parent component defines a function.

The parent passes this function as a prop to the child component.

The child component invokes this prop function, passing the data it wants to send to the parent as arguments.

Using Context API (for less direct parent-child relationships or global state):

While primarily for parent-to-descendant, a dispatch function from useReducer or a setter from useState can be put into context. Child components can then consume this context and call the dispatch/setter function to update state that lives higher up. This isn't direct "child to parent" but rather "child to ancestor state."

Using Refs (less common for data, more for imperative actions):

The parent can create a ref and attach it to the child component (if it's a class component or uses forwardRef).

The parent can then call methods defined on the child component instance, which might expose data. This is generally discouraged for data flow and should be reserved for imperative actions.

39. Practical question: How to send data from child to parent using callback functions?
1. Parent Component (ParentComponent.js):

JavaScript

import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [messageFromChild, setMessageFromChild] = useState('');

  // Callback function defined in the parent
  const handleChildData = (data) => {
    setMessageFromChild(`Received from child: "${data}"`);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>{messageFromChild}</p>
      {/* Pass the callback function as a prop to the child */}
      <ChildComponent onDataSend={handleChildData} />
    </div>
  );
}

export default ParentComponent;
2. Child Component (ChildComponent.js):

JavaScript

import React, { useState } from 'react';

function ChildComponent({ onDataSend }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Call the prop function, passing the data
    onDataSend(inputValue);
    setInputValue(''); // Clear input after sending
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter data to send to parent"
      />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
Explanation:

In ParentComponent, handleChildData is defined, which will update the parent's messageFromChild state.

This handleChildData function is passed as a prop named onDataSend to ChildComponent.

In ChildComponent, when the "Send Data to Parent" button is clicked, onDataSend (which is handleChildData from the parent) is invoked with the inputValue as an argument.

This causes the handleChildData function in the parent to execute, updating the parent's state with the data from the child.

40. Practical question: How to send the data from child component to parent using useRef?
This approach is generally not recommended for data flow from child to parent in React, as it breaks the declarative and unidirectional data flow principle. Refs are primarily for imperative interactions with DOM nodes or instances, not for state management or data passing.

However, if you must do it for a very specific, rare imperative case, here's how you could conceptually do it, understanding its downsides:

1. Parent Component (ParentComponent.js):

JavaScript

import React, { useRef } => {
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const childRef = useRef(null);
  const [dataFromChild, setDataFromChild] = useState(''); // State to hold data from child

  const handleGetDataFromChild = () => {
    // Access the child component's instance (if it's a class component)
    // or the wrapped DOM element.
    // If ChildComponent exposes a method to get data, call it.
    if (childRef.current && childRef.current.getSecretData) {
      const data = childRef.current.getSecretData();
      setDataFromChild(`Data from child via ref: "${data}"`);
    } else {
      setDataFromChild("Child method not found or ref not attached.");
    }
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>{dataFromChild}</p>
      {/* Attach the ref to the ChildComponent */}
      <ChildComponent ref={childRef} />
      <button onClick={handleGetDataFromChild}>Get Data from Child (via Ref)</button>
    </div>
  );
}

export default ParentComponent;
2. Child Component (ChildComponent.js):

This example assumes ChildComponent is a class component or uses forwardRef to expose methods.

Option A: Class Component (simpler for exposing methods)

JavaScript

import React from 'react';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.secretData = "I am secret data from child!";
  }

  // Method to expose data
  getSecretData = () => {
    return this.secretData;
  };

  render() {
    return (
      <div>
        <h3>Child Component (Class)</h3>
        <p>I have some internal data.</p>
      </div>
    );
  }
}

export default ChildComponent;
Option B: Functional Component with useImperativeHandle and forwardRef (more complex but for functional components)

JavaScript

import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const [internalData, setInternalData] = useState("I am internal data from child!");

  // Expose specific functions or values to the parent via the ref
  useImperativeHandle(ref, () => ({
    getSecretData: () => {
      return internalData;
    },
    updateInternalData: (newData) => {
      setInternalData(newData);
    }
  }));

  return (
    <div>
      <h3>Child Component (Functional with forwardRef)</h3>
      <p>My current internal data: {internalData}</p>
    </div>
  );
});

export default ChildComponent;
Why this is generally discouraged:

Breaks Unidirectional Data Flow: The parent directly reaches into the child to pull data, making the data flow less predictable.

Reduced Encapsulation: Child components are less encapsulated if their internal state or methods are exposed via refs.

Harder to Debug: It becomes less clear where data changes originate.

Less Idiomatic React: React's strength is in its declarative nature; refs are for imperative escapes.

Always prefer callback functions for passing data from child to parent.

41. How do you optimize your React application?
Optimizing React applications involves several strategies to improve performance (faster loading, smoother interactions, reduced resource usage) and user experience.

Code Splitting / Lazy Loading:

Use React.lazy() and Suspense to load components only when they are needed, reducing the initial bundle size and improving initial load time.

Route-based code splitting using React.lazy with React Router.

Memoization:

React.memo(): For functional components, memoizes the component itself. It re-renders only if its props have shallowly changed.

useMemo(): Memoizes expensive function return values.

useCallback(): Memoizes callback functions to prevent unnecessary re-renders of child components that receive them as props.

React.PureComponent: For class components, performs a shallow comparison of props and state.

Virtualization / Windowing:

For long lists of data, render only the visible portion of the list. Libraries like react-window or react-virtualized can help.

Avoid Unnecessary Re-renders:

Identify re-renders: Use React DevTools Profiler to see which components are re-rendering and why.

Optimize shouldComponentUpdate (Class) / React.memo (Functional): Ensure components only re-render when necessary.

Proper useEffect dependencies: Ensure dependencies array is correctly specified to avoid re-running effects needlessly.

Avoid inline functions/objects: Creating new functions or objects in render or functional components causes new references, potentially triggering re-renders in child components. Use useCallback or move them outside.

Use production build:

Ensure your application is built in production mode for deployment. React's development mode includes many warnings and checks that are stripped out in production, resulting in a smaller, faster bundle.

Bundle Size Optimization:

Analyze bundle: Use tools like Webpack Bundle Analyzer to identify large dependencies and remove unused code.

Tree Shaking: Ensure your build setup is configured for tree shaking to remove unused exports.

Minification and Compression: Minify JavaScript, CSS, and HTML, and use Gzip/Brotli compression.

Image Optimization:

Optimize image sizes, use appropriate formats (WebP), and implement lazy loading for images.

Server-Side Rendering (SSR) / Static Site Generation (SSG):

Improve initial page load time and SEO by pre-rendering your React components on the server (SSR, e.g., Next.js) or at build time (SSG, e.g., Gatsby).

Context API judiciously:

While useful for prop drilling, be mindful that a change in context value will re-render all consumers of that context, potentially more than expected. Splitting context into smaller, more specific contexts can help.

Debouncing and Throttling:

Apply debouncing or throttling to event handlers (e.g., input changes, scroll events) to limit how often they fire, reducing unnecessary updates.

Performance Monitoring:

Use browser developer tools (Performance tab) and React DevTools Profiler to identify bottlenecks.

42. How would you consume a RESTful JSON API in ReactJS?
Consuming a RESTful JSON API in ReactJS typically involves making HTTP requests to fetch, send, or update data, and then managing that data within your component's state.

Here's a common approach using the fetch API (built-in browser API) and useEffect and useState hooks:

1. Basic Data Fetching (GET request):

JavaScript

import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
Explanation:

useState: To manage the users data, loading state, and any error.

useEffect:

The useEffect hook with an empty dependency array [] ensures that the fetchUsers function runs only once after the component mounts, similar to componentDidMount.

The async/await syntax is used for cleaner asynchronous code.

Error handling is crucial. We check response.ok and catch potential network or parsing errors.

Conditional Rendering: The component renders different UI based on loading, error, and users state.

2. Sending Data (POST, PUT, DELETE requests):

For sending data, you would typically attach the data to the body of the request and set the Content-Type header.

JavaScript

// Example for a POST request
const createUser = async (userData) => {
  setLoading(true);
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // Convert JavaScript object to JSON string
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const newUser = await response.json();
    setUsers(prevUsers => [...prevUsers, newUser]); // Add new user to state
    console.log('New user created:', newUser);
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
};
Alternative Libraries:

While fetch is good for basic cases, for more robust API interactions in larger applications, you might use:

Axios: A popular, promise-based HTTP client that simplifies requests, error handling, and provides features like interceptors.

React Query (TanStack Query): A powerful library for data fetching, caching, synchronization, and managing server state. It handles many complexities like re-fetching on window focus, background updates, and automatic caching. Highly recommended for complex data fetching scenarios.

SWR (Stale-While-Revalidate): Another modern data fetching library with similar capabilities to React Query, focused on performance and real-time experiences.

43. Different design patterns used in React?
React itself encourages a component-based architecture, but within that, several design patterns emerge and are commonly used to organize code, manage state, and promote reusability.

Component Pattern:

Container/Presentational Components: (Also known as Smart/Dumb components).

Presentational (Dumb) Components: Concerned with how things look. They receive data and callbacks via props and rarely have their own state. Focus on UI.

Container (Smart) Components: Concerned with how things work. They manage state, fetch data, and pass data and behavior to presentational components.

Functional Components: Simple, stateless components (before hooks) or components that manage state/side effects using hooks.

Class Components: Components that extend React.Component and have lifecycle methods and internal state. (Less common for new development with hooks).

Higher-Order Components (HOCs):

A function that takes a component as an argument and returns a new component with enhanced functionality (e.g., withRouter, connect from Redux). Used for code reuse, prop manipulation, and state abstraction. While still valid, custom hooks often provide a cleaner alternative.

Render Props:

A pattern where a component takes a function as a prop, and that function returns a React element. The component calls this function within its render method, passing state or data from itself to the function. This allows for flexible content rendering and sharing logic.

Context API:

Provides a way to pass data through the component tree without having to pass props down manually at every level (solving prop drilling). Used for "global" data like theme, user authentication.

Custom Hooks:

The modern and preferred way to reuse stateful logic across multiple functional components. They are JavaScript functions that start with "use" and can call other hooks.

Compound Components:

A pattern where components work together to form a single, cohesive UI element, but they manage their own internal state and communicate implicitly. (e.g., Select and Option components where Select manages the selected Option).

Provider Pattern:

Often used in conjunction with the Context API or state management libraries (like Redux, Zustand). A "Provider" component wraps a part of the component tree and makes certain data or functions available to all its descendants.

Singleton Pattern:

Ensures that only one instance of a class (e.g., a service or a store) exists throughout the application. While less directly applied to React components themselves, it's common for global state management stores (like a Redux store).

Factory Pattern:

A creational pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. Less common directly in component rendering, but might appear in utility functions that generate components dynamically based on certain criteria.

Observer Pattern:

Where an object (subject) maintains a list of its dependents (observers) and notifies them of any state changes. State management libraries like Redux or Zustand often utilize this under the hood.

Choosing the right pattern depends on the specific problem you're trying to solve, the complexity of your application, and your team's preferences. Modern React development heavily favors Hooks and Context for most scenarios that previously relied on HOCs or Render Props.

44. Context API vs. Redux
Both Context API and Redux are used for state management in React applications, allowing components to access data without prop drilling. However, they serve different purposes and have different complexities.

Feature	React Context API	Redux (and similar libraries like Zustand, Jotai)
Primary Use Case	Sharing "global" or theme-like data that changes infrequently and doesn't require complex state logic.	Managing complex application-wide state with predictable state changes, often involving many actions and data flows.
Learning Curve	Relatively simpler to learn and implement for basic scenarios.	Higher learning curve due to concepts like reducers, actions, middleware, selectors, immutability.
Boilerplate	Less boilerplate for simple state sharing.	More boilerplate (actions, reducers, store configuration) for even simple state.
Performance	Re-renders all consumers when the context value changes, even if only a small part of the value is used by a specific consumer. Can lead to unnecessary re-renders if not optimized with useMemo/useCallback or splitting contexts.	Highly optimized. Updates are typically granular. Connectors/selectors ensure components only re-render when the specific slice of state they consume changes.
Scalability	Best for small to medium applications, or for specific, isolated global concerns. Can become unwieldy for very large, complex state trees.	Excellent for large-scale applications with complex state interactions, predictable updates, and a need for debugging tools.
Debugging	Basic debugging with React DevTools. No built-in time-travel debugging.	Excellent debugging capabilities with Redux DevTools (time-travel, state inspection, action logging).
Middleware	No built-in concept of middleware. Side effects are typically handled with useEffect.	Strong middleware ecosystem (e.g., redux-thunk, redux-saga) for handling asynchronous actions and side effects.
Immutability	Relies on you to manage immutability manually. If you mutate the context value object directly, consumers might not re-render.	Enforces immutability as a core principle for predictable state updates. Libraries like Immer help with this.
Community/Ecosystem	Built-in React feature.	Large and mature ecosystem with many helper libraries, tools, and a strong community.

Export to Sheets
When to choose which:

Choose Context API when:

You need to share data that is truly "global" across many components (e.g., theme, user info).

The state updates are infrequent and not complex.

You want to avoid external libraries and keep your dependency tree minimal.

You're building a smaller application or a specific feature within a larger app where complex state management isn't required.

Choose Redux (or similar libraries) when:

Your application has a large and complex global state.

You need a predictable state container with strict rules for state updates.

You require robust debugging tools (time-travel debugging).

You need to handle complex asynchronous operations and side effects in a structured way.

You have a large team where consistent patterns for state management are crucial.

It's also common to use both: Context for simple, theme-like data, and a state management library for more complex, application-specific data flows.

45. Prop types in React (How to apply validation on props in React)?
prop-types is a library (previously built into React, now a separate package) that allows you to specify the type of data that a component expects in its props. This helps in catching bugs early during development by providing warnings in the console if a prop receives unexpected data types. It's a form of runtime type checking, which is particularly useful in JavaScript, a dynamically typed language.

Installation:

Bash

npm install prop-types
# or
yarn add prop-types
How to use:

You import PropTypes from prop-types and then define a propTypes static property on your component (for class components) or directly on the function (for functional components).

Example (Functional Component):

JavaScript

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function UserProfile({ name, age, isActive, hobbies }) {
  return (
    <div>
      <h3>{name}'s Profile</h3>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      {hobbies.length > 0 && (
        <>
          <h4>Hobbies:</h4>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

// Define propTypes for validation
UserProfile.propTypes = {
  name: PropTypes.string.isRequired, // 'name' must be a string and is required
  age: PropTypes.number,             // 'age' should be a number (optional)
  isActive: PropTypes.bool.isRequired, // 'isActive' must be a boolean and is required
  hobbies: PropTypes.arrayOf(PropTypes.string), // 'hobbies' should be an array of strings
  // You can specify more complex types:
  // user: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   email: PropTypes.string.isRequired,
  // }),
  // children: PropTypes.node, // Any renderable React type
  // onClick: PropTypes.func,
};

// You can also set default props if a prop is not provided
UserProfile.defaultProps = {
  age: 25, // Default age if not provided
  hobbies: [],
};

export default UserProfile;
Common PropTypes types:

PropTypes.string

PropTypes.number

PropTypes.bool

PropTypes.array

PropTypes.object

PropTypes.func

PropTypes.symbol

PropTypes.node (Anything that can be rendered: numbers, strings, elements, arrays, fragments, etc.)

PropTypes.element (A React element)

PropTypes.instanceOf(MyClass)

PropTypes.oneOf(['optionA', 'optionB']) (One of a specified list of values)

PropTypes.oneOfType([PropTypes.string, PropTypes.number])

PropTypes.arrayOf(PropTypes.number)

PropTypes.objectOf(PropTypes.number)

PropTypes.shape({ color: PropTypes.string, fontSize: PropTypes.number }) (An object with a specific shape)

PropTypes.exact({ color: PropTypes.string, fontSize: PropTypes.number }) (An object with only the specified keys)

isRequired: Appending .isRequired to any of the types will make that prop mandatory. If it's not provided, a warning will be logged.

Benefits:

Early Error Detection: Catches common mistakes with prop types during development.

Improved Code Readability: Acts as documentation for the expected props of a component.

Easier Debugging: Warnings point directly to where the incorrect prop was passed.

Alternative (TypeScript):

For larger and more robust applications, TypeScript is often preferred over prop-types for type checking. TypeScript provides static type checking at compile time, offering more comprehensive type safety and better developer tooling (autocompletion, refactoring support).

46. What are React Mixins?
Mixins were a way to reuse code across multiple React components, primarily in older versions of React, particularly with createClass components. A mixin was an object that contained methods and could be "mixed into" a component, making those methods available to the component.

Example (Legacy createClass syntax):

JavaScript

const MyMixin = {
  logMessage() {
    console.log("Message from mixin!");
  },
  componentDidMount() {
    console.log("Mixin componentDidMount");
  }
};

const MyComponent = React.createClass({
  mixins: [MyMixin], // Mixing in MyMixin

  render() {
    return (
      <button onClick={this.logMessage}>
        Click Me
      </button>
    );
  }
});
Why Mixins are discouraged/deprecated in modern React:

Implicit Dependencies: Mixins often introduced implicit dependencies, making it hard to understand what a component was doing without examining all its mixins.

Name Clashes: If multiple mixins or the component itself had methods with the same name, it could lead to unexpected behavior or difficult-to-debug name clashes.

Complexity: The inheritance model became complex with multiple mixins.

Not compatible with ES6 Classes: Mixins didn't fit well with ES6 class syntax (which is the standard way to define class components now).

Modern Replacements for Mixins:

In modern React, the functionality provided by mixins is now better addressed by:

Higher-Order Components (HOCs): For reusing component logic.

Render Props: For sharing logic that involves rendering.

Custom Hooks: The most recommended and powerful way to reuse stateful logic and side effects in functional components. This is the primary replacement for almost all mixin use cases.

You will rarely, if ever, encounter mixins in new React projects.

47. What are the different hooks you have used?
As an AI, I don't "use" hooks in the same way a developer does, but I can describe the common and frequently used React Hooks:

useState: The most fundamental hook. Allows functional components to manage local state.

const [value, setValue] = useState(initialValue);

useEffect: For performing side effects in functional components (data fetching, subscriptions, manually changing the DOM). It replaces componentDidMount, componentDidUpdate, and componentWillUnmount from class components.

useEffect(() => { /* side effect */ return () => { /* cleanup */ }; }, [dependencies]);

useContext: For subscribing to React Context, allowing functional components to access "global" data without prop drilling.

const value = useContext(MyContext);

useRef: For creating mutable ref objects that persist across renders. Primarily used to access DOM elements directly or to store any mutable value that doesn't cause a re-render when updated.

const myRef = useRef(initialValue);

useReducer: An alternative to useState for managing more complex state logic, especially when state transitions are intricate or depend on the previous state. It's similar to Redux's reducer pattern.

const [state, dispatch] = useReducer(reducer, initialState);

useCallback: For memoizing functions. It returns a memoized version of the callback that only changes if one of its dependencies changes. Useful for optimizing child components that rely on referential equality.

const memoizedCallback = useCallback(() => { /* function */ }, [dependencies]);

useMemo: For memoizing values. It returns a memoized value that only recomputes if one of its dependencies changes. Useful for preventing expensive calculations on every render.

const memoizedValue = useMemo(() => expensiveComputation(a, b), [a, b]);

useImperativeHandle: Used with forwardRef to customize the instance value that is exposed to parent components when using ref. This is a less common hook, typically used for imperative interactions.

useImperativeHandle(ref, () => ({ /* exposed methods */ }), [dependencies]);

useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations and before the browser paints. Use it when you need to read DOM layout or perform mutations that need to be seen by the browser before the next paint (e.g., measuring an element's size for an animation).

useLayoutEffect(() => { /* synchronous DOM operations */ }, [dependencies]);

useDebugValue: Used within custom Hooks to display a label for the hook in React DevTools.

useDebugValue(value, formatFn?);

These are the core hooks provided by React. Custom hooks are also a "type" of hook, but they are built using these primitive hooks.

48. What are render props in React?
Render Props is a technique for sharing code between React components using a prop whose value is a function. The component with the render prop calls this function, passing data from its own state, and the function then returns a React element that the component renders.

The name "render prop" comes from the convention that the prop is often named render, but it can be any prop that takes a function (e.g., children, data, content).

How it works:

A component (the "provider" of logic) accepts a prop that is a function.

Inside its render method, the provider component calls this function, passing some of its own internal state or derived data as arguments.

The function provided by the "consumer" component receives this data and returns JSX to be rendered.

Example:

Let's create a MouseTracker component that provides mouse position data.

JavaScript

import React, { useState } from 'react';

// Component that provides data via a render prop
function MouseTracker(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: '200px', border: '1px solid black' }} onMouseMove={handleMouseMove}>
      <p>Move your mouse over this area!</p>
      {/* Call the render prop function, passing the mouse position */}
      {props.render(position)}
    </div>
  );
}

// Consumer component using the MouseTracker
function App() {
  return (
    <div>
      <h1>Render Props Example</h1>
      <MouseTracker
        render={(mouse) => ( // The render prop function
          <p>
            Mouse position: X = {mouse.x}, Y = {mouse.y}
          </p>
        )}
      />

      {/* Another consumer using the same MouseTracker but rendering different UI */}
      <MouseTracker
        render={(mouse) => (
          <img
            src="https://www.reactjs.org/logo-og.png"
            alt="React Logo"
            style={{ position: 'absolute', left: mouse.x - 25, top: mouse.y - 25, width: 50, height: 50 }}
          />
        )}
      />
    </div>
  );
}

export default App;
Benefits:

Code Reusability: Share stateful logic between components without coupling them through inheritance or HOCs.

Flexibility: The consumer component has full control over what is rendered, while the provider component controls how the data is provided.

Explicit Data Flow: It's very clear what data is being passed down.

Comparison with Hooks:

While render props are a powerful pattern, custom hooks have largely superseded them in modern React for sharing stateful logic. Custom hooks often provide a cleaner, less nested syntax for achieving similar results. However, render props are still perfectly valid and useful, especially when the component's primary purpose is to abstract rendering logic.

49. What are the different types of exports and imports?
In JavaScript (ES Modules), there are two main types of exports and imports: Named Exports/Imports and Default Exports/Imports.

Named Exports and Imports
Purpose: To export multiple values (variables, functions, classes) from a module. Consumers then import these values by their exact names.

Exporting:

JavaScript

// utils.js
export const API_KEY = "your_api_key";

export function fetchData() {
  // ...
}

export class User {
  // ...
}

// You can also export at the end
const MY_CONSTANT = 100;
function helperFunction() { /* ... */ }
export { MY_CONSTANT, helperFunction };
Importing:

JavaScript

// app.js
import { API_KEY, fetchData, User } from './utils';

// You can also alias named imports
import { fetchData as getData, API_KEY as key } from './utils';

// Import all named exports as an object
import * as Utils from './utils';
console.log(Utils.API_KEY);
Utils.fetchData();
Characteristics:

You must use the exact name of the exported member.

You can export multiple named members from a single file.

You can rename imports using as.

Default Exports and Imports
Purpose: To export a single, primary value from a module. Consumers can then import this value with any name they choose.

Exporting:

A module can have at most one default export.

JavaScript

// MyComponent.js
function MyComponent() {
  return <h1>Hello from MyComponent!</h1>;
}
export default MyComponent;

// Or
// userProfile.js
const userProfile = {
  name: "Alice",
  age: 30
};
export default userProfile;

// Or even an anonymous function/class
export default class { /* ... */ }
Importing:

JavaScript

// app.js
import MyComponent from './MyComponent'; // You can name it anything, but 'MyComponent' is conventional
import UserData from './userProfile';

// Using it
<MyComponent />
console.log(UserData.name);
Characteristics:

You can only have one default export per module.

When importing, you can give the default export any name you like.

No curly braces are used during import.

Combining Both
It's common to have both a default export and named exports in a single file:

JavaScript

// MyModule.js
export const namedValue = 'I am a named export';
export function namedFunction() { console.log('Named function called'); }

function DefaultExportedComponent() {
  return <div>Default Component</div>;
}
export default DefaultExportedComponent;
JavaScript

// app.js
import DefaultExportedComponent, { namedValue, namedFunction } from './MyModule';

console.log(namedValue);
namedFunction();
<DefaultExportedComponent />
50. What are the differences between createElement vs cloneElement in React?
React.createElement() and React.cloneElement() are both utility functions provided by React to work with React elements, but they serve distinct purposes.

Feature	React.createElement(type, props, ...children)	React.cloneElement(element, props, ...children)
Purpose	Creates and returns a new React element.	Clones an existing React element and returns a new element with new props.
Inputs	type: A string (for DOM elements like 'div'), a React component class, or a function component. props: An object containing props for the element. children: Child elements.	element: An existing React element (must be a valid React element). props: An object containing new props to merge with the original element's props. children: New children to replace or merge.
Common Use Case	When writing JSX, Babel transpiles JSX into React.createElement() calls. Programmatically creating elements.	Dynamically modifying props or children of an existing element, often in higher-order components, render props, or component composition.
Key Behavior	Always creates a brand new element from scratch.	Creates a copy of the given element. The new element will have the original element's props with the props argument merged in (new props override old ones). The key and ref from the original element are preserved unless explicitly overridden.
Immutability	Returns a new immutable element.	Returns a new immutable element based on the original.
Example	React.createElement('div', { className: 'my-class' }, 'Hello');	const newElement = React.cloneElement(existingElement, { newProp: 'value' });

Export to Sheets
When to use them:

React.createElement():

You usually don't call this directly unless you are writing a React library or a very low-level React component builder.

It's the underlying mechanism for JSX. Every piece of JSX you write gets transpiled into React.createElement() calls.

React.cloneElement():

When you need to take an existing React element (often props.children) and inject additional props or modify its children without directly mutating the original element.

This is common in patterns like:

Context API implementations: A provider might clone its children to inject context values.

Form components: A form component might clone its child input elements to inject value and onChange props.

Higher-Order Components or Render Props: To pass additional props to the wrapped component or the component rendered by the function prop.

Important Note: Both createElement and cloneElement return plain JavaScript objects representing React elements. These are not DOM nodes, but rather lightweight descriptions of what should be rendered. React then uses these descriptions to efficiently update the actual DOM.

51. When to use useState and useReducer?
Both useState and useReducer are React Hooks for managing state in functional components. The choice between them depends on the complexity of your state logic and how state transitions occur.

Feature	useState	useReducer
Simplicity	Simpler for basic state management.	More complex, requires defining a reducer function and dispatching actions.
State Structure	Best for simple state values (e.g., number, boolean, string, simple object/array).	Ideal for complex state objects that have multiple sub-values or where the next state depends on the previous one.
State Updates	Direct state updates using setState(newValue) or setState(prevValue => newValue).	State updates through "dispatching actions," which are processed by a reducer function.
Related Updates	Multiple useState calls for related pieces of state can lead to disjointed logic.	Consolidates related state logic into a single reducer, making it easier to manage and reason about.
Predictability	Generally predictable for simple cases.	Highly predictable and testable, as state changes are pure functions of current state and action.
Performance	Good for simple updates.	Can be slightly more performant for complex updates if dispatch is passed down, as dispatch is stable and doesn't change on re-renders.
Debugging	Basic debugging with React DevTools.	Benefits from clear action logs, making it easier to track state changes, especially with Redux DevTools (if mimicking Redux).
Common Scenarios	Toggling a boolean, managing an input value, simple counters.	Shopping carts, form validation (multiple fields), complex UI states (tabs, modals), undo/redo features.

Export to Sheets
When to use useState:

Simple state values: When your state is a primitive (number, string, boolean) or a simple object/array that is updated in a straightforward manner.

Independent state: When different pieces of state don't depend on each other for their updates.

Less frequent updates: For UI elements where state changes are not very frequent or complex.

When to use useReducer:

Complex state logic: When your state has multiple sub-values that change together, or when the next state depends on the previous state.

State transitions involving multiple actions: When a single user interaction might trigger several related state changes.

Centralized state logic: When you want to keep the state update logic outside of your component, making it more testable and reusable (e.g., in a separate reducer file).

Passing dispatch down: When you need to pass down the ability to update state to deeply nested children without prop drilling, dispatch (from useReducer) is stable and won't cause unnecessary re-renders in memoized children.

Similar to Redux: If you are familiar with Redux or prefer that pattern for state management.

Rule of thumb: Start with useState. If your state logic becomes too complex, or you find yourself writing lots of setThis, setThat calls that depend on each other, consider refactoring to useReducer.

52. What are protected routes in React?
Protected routes (or private routes) in React are routes in your application that require a user to be authenticated or authorized to access them. If an unauthenticated or unauthorized user tries to navigate to a protected route, they are typically redirected to a login page or an access denied page.

This is a common security feature in single-page applications to ensure that sensitive data or features are only available to legitimate users.

How they are implemented:

Protected routes are generally implemented using a wrapper component that checks the user's authentication status. This wrapper component uses a routing library (like React Router DOM) to control navigation.

Key steps:

Authentication State: You need a way to track the user's authentication status (e.g., a token in local storage, a loggedIn state in a global store like Context or Redux).

AuthContext or similar: Often, the authentication state is provided via React Context so it can be easily accessed by the protected route component.

ProtectedRoutes Component: A component that takes the component to be protected as a prop. Inside this component:

It checks the authentication status.

If authenticated, it renders the intended component.

If not authenticated, it uses Maps (from React Router v6) or Redirect (from React Router v5) to redirect the user to a login page.

Example with React Router DOM v6:

JavaScript

// AuthContext.js (or similar)
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Or load from localStorage/cookie

  useEffect(() => {
    // Simulate checking for a logged-in user (e.g., from token in localStorage)
    const token = localStorage.getItem('authToken');
    if (token) {
      // In a real app, you'd validate the token with a backend
      setUser({ name: 'Authenticated User' });
    }
  }, []);

  const login = (username, password) => {
    // Simulate login
    if (username === 'test' && password === 'pass') {
      localStorage.setItem('authToken', 'some-dummy-token');
      setUser({ name: 'Authenticated User' });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute() {
  const { user } = useAuth();

  // If the user is not authenticated, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child routes/component
  return <Outlet />;
}

export default ProtectedRoute;

// App.js (Routing setup)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

// Dummy Components
const HomePage = () => <h2>Home Page</h2>;
const DashboardPage = () => <h2>Dashboard (Protected)</h2>;
const SettingsPage = () => <h2>Settings (Protected)</h2>;

function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{' '}
      <Link to="/settings">Settings</Link> |{' '}
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
This pattern ensures that users can only access specific parts of your application after successful authentication.

53. Does React Router support a context menu? give me answers in detailed and give me that md format
React Router itself does not directly provide a "context menu" component or a specific API for building context menus (right-click menus). React Router is primarily focused on declarative routing within your application. It helps you map URLs to components and manage navigation, but it doesn't extend to UI elements like context menus.

However, you can absolutely build a context menu in a React application that uses React Router by combining React's component model with browser events and state management. React Router's role would be minimal, perhaps only to determine if the context menu should navigate to a new route.

Here's how you would approach building a context menu, highlighting where React Router might (or might not) play a part:

Building a Context Menu in React (General Approach)
A typical context menu implementation in React involves:

Listening for the contextmenu Event: This is the native browser event that fires when a user right-clicks on an element. You'll prevent its default behavior (showing the browser's context menu).

Managing Menu Visibility and Position: Using React state, you'll control whether the context menu is visible and where it appears on the screen (based on the mouse coordinates).

Rendering the Menu: A dedicated React component will be responsible for rendering the context menu items.

Handling Menu Item Clicks: When a menu item is clicked, you'll perform an action (e.g., navigating, opening a modal, performing a data operation).

Where React Router Could Come In
React Router's primary utility in a context menu scenario would be if one or more of your context menu items are designed to navigate to a new route.

Example Scenario:

Imagine a list of users. When you right-click on a user, a context menu appears with options like "View Profile," "Edit User," or "Delete User."

"View Profile" and "Edit User" would likely involve navigation to routes like /users/:id or /users/:id/edit.

"Delete User" would be an action, not directly involving routing.

Detailed Example (Conceptual)
Let's outline a conceptual example for a UserListItem that shows a context menu, with one option navigating via React Router.

JavaScript

// src/components/ContextMenu.js
import React, { useEffect, useRef } from 'react';
import './ContextMenu.css'; // Basic CSS for positioning and styling

const ContextMenu = ({ x, y, isVisible, onClose, children }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return ReactDOM.createPortal( // Use Portal to render outside main app for z-index/positioning
    <div
      ref={menuRef}
      className="context-menu"
      style={{ top: y, left: x }}
      onClick={onClose} // Close menu on any item click
    >
      {children}
    </div>,
    document.getElementById('context-menu-root') // A div in your public/index.html
  );
};

export default ContextMenu;
CSS

/* src/components/ContextMenu.css */
.context-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Ensure it's on top */
  padding: 5px 0;
  min-width: 150px;
}

.context-menu-item {
  padding: 8px 15px;
  cursor: pointer;
  white-space: nowrap;
}

.context-menu-item:hover {
  background-color: #f0f0f0;
}
JavaScript

// src/components/UserListItem.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router's hook
import ContextMenu from './ContextMenu';
import ReactDOM from 'react-dom'; // For Portal

// Ensure you have a div with id="context-menu-root" in your public/index.html
// e.g., <div id="root"></div> <div id="context-menu-root"></div>

function UserListItem({ user }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); // React Router hook for navigation

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent default browser context menu
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleViewProfile = () => {
    // Navigate using React Router
    navigate(`/users/${user.id}`);
    handleCloseMenu();
  };

  const handleEditUser = () => {
    // Navigate using React Router
    navigate(`/users/${user.id}/edit`);
    handleCloseMenu();
  };

  const handleDeleteUser = () => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      console.log(`Deleting user: ${user.id}`);
      // Perform API call to delete user
    }
    handleCloseMenu();
  };

  return (
    <li onContextMenu={handleContextMenu} style={{ padding: '10px', borderBottom: '1px solid #eee', cursor: 'pointer' }}>
      {user.name} ({user.email})

      <ContextMenu
        x={menuPosition.x}
        y={menuPosition.y}
        isVisible={showMenu}
        onClose={handleCloseMenu}
      >
        <div className="context-menu-item" onClick={handleViewProfile}>View Profile</div>
        <div className="context-menu-item" onClick={handleEditUser}>Edit User</div>
        <div className="context-menu-item" onClick={handleDeleteUser}>Delete User</div>
      </ContextMenu>
    </li>
  );
}

export default UserListItem;
JavaScript

// src/App.js (simplified routing example)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserListItem from './components/UserListItem'; // Our component with context menu

const users = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
];

function UserListPage() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <UserListItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

function UserProfilePage() {
  // In a real app, you'd get the ID from useParams() and fetch user data
  return <h2>User Profile Page (Dynamic ID here)</h2>;
}

function EditUserPage() {
    return <h2>Edit User Page (Dynamic ID here)</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Welcome!</h2>} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/users/:id" element={<UserProfilePage />} />
        <Route path="/users/:id/edit" element={<EditUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
Conclusion
While React Router doesn't natively provide "context menu" features, it seamlessly integrates with standard React component development for building such UI elements. The useNavigate hook (or history.push in older versions) allows your context menu actions to trigger navigation, making it easy to create a unified user experience. The core logic of the context menu (visibility, positioning, event handling) remains a pure React and DOM manipulation concern, separate from the routing logic.

1. What is React and why is it popular?
2. What are the limitations of React?
3. Key advantages of using React in large-scale apps?
4. Explain Strict Mode in React,when do you use it?
5. Can React Hooks replace Redux in all scenarios?
6. Difference between useState() and useReducer().
7. How does useEffect() work? List real use cases.
8. How do you prevent unnecessary re-renders in React?
9. What’s the Virtual DOM and why does it matter?
10. Controlled vs uncontrolled components,when to use each?
11. Handling forms and form validation in React.
12. How do refs work? When should you use them?
13. Error boundaries,how and why to use them?
14. React context API,how does it help with prop drilling?
15. useCallback() vs useMemo(),when and why?
16. SSR vs CSR,benefits and trade-offs in React.
17. What is lazy loading in React? Give practical examples.
18. Code splitting in React,how do you implement it?
19. How do you manage global state in React apps?
20. Redux vs Context API,when to choose what?
21. What’s the purpose of keys in lists? Why are they needed?
22. Fragment vs div,how and when to use each?
23. Portals in React,what are they, and why would you use one?
24. useRef(),how does it differ from createRef()?
25. useLayoutEffect() vs useEffect().
26. Best practices for side effects in React apps.
27. Debouncing and throttling in React,where and how?
28. How do you handle component communication (parent-child, siblings)?
29. Prop drilling,problems and solutions.
30. React Router,how do you manage navigation and params?
31. Dynamic routing,how do you set it up?
32. How do you test React components? (unit, integration, e2e)
33. How does React handle events? Custom vs native events.
34. How do you optimize React performance in large apps?
35. What is reconciliation? How does React diff trees?
36. Mounting, updating, and unmounting phases,what happens when?
37. How do you fetch data on mount? (show code)
38. When should you use class components over function components (if ever)?
39. HOCs vs render props,differences, use cases, gotchas.
40. Lifting state up,what is it and when do you do it?