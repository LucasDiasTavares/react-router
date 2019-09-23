# React
React Studying

### Learning the basics of router. 
In this project I'm using a free api from [Star Wars api](https://swapi.co/) to fetch the names, avatar, etc. And trying to figure out how the things happens in real world projects.

- First I need to install the Router:

### `npm install react-router-dom`

In my App.js,  I need to import:
### `import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';`

Above you can see that I imported 3 things: BrowserRouter, Route and Switch.

- BrowserRouter: the ability to create Routers in React.
- Route: Render out the component based in the url.
- Switch:  will stops when the url math with the first path.

Since I already have my others pages created, I just need to wrap them.
As you can see nothing happens...

### adding BrowserRouter
```javascript
function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <Shop />
      <About />
      </div>
    </Router>
  );
}
```
### adding Route
When I'm using Router it's needs to specify 2 things:
- path
- component

```javascript
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route path='/shop' component={Shop} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}
```
Now I can access my page from http://localhost:3000/about or http://localhost:3000/shop

#### Important: If I have any Route like:

`<Route path='/' component={Home} />`

Reacts will stops when it match with the first url patter and will render it out.
Example: http://localhost:3000/shop will render the home page and the shop page together but  I don't want it, how can I fix?

Easy, here is where Switch comes in, just need to tell to Reacts that the Route needs to be exactly this path.
```javascript
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}
```

Cool, now everything works! Now I'll add, this paths to my Navbar.

### import { Link } from 'react-router-dom';

Now adding my paths, it's needs to wrap my li with Link tag.

```javascript
function Navbar() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul className='nav-link '>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
```
It's the basic of the React Router!!

==============================================================================

Here I'll fetch some data from Star Wars api, and make some dynamically urls.

In my Shop.js I need to import 2 things.

`import React, { useState, useEffect } from 'react';`

- useState: I have already learned from [state management project](https://github.com/Pancitopenico/reacts-state-management).

- useEffect: It's will allow me to fetch data.

This is the function that I will call to fetchItems.

```javascript
function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
```

Here is my fechItems, function that fetch my date from api.

```javascript
const fetchItems = async () => {
  const data = await fetch('https://swapi.co/api/vehicles/');

  const items = await data.json();
  console.log(items.results);
  setItems(items.results);
};
```
Important: Don't forget to do the transparency to json: `const items = await data.json();`

Here is my retun. My return depends how the api works.

```javascript
return (
  <div>
    {items.map(item => (
      <h1>{item.name}</h1>
    ))}
  </div>
);
```

Important: Warning: Each child in a list should have a unique "key" prop. It's a error in my console log, tell us that I forgot the pass my id, in this pai the id is the name.

`<h1 key={item.name}>{item.name}</h1>`

Now I need to Link all the date that are in my screen:

- Import in Shop.js:

`import { Link } from 'react-router-dom';`

- Change my code to:

`<Link to={`/shop/${item.name}`}>{item.name}</Link>`

Now I'll go to my App.js and create a new Route like:

`<Route path='/shop/:id' component={About} />`

### Important: Don't forget to aplly exact in shop route.

`<Route path='/shop' exact component={Shop} />`

Create a new component for exemple: ItemDetail.js

```javascript
function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
```




Here in this function I learned something awesome. Inside my function I can use { match } and I'll receive a Json with some infos, one of them is Params, there I can see somethings cool, like ID, PATH, and URL. That's will help me a lot. 

```javascript
function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
```
