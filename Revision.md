### What is a component

- A function
- Returns JSX
- Reusable part of UI
- Component name always start with capital letter
- No need to use () with return if the line is one

```
const Profile =()=>{
    return <div> This is Profile component </div>
}
```

### Using of a component

```
const App = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};
```

### Exporting of a component

```
export default Hello
```

### JSX Rules

- Always return a single root element , Cover multiple tags or lines in one div or a fragment
- Every tag should be closed ,self closing tags like img => <img/>
- camelCase in almost everywhere => "className"
- Inside JSX we can include {} to write JavaScript
- To pass JS objects we need to wrap it in double {{  }}
- JSX attributes inside quotes are passed like strings

### Passing Props inside a component

React communicate its parent component to child component using props,
every component can pass informations using props

### How to pass

Include child component in parent component like including videoCards in videoContainer
Pass the information in videocards from parent component

Passed component can recieve and destructure using {} in other component

```
function Avatar({ person, size }) {
  // person and size are available here
}
```

also we can pass props as a single argument

```
function Avatar(props) {
  let person = props.person;
  let size = props.size;
}
```

- Don’t miss the pair of { and } curlies inside of ( and ) when declaring props
- This syntax is called “destructuring” and is equivalent to reading properties from a function parameter

#### Specifying default parameter

```
function Avatar({ person, size = 100 }) {
  // ...
}
```

**The default value will only work the **size** property is passed as undefined or its missing then only the default size is used**

Usage of spread operator , Its just spreading the object in the props

```
      <Avatar {...props} />
```

### Importent Notings on props

- To pass props, add them to the JSX, just like you would with HTML attributes.
- To read props, use the function Avatar({ person, size }) destructuring syntax.
- You can specify a default value like size = 100, which is used for missing and undefined props.
- You can forward all props with `<Avatar {...props} />` JSX spread syntax, but don’t overuse it!
- Nested JSX like`<Card><Avatar /></Card>`will appear as Card component’s children prop.
- Props are read-only snapshots in time: every render receives a new version of props.
- You can’t change props. When you need interactivity, you’ll need to set state.

### Conditional Rendering

By using conditional operators like **if && ? :** ,react can conditionaly render components

```
if(isTrue){
    return //
}
```

If the condition is true then the code will work

We can use ternary operator also
isValue? <Slider/> : <Navbar/>
**If true then slider will render**

### Usage of logical operators

```
{isPacked && '✅'}
```

In this case the tick mark is always true, if `isPacked` is true then the tick will render because AND operator works on two values is true

**Importent**
While using && the the values will be converted into boolean values (true or false) ,Suppose if we are using the left value as "0" it will never render because the 0 means false then the entire AND is failed
messageCount = 0
Eg: messageCount && ImportentData

**The importent data wil never show because its false**

## Rendering using null

if(value) return null;

- You can return a JSX expression conditionally with an if statement.
- In React, you control branching logic with JavaScript.
- You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
- In JSX, `{cond ? <A /> : <B />} `means “if cond, render` <A />`, otherwise `<B />`”.
- In JSX, `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”.
- The shortcuts are common, but you don’t have to use them if you prefer plain if.

## Rendering the lists

Rendering data from a source we can use JS map() and filter() methods

- Each element should contain unique key

```
Warning: Each child in a list should have a unique “key” prop.
```

- Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.

- Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

- Rules of keys
  Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
  Keys must not change or that defeats their purpose! Don’t generate them while rendering.

## Keeping components Pure

- A component must be pure, meaning:

  - It minds its own business. It should not change any objects or variables that existed before rendering.
  - Same inputs, same output. Given the same inputs, a component should always return the same JSX.

- Rendering can happen at any time, so components should not depend on each others’ rendering sequence.
- You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.
- Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.
- Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.

# Adding Interactivity

## Responding to Events

React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

1.Declare a function called handleClick inside your Button component.
2.Implement the logic inside that function (use alert to show the message).
3.Add onClick={handleClick} to the`<button>`JSX.

```
const handleClick = () => {
  alert("Button clicked");
};

