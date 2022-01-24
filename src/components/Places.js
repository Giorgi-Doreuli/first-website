import React from 'react';
import './Places.css'
import Card from './Card'

function Places() {
    return (
        <>
            <div id = "places" className = 'place'>
                <h2 className = 'text-center'>Places you should visit in Georgia</h2>
                <div className = 'rows'>
                    <Card src = 'photo7.jpg'
                        label = 'Apkhazeti'
                        alt = 'Apkhazeti - ritsa lake'
                        area = '-Ritsa Lake'/>
                    <Card src = 'photo3.jpg'
                        label = 'Adjara'
                        alt = 'Adjara - mtirala National Park'
                        area = '-Mtirala National Park'/>
                    <Card src = 'photo5.jpg'
                        label = 'Imereti'
                        alt = 'Imereti - katskhi pillar'
                        area = '-katskhi pillar'/>
                    <Card src = 'Uplistsikhe_view.jpg'
                        label = 'Shida kartli'
                        alt = 'Shida kartli - Uplistsikhe'
                        area = '-Uplistsikhe'/>
                    <Card src = 'photo10.jpg'
                        label = 'Samegrelo'
                        alt = 'samegrelo - Martvili Canyon'
                        area = '-Martvili Canyon'/>
                    <Card src = 'photo11.jpg'
                        label = 'Svaneti'
                        alt = 'Svaneti - Ushguli'
                        area = '-Ushguli'/>  
                    <Card src = 'photo2.jpg'
                        label = 'Kakheti'
                        alt = 'Kakheti - David Gareja'
                        area = '-David Gareja'/>
                    <Card src = 'photo1.jpg'
                        label = 'Samtskhe–Javakheti'
                        alt = 'Samtskhe–Javakheti - Rabati Castle'
                        area = '-Rabati Castle'/>
                    <Card src = 'photo4.jpg'
                        label = 'Guria'
                        alt = 'Guria - Baxmaro'
                        area = '-Baxmaro'/> 
                    <Card src = 'photo12.jpg'
                        label = 'Mtskheta-Mtianeti'
                        alt = 'KMtskheta-Mtianeti - svetitskhoveli'
                        area = '-Svetitskhoveli'/>
                    <Card src = 'photo8.jpg'
                        label = 'Racha-Lechkhumi'
                        alt = 'Racha-Lechkhumi - Lake of love'
                        area = '-Lake of love'/>
                </div> 
            </div>
        </>
    )
}

export default Places
