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
* To pass props, add them to the JSX, just like you would with HTML attributes.
* To read props, use the function Avatar({ person, size }) destructuring syntax.
* You can specify a default value like size = 100, which is used for missing and undefined props.
* You can forward all props with ```<Avatar {...props} />``` JSX spread syntax, but don’t overuse it!
* Nested JSX like``` <Card><Avatar /></Card> ```will appear as Card component’s children prop.
* Props are read-only snapshots in time: every render receives a new version of props.
* You can’t change props. When you need interactivity, you’ll need to set state.
