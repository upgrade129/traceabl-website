import React from "react"
import {
  Badge,
} from "reactstrap"
import { Link } from "react-router-dom"

const EcommerceProductColumns = () => [
  {
    dataField: "customerId",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "customer",
    text: "Product Name",
    sort: true,
  },
  {
    dataField: "joiningDate",
    text: "Date Last Updateds",
    sort: true,
  },
  {
    dataField: "status",
    text: "Current Product Stage",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge
        className={"badge bg-pill font-size-12 bg-soft-" + row.badgeclass}
        color={row.badgeClass}
        pill
      >
        {row.status}
      </Badge>
    ),
  },
  {
    dataField: "status",
    text: "Etho Coin Progress ",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge
        className={"badge bg-pill font-size-12 bg-soft-" + row.badgeclass}
        color={row.badgeClass}
        pill
      >
        {row.status}
      </Badge>
    ),
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "View Details",
    formatter: () => (
      <>
        <Link to="#" className="px-3 text-primary">view details</Link>          
      </>
    ),
  },
]

export default EcommerceProductColumns
