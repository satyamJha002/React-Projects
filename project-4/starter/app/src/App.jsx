import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [foodData, setFoodData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        setFoodData(data);
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching food data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = foodData?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(foodData);
      setSelectedBtn("all");
      return;
    }

    const filter = foodData?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/Foody Zone.png" alt="Foody Zone logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      padding: 8px;
      border-radius: 8px;
      outline: none;
      border: none;
      width: 100%;
      font-size: 18px;
      font-weight: 500;
      color: #323334;
      background-color: #fff;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#80b6eb" : "#fff")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "#80b6eb" : "#fff")};
  padding: 8px 12px;
  border-radius: 8px;
  background: red;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #80b6eb;
    color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
`;
