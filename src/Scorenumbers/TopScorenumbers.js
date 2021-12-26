import React, { useEffect, useState } from 'react';
import { Grid, Card, ImageListItem } from '@mui/material';
import { numbers } from '../Resources/information'
import { useDispatch, useSelector } from 'react-redux';
import { TopNumberOrder, TopPic, TopScore, TopScoreIndex, Trigger } from '../counterSlice';
import axios from 'axios';


export default function TopNumbers() {
    const [topNumber, setTopNumbers] = useState([]);
    const dispatch = useDispatch();
    const Xcord = useSelector(TopScoreIndex);
    const topNumbers = useSelector(TopNumberOrder);
    const trigger = useSelector(Trigger)
    const rightPicture = useSelector(TopPic);
    const topScore = useSelector(TopScore);
    useEffect(() => {
        setArray();
    }, [trigger])
    let setArray = () => {

        setTopNumbers(topNumbers);


    }
    return (
        <React.Fragment>

            <Grid container columns={1}>
                <Grid item xs={1}><img src={rightPicture}/> </Grid>
                <Grid item xs={1}>{topScore}</Grid>
                <Grid item xs={1}>
                    <Grid container columns={10}>
                        {topNumber.map((element) => (
                            <Grid item key={element} xs={1} >
                                <Card
                                    style={{ backgroundColor: topNumber[Xcord] === element ? 'Blue' : 'White' }}>
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
