import { Container,Row,Col } from "reactstrap";
//import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
//import { selectRandomCampsite } from "../features/campsites/campsitesSlice";
//import { useState } from "react";
//import { selectCampsiteById } from "../features/campsites/campsitesSlice";

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
            <CampsitesList  />
        </Container>
    )
}

export default CampsiteDirectoryPage;