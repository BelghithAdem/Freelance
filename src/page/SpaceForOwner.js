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

import { spacesByOwner } from "./data-spaces";

const SpacesForOwner = () => {
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
    <div>
      <DataGrid
        id="gridContainer"
        ref={dataGridRef}
        dataSource={spacesByOwner}
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
        <Column dataField="titre"  caption="titre">
          <HeaderFilter />
        </Column>
        <Column dataField="description" dataType="description" >
          <HeaderFilter>
            <Search enabled={true} />
          </HeaderFilter>
        </Column>
        <Column dataField="dimension" dataType="dimension" >
          <HeaderFilter>
            <Search enabled={true} />
          </HeaderFilter>
        </Column>
        <Column dataField="place_assise" dataType="place_assise" >
          <HeaderFilter>
            <Search enabled={true} />
          </HeaderFilter>
        </Column>
        <Column dataField="place_debout" dataType="place_debout" >
          <HeaderFilter>
            <Search enabled={true} />
          </HeaderFilter>
        </Column>
        <Column dataField="ville" dataType="ville" >
          <HeaderFilter>
            <Search enabled={true} />
          </HeaderFilter>
        </Column>
        <Column dataField="prix" dataType="prix" >
          <HeaderFilter>
            <Search enabled={true} />
          </HeaderFilter>
        </Column>
        <Column dataField="categorie" dataType="categorie" >
          <HeaderFilter>
            <Search enabled={true} />
          </HeaderFilter>
        </Column>
       

     
      </DataGrid>
    </div>
  );
};
export default SpacesForOwner;
