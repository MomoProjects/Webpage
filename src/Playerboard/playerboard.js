import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@mui/material';
import { useSelector } from 'react-redux';
import { PlayerIndex, PeopleOnBoard, Trigger } from '../counterSlice';


export default function Setplayers() {
    /* eslint-disable */
    const [namesArray, setNamesArray] = useState([]);
    const peopleOnBoard = useSelector(PeopleOnBoard);
    const playerIndex = useSelector(PlayerIndex);
    const trigger = useSelector(Trigger)
    useEffect(() => {
        setArray();
    }, [trigger])
    let setArray =  () => {

         setNamesArray(peopleOnBoard) 


    }
    return (
        <React.Fragment>
            <Grid container columns={10}>
                {namesArray.map((element) => (
                    <Grid item key={element} xs={1} style={{ minWidth: ".5%", minHeight: ".005%" }}>
                        <Card
                            onClick={() => { console.log(playerIndex) }}
                            style={{ backgroundColor: playerIndex === namesArray.indexOf(element) ? 'Blue' : 'White', minWidth: ".5%", minHeight: ".00005%" }}>
                            {element}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}
