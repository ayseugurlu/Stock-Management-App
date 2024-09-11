import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";

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

export default function PurchaseModal({ open, handleClose, initialState }) {
  const [info, setInfo] = useState(initialState);

  const { postStockData, putStockData } = useStockCall();

  const {categories,brands} =useSelector(state=>state.stock)

  console.log(categories);

  const handleChange = (e) => {
    // console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

//   console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      putStockData("products", info);
    } else {
      postStockData("products", info);
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-category-label">Category</InputLabel>
              <Select
                labelId="demo-simple-category-label"
                id="demo-simple-select"
                name="categoryId"
                value={info.categoryId}
                label="Category"
                onChange={handleChange}
              >
              {categories.map((category)=> (
                <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                ))}
                
               
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-brand-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                id="demo-simple-select"
                name="brandId"
                value={info.brandId}
                label="Brand"
                onChange={handleChange}
              >
              {brands.map((brand)=> (
                <MenuItem key={brand._id} value={brand._id}>{brand.name}</MenuItem>
                ))}
                
               
              </Select>
            </FormControl>
            <TextField
              name="name"
              label="Brand Name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              
            />
           

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {info._id ? "UPDATE PRODUCT" : "SAVE PRODUCT"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
