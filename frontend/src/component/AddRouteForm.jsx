import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AddRouteForm({ onRouteAdded }) {
  const [routeNumber, setRouteNumber] = useState("");
  const [routeName, setRouteName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!routeNumber || !routeName) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("/api/routes", { routeNumber, routeName });

      alert("Route created successfully!");

      setRouteNumber("");
      setRouteName("");

      onRouteAdded();
    } catch (error) {
      console.error("Failed to create route:", error);
      alert("Failed to create route. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div className="space-y-2">
        <Label htmlFor="routeNumber">Route Number</Label>
        <Input
          id="routeNumber"
          type="text"
          placeholder="e.g., 177"
          value={routeNumber} //
          onChange={(e) => setRouteNumber(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="routeName">Route Name</Label>
        <Input
          id="routeName"
          type="text"
          placeholder="e.g., Kaduwela - Colombo"
          value={routeName}
          onChange={(e) => setRouteName(e.target.value)}
        />
      </div>
      <Button type="submit">Add Route</Button>
    </form>
  );
}

export default AddRouteForm;
