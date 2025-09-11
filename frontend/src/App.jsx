import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddRouteForm from "./component/AddRouteForm";

function App() {
  const [routes, setRoutes] = useState([]);

  const fetchRoutes = async () => {
    try {
      const response = await axios.get("/api/routes");
      setRoutes(response.data);
    } catch (error) {
      console.error("Error fetching routes:", error);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bus Tracker App</h1>
      <AddRouteForm onRouteAdded={fetchRoutes} />
      <h2 className="text-xl mb-2">Available Routes:</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Route Number</TableHead>
            <TableHead>Route Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routes.map((route) => (
            <TableRow key={route._id}>
              <TableCell className="font-medium">{route.routeNumber}</TableCell>
              <TableCell>{route.routeName}</TableCell>
              <TableCell>{route.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
