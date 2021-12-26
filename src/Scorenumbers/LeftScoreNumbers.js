import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@mui/material';
import { LeftNumberOrder, LeftPic, LeftScore, LeftScoreIndex, Trigger } from '../counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


export default function Leftnumbers() {

    /* eslint-disable */
    const [leftNumber, setLeftNumbers] = useState([]);
    const Ycord = useSelector(LeftScoreIndex);
    const leftNumbers = useSelector(LeftNumberOrder);
    const trigger = useSelector(Trigger)
    const leftScore = useSelector(LeftScore);
    const leftPicture = useSelector(LeftPic);

    useEffect(() => {
        setArray();

    }, [trigger])
    let setArray = () => {
        setLeftNumbers(leftNumbers);
    }
    return (
        <React.Fragment>
            <Grid container columns={3}>
                <Grid item xs={1}>{leftPicture}</Grid>
                <Grid item xs={1}>{leftScore}</Grid>
                <Grid item xs={1}>
                    <Grid container columns={1}>
                        {leftNumber.map((element) => (
                            <Grid item key={element} xs={1} >
                                <Card
                                    style={{ backgroundColor: leftNumber[Ycord] === element ? 'Blue' : 'White' }} >
                                    {element}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </React.Fragment>
    );
}
