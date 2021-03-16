import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";

//Components
import { Button } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import DeleteComponent from "../globals/DeleteComponent";

export const SaleItem = ({
  sale,
  no,
  saleDeleteRequest,
  loadingDelete,
  errorDelete,
}) => {
  return (
    <>
      <div className="table_row">
        <div className="table_small">
          <div className="table_cell">No</div>
          <div className="table_cell">{no}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Sold At</div>
          <div className="table_cell">{moment(sale.soldAt).format("L")}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Customer</div>
          <div className="table_cell">{sale.customer.name}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Premium</div>
          <div className="table_cell">{sale.liabilityInsurer?sale.liabilityInsurer.name:'-'}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Motor Charge</div>
          <div className="table_cell">{sale.cargoInsurer?sale.cargoInsurer.name:'-'}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Physical Damage</div>
          <div className="table_cell">{sale.physicalDamageInsurer?sale.physicalDamageInsurer.name:'-'}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">WC,GL,UMB</div>
          <div className="table_cell">{sale.wcGlUmbInsurer ? sale.wcGlUmbInsurer.name : '-'}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Permits</div>
          <div className="table_cell">{sale.permits}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Fees</div>
          <div className="table_cell">{sale.fees}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Tips</div>
          <div className="table_cell">{sale.tips}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">Total Charge</div>
          <div className="table_cell">{sale.totalCharge}</div>
        </div>
        <div className="table_small">
          <div className="table_cell">{` `}</div>
          <div className="table_cell">
            <Button size="sm" variant="success">
              <Pencil />
            </Button>
            {` `}
            <DeleteComponent
              id={sale._id}
              deleteElement={saleDeleteRequest}
              loading={loadingDelete}
              error={errorDelete}
            >
              Sale
            </DeleteComponent>
          </div>
        </div>
      </div>
    </>
  );
};

SaleItem.propTypes = {
  sale: PropTypes.object.isRequired,
  saleDeleteRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SaleItem);
