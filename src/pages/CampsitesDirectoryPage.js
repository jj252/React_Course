import { Container,Row,Col,Button } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";

const CampsiteDirectoryPage = () => {
    const selectedCampsite = selectRandomCampsite();

    return (
        <Container>
            <Button>
                Select Random Campsite
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsiteDirectoryPage;