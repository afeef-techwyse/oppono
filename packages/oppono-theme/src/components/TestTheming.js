import React from 'react';
import {styled, connect} from 'frontity';

const TestTheming = ({state, actions, className}) => {
// const TestTheming = (props) => {
//   props.state
//   props.actions
  
  const theme = state.theme.activeTheme;
  const borderColor = theme.colors.border;
  
  
  return (
    <div className={className} style={{background: state.theme.activeTheme.background}}>
      <div
        style={{
          borderColor,
          color: theme.colors.text,
        }}
        onClick={() => actions.theme.setActiveTheme('green')}>Chose Green Theme
      </div>
      <div
        style={{
          'border-color': theme.colors.border,
          color: theme.colors.text,
        }}
        onClick={() => actions.theme.setActiveTheme('blue')}>Chose blue Theme
      </div>
    </div>
  );
};

export default styled(connect(TestTheming))`
overflow:hidden;
height: 100vh;
div{
  padding: 10px;
  margin: 10px;
  font-size: 30px;
  border: 3px solid red;
  transition: color 3000ms, border-color 3000ms;
}
`;