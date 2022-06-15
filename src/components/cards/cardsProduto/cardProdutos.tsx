import { Box, Button, CardMedia, Typography } from '@mui/material'
import { width } from '@mui/system'
import React, { useState } from 'react'
import CarroucelImageCard from '../carrocelImageCard/CarroucelImageCard'

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardProdutos = () => {
    const [cards, setCards] = useState([
        {
            id: 1, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '2.000', imagem: [
                "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp"
            ]
        },
        {
            id: 2, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '2.000', imagem: [
                "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp"
            ]
        },
        {
            id: 3, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '2.000', imagem: [
                "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp"
            ]
        },
        {
            id: 4, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '2.000', imagem: [
                "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp"
            ]
        },
        {
            id: 5, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '2.000', imagem: [
                "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp"
            ]
        },
        {
            id: 6, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '2.000', imagem: [
                "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp", "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp"
            ]
        },
    ]);




    const styleCard = {
        bgcolor: '#FFFFFF'
    }

    return (

        <Box display="flex" justifyContent="center" flexWrap="wrap">

            {
                cards.map(card =>

                    <Button>

                        <Box margin={1}
                            width={270} sx={{
                                ...styleCard, border: 1, borderColor: '#cecece', borderRadius: '10px', paddingX: 5
                            }}>

                            <Carousel indicators={false}>
                                {
                                    card.imagem.map(imgarousel =>

                                        <Carousel.Item interval={2000}>
                                            <img
                                                className="d-block w-100"
                                                src={imgarousel}
                                                alt="First slide"
                                                width={200}
                                                height={200}
                                            />

                                        </Carousel.Item>


                                    )

                                }


                            </Carousel>



                            <Box padding={1} marginBottom={2}>
                                <Typography variant="h6" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                                    R${card.preco}</Typography>
                                <Typography style={{ color: '#2FB670' }} variant="body1" textAlign="start" color="initial">
                                    Frete gratis</Typography>
                                <Typography variant="body1" textAlign="start" color="initial">
                                    {card.titulo}
                                </Typography>
                            </Box>
                        </Box>

                    </Button>

                )


            }




        </Box>

    )
}

export default CardProdutos