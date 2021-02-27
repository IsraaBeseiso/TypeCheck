import React from 'react';
import { ActionTypes } from './state';
import { useTyping } from '.'

const UserInput = () => {
  const [{input}, dispatch] = useTyping();
  return (
    <textarea
    value={input}
    onchange={e => dispatch({type: ActionTypes.CHANGE_INPUT, payload: e.target.value})
       }
     />
    );
};

export default UserInput;

