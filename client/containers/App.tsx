import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import Landing from './Landing'
import NavBar from '../components/NavBar'
import SavedForms from './SavedForms';
import Drafts from './Drafts'
import Contact from './Contact'
import Help from './Help'
import TakeTour from './TakeTour'
import '../../style.scss'


export default function App(props: any) {
  //responsible for updating state synchronously to reflect drag
  //and drop result
   const onDragEnd = result => {
    //TODO reorder dropped elements
  }
  return (
    <div>
    <div>
      <NavBar />
    </div>
    <BrowserRouter>
    <div>
      <div className = 'landing'>
      <Switch>
        <Route exact path='/'>
      {/* Component that wraps part of application that will have drag and drop capability:
      Takes  up to 3 callbacks: onDragStart, onDragUpdate, onDragEnd(only required callback) */}
      <DragDropContext 
      onDragStart
      onDragUpdate
      onDragEnd={props.onDragEnd}
      >
        <Landing />
      </DragDropContext>
        </Route>
        <Route exact path='/savedforms'>
          <SavedForms />
        </Route>
        <Route path='/drafts'>
          <Drafts />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path='/take-a-tour'>
          <TakeTour />
        </Route>
      </Switch>
      </div>
    </div>
    </BrowserRouter>
    </div>
  )
};
