"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./card";
import Button from "./button";

const TablePage: React.FC = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Bob Johnson", age: 45 },
  ]);

  const handleEdit = (index: number, field: keyof (typeof data)[0], value: string | number) => {
    const newData = [...data];
    // newData[index][field] = value;
    newData[index] = { ...newData[index], [field]: value };
    setData(newData);
  };

  const addRow = () => {
    const newId = data.length + 1;
    setData([...data, { id: newId, name: `New User ${newId}`, age: 30 }]);
  };

  const removeLastRow = () => {
    setData(data.slice(0, -1));
  };

  const clearTable = () => {
    setData([]);
  };

  return (
    <Card className="p-4 max-w-2xl mx-auto mt-10">
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Button onClick={addRow}>Add Row</Button>
          <Button onClick={removeLastRow}>Remove Last Row</Button>
          <Button onClick={clearTable} variant="destructive">Clear Table</Button>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className="text-center">
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    value={row.id}
                    onChange={(e) => handleEdit(index, "id", Number(e.target.value))}
                    className="w-full text-center"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleEdit(index, "name", e.target.value)}
                    className="w-full text-center"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    value={row.age}
                    onChange={(e) => handleEdit(index, "age", Number(e.target.value))}
                    className="w-full text-center"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default TablePage;
