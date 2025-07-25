"use client";

import { useCartStore } from "@/store/cartStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function TestPage() {
  const { items, addItem, removeItem, clear } = useCartStore();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const MIN_BOOKING_DURATION_MS = 1000 * 60 * 60 * 24 * 2; // 2 Tage in ms

  const handleStartChange = (date: Date) => {
    setStartDate(date);
    const newEnd = new Date(date.getTime() + MIN_BOOKING_DURATION_MS);
    setEndDate(newEnd); // automatisch neues Mindest-Enddatum setzen
  };

  const handleAdd = () => {
    addItem({
      id: "bagger1",
      name: "Bagger 1",
      calendarId: "bagger1@group.calendar.google.com",
      from: startDate.toISOString(),
      to: endDate.toISOString(),
    });
  };

  const handleBook = async () => {
    for (const item of items) {
      const start = new Date(item.from).getTime();
      const end = new Date(item.to).getTime();

      if (end - start < MIN_BOOKING_DURATION_MS) {
        alert(`❌ Die Buchung von ${item.name} muss mindestens 2 Tage dauern.`);
        return;
      }

      try {
        const res = await fetch("/api/book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            calendarId: item.calendarId,
            from: item.from,
            to: item.to,
            title: `Buchung: ${item.name}`,
          }),
        });

        const text = await res.text();
        let result;

        try {
          result = JSON.parse(text);
        } catch {
          console.error("❌ Antwort war kein JSON:", text);
          alert("Fehler: Antwort vom Server ist ungültig.");
          return;
        }

        if (!res.ok) {
          console.error("❌ Fehlerhafte Buchung:", result.error || result);
          alert(
            `Buchung fehlgeschlagen: ${result.error || "Unbekannter Fehler"}`
          );
          return;
        }

        console.log(`✅ Buchung für ${item.name}:`, result);
      } catch (err) {
        console.error("❌ Netzwerk-/Serverfehler:", err);
        alert("Buchung fehlgeschlagen – bitte später erneut versuchen.");
        return;
      }
    }

    clear();
    alert("✅ Alle Buchungen erfolgreich!");
  };

  // Helfer für Uhrzeitgrenzen im Enddatum
  const getMinEndTime = () => {
    const minEnd = new Date(startDate.getTime() + MIN_BOOKING_DURATION_MS);
    return startDate.toDateString() === endDate.toDateString()
      ? minEnd
      : new Date(0, 0, 0, 0, 0);
  };

  const getMaxTime = () => new Date(0, 0, 0, 23, 59);

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">MVP: Mehrere Maschinen buchen</h1>

      <div>
        <label className="block mb-1 font-medium">Zeitraum wählen:</label>

        <DatePicker
          selected={startDate}
          onChange={handleStartChange}
          showTimeSelect
          dateFormat="Pp"
          className="border p-2 rounded"
        />

        <DatePicker
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          showTimeSelect
          dateFormat="Pp"
          filterDate={(date) =>
            date.getTime() >= startDate.getTime() + MIN_BOOKING_DURATION_MS
          }
          filterTime={(time) =>
            time.getTime() >= startDate.getTime() + MIN_BOOKING_DURATION_MS
          }
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Bagger 1 hinzufügen
      </button>

      {items.length > 0 && (
        <>
          <h2 className="text-lg font-semibold">Warenkorb:</h2>
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="border p-2 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(item.from).toLocaleString()} –{" "}
                    {new Date(item.to).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Entfernen
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleBook}
            className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
          >
            Alle buchen
          </button>
        </>
      )}
    </main>
  );
}
