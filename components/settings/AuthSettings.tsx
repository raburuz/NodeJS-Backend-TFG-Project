import React, { useContext, useState } from 'react';
import { RegisterOptions, useForm,SubmitHandler } from 'react-hook-form';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AuthContext } from '../../context';
import style from './settings.module.css'
import { SettingsUserInterface } from '../../interfaces';
import { Input } from '../form/input/Input.component';
import { updateApi } from '../../apis/authApi';
import { Alert, Snackbar } from '@mui/material';
import { validate } from 'email-validator';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';




interface InputComponent {
    name: string;
    label: string;
    type?: string;
    defaultValue?: string;
    rules?: RegisterOptions;
  }
  


 export function AuthSettings() {
  const { userData, logout,updateUser } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setOpen(false);
  };
  const isValidEmail = (email: string) => {
    return validate(email) ? undefined : 'Email is invalid';
  };
  const onSubmit: SubmitHandler<SettingsUserInterface> = async data => {
    


 
    setOpenModal(false);
    if(userData != null){

      const value = await updateApi(data,userData.user?.id ?? '');

          console.log(data);
      if(value.hasOwnProperty('error')){
        
        
     
        setOpen(true);
        
        
      }else{
        

        updateUser(value);
        setOpenSuccess(true);

      }


    }
 

  }

  const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'gray',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const inputPassword: InputComponent[] = [  {
    name: 'password',
    type: 'password',
    label: 'Password',
    rules: {
      required: 'This field is required'
    },
   
  },
];

  const inputs: InputComponent[] = [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      defaultValue:userData.user?.username,
      rules: {
        required: 'This field is required',
    
      },
    },
  
    {
      name: 'newPassword',
      type: 'password',
      label: 'New Password',
     
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      defaultValue:userData.user?.email,
      rules: {
        required: 'This field is required',
        validate: isValidEmail,
      },
     
    },
    {
      name: 'role',
      type: 'hidden',
      label:'',
      defaultValue: 'NORMAL_USER_ROLE',

     
    },
  ];

  const handleOpen = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<SettingsUserInterface>();

  const username = inputs[0];


  return (
    <Box
      sx={{width:'100%'}}
    >
 
        <div className={style.Contsetting}>
            <h1 className={style.titleUser}>User setting</h1>
            <div className={style.log}>
                <div className={style.imagePerfil}>
                <Stack direction="row" spacing={10}>
                    <Avatar  sx={{ width: 250, height: 250 }} alt="Usuario" src="/static/images/avatar/1.jpg" />
                </Stack>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className= {style.inputPerfil}>
                        {inputs.map((input: InputComponent) => {
                          return (
                            <div key={input.name}>
                              <Input data={{ ...input, control, errors }} />
                            </div>
                          );
                      })}
                    <Button onClick={handleOpen} variant="text" sx={{background:'purple',color:'white'}}>Confirm</Button>
                </div>
                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={styleModal} >
          {inputPassword.map((input: InputComponent) => {
                          return (
                            <div key={input.name}>
                              <Input data={{ ...input, control, errors }} />
                            </div>
                          );
                      })}

<Button  type="submit" onClick={handleOpen} variant="text" sx={{background:'purple',color:'white'}}>Update</Button> 
          </Box>
        </Fade>
      </Modal>
                </form>
                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                      User or Password is invalid
                  </Alert>
                </Snackbar>
                <Snackbar open={openSuccess} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your profile has been successfully edited
                  </Alert>
                </Snackbar>
         
               
            </div>
        </div>  
    </Box>
    
  );
}

