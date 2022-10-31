import styles from "../styles/Home.module.css";
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import Header from "../components/Header";
import DataTable from "react-data-table-component";
import { Exercise } from "../src/models";

function Page({}: WithAuthenticatorProps) {
  const columns = [
    {
      name: "Created at",
      selector: (row: Exercise) => row.createdAt || "",
    },
    {
      name: "Name",
      selector: (row: Exercise) => row.name || "",
    },
  ];

  const data: Exercise[] = [
    {
      id: "1",
      name: "Beetlejuice",
      createdAt: "2022-09-12",
      updatedAt: null,
    },
    {
      id: "2",
      name: "Ghostbusters",
      createdAt: "2022-09-12",
      updatedAt: null,
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Test page</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default withAuthenticator(Page);