const Button = () => {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Button;

```

### Importent

**Never pass functions inside event handler like ` {handleClick()}` this will invoke quickly when the component renders always pass the function name only or pass a anyonymous function in the event handler to simplify**

**Reading props from Event handlers**

```
const Button = ({ message }) => {
  return (
    <button
      onClick={() => {
        alert(message);
      }}
    >
      Click Me
    </button>
  );
};
const Profile = () => {
  return (
    <div>
      <Button message="event have access to this message" />
    </div>
  );
};
export default Profile;
```

## Passing event handlers as props 
## Event Propagration 
## Preventing Default Behaviour of event Handler
When we are submitting a form in react through onSubmit() event it will reload the page ,
to prevent this we will use a function that **e.preventDefault()** to restrict its default
behaviour
* 
* You can handle events by passing a function as a prop to an element like <button>.
* Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
* You can define an event handler function separately or inline.
* Event handlers are defined inside a component, so they can access props.
* You can declare an event handler in a parent and pass it as a prop to a child.
* You can define your own event handler props with application-specific names.
* Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
* Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
* Explicitly calling an event handler prop from a child handler is a good alternative to propagation.



# State: A Component's Memory

In React, a state is a built-in object that allows components to store and manage dynamic data that can change over time. When the state of a component changes, React re-renders the component to reflect the new data in the UI.

useState is a hook that allows state variable

````const [state, setState] = useState(initialState)````
##### Usage
* Adding state to a component
* Updating state based on the previous state
* Updating objects and arrays in state
* Avoiding recreating the initial state
* Resetting state with a key
* Storing information from previous renders

* Always call state in top level of the component
* The naming covention is like ````[variable, setVariable]````
* ````[variable,setVariable] ````is array destructering


useState is a React Hook that lets you add a “state variable” to your components. This state variable holds data that can change over time, such as user input or UI theme preference.

When you declare a state using useState, the state gets initialized with a default value. Moreover, the useState invocation returns a pair: the current state value and a function to update it (also known as the “state setter function”). This might seem a bit confusing at first, but it will become clearer in the upcoming sections.

The key benefit of state variables is that when they change, they trigger a re-render of their component, allowing the UI to reflect the updated state (such as switching between dark and light themes). This makes useState essential for managing dynamic data and ensuring your component stays in sync with user interactions and other changes.

2. Reference
const [state, setState] = useState(initialValue)
The convention to declare state variables using array destructuring (const [something, setSomething]), because useState returns an array with exactly two values:

A variable containing the current state value
A setter function for updating the state value
You can provide a default value as a parameter in the useState call to initialize the state variable with a value.

3. Example
Let’s take a look at how the useState hook works in practice. In the following example, we create a simple React component that manages a piece of state called name:

````
import { useState } from 'react'

function MyComponent() {
  const [name, setName] = useState('Emre')
  return (
    <div>
      <p>Hello, {name}!</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
````
In this example:

We declare a state variable name and a corresponding setter function setName using useState, initializing name with the default value 'Emre'.
The component renders an input field, allowing the user to change their name. The input’s value is controlled by the name state, and each time the user types in the input, setName is called to update the name state with the input’s new value.
Each time the name state changes, the component re-renders, updating the displayed name accordingly.
This example illustrates how useState enables dynamic, user-driven changes in a React component while ensuring the UI remains in sync with the current state. By using the setName function, we trigger a re-render whenever the state updates, ensuring React handles the UI efficiently.

4. Updating State Based on Previous Values
Whenever you are modifying state based on its previous value (e.g., incrementing/decrementing a number, appending a string), it’s important to pass an arrow function to the setter function instead of using a directly calculated value. Let me explain.

Assume you have this state variable:

````const [count, setCount] = useState(0) // count is 0 by default````
Now, let’s say you want to increment the count. Both of the following approaches would work:

````
setCount(count + 1) // valid
setCount(prevCount => prevCount + 1) // also valid
````
However, the difference becomes apparent when you invoke the setter function multiple times between component renders, like this:

````
setCount(count + 1)
setCount(count + 1)
// count becomes 1
````
In this case, the state would only be incremented by one. But if you use the arrow function approach:

````
setCount(prevCount => prevCount + 1)
setCount(prevCount => prevCount + 1)
// count becomes 2
````
The state will correctly increment by two.

Why Does This Happen?
The reason behind this behavior lies in how React handles state updates. When you pass count + 1 directly to setCount, it uses the current value of count at the time the function is called. If the setCount function is called multiple times in between renders, each call will reference the same count value, leading to the state being incremented by only one.

On the other hand, when you pass an arrow function to setCount, React queues these functions and executes them sequentially. Each function receives the most recent state value as its argument (prevCount), ensuring that each update is based on the latest state. This is why the state increments correctly by two when using the arrow function approach.

Passing an arrow function to the setter function is necessary when the state is being modified multiple times based on its current value between renders. However, if you are only invoking the setter function once before each render, you can safely pass a calculated value to the setter instead.

5. Optimization Remarks
There is a performance-related consideration you should be aware of when using the useState hook, specifically regarding the default value.

By default, the value is calculated every time the component renders, which can be non-ideal in certain situations.

For example, with a state variable like this, there is no concern, as it’s just a simple value being passed as the default:

````
const [age, setAge] = useState(27)
````
However, with a state variable like the one below, you should be concerned about the potential performance impact:

````
const calculateFibonacci = (n) => {
  if (n <= 1) {
 
    return n
  }
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2)
} // this will take a few seconds to compute
````

````const [fibValue, setFibValue] = useState(calculateFibonacci(40))````
When unwanted default value recalculations of useState hook become a performance concern, you should use lazy initialization (passing a function) instead of direct invocation. Let’s explore the differences between these two approaches and their implementations

Direct Invocation
````const [fibValue, setFibValue] = useState(calculateFibonacci(40))````
In this case, the default value is computed through direct invocation, which occurs every time the component renders. This means the expensive computation will take place on every render, even if the result is only needed once during the initial render.

This can lead to unnecessary performance costs, especially if the computation is time-consuming.

Lazy Initialization (Passing a Function)
````const [fibValue, setFibValue] = useState(() => calculateFibonacci(40))````
In this case, an arrow function is passed as the default value, which defers the execution of the expensive function until the initial render when React initializes the state.

By passing the function itself rather than the result of the function, the expensive computation is deferred until the state is actually initialized. This avoids performing the calculation on every render, which improves performance.

6. Managing an Object State
When working with useState, you will typically manage individual pieces of information, each with its own state variable. However, if you need to store an object in a state variable, modifying it can be tricky. For example:

````const [userPrefs, setUserPrefs] = useState({ theme: "dark", language: "eng" })````

// assume this function is used to change UI theme
````
const switchTheme = (newTheme) => {
  setUserPrefs({ theme: newTheme })
}
````
This will update the theme, but it will remove every other property in the object that the state variable was holding. This happens because React doesn’t automatically merge objects when updating state; it completely replaces the old object with the new one. To maintain all other properties in the object, you’ll need to merge them manually;

````const [userPrefs, setUserPrefs] = useState({ theme: "dark", language: "eng" })````

// assume this function is used to change UI theme
````
const switchTheme = (newTheme) => {
  setUserPrefs(prevState => {
  return {...prevstate, theme: newTheme}
  })
}
````
Now, the theme will be updated while the state variable is maintaining all of the other properties in the object.


