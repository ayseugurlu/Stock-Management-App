import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BrandModal({ open, handleClose, initialState }) {
  const [info, setInfo] = useState(initialState);

  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    // console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      putStockData("brands", info);
    } else {
      postStockData("brands", info);
      
    }

    handleClose();
  };

  console.log(initialState);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              name="name"
              label="Brand Name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              name="image"
              label="Brand Logo"
              type="text"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {info._id ? "UPDATE BRAND" : "SAVE BRAND"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
