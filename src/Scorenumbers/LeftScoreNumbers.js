import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@mui/material';
import { LeftNumberOrder, LeftPic, LeftScore, LeftScoreIndex, Trigger } from '../counterSlice';
import { useSelector } from 'react-redux';


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
            <Grid item xs={1}><img style={{paddingLeft: "35%"}} width={100} src={`${process.env.PUBLIC_URL}/${leftPicture}.png`}/> </Grid>
                <Grid item xs={1}><h1 style={{ border: "5px solid red", paddingTop: "37%"}}>{leftScore}</h1></Grid>
                <Grid item xs={1}>
                    <Grid container columns={1}>
                        {leftNumber.map((element) => (
                            <Grid item key={element} xs={1} >
                                <Card

                                    style={{
                                        border: ".1em solid black",
                                        backgroundColor: leftNumber[Ycord] === element ? 'Blue' : 'White' }} >
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
