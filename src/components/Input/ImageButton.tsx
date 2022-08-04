import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useStyles } from '../../hook/useStyles';

const images = [
    {
        url: 'https://images.pexels.com/photos/6615036/pexels-photo-6615036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'BOZZA',
        width: '33%',
    },
    {
        url: 'https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'In Transito',
        width: '33%',
    },
    {
        url: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Completato',
        width: '33%',
    },
];

export const ImageButton = () => {
    const classes = useStyles();

    return (
        <div className={classes.containerImage}>
            {images.map((image) => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.btnImage}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}
        </div>
    );
}
