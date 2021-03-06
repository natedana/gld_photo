import React from 'react';
import { ListGroup } from 'react-bootstrap'

function ProgramSelector({ programs, setProgram, city }) {
    // const [programs, setPrograms] = useState([]);

    // useEffect(() => {
    //     if (!authHeader) {
    //         console.warn('NOT AUTH HEADER')
    //         return
    //     }
    //     getPrograms(authHeader).then(programs => {
    //         setPrograms(programs.filter(p => ALLOWED_PROGRAM_IDS.includes(parseInt(p.id))))
    //     })
    // }, [authHeader])

    return (
        <div className="body">
            <div className="container mt-5">
            <h5 className="ev-title-login px-2">Environmental Services Photo / Geolocation App</h5>
            </div>
            {city && <img className="ev-image-center ev-image-program-select" src={city.attributes.logoMain} alt="City logo" />}
            <div className="justify-content-center d-flex">
                <div className="col-7 col-md-4">
                    <br></br>
                    <ListGroup className="ev-list-program-select ev-clickable ev-light-table">
                        {programs.map((p, i) => (
                            <ListGroup.Item key={p.id} onClick={() => setProgram(p)}>{p.attributes.programName}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div >
    );
}

export default ProgramSelector;
