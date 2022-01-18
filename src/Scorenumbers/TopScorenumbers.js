import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@mui/material';
import { useSelector } from 'react-redux';
import { TopNumberOrder, TopPic, TopScore, TopScoreIndex, Trigger } from '../counterSlice';



export default function TopNumbers() {
    const [topNumber, setTopNumbers] = useState([]);
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
                <Grid item xs={1}><img style={{paddingLeft: "35%"}} width={100} src={`${process.env.PUBLIC_URL}/${rightPicture}.png`}/> </Grid>
                <Grid item xs={1}><h1 style={{paddingLeft: "37%"}}>{topScore}</h1></Grid>
                <Grid item xs={1}>
                    <Grid container columns={10}>
                        {topNumber.map((element) => (
                            <Grid item key={element} xs={1} >
                                <Card
                                    style={{                                        border: ".1em solid black",
                                    backgroundColor: topNumber[Xcord] === element ? 'Blue' : 'White' }}>
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
