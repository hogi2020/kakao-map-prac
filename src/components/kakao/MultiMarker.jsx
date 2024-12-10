import { Map, MapMarker } from "react-kakao-maps-sdk"

const MultiMarker = () => {
    
    const locations = [
        { title: "KM타워", latlng: { lat: 37.476585, lng: 126.879956 }},
        { title: '가산디지털우체국', latlng: { lat: 37.477939, lng: 126.880616 } },
        { title: '롯데I캐슬', latlng: { lat: 37.4789, lng: 126.8791 } },
    ];


    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Map center = {{ lat: 37.476956, lng: 126.880074 }}
                style = {{ maxWidth: "800px", width: "100%", height: "560px", 
                            border: "2px solid lightgray", borderRadius: "30px" }}
                level = {3}
            >
            {locations.map((item, index) => {
                <MapMarker key={index} position={item.latlng}
                    image={{
                        src: "../img/marker.png",
                        size: {width: 24, height: 35}
                    }}
                />
            })}
            </Map>
        </div>
    )
}


export default MultiMarker