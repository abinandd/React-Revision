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
* 