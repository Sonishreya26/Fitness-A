/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import ContactBg from "../Image/contactBg.jpg";
import "./bmi.css";

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [unitType, setUnitType] = useState("s");

  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (unitType == "s") {
      if (height && !isNaN(Number(height))) {
        // let hTemp = Number(height) * 0.393701;
        let hTemp = Number(height) / 2.54;
        setHeight(hTemp.toFixed(2));
      }
      if (height && !isNaN(Number(height))) {
        let wTemp = Number(weight) * 2.20462;
        setWeight(wTemp.toFixed(2));
      }
    } else {
      if (height && !isNaN(Number(height))) {
        // let hTemp = Number(height) / 0.393701;
        let hTemp = Number(height) * 2.54;
        setHeight(hTemp.toFixed(2));
      }
      if (height && !isNaN(Number(height))) {
        let wTemp = Number(weight) / 2.20462;
        setWeight(wTemp.toFixed(2));
      }
    }
  }, [unitType]);

  function clearResults() {
    setBmiResult("");
    setStatus("");
    setError("");
  }

  function calculateBMI() {
    clearResults();
    if (!weight || !height) {
      setError("It seems that inputs are empty!");
      return true;
    }
    let bmiRes = "0";
    let heightCM = "";
    let weightCM = "";
    if (unitType == "s") {
      heightCM = Number(height) * 2.54;
      weightCM = Number(weight) / 2.20462;
    } else {
      heightCM = height;
      weightCM = weight;
    }
    bmiRes = Number(weightCM / (heightCM / 100) ** 2).toFixed(2);
    if (isNaN(bmiRes)) {
      setError("Please enter valid inputs!");
      return true;
    }
    setBmiResult(bmiRes);

    let bmiStatus = getStatus(bmiRes);
    setStatus(bmiStatus);
    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi == "") {
      return "";
    }
    setError("");
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  const changeUnitType = function (type) {
    let form = document.querySelector("#bmi-form");
    let focusedEl = document.querySelector(".focused");
    focusedEl && focusedEl.classList.remove("focused");
    if (type == "s") {
      form.classList.add("standard");
      form.classList.remove("metric");
    } else {
      form.classList.add("metric");
      form.classList.remove("standard");
    }

    setUnitType(type);
  };

  return (
    <div css={styles}>
      <div className="w-full max-w-xs">
        <div className="inline-flex">
          <button
            onClick={() => changeUnitType("s")}
            className={`m-1 w-96 focused bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l`}
          >
            Standard
          </button>
          <button
            onClick={() => changeUnitType("m")}
            className={`m-1 w-96  bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"}`}
          >
            Metric
          </button>
        </div>
        <form
          className="bg-white shadow-md rounded standard pt-6 pb-8 mb-4"
          id="bmi-form"
        >
          <h1 className="text-center mb-4 text-xl font-bold">BMI Calculator</h1>
          <span
            className={`${
              unitType == "s" ? "standard-font" : "metric-font"
            } font-bold`}
          >
            {"(" + (unitType == "s" ? "Standard" : "Metric") + ")"}
          </span>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Height
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Height "
              type="text"
              placeholder={
                unitType == "s" ? "Height in inches" : "Height in cm"
              }
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                clearResults();
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Weight
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Weight"
              type="Weight in kg"
              placeholder={unitType == "s" ? "Weight in pound" : "Weight in kg"}
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                clearResults();
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          </div>
          {<span className="text-red-400 font-bold m-8">{error}</span>}
          {bmiResult && (
            <div className="mt-4">
              <p>
                Your BMI is: <span className="font-bold">{bmiResult}</span>
              </p>
              <p>
                You are currently: <span className="font-bold">{status}</span>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

const styles = css`
  height: 100%;
  padding: auto;
  margin: auto;
  background: url("${ContactBg}") center/cover;
  div {
    max-width: 92rem;
    padding: 4vh 0 0 0;
    width: 80%;
    margin: auto;
    width: 41vw;
    @media screen and (max-width: 320px) {
      width: 60vw;
    }
    button {
      width: 41vw;
    }

    form {
      width: 41vw;
      input {
        width: 35vw;
      }
      button {
        width: 30vw;
      }
      @media screen and (max-width: 320px) {
        width: 60vw;
        input {
          width: 50vw;
        }
      }
      @media screen and (max-width: 768px) {
        div button {
          width: 30vw;
        }
      }
      @media screen and (max-width: 320px) {
        div button {
          width: 50vw;
        }
      }
    }
    div {
      @media screen and (max-width: 768px) {
        flex-direction: column;
        button {
          width: 40vw;
        }
      }
      @media screen and (max-width: 320px) {
        flex-direction: column;
        button {
          width: 58vw;
        }
      }
    }
  }
`;
