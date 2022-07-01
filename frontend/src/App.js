import logo from './logo.svg';
import './index.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Box } from '@mui/material';
import { useState } from 'react';
import { sendEmail } from './sendEmail';

import { toast } from 'react-toastify';

function App() {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  function handleMessage(e){
    setMessage(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  async function send(){
    console.log(email)
    console.log(message)
    const text = {email, message};
    const parseText = JSON.stringify(text);
    const response = await sendEmail(parseText);

    if(response){
      toast.success(`Email enviado: ${response}`);
    }
  }


  return (
    <div className="app">
      <form className='form'>
        <Box className='email'>
          <TextField
              label="Email (destinatário)"
              type="email"
              size='normal'
              fullWidth
              onChange={handleEmail}
          />
        </Box>

        <Box className='message' sx={{ height: '100%' }}>
          <TextField
              label="Mensagem"
              type="string"
              size='normal'
              fullWidth
              onChange ={handleMessage}
          />
        </Box>

        <Box className='submit'>
          <Button variant="contained" fullWidth onClick={send} >Enviar</Button>
        </Box>
      </form>
    </div>
  );
}

export default App;
