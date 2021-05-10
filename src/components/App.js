import React from 'react';
import { BrowserRouter,HashRouter,MemoryRouter, Route,Router,Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


// const PageOne = () => {
//     return (
//         <div>
//         <Link to="/pagetwo"> Navigate to page two</Link>
//         </div>
//     );
// }
// const PageTwo = () => {
//     return (
//         <div>
//         <Link to="/"> Navigate to page One</Link>
//         </div>
//     );
// }
 // switch is used to match proper paths as the router will consider /streams/new is same as /streams/:id it will place new in place of id variable
const App = () => {
    return (
    <div className='ui container'>
        
        <Router history={history}>
        <div>
        <Header/>
        
        <Switch>
        {/* <Route path= "/" exact component = {  PageOne }/>
        <Route path= "/pagetwo"  component = {  PageTwo }/> */}
        <Route path='/' exact component={StreamList}/>
        <Route path='/streams/new' exact component={StreamCreate}/>
        <Route path='/streams/edit/:id'  exact component={StreamEdit}/>
        <Route path='/streams/delete/:id' exact component={StreamDelete}/>
        <Route path='/streams/:id' exact component={StreamShow}/>
        </Switch>
        </div>
        </Router>
        {/* <HashRouter>
        <div>
        <Route path= "/" exact component = {  PageOne }/>
        <Route path= "/pagetwo"  component = {  PageTwo }/>
        </div>
        </HashRouter> */}
        {/* <MemoryRouter>
        <div>
        <Route path= "/" exact component = {  PageOne }/>
        <Route path= "/pagetwo"  component = {  PageTwo }/>
        </div>
        </MemoryRouter> */}
        
    </div>
    );
}

export default App;

/*
user wants to navigate to another page in our app.
user clicks 'link' tag
React Router prevents the browser from navigating to the new page and fetching new index.html!
url still changes 
history sees updated URL , takes URL and sends it to BrowserRouter
browserRouter communicates the URL TO ROUTE components.
Route components rerender to show new set of components.

using link tag we are not dumping all of our javascript data as in traditional anchor tag also no additional request to server, single page load

Three different routers

Browser Router : uses everything after the TLD(.com,.net) or port as the 'path'  -> localhost:3000/pagetwo

hashRouter: uses everything after a # as the path  -> localhost:3000/#/pagetwo  -> localhost:3000/

memoryRouter : Doesn't uses the url to track navigation

*/