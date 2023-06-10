import { Container,Row,Col } from "reactstrap";
//import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
//import { selectRandomCampsite } from "../features/campsites/campsitesSlice";
//import { useState } from "react";
//import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import SubHeader from "../components/SubHeader";

const CampsiteDirectoryPage = () => {
    // let selectedCampsite = selectRandomCampsite();

    // const toggleCampsite = () => {
    //     selectedCampsite = selectRandomCampsite();
    //     console.log(selectedCampsite);
    // }
    // const [campsiteId, setCampsiteId] = useState(0);
    // const selectedCampsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList  />
        </Container>
    )
}

export default CampsiteDirectoryPage;