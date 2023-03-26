import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { hotelsHeader } from "../../Utilis/DataTableSource";
import { Box } from "@mui/material";

const DataTable = () => {
  const { profileData } = useSelector((state) => state.dataProfile);
  const [list, setList] = useState([profileData]);
  console.log(list);
  //   setList([profileData]);
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={list}
        columns={hotelsHeader}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
