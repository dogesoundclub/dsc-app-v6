import { useState, useEffect } from "react";
import MateParts from "@/pages/MateParts.json";
import Mates from "@/pages/Mates.json";

export default function GalleryCate() {

    const [query, setQuery] = useState(""); // 검색 쿼리
    const [filters, setFilters] = useState<{ key: string; value: string }[]>([]);

    function handleFilter(key: string, value: string) {
        const newFilters = filters.filter((f) => f.key !== key).concat({ key, value });
        setFilters(newFilters);
    }

    function handleSearch(e: any) {
        setQuery(e.target.value);
    }

    function getFilteredMates() {
        return Object(Mates).collection.filter((mate: { properties: { [x: string]: any } }) => {
        for (const filter of filters) {
            if (mate.properties[filter.key] !== filter.value) {
                return false;
            }
        }
            return true;
        });
    }

    function getSearchedMates() {
        return Object(Mates).collection.filter((mate: any) => {
            const mateProperties = mate.properties;
            for (const filter of filters) {
              const filterKey = filter.key;
              const filterValue = filter.value;
              console.log(filterKey, filterValue)
        
              if (filterKey === "generation") {
                if (mate.generation !== parseInt(filterValue)) {
                  return false;
                }
              } else if (mateProperties[filterKey] !== filterValue) {
                return false;
              }
            }
            return true;
          });
      }

    function resetFilters() {
        setQuery("");
        setFilters([]);
      }

    return (
        <div>
            <div>
                <input type="text" value={query} onChange={handleSearch} placeholder="Search" />
                <button onClick={() => getSearchedMates()}>Search</button>
            </div>
            <button onClick={() => handleFilter("Face", "Robot")}>Face: Robot</button>
            <button onClick={() => handleFilter("Face", "Tiger")}>Face: Tiger</button>
            <button onClick={() => handleFilter("Headwear", "Short Peak Cap")}>Headwear: Short Peak Cap</button>
            <button onClick={resetFilters}>Reset Filters</button>
            <ul>
            {getFilteredMates().map((mate:any, index:any) => (
                <li key={index}>{mate.name}</li>
            ))}
            </ul>
      </div>
    )
}