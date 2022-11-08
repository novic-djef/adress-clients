import React, { useState } from "react";
import "./stepper.css";
import { CheckIcon, CursorArrowRippleIcon } from "@heroicons/react/24/outline";



export default function Stepper() {
  const steps = [
    "Packing", 
    "in Country",
    "in city", 
    "Arrived"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between">

        {steps?.map((step, i) => (

            
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          > 


            <div className="step">
            
              {i + 1 < currentStep || complete ? <CheckIcon className={`h-5 w-5 text-primary transition-all `}  /> : <CursorArrowRippleIcon className={`h-5 w-5 text-primary transition-all `} /> }
            </div>
            <p className={`text-gray-500`}>{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
           {currentStep === steps.length ? "fini?" : "valider"}
          {/* <ChevronDoubleRightIcon className="size={24} text-green-600 " /> */}
        </button>
      )}
    </>
  )
        }



