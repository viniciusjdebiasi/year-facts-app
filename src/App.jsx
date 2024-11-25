import { useState, useEffect } from "react";
import "./App.css";
import x from "./assets/x.png";

function App() {
  const [year, setYear] = useState("");
  const [facts, setFacts] = useState([]);
  const [visivel, setVisivel] = useState(false);

  // Função para buscar dados da API
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/");
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      const data = await response.json();
      console.log("Dados recebidos:", data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  // Para enviar dados, como em um formulário
  async function postData() {
    try {
      const response = await fetch(`http://localhost:8080/?year=${year}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      const data = await response.json();
      setFacts(data.fact || "Nenhuma curiosidade disponível.");
      setVisivel(true);
      console.log("Resposta do servidor:", data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  }

  useEffect(() => {
    if (year) {
      postData();
    }
  }, [year]);

  const ShowFact = () => {
    setVisivel(false);
  };

  return (
    <>
      <div className="main">
        <h1 className="title">
          Descubra uma curiosidade fascinante sobre o ano escolhido!
        </h1>
        <div className="container">
          <div className={`${visivel ? "fact-container" : "invisivel"}`}>
            <h2 className="fact">
              {year}: {facts}
            </h2>
            <button className="button-x" onClick={ShowFact}>
              <img src={x} alt="" className="img-x" />
            </button>
          </div>
          <button
            className="button-year"
            value="1920"
            onClick={(e) => setYear(e.target.value)}
          >
            1920
          </button>
          <button
            className="button-year"
            value="1921"
            onClick={(e) => setYear(e.target.value)}
          >
            1921
          </button>
          <button
            className="button-year"
            value="1922"
            onClick={(e) => setYear(e.target.value)}
          >
            1922
          </button>
          <button
            className="button-year"
            value="1923"
            onClick={(e) => setYear(e.target.value)}
          >
            1923
          </button>
          <button
            className="button-year"
            value="1924"
            onClick={(e) => setYear(e.target.value)}
          >
            1924
          </button>
          <button
            className="button-year"
            value="1925"
            onClick={(e) => setYear(e.target.value)}
          >
            1925
          </button>
          <button
            className="button-year"
            value="1926"
            onClick={(e) => setYear(e.target.value)}
          >
            1926
          </button>
          <button
            className="button-year"
            value="1927"
            onClick={(e) => setYear(e.target.value)}
          >
            1927
          </button>
          <button
            className="button-year"
            value="1928"
            onClick={(e) => setYear(e.target.value)}
          >
            1928
          </button>
          <button
            className="button-year"
            value="1929"
            onClick={(e) => setYear(e.target.value)}
          >
            1929
          </button>
          <button
            className="button-year"
            value="1930"
            onClick={(e) => setYear(e.target.value)}
          >
            1930
          </button>
          <button
            className="button-year"
            value="1931"
            onClick={(e) => setYear(e.target.value)}
          >
            1931
          </button>
          <button
            className="button-year"
            value="1932"
            onClick={(e) => setYear(e.target.value)}
          >
            1932
          </button>
          <button
            className="button-year"
            value="1933"
            onClick={(e) => setYear(e.target.value)}
          >
            1933
          </button>
          <button
            className="button-year"
            value="1934"
            onClick={(e) => setYear(e.target.value)}
          >
            1934
          </button>
          <button
            className="button-year"
            value="1935"
            onClick={(e) => setYear(e.target.value)}
          >
            1935
          </button>
          <button
            className="button-year"
            value="1936"
            onClick={(e) => setYear(e.target.value)}
          >
            1936
          </button>
          <button
            className="button-year"
            value="1937"
            onClick={(e) => setYear(e.target.value)}
          >
            1937
          </button>
          <button
            className="button-year"
            value="1938"
            onClick={(e) => setYear(e.target.value)}
          >
            1938
          </button>
          <button
            className="button-year"
            value="1939"
            onClick={(e) => setYear(e.target.value)}
          >
            1939
          </button>
          <button
            className="button-year"
            value="1940"
            onClick={(e) => setYear(e.target.value)}
          >
            1940
          </button>
          <button
            className="button-year"
            value="1941"
            onClick={(e) => setYear(e.target.value)}
          >
            1941
          </button>
          <button
            className="button-year"
            value="1942"
            onClick={(e) => setYear(e.target.value)}
          >
            1942
          </button>
          <button
            className="button-year"
            value="1943"
            onClick={(e) => setYear(e.target.value)}
          >
            1943
          </button>
          <button
            className="button-year"
            value="1944"
            onClick={(e) => setYear(e.target.value)}
          >
            1944
          </button>
          <button
            className="button-year"
            value="1945"
            onClick={(e) => setYear(e.target.value)}
          >
            1945
          </button>
          <button
            className="button-year"
            value="1946"
            onClick={(e) => setYear(e.target.value)}
          >
            1946
          </button>
          <button
            className="button-year"
            value="1947"
            onClick={(e) => setYear(e.target.value)}
          >
            1947
          </button>
          <button
            className="button-year"
            value="1948"
            onClick={(e) => setYear(e.target.value)}
          >
            1948
          </button>
          <button
            className="button-year"
            value="1949"
            onClick={(e) => setYear(e.target.value)}
          >
            1949
          </button>
          <button
            className="button-year"
            value="1950"
            onClick={(e) => setYear(e.target.value)}
          >
            1950
          </button>
          <button
            className="button-year"
            value="1951"
            onClick={(e) => setYear(e.target.value)}
          >
            1951
          </button>
          <button
            className="button-year"
            value="1952"
            onClick={(e) => setYear(e.target.value)}
          >
            1952
          </button>
          <button
            className="button-year"
            value="1953"
            onClick={(e) => setYear(e.target.value)}
          >
            1953
          </button>
          <button
            className="button-year"
            value="1954"
            onClick={(e) => setYear(e.target.value)}
          >
            1954
          </button>
          <button
            className="button-year"
            value="1955"
            onClick={(e) => setYear(e.target.value)}
          >
            1955
          </button>
          <button
            className="button-year"
            value="1956"
            onClick={(e) => setYear(e.target.value)}
          >
            1956
          </button>
          <button
            className="button-year"
            value="1957"
            onClick={(e) => setYear(e.target.value)}
          >
            1957
          </button>
          <button
            className="button-year"
            value="1958"
            onClick={(e) => setYear(e.target.value)}
          >
            1958
          </button>
          <button
            className="button-year"
            value="1959"
            onClick={(e) => setYear(e.target.value)}
          >
            1959
          </button>
          <button
            className="button-year"
            value="1960"
            onClick={(e) => setYear(e.target.value)}
          >
            1960
          </button>
          <button
            className="button-year"
            value="1961"
            onClick={(e) => setYear(e.target.value)}
          >
            1961
          </button>
          <button
            className="button-year"
            value="1962"
            onClick={(e) => setYear(e.target.value)}
          >
            1962
          </button>
          <button
            className="button-year"
            value="1963"
            onClick={(e) => setYear(e.target.value)}
          >
            1963
          </button>
          <button
            className="button-year"
            value="1964"
            onClick={(e) => setYear(e.target.value)}
          >
            1964
          </button>
          <button
            className="button-year"
            value="1965"
            onClick={(e) => setYear(e.target.value)}
          >
            1965
          </button>
          <button
            className="button-year"
            value="1966"
            onClick={(e) => setYear(e.target.value)}
          >
            1966
          </button>
          <button
            className="button-year"
            value="1967"
            onClick={(e) => setYear(e.target.value)}
          >
            1967
          </button>
          <button
            className="button-year"
            value="1968"
            onClick={(e) => setYear(e.target.value)}
          >
            1968
          </button>
          <button
            className="button-year"
            value="1969"
            onClick={(e) => setYear(e.target.value)}
          >
            1969
          </button>
          <button
            className="button-year"
            value="1970"
            onClick={(e) => setYear(e.target.value)}
          >
            1970
          </button>
          <button
            className="button-year"
            value="1971"
            onClick={(e) => setYear(e.target.value)}
          >
            1971
          </button>
          <button
            className="button-year"
            value="1972"
            onClick={(e) => setYear(e.target.value)}
          >
            1972
          </button>
          <button
            className="button-year"
            value="1973"
            onClick={(e) => setYear(e.target.value)}
          >
            1973
          </button>
          <button
            className="button-year"
            value="1974"
            onClick={(e) => setYear(e.target.value)}
          >
            1974
          </button>
          <button
            className="button-year"
            value="1975"
            onClick={(e) => setYear(e.target.value)}
          >
            1975
          </button>
          <button
            className="button-year"
            value="1976"
            onClick={(e) => setYear(e.target.value)}
          >
            1976
          </button>
          <button
            className="button-year"
            value="1977"
            onClick={(e) => setYear(e.target.value)}
          >
            1977
          </button>
          <button
            className="button-year"
            value="1978"
            onClick={(e) => setYear(e.target.value)}
          >
            1978
          </button>
          <button
            className="button-year"
            value="1979"
            onClick={(e) => setYear(e.target.value)}
          >
            1979
          </button>
          <button
            className="button-year"
            value="1980"
            onClick={(e) => setYear(e.target.value)}
          >
            1980
          </button>
          <button
            className="button-year"
            value="1981"
            onClick={(e) => setYear(e.target.value)}
          >
            1981
          </button>
          <button
            className="button-year"
            value="1982"
            onClick={(e) => setYear(e.target.value)}
          >
            1982
          </button>
          <button
            className="button-year"
            value="1983"
            onClick={(e) => setYear(e.target.value)}
          >
            1983
          </button>
          <button
            className="button-year"
            value="1984"
            onClick={(e) => setYear(e.target.value)}
          >
            1984
          </button>
          <button
            className="button-year"
            value="1985"
            onClick={(e) => setYear(e.target.value)}
          >
            1985
          </button>
          <button
            className="button-year"
            value="1986"
            onClick={(e) => setYear(e.target.value)}
          >
            1986
          </button>
          <button
            className="button-year"
            value="1987"
            onClick={(e) => setYear(e.target.value)}
          >
            1987
          </button>
          <button
            className="button-year"
            value="1988"
            onClick={(e) => setYear(e.target.value)}
          >
            1988
          </button>
          <button
            className="button-year"
            value="1989"
            onClick={(e) => setYear(e.target.value)}
          >
            1989
          </button>
          <button
            className="button-year"
            value="1990"
            onClick={(e) => setYear(e.target.value)}
          >
            1990
          </button>
          <button
            className="button-year"
            value="1991"
            onClick={(e) => setYear(e.target.value)}
          >
            1991
          </button>
          <button
            className="button-year"
            value="1992"
            onClick={(e) => setYear(e.target.value)}
          >
            1992
          </button>
          <button
            className="button-year"
            value="1993"
            onClick={(e) => setYear(e.target.value)}
          >
            1993
          </button>
          <button
            className="button-year"
            value="1994"
            onClick={(e) => setYear(e.target.value)}
          >
            1994
          </button>
          <button
            className="button-year"
            value="1995"
            onClick={(e) => setYear(e.target.value)}
          >
            1995
          </button>
          <button
            className="button-year"
            value="1996"
            onClick={(e) => setYear(e.target.value)}
          >
            1996
          </button>
          <button
            className="button-year"
            value="1997"
            onClick={(e) => setYear(e.target.value)}
          >
            1997
          </button>
          <button
            className="button-year"
            value="1998"
            onClick={(e) => setYear(e.target.value)}
          >
            1998
          </button>
          <button
            className="button-year"
            value="1999"
            onClick={(e) => setYear(e.target.value)}
          >
            1999
          </button>
          <button
            className="button-year"
            value="2000"
            onClick={(e) => setYear(e.target.value)}
          >
            2000
          </button>
          <button
            className="button-year"
            value="2001"
            onClick={(e) => setYear(e.target.value)}
          >
            2001
          </button>
          <button
            className="button-year"
            value="2002"
            onClick={(e) => setYear(e.target.value)}
          >
            2002
          </button>
          <button
            className="button-year"
            value="2003"
            onClick={(e) => setYear(e.target.value)}
          >
            2003
          </button>
          <button
            className="button-year"
            value="2004"
            onClick={(e) => setYear(e.target.value)}
          >
            2004
          </button>
          <button
            className="button-year"
            value="2005"
            onClick={(e) => setYear(e.target.value)}
          >
            2005
          </button>
          <button
            className="button-year"
            value="2006"
            onClick={(e) => setYear(e.target.value)}
          >
            2006
          </button>
          <button
            className="button-year"
            value="2007"
            onClick={(e) => setYear(e.target.value)}
          >
            2007
          </button>
          <button
            className="button-year"
            value="2008"
            onClick={(e) => setYear(e.target.value)}
          >
            2008
          </button>
          <button
            className="button-year"
            value="2009"
            onClick={(e) => setYear(e.target.value)}
          >
            2009
          </button>
          <button
            className="button-year"
            value="2010"
            onClick={(e) => setYear(e.target.value)}
          >
            2010
          </button>
          <button
            className="button-year"
            value="2011"
            onClick={(e) => setYear(e.target.value)}
          >
            2011
          </button>
          <button
            className="button-year"
            value="2012"
            onClick={(e) => setYear(e.target.value)}
          >
            2012
          </button>
          <button
            className="button-year"
            value="2013"
            onClick={(e) => setYear(e.target.value)}
          >
            2013
          </button>
          <button
            className="button-year"
            value="2014"
            onClick={(e) => setYear(e.target.value)}
          >
            2014
          </button>
          <button
            className="button-year"
            value="2015"
            onClick={(e) => setYear(e.target.value)}
          >
            2015
          </button>
          <button
            className="button-year"
            value="2016"
            onClick={(e) => setYear(e.target.value)}
          >
            2016
          </button>
          <button
            className="button-year"
            value="2017"
            onClick={(e) => setYear(e.target.value)}
          >
            2017
          </button>
          <button
            className="button-year"
            value="2018"
            onClick={(e) => setYear(e.target.value)}
          >
            2018
          </button>
          <button
            className="button-year"
            value="2019"
            onClick={(e) => setYear(e.target.value)}
          >
            2019
          </button>
          <button
            className="button-year"
            value="2020"
            onClick={(e) => setYear(e.target.value)}
          >
            2020
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
