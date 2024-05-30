import React, { useRef, useState } from "react";
import DataGrid, {
  Column,
  FilterRow,
  HeaderFilter,
  Search,
  SearchPanel,
  Paging,
  Pager
} from "devextreme-react/data-grid";

import { orders } from "./data.js";
import Navbar from '../component/navbar.jsx';
const Notifications = () => {
  const dataGridRef = useRef(null);
  const booleanFormatter = (cellData) => {
    console.log("cellData = ", cellData);
    return cellData.value ? "Yes" : "No";
  };
  const allowedPageSizes = [5, 10, 'all'];
  const [showPageSizeSelector, setShowPageSizeSelector] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showNavButtons, setShowNavButtons] = useState(true);
  return (
    <>
      <Navbar />
    <div>
      <DataGrid
        id="gridContainer"
        ref={dataGridRef}
        dataSource={orders}
        keyExpr="_id"
        showBorders={true}
      >
         <Paging defaultPageSize={5} />
        <Pager
          visible={true}
          allowedPageSizes={allowedPageSizes}
          displayMode={'full'}
          showPageSizeSelector={showPageSizeSelector}
          showInfo={showInfo}
          showNavigationButtons={showNavButtons}
        />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <SearchPanel visible={true}  placeholder="Search..." />
        <Column dataField="content"  caption="Content">
          <HeaderFilter />
        </Column>
        <Column dataField="type" dataType="type" >
          <HeaderFilter>
            <Search enabled={true} />
          </HeaderFilter>
        </Column>
        <Column
          dataField="createdAt"
          dataType="datetime"
          format="M/d/yyyy, HH:mm"
          
        />

        <Column
          dataField="read"
          caption="Read"
          dataType="boolean"
          calculateCellValue={(cellData) => cellData.read} // Access the boolean value from your data
          customizeText={booleanFormatter}
          allowFiltering={false}
        />
         
      </DataGrid>
    </div>
    </>
  
  );
};
export default Notifications;
