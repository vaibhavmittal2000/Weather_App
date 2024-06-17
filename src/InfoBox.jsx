import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function InfoBox({info}) {

    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1717379758436-c4e4fc386e32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return(
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                      sx={{ height: 140 }}
                      image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {info.city}&nbsp;{
                            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                          }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Minimum Temperature: {info.tempMin}&deg;C</p>
                            <p>Maximum Temperature: {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export default InfoBox;