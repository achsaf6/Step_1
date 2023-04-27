import {useState} from "react";
import Start_Page from "./Start_Page";
import Join_Page from "./Join_Page";
import Filters from "./Filters";
import Theme_page, {ThemePage} from "./Theme_page";
import Background from "../Components/Background";
import CovenantPage from "./CovenantPage";
import Survival_mission from "./Survival_mission"
import GroupMission from "./GroupMission";
import Punishment from "./Punishment_page";
import EndingPage from "./EndingPage";

/*
    0 - debug

    1 - sign up
    2 - start page
    3 - join page
    4 - filters
    5 - covenant


    // Firebase the relevant page??
    6 - group
    7 - survival
    8 - punishment
    //


    9 - Ending


 */
function GameManager() {

    const [curPage, setPage] = useState(2)

    let page;

    console.log(curPage)

    switch (curPage) {

        // For debug and testing
        // case 0:
        //     page = <CovenantPage jump={setPage}/>;
        //     break;

        case 2:
            page = <Start_Page jump={setPage}/>;
            break;
        case 3:
            page = <Join_Page jump={setPage}/>
            break;
        case 4:
            page = <Filters jump={setPage}/>
            break;
        case 5:
            page = <CovenantPage jump={setPage}/>
            break;
        case 6:
            page = <GroupMission jump={setPage}/>
            break;
        case 7:
            page = <Survival_mission jump={setPage}/>
            break;
        case 8:
            page = <Punishment jump={setPage}/>
            break;
        case 10:
            page = <EndingPage jump={setPage}/>
            break;
    }


    return(
        <div style={{height: "100vh", width : "100vw"}}>
            {page}
        </div>

    )

}


export default GameManager