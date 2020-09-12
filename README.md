<h2>React Context API Example</h2>

Basically, you create a context - using React.createContext() - which then wraps the child components of a Parent component using .Provider and a "value" prop. This value prop should be the parent's state (or piece of state). Any update to this state will be instantly passed down to any child components that need it.

For these child components to access it though, you need to import the original context you created into the child component's file. And then wrap the return statement in the .Consumer . Doing this means that your return can now become its own function, the argument of which is the context being passed into it. See Message.js or Message2.js to see exactly what I mean.

Keep in mind how Context causes components to re-render. You want to avoid components re-rendering that don't need to.

FYI, it looks like there is a way to do global state in Gatsby (that persists between pages) if you look into it. Pretty exciting and potential game changer.