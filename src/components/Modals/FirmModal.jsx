import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import useStockCall from '../../hooks/useStockCall';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({open,handleClose ,initialState}) {
  
   const {postStockData,putStockData} =useStockCall()
 

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
            // initialValues={{
            //   name: "",
            //   phone: "",
            //   address: "",
            //   image: "",
            // }}
            initialValues={initialState}

            onSubmit={(values,actions) => {
              // same shape as initial values
              console.log(values,actions);
                {values._id ?  putStockData("firms",values) : postStockData("firms",values)}
              handleClose()
             
              actions.resetForm();
              actions.setSubmitting(false)
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
            }) => (
              <Form>
                  <Box sx={{display:"flex", flexDirection:"column" , gap:3}}>

                  <TextField
                      name="name"
                      label="Firm Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <TextField
                      name="address"
                      label="Firm Address"
                      id="firmaddress"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  
                    <TextField
                      name="phone"
                      label="Firm Phone"
                      id="firmphone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      name="image"
                      label="Firm Logo"
                      id="image"
                      value={values.image}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />


                    
                    <Button type="submit" variant="contained" color="primary">{values._id ? "UPDATE FIRM" : "SAVE FIRM"}</Button>

                  </Box>

              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}