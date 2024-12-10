import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../../helper/ToastNotify";

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

export default function SaleModal({ open, handleClose, initialState }) {
  const [info, setInfo] = useState(initialState);

  const { postStockData, putStockData } = useStockCall();

  const { brands, products } = useSelector((state) => state.stock);
  console.log(products);
  console.log(info);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedProduct = products.find(
      (product) => product._id === info.productId
    );

    console.log(selectedProduct);

    if (selectedProduct && selectedProduct.quantity < info.quantity) {
      toastErrorNotify(
        `Not enough stock available. The Product in stock : ${selectedProduct.quantity}`
      );
      return;
    }

    try {
      if (info._id) {
        await putStockData("sales", info);
      } else {
        await postStockData("sales", info);
      }
      toastSuccessNotify("Sale completed successfully.");
      handleClose();
    } catch (error) {
      toastErrorNotify("An error occurred. Please try again.");
    }
  };

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
              <InputLabel id="demo-simple-brand-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                id="demo-simple-select"
                name="brandId"
                value={info.brandId?._id}
                label="Brand"
                onChange={handleChange}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-product-label">Product</InputLabel>
              <Select
                labelId="demo-simple-product-label"
                id="demo-simple-select"
                name="productId"
                value={info.productId?._id}
                label="Product"
                onChange={handleChange}
              >
                {products.map((product) => (
                  <MenuItem key={product._id} value={product._id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              name="quantity"
              label="Quantity"
              type="number"
              variant="outlined"
              value={info.quantity}
              onChange={handleChange}
              required
            />
            <TextField
              name="price"
              label="Price"
              type="number"
              variant="outlined"
              value={info.price}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {info._id ? "UPDATE SALE" : "SAVE SALE"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
