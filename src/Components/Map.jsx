import { Box } from '@chakra-ui/react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'


export function Map() {
    const position = [51.505, -0.09]
    return ( 
        <Box
            width="full"
            height="full"
        >
            { typeof window !== 'undefined' &&
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                </Marker>
            </MapContainer>
            }
        </Box>
    )
}