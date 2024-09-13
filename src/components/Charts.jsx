import { Grid } from "@mui/material";
import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";



const dataFormatter = (number) =>
  `€${Intl.NumberFormat("de").format(number).toString()}`;

export function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales.map((sale) => ({
    date: new Date(sale.createdAt).toLocaleString(),
    sale: sale.amount,
  }));
  const purchasesData = purchases.map((purchase) => ({
    date: new Date(purchase.createdAt).toLocaleString(),
    purchase: purchase.amount,
  }));
  return (
    <Grid container mt={5}>
      <Grid item xs={12} md={6}>
        <AreaChart
          className="h-80"
          data={salesData}
          index="date"
          categories={["sale"]}
          colors={["fuchsia"]}
          valueFormatter={dataFormatter}
          yAxisWidth={70}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <AreaChart
          className="h-80"
          data={purchasesData}
          index="date"
          categories={["purchase"]}
          colors={["amber"]}
          valueFormatter={dataFormatter}
          yAxisWidth={70}
        />
      </Grid>
    </Grid>
  );
}
