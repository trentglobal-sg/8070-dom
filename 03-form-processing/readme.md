# Get Values from textbox
1. Select the textbox
2. Read the `.value` property
```
const usernameTextbox = document.querySelector("#username");
console.log(usernameTextbox.value)
```

Or more concisely
```
document.querySelector("#username").value
```

Or more concisely, we can use `?.` to prevent unncessary crashes
```
document.querySelector("#username")?.value
```

# Get selected radio button

```
document.querySelector(".saluations:checked").value
```