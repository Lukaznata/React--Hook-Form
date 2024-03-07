import styled from 'styled-components';



export const AppContainer = styled.div`
/* styles */
background-color: #111;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const FormGroup = styled.div`
/* styles */
display: flex;
flex-direction: column;
margin: 10px 0;
width: 500px;


& .error-message {
  color: rgb(255, 72, 72);
  font-size: 0.75rem;
  margin-top: 8px;
}
& .input-error {
  outline: 1px solid rgb(255, 72, 72);
}


& label {
  color: #eee;
  font-weight: 500;
}

& input {
  padding: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #444;
  color: #eee;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  outline: 1px solid 444;
}
& input::placeholder {
  color: #999;
}

& select{
  padding: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #444;
  color: #eee;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

& button {
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: #eee;
  background-color: #49a1b8;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 500ms ease;
}
& button:hover {
  cursor: pointer;
  background-color: #61dbfb;
}

`

export const CheckboxGroup = styled.div`
/* styles */
flex-direction: row;
align-items: center;

& label{
    font-size: 0.825rem;
    margin-left: 10px;
}

& .error-message {
  color: rgb(255, 72, 72);
  font-size: 0.75rem;
  margin-top: 8px;
}
& .input-error {
  outline: 1px solid rgb(255, 72, 72);
}

`