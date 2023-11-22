import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../../state/contexts/HeaderContext";
import RoundWithPlus from "../icons/RoundWithPlus";
import AlertModal from "../Modals/AlertModal";
import CSTR from "../Reactors/CSTR";
import CSTRResult from "../Reactors/CSTRResult";
import PFR from "../Reactors/PFR";
import PFRResult from "../Reactors/PFRResult";
import { useEffect } from "react";

const DashboardComponent = () => {
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dipsatchPageTitle } = useContext(HeaderContext);
  const [activeTabs, setActiveTabs] = useState("1");
  const [result, setResult] = useState(null);

  // instance of Navigate hook
  const navigate = useNavigate();

  // routing to other routes
  const handleRoute = (route, action, title) => {
    // routing to the desired route
    navigate(route);

    // dispatching the title of the header,
    // depending on the route
    dipsatchPageTitle({
      type: action,
      pageTitle: title,
    });
  };

  const handleCSTRSubmit = async (data) => {
    setLoading(true);
    const response = await fetch(
      "https://ehceyn.pythonanywhere.com/cstr_calculate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    setResult(responseData);
    setLoading(false);
  };
  const handlePFRSubmit = async (data) => {
    setLoading(true);

    const response = await fetch(
      "https://ehceyn.pythonanywhere.com/pfr_calculate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    setResult(responseData);
    setLoading(true);
  };

  useEffect(() => {
    setResult(null);
  }, [activeTabs]);

  useEffect(() => {
    const newQuestionElement = document.getElementById(`result`);
    if (newQuestionElement) {
      newQuestionElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [result?.reaction_rate]);

  return (
    <div>
      <AlertModal display={alertDisplay} />
      {/* START OF TAILWIND DIV */}
      <div className="bg-backgroundGrey p-0 m-0 box-border h-[80%] w-full flex flex-row justify-between">
        <div className="h-full w-[100%] bg-backgroundGrey flex flex-row justify-between">
          {/* DIV HOLDING CARDS DIV AND DEVICES+USERS DIV */}
          <div className="flex flex-col space-y-10 sm:w-[100%] w-full">
            {/* cSTR + pfr CARDS DIV */}
            <ul
              class="nav nav-tabs w-full gap-3 h-[6rem] grid grid-cols-2 list-none border-b-0 pl-0"
              id="tabs-tab"
              role="tablist"
            >
              <li
                onClick={() => setActiveTabs("1")}
                class="nav-item w-full h-full"
                role="presentation"
              >
                <span
                  class={`nav-link block h-full font-medium text-xs leading-tight uppercase rounded-lg border  ${
                    activeTabs === "1"
                      ? "bg-backgroundRed border-backgroundRed"
                      : "bg-backgroundDark border-borderColor"
                  } `}
                  id="tabs-home-tab"
                  role="tab"
                >
                  <div
                    role="button"
                    className="flex justify-between items-center h-full px-4"
                  >
                    {" "}
                    <h1 className="font-[Orbitron] uppercase tracking-widest text-base text-textGreyLighter font-bold">
                      cSTR
                    </h1>
                    <p>{<RoundWithPlus />}</p>
                  </div>
                </span>
              </li>
              <li
                onClick={() => setActiveTabs("2")}
                class="nav-item w-full h-full"
                role="presentation"
              >
                <span
                  class={`nav-link block h-full font-medium text-xs leading-tight uppercase border rounded-lg ${
                    activeTabs === "2"
                      ? "bg-backgroundRed border-backgroundRed"
                      : "bg-backgroundDark border-borderColor"
                  }`}
                  id="tabs-profile-tab"
                  role="tab"
                >
                  <div
                    role="button"
                    className="flex justify-between items-center h-full px-4"
                  >
                    <h1 className="font-[Orbitron] uppercase tracking-widest text-base text-textGreyLighter font-bold">
                      pfr
                    </h1>
                    <p>{<RoundWithPlus />}</p>
                  </div>
                </span>
              </li>
            </ul>
            {/* END OF cSTR + pfr CARDS DIV */}
            {/* CSTR+PFR Inputs DIV */}
            {activeTabs === "1" ? (
              <>
                <CSTR
                  onHandleCSTRSubmit={(data) => handleCSTRSubmit(data)}
                  loading={loading}
                />
                {result !== null && <CSTRResult result={result} />}
              </>
            ) : (
              <>
                <PFR
                  onHandlePFRSubmit={(data) => handlePFRSubmit(data)}
                  loading={loading}
                />
                {result !== null && <PFRResult result={result} />}
              </>
            )}

            {/* END OF CSTR+PFR Inputs DIV */}
          </div>
          {/* END OF DIV HOLDING CARDS DIV AND CSTR+PFR DIV */}
        </div>
      </div>
      {/* END OF TAILWIND DIV */}
    </div>
  );
};

export default DashboardComponent;
