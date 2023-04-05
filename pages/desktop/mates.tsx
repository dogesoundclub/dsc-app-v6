import DesktopLayout from "@/components/DesktopLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
import MateParts from "@/pages/MateParts.json";
import Mates from "@/pages/Mates.json";

export default function GalleryPage() {

  const [query, setQuery] = useState(""); // 검색 쿼리
  const [filters, setFilters] = useState<{ key: string; value: string }[]>([]);
  const parts: string[] = [];
  const [backgrounds, setBackgrounds] = useState<{ [key: string]: string }>({});
  const [isShown, setIsShown] = useState<{ [key: string]: boolean }>({});

  const [isShown1, setIsShown1] = useState("none");

  function handle() {
    if (isShown1 === "none") {
      setIsShown1("block");
    } else {
      setIsShown1("none");
    }
  }

  function background(key: string) {
    setBackgrounds((prevState) => ({ ...prevState, [key]: "#FFDF13" }));
  }

  function background2(key: string) {
    setBackgrounds((prevState) => ({ ...prevState, [key]: "#733CE7" }));
  }

  function html() {
    const html = [];

    interface MateParts {
      [key: string]: string[];
    }
    const mateParts: MateParts = MateParts;

    {
      Object.keys(mateParts).map((key) => parts.push(key));
    }

    for (let i = 0; i < parts.length; i++) {
      html.push(
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <button
                style={{ width: "150px", height: "30px", margin: "3px", background: "none", border: "none" }}
                onClick={handle}
              >
                {parts[i]}
              </button>
            </div>
            <div>
              <img src="/one.png" style={{ width: "10px" }} />
            </div>
          </div>
        </>
      );
      for (let j = 0; j < mateParts[parts[i]].length; j++) {
        const matePart = mateParts[parts[i]][j];
        const buttonBackground = backgrounds[matePart] || "#733CE7";
        html.push(
          <button
            key={matePart}
            onMouseOver={() => background(matePart)}
            onMouseLeave={() => background2(matePart)}
            onClick={() => handleFilter(parts[i], matePart)}
            style={{
              display: isShown1,
              width: "150px",
              height: "30px",
              background: buttonBackground,
              border: "none",
            }}
          >
            {matePart}
          </button>
        );
      }
    }

    return html;
  }

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
    <DesktopLayout>
      <div style={{ background: "#E73C83", textAlign: "center", paddingTop: "5px", display: "flex" }}>
        <div>
          <div style={{
            width: "200px",
            height: "100px",
            background: "linear-gradient( to bottom, #ffffff 20%,yellow 70%)",
            borderRadius: "50%",
            margin: "0 auto",
            textShadow: "-3px 3px black, 3px 3px black, 3px 3px black, 3px -3px black",
            fontFamily: "Sunflower"
          }}
          >
            <div style={{
              lineHeight: "100px",
              color: "#36B167",
              fontSize: "35px",
              textShadow: "-1px 1px white, 1px 1px white, 1px 1px white, 1px -1px white;"
            }}
            >GALLERY</div>
          </div>
          <Link href="/bmcs">
            <img src="/bmcsBtn.png" style={{ width: "30%" }} />
          </Link>
          <Link href="/emates">
            <img src="/ematesBtn.png" style={{ width: "30%" }} />
          </Link>
          {/* <li style={{ padding: "10px", color: "#ffffff", listStyle: "none", textAlign: "right" }}>MY MATES <img src="./one.png" style={{ width: "10px" }} /></li> */}
          <div>
            <div>
              <input type="text" value={query} onChange={handleSearch} placeholder="Search" />
              <button onClick={() => getSearchedMates()}>Search</button>
            </div>
            <button onClick={resetFilters}>Reset Filters</button>
            <ul style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {html()}
            </ul>

          </div>
        </div>
        <div></div>
      </div>
      <div>
        {/* <img src="./pray.png" style={{ width: "50%" }} /> */}
        <div style={{ overflow: "scroll" }}>
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {getFilteredMates().map((mate: any, index: any) => (
              <li key={index} style={{ listStyle: "none", display: "flex", flexDirection: "column", marginRight: "20px", width: "16.6666%", alignItems: "center" }}>
                <div><img src={`https://storage.googleapis.com/dsc-mate/336/dscMate-${mate.tokenId}.png`} style={{ width: "100px" }} /></div>
                <div>{mate.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DesktopLayout>
  );
};