import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


export default function MediaCard({ user }) {
    const classes = useStyles();
    let history = useHistory();
    return (
        <Card className={classes.root} style={{ marginTop: "30px" }}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={user.profile_pic}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h3>{user.first_name} {user.last_name}</h3>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {user?.work?.map((work, i) => (
                            <p key={i}>{work.position} at {work.company.name}</p>
                        ))
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => history.push(`/${user.id}`)}>
                    Visit Profile
        </Button>

            </CardActions>
        </Card>
    );
}