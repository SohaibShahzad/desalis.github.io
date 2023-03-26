import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { hotelsHeader } from "../../Utilis/DataTableSource";
import { Box } from "@mui/material";

const DataTable = () => {
  const { profileData } = useSelector((state) => state.dataProfile);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList([profileData]);
  }, [profileData]);

  const handleDelete = () => {};
  const handleView = () => {};
  const deleteColumn = [
    {
      field: "delete",
      headerName: "",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  const viewColumn = [
    {
      field: "view",
      headerName: "",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button
              className="btn btn-primary"
              onClick={() => handleView(params.row._id)}
            >
              View
            </button>
          </div>
        );
      },
    },
  ];
  // console.log(list);
  //   setList([profileData]);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={list}
        columns={hotelsHeader.concat(viewColumn, deleteColumn)}
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
